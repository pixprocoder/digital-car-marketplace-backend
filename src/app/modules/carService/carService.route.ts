import express from "express";
import { serviceController } from "./carService.controller";

const router = express.Router();

router.get("/", serviceController.createService);

export const carServiceRoutes = router;
