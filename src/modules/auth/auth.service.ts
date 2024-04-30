import { jwtHelper } from "../../helpers/jwtHelpers";
import { User } from "../users/user.model";
import jwt from 'jsonwebtoken'
const loginUser = async (payload:any) => {
  const { email, password } = payload;
  const user = new User();
  const isUserExist = await User.findOne({ email: email });
  if (!isUserExist) {
    return {
      message:"User not found"
    }
    // console.log("User not found");
  }

  const isPasswordMatched = user.isPasswordMatched(password,isUserExist?.password);
  if(!isPasswordMatched){
    return {
      message:"password not matched!!!"
    }
    // console.log("password not matched!!!");
  }
  const accessToken = jwt.sign({email,role:isUserExist?.role},'very-secret',{expiresIn:'4d'})
  const refreshToken = jwt.sign({
    id:isUserExist.email,
    role:isUserExist.role
 },'very-secret',{expiresIn:'365d'})
console.log(accessToken,refreshToken);

 return {
  accessToken,refreshToken
 }
};
const refreshToken = async(payload:string)=>{
  let verifiedToken = null
  try {
    verifiedToken = jwt.verify(payload,'refresh-secret')
    
  } catch (error) {
    
  }
  const {email,role} = verifiedToken;
  const isUserExist = await User.isUserExist(email)
  if(!isUserExist){
    throw console.error("user not exist");
    
  }
const newAccessToken = jwtHelper.createToken({email:isUserExist.email,role:isUserExist.role},'secret','12h')
}
export const AuthService = {
  loginUser,
  refreshToken
};
