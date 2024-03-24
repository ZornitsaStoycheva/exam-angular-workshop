const router = require('express').Router();
const homeService = require('../services/homeService');

router.get('/', async ( req, res) => {
    const books = await homeService.getLast6Books()
    res.json(books);
})