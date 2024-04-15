import { Request, Response } from "express";
import userService from "./user.service";
import sendResponse from "../../shared/sendResponse";

const createUser = async (req: Request, res: Response) => {
  try {
    console.log(134);
    
    const result = await userService.createUser(req.body);
    console.log(result);
    
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "create user",
      data: result,
    });
  } catch (error) {}
};

export const UserController = {
  createUser,
};
