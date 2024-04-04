import { Request, Response } from "express";
import userService from "./user.service";
import sendResponse from "../../shared/sendResponse";

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.createUser(req.body);
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
