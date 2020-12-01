// console.log('AI is coming,cool!');
//node 引入模 块关键字
//车牌识别
const AipocrClient=require('baidu-aip-sdk').ocr;
const { func } = require('assert-plus');
//内置模块fs(fileSystem)
const fs=require('fs');
const image =fs.readFileSync("3.jpg").toString("base64");
// 1.读入文件I/O操作 从硬盘读入内存中，
const APP_ID="23078074";
const API_KEY="LvGUi4LUtuRLt0YMX6EHBjDu";
const SECRET_KEY="2CPlgxFLBQ5UB6MhPaaVm8LLXVa2L593";
const client = new AipocrClient(APP_ID,API_KEY,SECRET_KEY);
const options={};
options["multi_detect"]="true";
client
.licensePlate(image,options)
.then(function(result){
    console.log(result);
})
.catch(function(err){
    console.log(err);
})