import { Request, Response } from "express";
import sendResponse from "../../../shared/sendResponse";
import { carServiceService } from "./carService.service";

const createService = async (req: Request, res: Response) => {
  const result = await carServiceService.createService(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "car service created successfully",
    data: result,
  });
};

export const serviceController = {
  createService,
};
