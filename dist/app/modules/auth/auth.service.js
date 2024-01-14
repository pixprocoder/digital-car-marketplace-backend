"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const config_1 = __importDefault(require("../../../config"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const loginUser = async (payload) => {
    const { email, password } = payload;
    const isUserExist = await prisma_1.default.user.findUnique({ where: { email } });
    console.log(isUserExist);
    if (!isUserExist) {
        throw new Error("user does not exist");
    }
    if (isUserExist.password !== password) {
        throw new Error("Password not matched");
    }
    const { role } = isUserExist;
    const accessToken = jwtHelpers_1.jwtHelpers.createToken({ email, role }, config_1.default.jwt.secret, config_1.default.jwt.expires_in);
    const refreshToken = jwtHelpers_1.jwtHelpers.createToken({ email, role }, config_1.default.jwt.refresh_secret, config_1.default.jwt.refresh_expires_in);
    return {
        accessToken,
        refreshToken,
    };
};
exports.AuthService = {
    loginUser,
};
