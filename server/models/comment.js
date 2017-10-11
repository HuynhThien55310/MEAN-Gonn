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
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        name: {
            type: String,
            required: true,
            match: [/^[a-zA-Z0-9 ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/,"Tên sai định dạng"],
        }
    },
    text: {
        type: String,
        required: true
    }
 });
 
 module.exports = mongoose.model('Comment',CommentSchema);