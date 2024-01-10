"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("./user.service");
const createUser = (req, res) => {
    const result = user_service_1.userService.createUser(req.body);
    return res.send({ message: "user created successfully", data: result });
};
exports.userController = {
    createUser,
};
