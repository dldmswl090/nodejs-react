const mongoose = require('mongoose');
//mongoose 가져오기

//schema 만들기 아래 내용처럼 여러내용 담기
const userSchema = mongoose.Schema({
    name : {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique:1

    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type:Number
    }
})

//schema를 model로 감싸주기
const User = mongoose.model('User',userSchema)
//model('User',userSchema) 'User'-> model의 이름 그리고 , userSchema 스키마

//위 모델을 다른 파일에서도 쓰게 하기 위해서 아래 작업실시
module.exports = {User}