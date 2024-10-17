import express from "express";
import * as UserController from "../Controllers/AdminControllers/userController.js";

const adminRouter = express.Router();

adminRouter.post("/register-admin", (req, res) =>  UserController.registerAdmin(req, res)); // url: /api/v1/auth/register

export default adminRouter;