"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("./user.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const createUser = (req, res) => {
    const result = user_service_1.userService.createUser(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "User created  successfully !",
        data: result,
    });
};
const getAllUser = async (req, res) => {
    const result = await user_service_1.userService.getAllUser();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "User fetched successfully !",
        data: result,
    });
};
exports.userController = {
    createUser,
    getAllUser,
};
