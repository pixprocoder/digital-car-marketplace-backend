import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { AuthService } from "./auth.service";

const createUser = catchAsync(async (req: Request, res: Response) => {
  const { ...signupData } = req.body;
  const result = await AuthService.createUser(signupData);
  const { refreshToken } = result;

  res.cookie("refreshToken", refreshToken);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User created successfully !",
    data: result,
  });
});

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body;
  const result = await AuthService.loginUser(loginData);
  const { refreshToken } = result;

  res.cookie("refreshToken", refreshToken);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User logged in successfully !",
    data: result,
  });
});

export const authController = {
  loginUser,
  createUser,
};
