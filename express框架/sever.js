//引入express并创建应用对象
const express = require('express')
const { request } = require('express')
const app = express()

//创建路由规则
app.get('/server', (requesr, response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应
    response.send('hello ajax')
})
app.post('/server', (requesr, response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应
    response.send('hello ajax post')
})
app.all('/cors-server', (request, response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.send('hello cors')
})
//创建路由规则
app.get('/json-server', (requesr, response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //相应一个数据
    const data = {
        name:'yousa'
    }
    //对对象进行字符串转化
    let str = JSON.stringify(data)
    //设置响应
    response.send(str)
})

//创建路由规则
app.get('/ie', (requesr, response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应
    response.send('hello ie -5')
})

//创建路由规则
app.all('/delay', (requesr, response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    //设置响应
    setTimeout(()=>{
        response.send('延时相应')
    }, 3000)
})

//jquery 服务
app.all('/jquery-server', (requesr, response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')

    const data = {name:'hanser'}
    //设置响应
    response.send(JSON.stringify(data))
})

//axios 服务
app.all('/axios-server', (requesr, response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')

    const data = {name:'hanser'}
    //设置响应
    response.send(JSON.stringify(data))
})

//fetch 服务
app.all('/fetch-server', (requesr, response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')

    const data = {name:'hanser'}
    //设置响应
    response.send(JSON.stringify(data))
})

//jsonp 服务
app.all('/jsonp-server', (requesr, response)=>{

    const data = {name:'hanser'}
    //设置响应
    let str = JSON.stringify(data)
    // response.send('console.log("hello jsonp")')
    response.send(`handle(${str})`)

})
//用户名检测是否存在
app.all('/check-username', (requesr, response)=>{

    const data = {
        exist:1,
        msg:'用户名已经存在'}
    //设置响应
    let str = JSON.stringify(data)
    // response.send('console.log("hello jsonp")')
    response.send(`handle(${str})`)

})

//用户名检测是否存在
app.all('/jquery-jsonp-server', (request, response)=>{

    const data = {
        name:'hanser',
        age:2}
    //设置响应
    let str = JSON.stringify(data)
    //接受callback参数
    let cb = request.query.callback
    // response.send('console.log("hello jsonp")')
    response.send(`${cb}(${str})`)

})
//监听端口启动服务
app.listen(8000, ()=>{
    console.log('服务已经启动，端口8000监听中')
})
