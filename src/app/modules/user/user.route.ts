import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.post("/", userController.createUser);
router.get("/:id", userController.getSingleUser);
router.get("/", userController.getAllUser);

export const userRoutes = router;
