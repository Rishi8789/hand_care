const mongoose=require("mongoose");
require("dotenv").config();
const connection=mongoose.connect("mongodb+srv://rishi8789:rishimongodb@cluster0.0dchohe.mongodb.net/dbHandCares?retryWrites=true&w=majority")

module.exports={
    connection
}