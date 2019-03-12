var credential = require('../tempData/credential')
module.exports = function(u, p){
    var result = false;
    for (var i = 0; i < credential.length; i++){
        if(credential[i].name == u && credential[i].password == p){
             result = true;
             break;
        }
    }    
    return result;
}