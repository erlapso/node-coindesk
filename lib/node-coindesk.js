var rest = require('restler');

var CoinDesk = function CoinDesk(options) {
  this.options = options || { }
}

module.exports = CoinDesk;

CoinDesk.prototype.currentPrice = function(callback) {
  if (this.options.currency) {
    var path = "/v1/bpi/currentprice/"+this.options.currency+".json";
  } else {
    var path = "/v1/bpi/currentprice.json";
  }
  var options = {
    host: 'api.coindesk.com',
    path: path,
    port: 80,
  }
  rest.get("http://"+options.host+options.path).on("complete", function(data) {
    callback(data);
  });
}

CoinDesk.prototype.historical = function(dates, callback) {
  var param = null;
  if (dates) {
    var param = "?start_date="+dates.start_date.toISOString().substr(0,10)+"&end_date="+dates.end_date.toISOString().substr(0,10);
  }
  var options = {
    host: 'api.coindesk.com',
    path: "/v1/bpi/historical/close.json",
    port: 80
  }
  rest.get("http://"+options.host+options.path+param).on("complete", function(data) {
    callback(data);
  });
};
