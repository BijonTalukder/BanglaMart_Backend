import { IProductType } from "./productType.interface";
import { productType } from "./productType.model";

const createProductType = async (payload: Partial<IProductType>) => {
  const result = await productType.create(payload);
  return result;
};
const getProductType = async () => {
  const result = await productType.find({});
  return result;
};
const getSingleProductType = async (id: number) => {
  const result = await productType.findOne({ id: id });
  return result;
};

export const productTypeService = {
  createProductType,
  getProductType,
  getSingleProductType,
};
