import {productCtrl} from "../controllers/product.controller";
import express from "express";

const router = express.Router();

router.get("/", productCtrl.getProductCtrl)

router.get("/:id", productCtrl.getProductByIdCtrl)

router.post("/", productCtrl.createProductCtrl)

router.put("/:id", productCtrl.updateProductCtrl)

router.delete("/:id", productCtrl.deleteProductCtrl)

export default router;
