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
        type: String,
        required: true,
        match: [/^[a-zA-Z0-9 ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/,"Loại món sai định dạng"],
        validate: [(type) => {
            return type.length >= 3 && type.length <= 100;
        }, "Loại món sai định dạng"]
    },
    body: {
        type: String,
        required: true
    },
    date: {
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