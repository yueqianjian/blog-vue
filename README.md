# blog-vue

> 个人网站Vue前端

## 启动
```bash
$ npm i
$ npm run dev
$ open http://localhost:8080/
```

## 个人网站效果展示地址 www.yueqianjian.com

## 技术栈

前端：
使用Vue全家桶，UI框架Iview，css预处理使用scss,数据以及后端数据请求，均在vuex中。
架构思路：vue负责页面显示,vuex则负责数据内容。
项目内容：vuex中state存放的是单一数据，文章整体数据又getters拼接，所有数据请求均在actions中。使用marked插件进行文章的markdown语法编写。

后端：地址在https://github.com/yueqianjian/blogServer
使用node.js的egg.js框架，mongoose进行MongoDB数据库连接。egg-cors处理跨域问题。
项目内容：按照egg.js项目结构进行开发，controller负责接收前端的文章增删查改的数据请求，然后通过service进行数据库的增删查改，service则使用model的数据原型。通过一系列处理后，controller再把前端的数据请求返回。

数据库：使用MongoDB
项目内容：用户登录单独建表，文章的标题简介和文章主体分为两个关联表。
