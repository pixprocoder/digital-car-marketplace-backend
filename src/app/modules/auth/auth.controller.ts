import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { AuthService } from "./auth.service";

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
};
