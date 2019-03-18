//封装读取文件的方法，高级版本
//需求 你要封装一个方法，我给你一个要读取的路径，你这个方法能帮我读取数据，并把内容返回给我

const fs =require('fs')
const path =require('path')


 function getfilebypath(fpath,succb,errcb){
  fs.readFile(fpath,'utf-8',(err,data) =>{
    if(err) return errcb(err) 

        //这个ruturn 是为了防止执行下面的回调
    
    succb(data)
  })
 }

//  getfilebypath(path.join(__dirname,'./files/1.txt'),function(data){
//   console.log(data)
//  },function(err){
//  console.log('shibai'+err.message)
//  })
 
getfilebypath(path.join(__dirname,'./files/1.txt'),function(data){
    console.log(data)
    getfilebypath(path.join(__dirname,'./files/2.txt'),function(data){
        console.log(data)
        getfilebypath(path.join(__dirname,'./files/3.txt'),function(data){
            console.log(data)             
    })        
  })
})


//需求 先读取文件1 ，再读取文件2 ，最后还读取3

