const mongoose = require('mongoose')

const dbconnect = async()=>{
    await mongoose.connect("mongodb+srv://itishabhatiya7:Abcd123@cluster0.onkox.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("conneted to the db");
}
module.exports = dbconnect;
