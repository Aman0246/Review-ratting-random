var jwt = require('jsonwebtoken');
require("dotenv").config()

const createJwt=(payload)=>{
    var token = jwt.sign(payload, process.env.SECERATEKEY);
    return token
 
}




module.exports={createJwt}