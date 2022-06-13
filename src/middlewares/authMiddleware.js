const jwt = require('jsonwebtoken');
const {sessionName, secret} = require('../config/appConstants');
const {promisify} = require('util');

// this is the same like resolve, reject with new promise in authService !!!
const jwtverify = promisify(jwt.verify)

exports.auth = async (req, res, next) =>{

    let token = req.cookies[sessionName];

    if (token) {
        try {

            let decodedToken = await jwtverify(token, secret)

            req.user = decodedToken; 

        } catch(err)  {
           return res.redirect('/404')
        }
    }

    next();
};

exports.isAuth = (req, res, next ) => {

    if (! req.user) {
        return res.redirect('/404')
    }

    next()
}