import { Request, Response } from "express";
import { userService } from "./user.service";
import sendResponse from "../../../shared/sendResponse";

const createUser = (req: Request, res: Response) => {
  const result = userService.createUser(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User created  successfully !",
    data: result,
  });
};

const getSingleUser = (req: Request, res: Response) => {
  const { id } = req.params;
  const result = userService.getSingleUser(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User created  successfully !",
    data: result,
  });
};

const getAllUser = async (req: Request, res: Response) => {
  const result = await userService.getAllUser();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User fetched successfully !",
    data: result,
  });
};

export const userController = {
  createUser,
  getAllUser,
  getSingleUser,
};
