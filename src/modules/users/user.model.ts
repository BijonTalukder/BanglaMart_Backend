import { Model, Schema, model } from "mongoose";
import bcrypt from 'bcrypt'
import { IUser, IUserMethods } from "./user.interface";
const userSchema = new Schema<IUser,IUserMethods>(
  {
   
      id:{type:Number},
      userName:{type:String},
      email:{type:String},
      password:{type:String},
      phoneNumber:{type:String},
      role:{type:String,enum:["user","seller"]},
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

userSchema.methods.isPasswordMatched = async function (givenPassword:string,savedPassword:string) {
 
 console.log("call password matched")
  const isMatched = await bcrypt.compare(givenPassword,savedPassword);
return isMatched;
}
userSchema.statics.isUserExist = async function (id:number) {
  return await User.findOne(
    { id },
    { id: 1, password: 1}
  );
  
}
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
