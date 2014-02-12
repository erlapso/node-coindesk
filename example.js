CoinBase = require("./index.js");
coindesk = new CoinBase();
coindesk.currentPrice(null,function(data){
  console.log("Prices:");
  console.log(data);
});
var end_date = new Date()
end_date.setDate(end_date.getDate() - 60);
coindesk.historical({start_date: new Date(), end_date: end_date }, null, function(data) {
  console.log(data);
});
