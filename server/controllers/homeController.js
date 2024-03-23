const router = require('express').Router();
const homeService = require('../services/homeService');

router.get('/?limit=3', async ( req, res) => {
    const books = await homeService.getLast6Books().slice(3);
    res.json(books);
})