"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carServiceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const carService_controller_1 = require("./carService.controller");
const router = express_1.default.Router();
router.get("/", carService_controller_1.serviceController.createService);
exports.carServiceRoutes = router;
