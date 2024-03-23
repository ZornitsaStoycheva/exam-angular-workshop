const User = require('../models/User');
const { SECRET } = require('../config/config');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');

exports.register = async (authData) => {
    const {email, password, rePassword } = authData;
    const user = await User.findOne({ email: authData.email });
    if(user) {
        throw new Error('Email alredy exits!');
    }

    if(password != rePassword) {
        throw new Error('Password missmatch!')
    }

    const validUser = await User.create(authData);
    const token = await generationToken(validUser);
    return token;
}

exports.login = async (authData) => {
    const {email, password } = authData;
    const user = await User.findOne({ email: authData.email });

    if(!user) {
        throw new Error('Cannot find email or password!')
    }

    const isValid = await bcrypt.compare(password, user.password);

    if(!isValid) {
        throw new Error('Cannot find email or password');
    }

    const payload = {
        _id: user._id,
        email: user.email
    }

    //const token = await generationToken(payload)
    return jwt.sign(payload, SECRET, {expiresIn: '2h'});
}

function generationToken(user) {
    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email
    }

    return jwt.sign(payload, SECRET, {expiresIn: '2h'});
}