import { Request, Response } from "express";
import userService from "./user.service";

const createUser = async (req:Request, res:Response) => {
  try {
    const result = await userService.createUser(req.body);
    res.status(200).json({
        success:true,
        message:"success",
        data:result
    })
  } catch (error) {}
};

export const UserController = {
  createUser,
};
