
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if(token){
    const secret = process.env.JWT_SECRET || "very secret secret";
    jwt.verify(token, 'very secret secret', (err,decodedToken)=>{
      if(err){
        res.status(401).json({message: "invalid token"})
      }else{
        req.subject = decodedToken.subject;
        req.username = decodedToken.username;
        next();
      }
    })
  }else{
    res.status(401).json({ you: 'shall not pass!' });
  }
  
};