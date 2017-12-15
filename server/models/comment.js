
const mongoose = require('mongoose');
var CommentSchema = mongoose.Schema({
    foodId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    posted: {
        type: Date,
        default: Date().toLocaleString()
    },
    userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
    },
    userName: {
            type: String,
            required: true
    },
    userAvatar: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
 });
 
 module.exports = mongoose.model('Comment',CommentSchema);