const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const notes = [];
const users = [];


app.post("/signup", function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    const userExists = users.find(user => user.username === username);
    if(userExists){
        return res.status(403).json({
            message: "User with this name is already exists."
        })
    }

    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "You have signed up."
    })
})



app.post("/signin", function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    const userExists = users.find(user => user.username === username && user.password === password);

    if(!userExists){
        res.status(403).json({
            message: "Incorrect credential."
        })
        return;
    }
    //json webtoken

    const token = jwt.sign({
        username: username
    }, "pranav123")


    res.json({
        token: token
    })

})


app.post("/notes", function(req, res){
// check if they have sent the right header. Extract who this user is form the header.A
    const token = req.header.token;

    if(!token){
        res.status(403).send({
            message: "you are not logged-in"
        });
        return;
    }



    const note = req.body.note;
    notes.push(note);


    res.json({
        message: "Done!!"
    })
})


app.get("/notes", function(req, res){
    res.json({
        notes
    })
})

app.get("/", function(req, res){
    res.sendFile("/Users/pranavkumar/Documents/GitHub/Full-Stack/week-9/note-app/frontend/index.html")
})

app.listen(3000);