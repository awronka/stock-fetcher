var stockPrice = require("./index.js");

stockPrice.getPrice("S", function(err, price){
	console.log(price)
})