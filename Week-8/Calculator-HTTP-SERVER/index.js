// HTTP server which supports the 4 routes: add, subtract, multiply, divide

const express = require("express");

const app = express();

let requestCount = 0;

function middleware(req, res, next) {
    requestCount++;
    next();
}

app.use(middleware)


app.use(function(req, res, next) {
    console.log("Hii there")
    next();
})


app.use(express.json());


app.get("/", function(req, res) {
    res.sendFile("/Users/pranavkumar/Documents/GitHub/Full-Stack/Week-8/Calculator-HTTP-SERVER/index.html");
})

app.get("/multiply", function(req, res){

    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    const ans = a*b;


    res.json({
        ans: ans
    })
});

app.get("/status", function (req, res) {
    res.send("up")
})

app.get("/requestCount", function (req,res) {

    res.send({
        requestCount
    })
})


app.get("/sub");
app.get("/mul");
app.get("/div");

app.listen(3002);