const mongoose = require('mongoose');
var CommentSchema = mongoose.Schema({
    foodId: {
        type: String,
        required: true
    },
    posted: {
        type: Date,
        default: Date().toLocaleString()
    },
    userId: {
            type: String,
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