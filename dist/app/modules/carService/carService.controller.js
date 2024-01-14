"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceController = void 0;
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const carService_service_1 = require("./carService.service");
const createService = async (req, res) => {
    const result = await carService_service_1.carServiceService.createService(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "car service created successfully",
        data: result,
    });
};
exports.serviceController = {
    createService,
};
