// Ingredient model definition
module.exports = function (connection, Sequelize) {
  const User = connection.define('User', {

    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    fname: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },

    lname: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },

    department: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    Role: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  });

// Associations to Recipe model
User.associate = function(models) {
  User.belongsTo(models.Cidata, {
    foreignKey: 'config_item_id',
    onDelete: 'cascade'
  });
};

  return User;
}

