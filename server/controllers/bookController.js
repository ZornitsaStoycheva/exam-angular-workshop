const router = require('express').Router();
const bookService = require('../services/bookService');
const { auth } = require('../middlewares/authMiddleware');

router.get('/', async (req, res) => {
    const books = await bookService.getAll();
    res.json(books);
})

router.post('/', async (req, res) => {
   const bookData = req.body;
    try {
        const token = await bookService.create(bookData)
        
        res.status(204).json(token)

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

router.delete('/delete/:bookId', async (req, res) => {
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
        const { user } = req;
        const book = await bookService.getAllPosts(user?._id);
        const owner = {owner: book[0].owner?.username};
        res.json(book)
    } catch (err) {
        res.status(400)
        .json({ message: err.message })
    }
})

router.get('/:bookId/like', async (req, res) => {
    try {
        const { bookId } = req.params;
        console.log(postId)
        const book = await bookService.addLikes(bookId, req.user?._id);
        res.json(book)
    } catch (err) {
        res.status(400)
        .json({ message: err.message })
    }
})



module.exports = router;