import { Model, Schema, model } from "mongoose";
import bcrypt from 'bcrypt'
// banglaMart
// N39qq9AgMGY6KA5s
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
userSchema.pre('save', async function (next) {
  // hashing user password
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(4)
  );

  next();
});
export const user = model("Users", userSchema);
