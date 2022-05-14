const express = require('express')//express 를 가져와서
const app = express() //express()라는 새로운 함수를 만들고 
const port = 3000 // 포트번호 바꿔도 됨

//mongoose와 아까 만든 몽고디비 연결해주는 작업
//'mongodb+srv://eunjji:<password></password>@cluster0.4zj63.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
//저 <password> 부분을 지우고 진짜 비번 넣기
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://eunjji:abcd1234@cluster0.4zj63.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=> console.log('MongoDB Connected...'))
.catch(err => console.log(err))

//{}안에 있는 것들은 오류 나지 않게 써주는 거라고 함 -> 근데 , useCreateIndex: true, useFindAndModify: false 요거 두개도 썼었는데
// npm start했더니 오류남 그래서 두개 빼주고 했더니 됨.....


app.get('/',(req,res) => res.send("Hello World! 안녕하세요!")) // '/' -> 루트 디렉토리에 보내는!
app.listen(port, () => console.log(`Example app listening on port ${port}!`)) //실행