import express from "express";
import bodyParser from "body-parser";
import 'dotenv/config'
import mongoose from "mongoose"
import {
    createProduct,
    deleteProduct,
    getProduct,
    getProductById,
    updateProduct
} from "./model/product";


const app = express();
const port = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017";

app.use(bodyParser.json());


app.get("/api/product", async (req, res)=> {
    try {
        const product = await getProduct();
        res.status(200).json({
            status: "success",
            data: product
        })
    } catch (error: any) {
        res.status(500).json({message: error.message})
    }
})

app.get("/api/product/:id", async (req, res)=> {
    try {
        const product = await getProductById(req.params.id);
        res.status(200).json({
            status: "success",
            data: product
        })
    } catch (error: any) {
        res.status(500).json({message: error.message})
    }
})

app.post("/api/product", async (req, res)=> {
    const {name, description, price, quantity} = req.body;
    try {
        const product = await createProduct({
            name, description, price, quantity
        })
        res.status(200).json({
            status: "success",
            product: product,
        });

    } catch (error: any) {
        res.status(500).json({message: error.message})
    }
})

app.put("/api/product/:id", async (req, res)=> {
    try {
        const {name, description, price, quantity} = req.body;
        console.log(req.params.id)
        const product = await updateProduct(req.params.id, {
            name, description, price, quantity
        })
        res.status(200).json({
            status: "success",
            data: product
        })
    } catch (error: any) {
        res.status(500).json({message: error.message})
    }
})

app.delete("/api/product/:id", async (req, res)=> {
    try {
        const product = await deleteProduct(req.params.id)
        res.status(200).json({
            status: "success",
            message: "Product deleted successfully.",
            product: product
        })
    } catch (error: any) {
        res.status(500).json({message: error.message})
    }
})

mongoose.connect(MONGODB_URI)
    .then(()=> {
        console.log("Connected to MongoDB");
        app.listen(port, () => {
            console.log("listening on port " + port);
        })
    })
    .catch((error) => {
        console.error(error);
    })