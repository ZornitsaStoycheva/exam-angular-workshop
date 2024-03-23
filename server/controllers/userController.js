const router = require('express').Router();
const userService = require('../services/userService');

router.get('/', async (req, res) => {
    const users = await userService.getUsers();
    res.json(users)
})


router.post('/register', async (req, res) => {
    const authData = req.body;
    try {
        const token = await userService.register(authData);
        res.cookie('auth', token, { httpOnly: true });

        res.json(token);
    } catch (err) {
        console.log(err);

        res.status(400)
            .json({message: err.message})
    }
})

router.post('/login', async (req, res) => {
    debugger
    try {
        const user = await userService.login(req.body);
        res.status(200).json(user);
    } catch (err) {
        res.status(400)
            .json({message: err.message})
    }
})

router.get('/profile', async (req, res) => {
    try {
        const id = await userService.getOne(req.params._id);
        res.json(id);
    } catch (err) {
        res.status(400)
        .json({ message: err.message })
    }
})

router.put('/profile', async (req, res) => {
    try {
        const id = req.params._id;
        await userService.editProfile(id, req.body);
        res.status(204).end();

    } catch (err) {
        res.status(400)
        .json({ message: err.message })
    }
})

router.get('/logout', (req, res) => {
    res.end();
})

module.exports = router;