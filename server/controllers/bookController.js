const router = require('express').Router();
const bookService = require('../services/bookService');

router.get('/', async (req, res) => {
    const books = await bookService.getAll();
    res.json(books);
})

router.post('/', async (req, res) => {
    try {
        await bookService.create({
            ...req.body,
            _ownerId: req.user._id});
        res.status(204).end();

    } catch (err) {
        res.status(400)
        .json({ message: err.message })
    }
})

router.get('/:bookId', async (req, res) => {
    try {
        const book = await bookService.getOne(req.params.bookId);
        res.json(book);

    } catch (err) {
        res.status(400)
        .json({ message: err.message })
    }
})

router.put('/:bookId/edit', async (req, res) => {
    try {
        const bookId = req.params.bookId;
        const book = req.body;
        await bookService.update(bookId, book);
        res.status(204).end();

    } catch (err) {
        res.status(400)
        .json({ message: err.message })
    }
})

router.delete('/:bookId/delete', async (req, res) => {
    try {
        await bookService.delete(req.params.bookId);
        res.status(204).end();

    } catch (err) {
         res.status(400)
        .json({ message: err.message })
    }
})

router.get('/myBooks', async (req, res) => {
    try {
        const books = await bookService.myBooks();
        res.json(books)
    } catch (err) {
        res.status(400)
        .json({ message: err.message })
    }
})



module.exports = router;