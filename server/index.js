const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { auth } = require('./middlewares/authMiddleware');
const cors = require('cors');
const { origin } = require('./config/config')

const routes = require('./routes');

const PORT = 3000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({
    origin: origin,
    credentials: true}))
app.use(auth);

mongoose.connect(`mongodb://localhost:27017/books`)
.then(() => {
    console.log('Database Books is connected');

    app.listen(PORT, () => console.log(`Servet listaning on the port: ${PORT}`));
}).catch((err) => {
    console.log('DATABASE cannot cannected!');
})

app.use('/api',routes);

//app.listen(PORT, ()=> console.log(`Server listening on the port: ${PORT}`));