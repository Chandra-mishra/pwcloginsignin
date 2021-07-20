const User = require('../services/user');
const utils = require("../utils/util");
const bcrypt = require("bcrypt");
const {add,get} = User;
const {respSuccess,respError,encodePassword} = utils;
const jwt = require("jsonwebtoken");

module.exports = {
    add: async function ( req, res ) {
        try {
            let data = req.body;
            data.password = encodePassword(data.password)
            const user = await add(data);
            return respSuccess(res,user, "Successfully inserted");
          } catch (error) {
            respError(res, error.message);
          }
    },
    login: async function (req, res ) {
        try{
            let token = null;
            const {email,password} = req.body;
            let user = await get({email});
            if (!user) {
                throw Error("Email or password is incorrect.");
            }
            let isMatched = await bcrypt.compare(password, user.password);
            if (!isMatched) {
                throw Error("Email or password is incorrect.");
            }
            user.password = undefined; 
            token = await jwt.sign(
                { email: user.email, id: user._id },
                process.env.JWT_KEY
            );
            return respSuccess(res,{user,token},'Login successful')
        }catch(error){
            return respError(res,error.message)
        }
    },
}