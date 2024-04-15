import { Model, Schema, model } from "mongoose";
import bcrypt from 'bcrypt'
import { IUser } from "./user.interface";
const userSchema = new Schema<IUser>(
  {
   
      id:{type:Number},
      userName:{type:String},
      email:{type:String},
      password:{type:String},
      phoneNumber:{type:String},
      address:{type:String},
      isSeller:{type:String},
      switchingType:{type:String},
      selleingProductType:{type:String},
      companyName:{type:String},
      companyAddress:{type:String},
      status:{type:String},
      

      




      
    
  },
  
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);
userSchema.pre('save', async function (next) {
  // hashing user password
  const User = this;
 
  User.password = await bcrypt.hash(
    User.password,
    Number(4)
  );

  next();
});
export const User = model<IUser>("Users", userSchema);
