const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const port = 8080;
const methodOverride = require('method-override')
const Chat = require("./models/chat")
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")))
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:true}));

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



app.get("/new/chat",(req,res)=>{
    res.render("newChat.ejs");  
})


app.post("/chats",(req,res)=>{
    let {from,to,message} = req.body;
    let newChat = new Chat({
        from:from,
        to:to,
        message:message,
        createdBy:new Date()
    });
    newChat.save().then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })


    res.redirect("/");
})


app.get("/chat/edit/:id",async (req,res)=>{
    let {id}= req.params;
    let data = await Chat.findById(id);
    res.render("edit.ejs",{data});
})


app.patch("/chats/:id",async(req,res)=>{
    let {id}= req.params;
    let {message:newMessage} = req.body;
    let data = await Chat.findByIdAndUpdate(id,{message:newMessage});
    res.redirect("/");
})


app.delete("/chat/:id",async (req,res)=>{
    let {id} = req.params;
    let deleteChat = await Chat.findByIdAndDelete(id);
    res.redirect("/");
})