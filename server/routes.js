const router = require('express').Router();

const homeController = require('./controllers/bookController');
const userController = require('./controllers/userController');
const bookController = require('./controllers/bookController');


router.use('/home', homeController);
router.use('/users', userController);
router.use('/books', bookController);


module.exports = router;