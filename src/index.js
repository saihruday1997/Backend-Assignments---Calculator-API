const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

app.get("/" , (req, res) => {
    res.send("Hello world!")
});

const under = -1000000;
const over = 1000000;

app.post("/add" , (req,res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    let sum = num1+num2;

    if(num1<under || num2<under || sum<under ){
        res.json({status: "error", message:"Underflow"});
    }

    if(num1>over || num2>over || sum>over){
        res.json({status:"error", message:"Overflow"});
    }

    if(typeof num1 === "string" || typeof num2 === "string"){
        res.json({status:"error" , message:"Invalid data types"});
    }

    res.json({status:"success",message:"the sum of given two numbers",sum: sum});
});

app.post("/sub" , (req,res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    res.json({status:"success",message:"the difference of given two numbers",difference: num1-num2});
});

app.post("/multiply" , (req,res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    res.json({status:"success",message:"The product of given numbers",result: num1*num2});
});

app.post("/divide" , (req,res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    res.json({status:"success",message:"The division of given numbers",result: num1/num2});
});

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;