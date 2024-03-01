* Mock 文件 目录结构
.
├── mock
    ├── todos.ts
    ├── items.ts
    └── users.ts
└── src
    └── pages
        └── index.tsx

// ---

export default{
    // 返回值可以是数组形式
'Get /api/users':[
    {id:1, name:'foo'},
    {id:2, name:'bar'}
]
// 返回值也可以是对象形式
'Get /api/users/1':{id:1, name:'foo'},
}

//---

*  请求方法

// 当 HTTP 的请求方法是 GET(通常是通过浏览器访问一个网页时使用的方法) 时，可以省略方法部分，只需要路径即可

export default{
    '/api/users':[
        {id:1, name:'foo'},
        {id:2, nameL'bar'}
    ],
    '/api/users/1':{id:1, name:'foo'},
}

// 也可以用不同的请求方式, 例如 POST, PUT, DELETE :

export default {
    'POST /api/users':{result:'true'},
    'PUT /api/users':{id:1, name:'new-foo'},
}

// 除了静态声明返回值, 也可以用函数的方式来声明如何计算返回值,例如:
//req(request请求), res(response响应)
//req 包含了关于HTTP请求的所有信息 如 请求的URL, HTTP方法(如GET POS等), 请求头, 请求体等
//res res.setHeader 方法被用来设置响应头, res.end 方法被用来发送一个简单的响应体
//req（HTTP 响应则被称为 res），但其实际名称由您正在使用的回调函数的参数决定


export default {

  'POST /api/users/create': (req, res) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('ok');
  }

}

// 当有人（或另一个系统）向你的服务器发送一个GET请求，并且请求的URL与指定的路径匹配时，这个回调函数就会被执行。
//res 代表服务器的响应。我们用它来发送数据回给客户端。
app.get('/user/:id', function (req, res) {  
  res.send('user ' + req.params.id)  
})

* defineMock
