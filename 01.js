//需求 你要封装一个方法，我给你一个要读取的路径，你这个方法能帮我读取数据，并把内容返回给我

const fs =require('fs')
const path =require('path')

// fs.readFile(path.join(__dirname,'./files/1.txt'),'utf-8',(err,data) =>{
//   if(err) throw err
//   console.log(data)
// })


  //初衷：给定文件路径，返回读取内容
  //我们可以规定一下，callback有两个参数，第一个参数是失败的结果，第二个参数是成功的结果
  //同时 我们规定，如果成功后，返回的结果 应该位于callback参数的第二个位置 ，此时 由于第一个位置没有
  //出错，所以放一个null 
  // 如果失败了，则第一个位置方式error对象，第二个位置放置一个undefined
 function getfilebypath(fpath,callback){
  fs.readFile(fpath,'utf-8',(err,data) =>{
    if(err) {
      //如果报错了，进入IF分支后，IF后面的代码就没有必要执行了
       //不放第二个参数，默认为undefinde
        return  callback(err)
    }
     callback(null,data)
  })
 }

 //就是在调用中定义函数，在函数体内执行回调函数
 
    getfilebypath(path.join(__dirname,'./files/1.txt'),(err,data)=>{
      if(err){
        return console.log('失败')
      }
      console.log( data)
    })




  // var result=getfilebypath(path.join(__dirname,'./files/1.txt'))
  // console.log(result)

 
 