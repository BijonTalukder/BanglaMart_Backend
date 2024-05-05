import express from "express";
import { orderController } from "./order.controller";
const router = express.Router();
router.post("/create-order", orderController.createOrder);
router.get("/", orderController.getOrder);
router.get("/:id", orderController.getSingleOrder);

export const orderRouter = router;