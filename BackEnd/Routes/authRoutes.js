import express from "express";
import * as AuthController from '../Controllers/authController.js'


const router = express.Router();


router.post("/auth/register", (req, res) =>  AuthController.register(req, res)); // url: /api/v1/auth/register
router.post("/auth/login", (req, res) =>  AuthController.login(req, res)); // url: /api/v1/auth/login 
// router.post("/auth/logout", (req, res) =>  authContoller.register(req, res)); // url: /api/v1/auth/logout
// router.post("/auth/forget", (req, res) =>  authContoller.register(req, res)); // url: /api/v1/auth/forget
// router.post("/auth/reset", (req, res) =>  authContoller.register(req, res)); // url: /api/v1/auth/reset

export default router;