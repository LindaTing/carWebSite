# carwebsite

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
# 部署发布
1. npm run build 打包
2. npm install -g http-server 搭建本地服务器
3. cd dist
4. http-server 启动服务

# 遇到的问题
1. 背景图片找不到----解决：config中index.js 的 assetsPublicPath  改成./ ；data中定义bg，require导入，在html中用添加属性的方式添加；
2. tomcat部署 将dist中的内容复制到WebApps，放到新建的文件夹中，vue路由中base:"/文件夹名/"

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
