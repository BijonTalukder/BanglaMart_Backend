import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import sendResponse from "../../shared/sendResponse";

const loginUser = async (req:Request, res:Response) => {
    const {...loginData} = req.body;

   const result =await AuthService.loginUser(loginData);
//    const cookieOptions={
//     secure:config.env =='production',
//     httpOnly:true
// }
const {refreshToken,...others} = result
const cookieOptions={
  // secure:process.env==='production'?true:false
  httpOnly:true,
  secure:true
}
res.cookie('refreshToken',refreshToken,cookieOptions)
console.log(result,"from controller")
// delete result.refreshToken
// if('refreshToken' in result){
//   delete result.refreshToken

// }
// res.send({
//  rf: result.refreshToken,
//   at:result.accessToken
// })
sendResponse(res,{
  statusCode:200,
  success:true,
  message:"user login",
  data:others
})
    // res.cookie('refreshtoken',result.refreshToken,cookieOptions)
    // if('refreshtoken' in result){
    //     delete result.refreshtoken
    // }

  
};
const refreshToken= async(req:Request, res:Response)=>{
  const {refreshToken} = req.cookies;
  const result =await AuthService.refreshToken(refreshToken);


}

export const AuthController = {
  loginUser,
  refreshToken
};
