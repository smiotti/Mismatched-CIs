const db = require('../models');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  

  // POST Request
  // Adds a new product to our database
  // Responds with success: true or false if successful
  app.post('/api/login', function(req, res) {
    // Check client side data that was sent
    console.log (req.body);
    // Find if user exist in database
    // db.Users.create(req.body).then(function(rows) {
    //   res.json({ success: true });
    // }).catch(function(error) {
    //   res.json({ error: error })
    // });
  });

};