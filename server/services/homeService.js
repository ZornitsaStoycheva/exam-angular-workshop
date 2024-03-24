const Book = require('../models/Book');

exports.getLast6Books = () => Book.find().slice(0, 3);

