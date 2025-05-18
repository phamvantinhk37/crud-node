import {getProductById, getProduct, createProduct, deleteProduct, updateProduct} from "../models/product.model";

const getProductCtrl = async (req: any, res: any)=> {
    try {
        const product = await getProduct();
        res.status(200).json({
            status: "success",
            data: product
        })
    } catch (error: any) {
        res.status(500).json({message: error.message})
    }
}
const getProductByIdCtrl = async (req: any, res: any)=> {
    try {
        const product = await getProductById(req.params.id);
        res.status(200).json({
            status: "success",
            data: product
        })
    } catch (error: any) {
        res.status(500).json({message: error.message})
    }
}

const createProductCtrl = async (req: any, res: any)=> {
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
}

const deleteProductCtrl = async (req: any, res: any)=> {
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
}

const updateProductCtrl = async (req: any, res: any)=> {
    try {
        const {name, description, price, quantity} = req.body;
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
}

export const productCtrl = {
    getProductCtrl,
    getProductByIdCtrl,
    createProductCtrl,
    updateProductCtrl,
    deleteProductCtrl,
}