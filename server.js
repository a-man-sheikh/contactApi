const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./Routes/user")
const contactRouter = require("./Routes/contact")
const {config} = require('dotenv')
const app = express();
app.use(express.json());


//env setup
config({path:'.env'})

//user api
app.use("/api/user",userRouter);

//contact api
app.use('/api/contact',contactRouter)


const port = process.env.PORT
mongoose
  .connect(`${process.env.MONGO_URI}/contactapp`)
  .then(() => {
    console.log("MongoDb connected");
    app.listen(port, () => console.log(`port is running on ${port}`));
  })
  .catch((err) => console.error(err));
