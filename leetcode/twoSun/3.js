const numbers = [3,62,234,7,23,24,74,23,76,92];
const arr=[];
// const largeNumbers = numbers.forEach(function(e,i){
//     if(e>70){
//         arr.push(e);//给数组添加新的元素
        
//     }
// })
//在forEach基础上
//filter内置函数const cb=number=>{ return number>70}
const cb=number=>number>70//函数对象,只有一个参数时可以不需要括号
const largeNumbers= numbers.filter(cb);
console.log(largeNumbers);