import { Model, Schema, model } from "mongoose";

// type UserModel = Model<IUser,object>
const userSchema = new Schema(
  {},
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);
export const user = model("Users", userSchema);
