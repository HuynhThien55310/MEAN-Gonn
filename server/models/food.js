const mongoose = require('mongoose');
var FoodSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        match: [/^[a-zA-Z0-9 ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/,"Tiêu đề sai định dạng"],
        validate: [(title) => {
            return title.length >= 5 && title.length <= 100;
        }, "Tiêu đề sai định dạng"]
    },
    type: {
        type     : Array,
        required : true,
        validate: [(array) => {
            return array.every((v) => typeof v === 'string' && v.length >= 3);
        }, "Tiêu đề sai định dạng"]
    },
    body: {
        type: String,
        required: true
    },
    posted: {
        type: Date,
        default: Date().toLocaleString()
    },
    like: {
        type: Number
    },
    share: {
        type: Number
    },
    backdrop: {
        type: String,
        required: true
    }
    
 });
 
 module.exports = mongoose.model('Food',FoodSchema);