const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/MongoNew');
}

main().then((res)=>{
    console.log("connection succesfull");
}).catch(err => console.log(err))



const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})


const user = mongoose.model("user",userSchema);


// user.insertMany([
//     {
//         name:"shashank",
//         email:"shasshank@gmail.com",
//         age:20
//     },
//     {
//         name:"vinu",
//         email:"vinu@gmail.com",
//         age:22
//     },
//     {
//         name:"vinayak",
//         email:"vin@gmail.com",
//         age:21
//     }
// ]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })



// user.find({name:"vignesh"}).then((res)=>{
//     console.log(res[0].age)
// });



user.updateOne({email:"vigneshfornavy@gmail.com"},{$set:{age:22}}).then((result)=>{
    console.log(result);
})