const Book = require('../models/Book');

exports.getLast6Books = () => Book.find().sort({ likes: -1}).limit(3);

exports.getMostLikes = () => {
    let like = Book.find().populate('likes');
    return Book.find().sort({like: -1}.limit(3))
}
