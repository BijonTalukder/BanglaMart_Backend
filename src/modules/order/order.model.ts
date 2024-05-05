import { Schema, model } from "mongoose";
import { IOrder } from "./order.interface";

const orderSchema = new Schema<IOrder>(
  {
    id: { type: Number },
    userId: { type: Number },
    orderTotal:{type: Number},
    productId:{type: []},
    sellerId:{type: []},
    orderStatus:{type: String}


  },

  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);
export const Order = model<IOrder>("order", orderSchema);