const { query } = require('express');
const Book = require('../models/Book');
const User = require('../models/User');

exports.getAll = () => Book.find();

exports.create = async (userId, bookData) => {
    const createBook = await Book.create({
        owner: userId,
        ...bookData
    })

    //await User.findByIdAndUpdate(userId, {$push: { createBook: createBook._id}});

    return createBook;
}

exports.getOne = (bookId) => Book.findById(bookId);

exports.update = (bookId, bookData) => Book.findByIdAndUpdate(bookId, bookData, { runValidators: true });

exports.delete = (bookId) => Book.findByIdAndDelete(bookId);

exports.getAllPosts = (ownerId) => Book.find({ owner: ownerId}).populate('owner');

exports.addLikes = async (bookId, userId) => {
    const book = await this.getOne(bookId);
    const isValid = book.likes.some((like) => console.log(like));//vote?.toString() === userId);
    console.log(isValid)
    if(!isValid) {
        return;
    }

    book.likes.push(userId);
    return book.save();
}

exports.getAllPosts = (ownerId) => Book.find({ owner: ownerId}).populate('owner');

exports.myBooks = async (qs) => {
    let query = Book.find();
    
    if(qs.where) {
        let [fildName, ownerId] = qs.where.split('=');
        ownerId = ownerId.replace('"', '');
        query = query.where('ownerId').eq(ownerId);
    }

    const result = await query;
    return result;
}

exports.getLikes = async (bookId, userId) => {
    const books = await Book.findById(bookId);
    const user = await User.findById(userId);

    books.likes.push(user);
    await books.save();
}

exports.getBuy = async (bookId, userId) => {
    const books = await Book.findById(bookId);
    const user = await User.findById(userId);

    books.buyBook.push(user);
    await books.save();
}