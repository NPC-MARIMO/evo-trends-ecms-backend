const paypal = require("paypal-rest-sdk");
require('dotenv').config();

console.log( process.env.PAYMENT_MODE, )
paypal.configure({
  mode: process.env.PAYMENT_MODE,
  client_id:process.env.PAYMENT_ID,
  client_secret:process.env.PAYMENT_SECRET,
});
module.exports = paypal;
 