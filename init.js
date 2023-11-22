const mongoose = require('mongoose');
const Chat = require('./models/chat');



let messages = [
    {
        from:"vignesh H E",
        to:"sushant",
        message:"hello",
        createdBy:new Date(),
    },
    {
        from:"varun",
        to:"vinay",
        message:"af",
        createdBy:new Date(),
    },
    {
        from:"shakun",
        to:"vinod",
        message:"haadfsfi",
        createdBy:new Date(),
    },
    {
        from:"aafsd",
        to:"shashsfdasank",
        message:"dasfdas",
        createdBy:new Date(),
    },
    {
        from:"vaignesh",
        to:"shashasank",
        message:"haai",
        createdBy:new Date(),
    },
    {
        from:"vaaignesh",
        to:"shaaaashsank",
        message:"haaaai",
        createdBy:new Date(),
    }
]


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatspp');
}


main().then((res)=>{
    console.log("connection succesfull");
}).catch(err => console.log(err))

Chat.insertMany(messages);