import jwt,{ Secret } from "jsonwebtoken";

const createToken=(payload:Record<string,unknown>,secret:Secret,expiresIn:string)=>{
return jwt.sign(payload,secret,{expiresIn})
}
export const jwtHelper={
    createToken
}