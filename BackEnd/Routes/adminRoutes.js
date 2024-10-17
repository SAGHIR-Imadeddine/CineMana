import express from "express";
import * as UserController from "../Controllers/AdminControllers/userController";

const router = express.Router();

router.post("/auth/register-admin", (req, res) =>  UserController.registerAdmin(req, res)); // url: /api/v1/auth/register