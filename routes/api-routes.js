//require models library
const RestfulAPI = require('./RestClass');
const models = require('../models');
//restAPI
module.exports = function (app) {

  const mismatched_ci = new RestfulAPI('Mismatched_CI', app, models.index);
  mismatched_ci.findAll();
  mismatched_ci.find('id');
  mismatched_ci.create();
  mismatched_ci.delete('id');
  mismatched_ci.update('id');

}