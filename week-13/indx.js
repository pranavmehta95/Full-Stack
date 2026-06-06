const express = require("express");
const bcrypt = require("bcrypt");
const { Pool } = require('pg');
const z = require("zod");

const pool = new Pool({
    connectionString: "postgresql://neondb_owner:npg_oxwpD82nPQhC@ep-wispy-mouse-aqcclvr1-pooler.c-8.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
})

const app = express();
app.use(express.json());


const SignupSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(6),
    email: z.string()
})

app.post("/signup", async (req, res) => {

    const {data, success, error} = SignupSchema.safeParse(req.body);
    if(!success){
        res.status(403).json({
            message: "Incorrect inputs", error: JSON.parse(error)
        })
        return
    }

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, 10);


    const response = await pool.query(`INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`, [username, email, hashedPassword])
    res.json({
        message: "Signup have been done.",
        id: response.rows[0].id
    }) 
})

app.post("/signin", async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    const response = await pool.query(`SELECT * FROM users WHERE email='$1', [email]`);

    const userExists = response.rows[0];

    if (!userExists) {
        res.status(403).json({
            message: "Incorrect creds"
        });
    } else {
        const correctPassword = await bcrypt.compare(password, userExists.password);

        if(correctPassword) {
            res.json({
            token: "asdioaisdosadiosdaisdo"
            })
        } else {
            res.status(403).json({
                message: "Incorrect cred"
            })
        }    
    }
});



app.listen(3000);

(async () => {
    await pool.connect()
})()