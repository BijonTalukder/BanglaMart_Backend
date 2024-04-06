import { Request, Response } from "express";
import { AuthService } from "./auth.service";

const loginUser = async (req:Request, res:Response) => {
    const {...loginData} = req.body;

   const result = AuthService.loginUser(loginData);
};

export const AuthController = {
  loginUser,
};
