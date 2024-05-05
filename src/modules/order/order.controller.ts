import { Request, Response } from "express";
import { orderService } from "./order.service";
import sendResponse from "../../shared/sendResponse";
const createOrder = async (req: Request, res: Response) => {
  try {
    const result = await orderService.createOrder(req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "create order",
      data: result,
    });
  } catch (error) {}
};
const getOrder = async (req: Request, res: Response) => {
  try {
    const result = await orderService.getOrder();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "fetch order",
      data: result,
    });
  } catch (error) {}
};
const getSingleOrder = async (req: Request, res: Response) => {
  try {
    const result = await orderService.getSingleOrder(
      parseInt(req.params.id)
    );
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "fetch order",
      data: result,
    });
  } catch (error) {}
};
export const orderController = {
  createOrder,
  getOrder,
  getSingleOrder,
};
