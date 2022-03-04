const express= require('express')
const bodyparser=require('body-parser')
const app=express()
app.use(bodyparser.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})
app.post('/',(req,res)=>{
  var n1= parseInt(req.body.num1)  
  var n2=parseInt(req.body.num2)
  var operation=req.body.sub
  var ans
  switch(operation){
      case "ADD":
          ans= n1+n2
          res.send("The sum is : "+ans)
          break
      case "SUB":
          ans= n1 - n2
          res.send("The difference is :"+ans)
          break
      case "MUL":
          ans= n1*n2
          res.send("The product is :"+ans)
          break
      case "DIV":
          ans=n1/n2
          res.send("The division is :"+ans)
          break            

  }

})

app.listen(3000,(res)=>{
    console.log("server started")
})
