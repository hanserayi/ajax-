const express = require('express')

const app = express()
app.get('/home' ,(request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/data' ,(request, response)=>{
    response.send('用户数据')
})
app.listen(9000, ()=>{
    console.log('端口9000服务已经启动')
})
