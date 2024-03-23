const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 30
    },
    author: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 15
    },
    image: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50
    },
    description: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 150
    },
    price: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 10
    },
    createdAt: {
        type: Date
      },
    _ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    likes: [],
    buyBook: []
})

bookSchema.pre('save', function() {
    if(!this.createdAt) {
        this.createdAt = Date.now();
    }
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;