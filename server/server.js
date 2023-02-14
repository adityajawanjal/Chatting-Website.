const express = require("express");
const connectDB = require("./db/conn");
const cors = require("cors");
const user_route = require("./routes/user-route");

const app = express();

app.use(express.json());
app.use(cors());
app.use("",user_route);

connectDB();

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`app is listening on : ${port}`);
})