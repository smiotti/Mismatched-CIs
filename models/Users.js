// Defining User Tables in DB in Model
module.exports = function(connection, Sequelize) {
    const User = connection.define('User', {
      user_email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      user_password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
    return User;
  }
 
 