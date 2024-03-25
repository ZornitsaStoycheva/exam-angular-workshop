const jwt = require('../lib/jwt');
const { SECRET } = require('../config/config');

exports.auth = async (req, res, next) => {
    const token = await req.cookies['auth'];

    if(!token) {
        return next();
    }
    try {
        const decodedToken = await jwt.verify(token, SECRET);
        req.user = decodedToken;
        res.locals.user = decodedToken;
        res.locals.isAuthenticated = true;
        next()
    } catch (err) {
        
        res.clearCookie('auth');
        res.send({ message: err.message })
       
    }
}

// function getToken async(req, res, next) {
//     const token =  req.cookies['auth'];

//     if(token) {
//         const decodedToken = await jwt.verify(token, SECRET);
//         req.user = decodedToken;
//         res.user = decodedToken;
//         const user = res.user = decodedToken;
//         return user;;
//     }

// next();
// }

exports.isAuth = async (req, res, next) => {
    const token =  req.cookies['auth'];

    if(token) {
        const decodedToken = await jwt.verify(token, SECRET);
        req.user = decodedToken;
        res.user = decodedToken;
        const user = res.user = decodedToken;
        return user;;
    }

next();
}

exports.isGuest = (req, res, next) => {
    if(req.user) {
        res.rediresct('/');
    }
    next();
}