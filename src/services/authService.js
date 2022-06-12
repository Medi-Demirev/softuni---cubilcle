const User = require('../models/User');

const bcrypt = require('bcrypt');
const saltRound = 10;

exports.register = async ({username, password, repeatPassword}) => {

    if(password !== repeatPassword){
        return false
    }

    let hashedPassword = await bcrypt.hash(password, saltRound);
    let createdUser = User.create({
        username,
        password: hashedPassword
    }); 

    return createdUser;
};

exports.login