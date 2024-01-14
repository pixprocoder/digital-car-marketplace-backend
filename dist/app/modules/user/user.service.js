"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({
    errorFormat: "minimal",
});
const createUser = async (payload) => {
    const result = await prisma.user.create(payload);
    return result;
};
const getAllUser = async () => {
    const result = await prisma.user.findMany({});
    return result;
};
exports.userService = {
    createUser,
    getAllUser,
};
