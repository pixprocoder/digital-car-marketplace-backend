import { Request, Response } from "express";
import { userService } from "./user.service";

const createUser = (req: Request, res: Response) => {
  const result = userService.createUser(req.body);
  return res.send({ message: "user created successfully", data: result });
};

const getAllUser = async (req: Request, res: Response) => {
  const result = await userService.getAllUser();
  console.log(result);
  return res.send({ message: "user fetched successfully", data: result });
};

export const userController = {
  createUser,
  getAllUser,
};
