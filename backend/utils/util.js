const jwt = require("jsonwebtoken");
require('dotenv').config();
const bcrypt = require("bcrypt");
const  SALT= 10;

module.exports = { 
    jwtEncode: function(paylod){
      let token = jwt.sign(paylod,process.env.JWT_KEY);
      return token;
    },
    jwtDecode: function(token){
      let paylodDecoded = jwt.verify(token, process.env.JWT_KEY);
      return paylodDecoded;
    },
    respSuccess: function(res, obj, message){

      let respData;
    
      if (typeof obj === 'object') {
    
        respData = {
          data: obj
        };
    
      } else {
    
        respData = {
          message: obj
        };
    
      }
    
      if (message) respData = { ...respData, message }
    
      const respObj = {
        success: true,
        ...respData
      };
      res.status(200).json(respObj);
      res.end();
    
    },
    respUnAuthorized:function(res, msg){

      const respData = {
        success: false,
        auth: false,
        message: msg || 'Un-Authourized Access!'
      };
      res.status(401).json(respData);
      res.end();
    
    },
    respError: function(res, obj, message){

      let respData;
    
      if (typeof obj === 'object') {
    
        respData = {
          data: obj
        };
    
      } else {
    
        respData = {
          message: obj
        };
    
      }
    
      if (message) respData = { ...respData, message }
    
      const respObj = {
        success: false,
        ...respData
      };
      res.status(400).json(respObj);
      res.end();
    
    },
    encodePassword: function(password){
      return bcrypt.hashSync(password, SALT);
    }
}