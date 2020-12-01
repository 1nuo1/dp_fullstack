# 基于百度大脑做node AI应用

 - node 项目的搭建 project 开发工序
    1. 运行在后端 
    版本0，0，0（上限，功能，bug修改）
    npm 命令集
    - npm init 初始化项目命令,包含:
        package.json
        scripts
        -y
    - npm run   
        运行dev里的node index.js
    - npm yarn 都叫包管理器工具
        有大量的第三方库可用
    - npm i -g baidu-aip-sdk(安装到全局)
        不到-g的就是当前目录下就会出现node——modules 目录
    - 
- AI 做黑盒子
    SDK
- fs 模块
    1. 语言内置模块
        fs.readFile/writeFile/isDirectory/staStas
    2. 参数(url,callback(异步))
        先处理错误，err第一位，data数据第二位
- 图片是二进制文件，txt读取要.toString()