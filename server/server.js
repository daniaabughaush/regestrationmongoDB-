const express= require('express');
const cors=require('cors');
const mongoose= require('mongoose');
const dbURL=`mongodb+srv://abughoushdania:1234@cluster0.osrtptp.mongodb.net/mongotest?retryWrites=true&w=majority`
// const userRouter=require("./routes/userRouter")
require('dotenv').config()
const app = express();
const user=require("../router/user")
const auth=require("../router/auth")

app.use("/user",user);
app.use("/auth",auth);

const PORT=process.env.PORT
// app.use(userRouter)
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Welcome")
})

mongoose.connect(dbURL,{ useNewUrlParser: true, useUnifiedTopology: true })
const coneection=mongoose.connection;
coneection.once('open',()=>{
    console.log("Connection established")
})
module.exports = {
    server:app,
    start:()=>{

        mongoose.connect(dbURL,{ useNewUrlParser: true, useUnifiedTopology: true })
       .then(()=>{
    
           app.listen (PORT,()=>{
               console.log(`Starting at port ${PORT}`);
       })
        })
    }
}
