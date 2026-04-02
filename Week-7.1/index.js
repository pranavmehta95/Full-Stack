const express = require('express')
const app = express()

//route handler
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/asd', (req, res) => {
    res.send("<b>This is asd<b>")
})


app.post("/", (req, res) => {
    res.send("This is the post request.")
})
app.listen(3000);  // Which port
