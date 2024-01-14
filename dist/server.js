"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const PORT = 5000;
async function bootstrap() {
    const server = app_1.default.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`);
    });
    const exitHandler = () => {
        if (server) {
            server.close(() => {
                console.info("Server closed");
            });
        }
        process.exit(1);
    };
    const unexpectedErrorHandler = (error) => {
        console.error(error);
        exitHandler();
    };
    process.on("uncaughtException", unexpectedErrorHandler);
    process.on("unhandledRejection", unexpectedErrorHandler);
}
bootstrap();
