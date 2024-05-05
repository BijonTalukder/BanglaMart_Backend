import sendResponse from "../../shared/sendResponse";
import { IOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrder = async (payload: Partial<IOrder>) => {
  const result = await Order.create(payload);
  return result;
};
const getOrder = async () => {
  const result = await Order.find();
  return result;
};
const getSingleOrder = async (id: number) => {
  const result = await Order.findOne({ id: id });
  return result;
};
export const orderService = {
  createOrder,
  getOrder,
  getSingleOrder,
};