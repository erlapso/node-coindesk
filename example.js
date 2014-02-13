CoinDesk = require("./index.js");
coindesk = new CoinDesk();
coindesk.currentPrice(function(data){
//  console.log(data);
});
var start_date = new Date();
var end_date = new Date();
end_date.setDate(end_date.getDate() - 60);
coindesk.historical({start_date: new Date(), end_date: end_date }, function(data) {
  console.log(data);
});
