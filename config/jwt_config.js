const jwt = require('jsonwebtoken');
const env_value = require('./dotenvConfig');
function verifyToken(req,res,next){
    console.log(req.headers,"Sdfasf",env_value.encrypt_key)
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
        const bearerToken = bearerHeader.split(' ')[1];
        var token = bearerToken;
        console.log(token)
        jwt.verify(token,String(env_value.encrypt_key),(err,authData)=>{
            if(err){
                console.log(err)
                res.sendStatus(403)
            }else{
                // console.log(authData)
                next();
            }
        })
       
    }else{
        res.sendStatus(403)
    }
}
function sign_in(res){
    return jwt.sign({user:res},String(env_value.encrypt_key))
}


module.exports = {
    verifyToken,
    sign_in
}