
//Import Database Models
const db = require('../models');

//Syncing our sequelize models
db.sequelize.sync().then(function () {
    db.Product.bulkCreate([{

    config_item_id:"1234567" ,
    ci_name: "mavrevup",
    install_status: "installed",
    model_id_classification: "server",
    company: "GE Aviation",
    department: "Aviation Intels",
    owned_by: "Monki Who",
    owned_by_company: "GE Aviation",
    owned_by_department: "PW Intels"
    },
    {
    config_item_id:"7654321" ,
    ci_name: "magicalbw",
    install_status: "Deactivated",
    model_id_classification: "server",
    company: "GE Energy",
    department: "Energy RD",
    owned_by: "Sian Shi",
    owned_by_company: "GE Energy",
    owned_by_department: "Energy RD"
    },
    {
    config_item_id:"567890" ,
    ci_name: "adpushups",
    install_status: "installed",
    model_id_classification: "server",
    company: "GE Digital",
    department: "Fun GP",
    owned_by: "King Kong",
    owned_by_company: "GE Digital",
    owned_by_department: "NotFun GP"
    },    

    ]).then(function (data) {
        console.log('Data successfully added!');
    }).catch(function (error) {
        console.log('Error', error)
    });
    });