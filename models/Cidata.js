// Recipe model definition
module.exports = function (connection, Sequelize) {
  const Cidata = connection.define('Cidata', {


    config_item_id: {
      type: Sequelize.INTEGER,
      validate: {
        isInt: true,
      },
      primaryKey: true,
      // autoIncrement: true
    },

    ci_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },

    install_status: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },

    model_id_classification: {
      type: Sequelize.STRING,
      allowNull: true,
    },

    company: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    department: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    owned_by: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    owned_by_company: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    owned_by_department: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  });

 // Associations to other models
 Cidata.associate = function(models) {
  Cidata.hasMany(models.User, {
    foreignKey: 'config_item_id'
  });

  Cidata.belongsTo(models.User, {
    foreignKey: 'id'
   });
};


  return Cidata;
}

