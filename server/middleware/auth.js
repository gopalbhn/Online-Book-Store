const jwt = require('jsonwebtoken');

const generateJwt = (user) =>{
    const paylod = {username:user.username, role:user.role};
    const secret = 'SecR3t';
    const token = jwt.sign(paylod,secret,{expiresIn:'1h'});
    return token ;
}

const athunticateJWT = (req,res,next) => {
const authHeader = req.headers.authorization;

const secret = 'SecR3t';
if(authHeader){
    const token = authHeader.split(' ')[1];
 
    jwt.verify(token,secret,(err,user)=>{
        if (err){
            throw res.status(403);
        }
        if(user){
          
        req.user = user;
        next();
        }
    })
}else{
    res.status(403).json({message:'Authorizaton token failed'})
}
}
const isAdmin = (req,res,next) =>{
    console.log('req',req.user);
    if(req.user.role === 'Admin'){
        next();
    }else{
        res.status(403).json({message:'User is not admin'})
    }
}
const isCostumer = (req,res,next) => {
    if(req.user.role === "Costumer"){
        next();
    }else{
        res.status(403).json({message:'User is not Costumer'});
    }
}
module.exports = {generateJwt,athunticateJWT,isAdmin,isCostumer} ;