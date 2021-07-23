<h1 align="center">🎉 Login-App 🎉</h1>

#### 🖥 基础介绍
一个基于umi脚手架，以及eadmin-api的登录判断基础项目
可基于这个项目进行快速开发
目前用到的依赖： `react` + `dva` + `antd`
###### 基础页面
- 登录页面  `/login` 
- 首页  `/`

#### ⌨️ 本地开发
```bash
git clone git@gitlab.ersinfotech.com:kaipeng/login-app.git
git remote set-url origin git@…… //这里换成自己的git库
cp config.app/config.develop.js config.app/index.js
yarn
yarn start
```

#### 代码规范
1. vscode可下载插件[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), 该插件将会为代码进行格式化
2. 保存时自动格式化： .vscode/settings.json 中设置了 `"editor.formatOnSave": true`。使用vscode保存时将自动格式化代码

#### 📝Q&A
1. 端口如何修改
在文件`.env`中添加： `PORT=端口号`

#### 🚚参考资料
- [umiJs](https://umijs.org/zh "umi")
- [Ant Design](https://ant.design/index-cn)
- [Dva](https://github.com/dvajs/dva/blob/master/README_zh-CN.md)
