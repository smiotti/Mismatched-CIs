//require models library
const RestfulAPI = require('./RestClass');
const models = require('../models');

//restAPI
module.exports = function (app) {

  const mismatched_ci = new RestfulAPI('Mismatched_CI', app, models.Cidata);
  mismatched_ci.findAll();
  mismatched_ci.find('id');
  mismatched_ci.create();
  mismatched_ci.delete('id');
  mismatched_ci.update('id');
}
// ===============================================================================
// ROUTING
// ===============================================================================

// module.exports = function(app) {
  
//   // POST Request
//   // Adds a new product to our database
//   // Responds with success: true or false if successful
//   app.post('/api/login', function(req, res) {
//     // Check client side data that was sent
//     console.log (req.body);
//     // Find if user exist in database
//     // db.Users.create(req.body).then(function(rows) {
//     //   res.json({ success: true });
//     // }).catch(function(error) {
//     //   res.json({ error: error })
//     // });
//   });

// };

