import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

app.get("/", (req, res)=> {
    res.status(200).json({
        status: "success",
        data: []
    })
})

app.listen(port, () => {
    console.log("listening on port " + port);
})