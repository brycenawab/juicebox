const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");


function requireUser(req, res, next) {
  const authHeader = req.header('Authorization')
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).send("Access Denied");

  jwt.verify(token, process.env.SECRET_KEY, (err , user) =>{
      if (err) return res.status(400).send("Invalid Token");
      console.error(err)
  })
      res.json(token)
      req.user = user;
      next();
  }


module.exports = {
  requireUser,
};
