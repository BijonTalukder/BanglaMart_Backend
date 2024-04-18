import express from "express";
import { productTypeController } from "./productType.controller";
const router = express.Router();

router.post("/create", productTypeController.createProductType);
router.get('/',productTypeController.getProductType)
router.get('/:id',productTypeController.getSingleProductType)

export const productTypeRouter = router;
