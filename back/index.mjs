import express from "express"
import mysql from "mysql"
import cors from 'cors'

const app=express()
app.use(cors())
app.use(express.json())


const db=mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'',
    database:'register'
})
    
app.post('/register',(request,response)=>{
    const sql="insert into user(`name`,`password`) VALUES(?)";
    const values=[req.body.name,req.body.password]
    db.query(sql,[values],(err,data)=>{
        if (err) {return res.json(err)}
        return res.json(data);
    })
})






app.get('/',(req,res)=>{
    res.send("Backened Server")

})

app.listen(5000,()=>{
    console.log('Running')
})