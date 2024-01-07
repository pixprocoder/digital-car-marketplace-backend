import { Request, Response } from "express";
import { userService } from "./user.service";

const createUser = (req: Request, res: Response) => {
  const result = userService.createUser(req.body);
  return res.send({ message: "user created successfully", data: result });
};

export const userController = {
  createUser,
};
