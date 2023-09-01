# Read Me

### SSH into Server
`ssh ubuntu@34.228.242.246 -i /Users/james/Documents/jcode_aws/jcode.pem`

### Deploy Updates
1. Merge updates to main branch in GitHub
2. ssh into the EC2 server: `ssh ubuntu@34.228.242.246 -i /Users/james/Documents/jcode_aws/jcode.pem`
3. Enter jcode directory: `cd code/jcode`
4. Pull the latest update: `git pull`
5. Restart the server: `pm2 restart 0`
6. Exit the server: `exit`

### Using PM2
[NPM Package for pm2](https://www.npmjs.com/package/pm2)

### Using NGINX
[Start Guide](https://www.nginx.com/resources/wiki/start/)

[Pitfalls](https://www.nginx.com/resources/wiki/start/topics/tutorials/config_pitfalls/)

[Directory Structure](https://wiki.debian.org/Nginx/DirectoryStructure)

### Development Reference Docs
[Deploying a Basic Express API on Amazon EC2](https://betterprogramming.pub/deploying-a-basic-express-api-on-amazon-ec2-eea0b54a825)

[Setup Nginx for Your NodeJS Server on EC2](https://betterprogramming.pub/setup-nginx-for-your-nodejs-server-on-ec2-ae46a3d0cb1b)

[How To Create AWS EC2 Instance And Host NodeJS Application With Nginx](https://www.c-sharpcorner.com/article/how-to-create-aws-ec2-instance-and-host-node-js-applications/)