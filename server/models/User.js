const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    
    email: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 15
    },
    username: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 15
    },
    password: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 15
    },
    books: [{
        type: mongoose.Types.ObjectId,
        ref: 'Book'
    }]
})

userSchema.pre('save', async function() {
    const hash = await bcrypt.hash(this.password, 12);
    this.password = hash;
})

const User = mongoose.model('User', userSchema);

module.exports = User;