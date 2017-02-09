'use strict';

const casual = require('casual');

module.exports = function(req, res) {
  var data = { portfolios: [] }
  // Create 1000 users
  for (var i = 0; i < 1000; i++) {
    data.portfolios.push(
      { 
        id: i, 
        client: casual.company_name,
        city: casual.city,
        country: casual.country,
        stock: casual.company_name,
        quantity100: casual.integer(0, 10000000),
        value100: casual.integer(0, 10000000000),
        buyDate: casual.date('YYYY-MM-DDTHH:mm:ssZ'),
        expireDate: casual.date('YYYY-MM-DDTHH:mm:ssZ'),
        notes: casual.description,
        contact: casual.full_name
      }
    )
  }
  return data
}