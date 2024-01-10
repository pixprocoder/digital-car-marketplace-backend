"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtHelpers = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// type ICreateToken = {
// payload: Record<string, unknown>
// secret: Secret
// expireTime: string
// }
const createToken = (payload, secret, expireTime) => {
    return jsonwebtoken_1.default.sign(payload, secret, { expiresIn: expireTime });
};
exports.jwtHelpers = {
    createToken,
};
