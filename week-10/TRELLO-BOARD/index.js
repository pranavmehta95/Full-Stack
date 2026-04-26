// Data base schema for these :-

//username password | USERS TABLE
//organisation | ORGANISATION TABLE
//boards | BOARDS TABLE
//issues | ISUUES TABLE

const express = require("express");
const { constants } = require("fs");
const jwt = require("jsonwebtoken");
const { authMiddleware } = require("./middleware");
const middleware = require("./middleware");

let USERS_ID = 1;
let ORGANISATION_ID = 1;
let BOARD_ID = 1;
let ISSUES_ID = 1;

const USERS = [];
const ORGANIZATIONS = [{
    id: 1,
    title: "100xdevs",
    description: "Learning coding platform",
    admin: 1,
    members: [2]
},{
    id: 2,
    title: "ramans orgs",
    description: "Experimenting",
    admin: 2,
    members: []
}];
const BOARDS = [{
    id: 1,
    title: "100xschool website frontend",
    organisationID: 1
}];
const ISSUES = [{
    id: 1,
    title: "Add dark mode",
    boardID: 1,
    state: "IN_PROGRESS"
},{
    id: 2,
    title: "Allow admin to create more courses",
    boardID: 2,
    state: "Done"
}];

const app = express();
app.use(express.json());

//CREATE
app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const usersExits = USERS.find(u => u.username === username);
    if(usersExits){
        res.status(411).json({
            message: "User with this username is already exits."
        })
        return;
    }

    USERS.push({
        username,
        password,
        id: USERS_ID++
    })

    res.json({
        message: "You have signedup successfully."
    })
})

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const usersExits = USERS.find(u => u.username === username && u.password === password);
    if(!usersExits){
        return res.status(403).json({
            message: "Incorrect credential."
        })
    }
    
    const token = jwt.sign({
        userId: usersExits.id
    }, "pranavmehta123321");

    res.json({
        token
    })

})


// AUTHENTICATED ROUTE -- MIDDLEWARE
app.post("/organization", authMiddleware, (req, res) => {
    const userId = req.userId;
    ORGANIZATIONS.push({
        id: ORGANISATION_ID++,
        title: req.body.title,
        description: req.body.description,
        admin: userId,
        members: []
    })

    res.json({
        message: "Org created.",
        id: ORGANISATION_ID - 1
    })
})

app.post("/add-member-to-organization", authMiddleware, (req, res) => {
    const userId = req.userId;
    const organisationID = req.body.organisationID;
    const memberUserUsername = req.body.memberUserUsername;
    
    const organization = ORGANIZATIONS.find(org => org.id === organisationID);

    if(!organization || organization.admin !== userId){
        res.status(411).json({
            message: "Either this org doesn't exit or you are not the admin of this org."
        })
        return;
    }

    const memberUser = USERS.find(u => u.username === memberUserUsername);

    if(!memberUser){
        res.status(411).json({
            message: "No user exit with this username in our db."
        })
        return;
    }

    organization.members.push(memberUser.id);

    res.json({
        message: "New member is added."
    })
})

app.post("/board", (req, res) => {

})

app.post("/issue", (req, res) => {

})
// get endpoint
app.get("/organization", authMiddleware, (req, res) => {
    const userId = req.userId;
    const organisationID = req.query.organisationID;

    const organization = ORGANIZATIONS.find(org => org.id === Number(organisationID));

    if(!organization || organization.admin !== userId){
        res.status(411).json({
            message: "Either this org doesn't exit or you are not the admin of this org."
        })
        return;
    }

    res.json({
        organization: {
            ...organization,
            members: organization.members.map(memberId => {
                const user = USERS.find(user => user.id === memberId);
                return {
                    id: user.id,
                    username: user.username
                }
            })
        }
    })
})
// READ

app.get("/boards", (req, res) => {
   
})

app.get("/issues", (req, res) => {

})

app.get("/members", (req, res) => {

})

// UPDATE
app.put("/issues", (req, res) => {

})

//DELETE
app.delete("/members", authMiddleware, (req, res) => {
    const userId = req.userId;
    const organisationID = req.body.organisationID;
    const memberUserUsername = req.body.memberUserUsername;
    
    const organization = ORGANIZATIONS.find(org => org.id === organisationID);

    if(!organization || organization.admin !== userId){
        res.status(411).json({
            message: "Either this org doesn't exit or you are not the admin of this org."
        })
        return;
    }

    const memberUser = USERS.find(u => u.username === memberUserUsername);

    if(!memberUser){
        res.status(411).json({
            message: "No user exit with this username in our db."
        })
        return;
    }

    organization.members = organization.members.filter(id => id !== memberUser.id);

    res.json({
        message: "New member is added."
    })
})
app.listen(3000);