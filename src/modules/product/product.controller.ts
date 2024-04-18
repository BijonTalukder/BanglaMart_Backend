import { Request, Response } from "express";
import { productService } from "./product.service";
import sendResponse from "../../shared/sendResponse";
const createProduct = async (req: Request, res: Response) => {
  try {
    const result = await productService.createProduct(req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "create product",
      data: result,
    });
  } catch (error) {}
};
const getProduct = async (req: Request, res: Response) => {
  try {
    const result = await productService.getProduct();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "fetch product",
      data: result,
    });
  } catch (error) {}
};
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const result = await productService.getSingleProduct(
      parseInt(req.params.id)
    );
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "fetch product",
      data: result,
    });
  } catch (error) {}
};
export const productController = {
  createProduct,
  getProduct,
  getSingleProduct,
};
