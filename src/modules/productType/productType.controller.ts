import { Request, Response } from "express";
import { productTypeService } from "./productType.service";
import sendResponse from "../../shared/sendResponse";

const createProductType = async (req: Request, res: Response) => {
  try {
    const result = await productTypeService.createProductType(req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "create productType successfully",
      data: result,
    });
  } catch (error) {}
};
const getProductType = async (req: Request, res: Response) => {
  try {
    const result = await productTypeService.getProductType();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "fetch  productType successfully",
      data: result,
    });
  } catch (error) {}
};
const getSingleProductType = async (req: Request, res: Response) => {
  try {
    const result = await productTypeService.getSingleProductType(
      parseInt(req.params.id)
    );
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "fetch  productType successfully",
      data: result,
    });
  } catch (error) {}
};

export const productTypeController = {
  createProductType,
  getProductType,
  getSingleProductType,
};
