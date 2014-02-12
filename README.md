Node-CoinDesk
=======

Unofficial Node JS client for the CoinDesk API.

Installing
----------

```
npm install node-coindesk
```
Example usage
-------------
Quick usage: Get the current prices in USD
```javascript
CoinDesk = require("./index.js");
coindesk = new CoinDesk();
coindesk.currentPrice(null,function(data){
  console.log(data);
});
```
Set up another currency
```javascript
CoinBase = require("coindesk-node");
coindesk = new CoinBase({currency: "EUR"});
```
Retrieve historical data
```javascript
CoinBase = require("coindesk-node");
coindesk = new CoinBase();
var start_date = new Date();
var end_date = new Date();
end_date.setDate(end_date.getDate() - 60);
coindesk.historical({start_date: new Date(), end_date: end_date }, null, function(data) {
  console.log(data);
});
```
