import { ObjectID } from './C:/Users/MrThien/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/bson';

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
            required: true,
            match: [/^[a-zA-Z0-9 ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/,"Tên sai định dạng"],
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