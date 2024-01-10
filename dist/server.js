"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const PORT = 5000;
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
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
    });
}
bootstrap();
