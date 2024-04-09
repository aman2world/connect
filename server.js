const express = require("express");
const mysql = require('mysql');


const app = express();

app.use(express.json());

const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "developer@database",
    database: "learn"
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database');

});

app.get('/',(req,res)=>{
    db.query("select * from user1",(err,result)=>{
        if(err){
            res.send("error")
        }
        else{
            res.send(result)
        }
    })
});

app.listen(3001)