const fs =require('fs')

function getFileBypath(fpath){
    return   new Promise(function(resolve,reject){
            fs.readFile(fpath,'utf-8',(err,data)=>{
           // if(err) throw err
            if(err) {
              reject(err) 
              return
           }
           resolve(data)
       })
      })
}

//先读取文件1，然后文件2 最后文件3
//注意：通过.then指定回调函数的时候 成功的回调函数必须传，失败的回调函数 可以不传
// getFileBypath('./files/1.txt')
// .then(function(data){
//     console.log(data)
// })



//在上一个.then中返回一个新的promise实例可以继续用下一个.then来处理

//如果想要前面的promise执行失败不想影响后面的promise操作被终止，可以为每个promise指定失败的回调
getFileBypath('./files/1.txt')
.then(function(data){
    console.log(data)
    // 读取文件二
    return getFileBypath('./files/22.txt')
})
.then(function(data){
    console.log(data)
    return getFileBypath('./files/3.txt')
})
.then(function(data){
    console.log(data)
})
//catch的作用：如过前面有任何的promise失败 立即终止后续的promise，并且马上进入catch中抛出异常
.catch(function(err){
    console.log('这是自己的处理方式'+err.message);
})
 //当我们有这样的需求 哪怕前面的promise执行失败了 不要影响后续promise的正常执行，此时要单独
 //为每个promise通过.then指定失败的回调

//有时候我们有这样的需求 和上面的需求刚好相反 如过一定要按顺序执行，就是前面失败 后面就不应继续
//此时我们要实现按顺序的话 就是前面一旦有报错 后面的都不用做了

// console.log('okokok');




// getFileBypath('./files/12.txt')
// .then(function(data){
//     console.log(data)
//     // 读取文件二
//     return getFileBypath('./files/2.txt')
// },function(err){
//    console.log('这是失败的结果'+err.message);
//    //return一个新的promise
//    return getFileBypath('./files/2.txt')
// })
// .then(function(data){
//     console.log(data)
//     return getFileBypath('./files/3.txt')
// })
// .then(function(data){
//     console.log(data)
// })