window["friendbuyAPI"] = friendbuyAPI = window["friendbuyAPI"] || [];

// registers your merchant using your merchant ID found in the
// retailer app https://retailer.friendbuy.io/settings/general
friendbuyAPI.merchantId = "8085ff78-124c-4696-983d-a0a37afd88ba";
friendbuyAPI.push(["merchant", friendbuyAPI.merchantId]);

// load the merchant SDK and your campaigns
(function(f, r, n, d, b, u, y) {
  while ((u = n.shift())) {
    (b = f.createElement(r)), (y = f.getElementsByTagName(r)[0]);
    b.async = 1;
    b.src = u;
    y.parentNode.insertBefore(b, y);
  }
})(document, "script", [
  "https://static.fbot.me/friendbuy.js",
  "https://campaign.fbot.me/" + friendbuyAPI.merchantId + "/campaigns.js",
]);
