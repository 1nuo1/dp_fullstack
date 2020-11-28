// function merge(){

// }
//JS 变量的类型是由值决定的，弱类型
//  m + n <= nums1.length
const merge =(nums1,m,nums2,n) =>{ //箭头函数 es6
    //把nums2合并到nums1中
    //[1,2,3,0,0,0]
    //重新排序
    //多定义一个变量
    let current2 = 0;//定义一个指针
    for (let i=nums1.length-n; i<=nums1.length-1; i++) {
        nums1[i]= nums2[current2++];//nums2 有个可遍历的
    }
    //console.log(nums1);
    return nums1.sort((a,b) => a-b)//a-b 是布尔值，大于零不变化，小于零交换位置
}
console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));
