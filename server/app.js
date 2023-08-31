require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const crypto = require('crypto');

app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.get('/friends', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'friends.html'));
});

app.get('/loyalty', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'loyalty.html'));
});

app.get('/advocate', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'advocate.html'));
});

app.post('/customer-auth', (req, res) => {

  const email = req.body.email;
  const customerId = req.body.customerId;
  const epoch = Math.round(new Date().getTime() / 1000);  
  const secret = process.env.SECRET_KEY;

  const authString = `${epoch}:${email}:${customerId}`;
  const hash = crypto.createHmac('sha256', secret)
    .update(authString)
    .digest('hex');
  
  res.status(200).json({
    authString, 
    signature: hash
  });
});

app.listen(port, () => {
  console.log(`Server is running at PORT:${port}`);
});