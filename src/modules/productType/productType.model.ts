import { Schema, model } from "mongoose";
import { IProductType } from "./productType.interface";

const productTypeSchema = new Schema<IProductType>(
  {
    id: { type: Number },
    name: { type: String },
    status: { type: String },
    imageUrl: { type: String },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);
export const productType = model<IProductType>(
  "productTypes",
  productTypeSchema
);
