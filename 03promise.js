//1 promise是一个构造函数 我们就可以new一个promise 得到一个promise对象
//2 在promise上，有两个函数 分别叫做reslove（成功之后的回调函数）和reject(失败之后的回调函数)
//3 在promise构造函数上prototype属性上，有一个.then（）方法，也就是说，只要是promise构造的实例，
//都可以访问.then()
//4如果promise表示一个异步操作，每当我们new一个 promise实例，这个实例就表示具体的异步操作，
//5 既然promise创造的实例是一个异步操作，那么这个异步操作室友两种状态
//5.1状态1  成功 需要在内部调用成功的回调函数reslove
//5.2状态2  失败 需要在内部调用成功的回调函数reject
//5.3由于promise的实例，是一个异步操作，所以内部拿到的操作的结果后，无法使用return把操作的结果
//返回给调用者，这时候，只能使用回调函数的形式，来把成功或失败的结果，返回给调用者
//6 我们可以在new 出来的promise实例上调用.then()方法，（预先为这个promise异步操作指定成功和失败的回调函数）


//注意 这里new出来的promise只是代表形式上的一个异步操作；
//什么是形式上的异步操作：就是说我们只知道他是一个异步操作，做什么具体的异步目前还不清楚
//   var promise =new Promise() 


//这是一个具体的异步操作
// var promise =new Promise(function(){
//     //这个function内部就是具体的异步操作
//     //代表读文件的异步操作
// // fs.readFile()
// })

const fs =require('fs')

// 每当new一个promise实例的时候，就会立即执行这个异步操作中的代码
//也就是说，除了能够得到一个promise实例之外，还会立即调用一次里面的异步操作
// var promise =new Promise(function(){
//  fs.readFile('./files/2.txt','utf-8',(err,data)=>{
//      if(err) throw err
//      console.log(data)
//  })
// })

// 初衷，给路径 返回读取的内容
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

// getFileBypath('./files/3.txt')
// .then(function(data){
//      console.log(data)
//  },function(err){
//      console.log(err.message);
//  })
