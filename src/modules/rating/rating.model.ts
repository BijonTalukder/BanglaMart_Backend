import { Schema, model } from "mongoose";
import { IRating } from "./rating.interface";

const ratingSchema = new Schema<IRating>(
  {
    id: { type: Number },
    userId: { type: Number },
    productId: { type: Number },
    rating: { type: Number },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);
export const rating = model<IRating>("ratings", ratingSchema);
