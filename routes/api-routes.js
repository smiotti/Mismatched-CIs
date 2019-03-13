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

  app.post('/api/login', function(req, res) {
    console.log(req.body.username);
    models.User.find({
      Where: {
        user_email: req.body.username,
        user_password: req.body.password
      }
    })
    .then(function(res) {
      res.json({ success: true });
    })
    .catch(function(error) {
      res.json({ error: error })
    });
  });
}