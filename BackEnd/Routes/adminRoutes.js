import express from "express";
import * as UserController from "../Controllers/AdminControllers/userController.js";

const adminRouter = express.Router();

adminRouter.post("/register-admin", (req, res)   =>  UserController.registerAdmin(req, res)); // url: /api/v1/auth/register-admin
adminRouter.post("/update-admin/:id", (req, res) =>  UserController.updateAdmin(req, res)); // url: /api/v1/auth/update-admin/id-to-update
adminRouter.post("/delete-admin/:id", (req, res) =>  UserController.deleteAdmin(req, res)); // url: /api/v1/auth/delete-admin/id-to-update

export default adminRouter;