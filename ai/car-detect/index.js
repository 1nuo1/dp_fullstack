// console.log('AI is coming,cool!');
//node 引入模 块关键字
//图像识别
const ApiImageClassifyClient=require('baidu-aip-sdk').imageClassify;
//内置模块fs(fileSystem)
const fs=require('fs');
// 1.读入文件I/O操作 从硬盘读入内存中，
const APP_ID="23077973";
const API_KEY="BIblgRgQxxLuLy78X7hXK6xE";
const SECRET_KEY="56KROoK8ujQQCUO6s0TSEqVa9KU6f2f8";
const client = new ApiImageClassifyClient(APP_ID,API_KEY,SECRET_KEY);
const image =fs.readFileSync("1.jpg").toString("base64");
client.carDetect(image)
    .then(function(result){
        console.log(result);
    })
    .catch(function(err){
        console.log(err);
    })