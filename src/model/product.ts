import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    }
})

export const productModel = mongoose.model("Product", productSchema);

export const getProduct = () => {
    return productModel.find();
}

export const getProductById = (id: string) => {
    return productModel.findOne({id})
}

export const createProduct = (data: Record<string, any>) => {
    return productModel.create(data);
}

export const deleteProduct = (id: string) => {
    return productModel.deleteOne({_id: id})
}

export const updateProduct = (id: string, data: Record<string, any>) => {
    return productModel.findOneAndUpdate({_id: id}, data)
}