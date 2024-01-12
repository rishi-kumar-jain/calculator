const express = require("express");
const bodyParser = require("body-parser");
const { response } = require("express");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));
//url encoded is used to grab the information from the html form posted to the server
//


app.get("/", function(req,res){
//    res.send("<h1>hey!</h1>");
//console.log(__dirname);
res.sendFile(__dirname + "/index.html") ;
     
});

//to handle any post req that comes to home route
app.post("/", function(req, res){
    
    console.log(req.body);
    //num1 and num2 we got from body parser is in text form.
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    
    res.send("The result of the addition of two values is : " + result);


});


app.get("/bmiCalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req,res){
    console.log(req.body);
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight / (height*height);
    res.send("your bmi is " + bmi);
});




app.listen(3000, function(){
    console.log(" app started successfully at port 3000");
});