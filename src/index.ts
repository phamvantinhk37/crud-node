import express from "express";
import bodyParser from "body-parser";
import 'dotenv/config'
import mongoose from "mongoose"


const app = express();
const port = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017";

app.use(bodyParser.json());


app.get("/", (req, res)=> {
    res.status(200).json({
        status: "success",
        data: []
    })
})

mongoose.connect(MONGODB_URI)
    .then(()=> {
        console.log("Connected!");
        app.listen(port, () => {
            console.log("listening on port " + port);
        })
    })
    .catch((error) => {
        console.error(error);
    })