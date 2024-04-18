import sendResponse from "../../shared/sendResponse";
import { IProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (payload: Partial<IProduct>) => {
  const result = await Product.create(payload);
  return result;
};
const getProduct = async () => {
  const result = await Product.find();
  return result;
};
const getSingleProduct = async (id: number) => {
  const result = await Product.findOne({ id: id });
  return result;
};
export const productService = {
  createProduct,
  getProduct,
  getSingleProduct,
};
