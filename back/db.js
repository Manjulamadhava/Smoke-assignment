import mysql from  'mysql'
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'register'
})

connection.connect((err)=>{
    if (err){
        console.error("An error occured:"+err)
        return ;
    }
    console.log("my sql db connected successfully")
})

module.exports ={connection} ;