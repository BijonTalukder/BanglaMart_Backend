import { Schema, model } from "mongoose";
import { IProduct } from "./product.interface";

const productSchema = new Schema<IProduct>(
  {
    id: { type: Number },
    name: { type: String },
    description: { type: String },
    imageUrl: { type: String },
    price: { type: Number },
    productTypeId: { type: Number },
    quantity: { type: Number },
    reviewId: { type: Number },
    userId: { type: Number },
    weight: { type: Number },
  },

  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);
export const Product = model<IProduct>("products", productSchema);
