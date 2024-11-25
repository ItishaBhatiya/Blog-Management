const express = require('express');
const dbconnect = require('./Config/db');

const app = express();
app.use(express.json());

app.get("/",async(req, res) => {
    res.send("working")
})

app.listen(3010,()=>{
    console.log("listening on port 3010");
    dbconnect();
})