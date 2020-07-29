//引入express并创建应用对象
const express = require('express')
const app = express()

//创建路由规则
app.get('/', (requesr, response)=>{
    //设置响应
    response.send('hello express')
})

//监听端口启动服务
app.listen(8000, ()=>{
    console.log('服务已经启动，端口8000监听中')
})

