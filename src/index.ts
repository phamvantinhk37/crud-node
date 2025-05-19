import express from "express";
import bodyParser from "body-parser";
import 'dotenv/config'
import mongoose from "mongoose"
import router from "./routes/product.route";


const app = express();
const port = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017";

app.use(bodyParser.json());

app.use("/api/product", router)

mongoose.connect(MONGODB_URI, {
    dbName: process.env.DATABASE_NAME
})
    .then(()=> {
        console.log("Connected to MongoDB");
        app.listen(port, () => {
            console.log("listening on port " + port);
        })
    })
    .catch((error) => {
        console.error(error);
    })