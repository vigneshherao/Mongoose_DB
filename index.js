const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const port = 8080;
const Chat = require("./models/chat")
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatspp');
}


// const chat1 = new Chat({
//     from:"vignesh",
//     to:"shashsank",
//     message:"hai",
//     createdBy:new Date(),
// })

// chat1.save().then((res)=>{
//     console.log(res);
// })


main().then((res)=>{
    console.log("connection succesfull");
}).catch(err => console.log(err))

app.listen(port,()=>{
    console.log(`Server is started ${port}`);
})


app.get("/", async (req,res)=>{
    let chats = await Chat.find();
    res.render("chat.ejs",{chats});
})