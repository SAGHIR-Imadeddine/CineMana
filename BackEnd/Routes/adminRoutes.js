import express from "express";
import * as UserController from "../Controllers/AdminControllers/userController.js";
import * as MovieController from "../Controllers/AdminControllers/movieController.js";
import * as RoomController from "../Controllers/AdminControllers/roomController.js";

const router = express.Router();

router.post("/register-admin",   (req, res) =>  UserController.registerAdmin(req, res)); // url: /api/v1/admin/register-admin
router.post("/update-admin/:id", (req, res) =>  UserController.updateAdmin(req, res)); // url: /api/v1/admin/update-admin/id-to-update
router.post("/delete-admin/:id", (req, res) =>  UserController.deleteAdmin(req, res)); // url: /api/v1/admin/delete-admin/id-to-delete

//Routes handeling movies
router.post("/add-movie",        (req, res) =>  MovieController.addMovie(req, res)); // url: /api/v1/admin/add-movie
router.post("/update-movie/:id", (req, res) =>  MovieController.updateMovie(req, res)); // url: /api/v1/admin/update-movie/id-to-update
router.post("/delete-movie/:id", (req, res) =>  MovieController.deleteMovie(req, res)); // url: /api/v1/admin/delete-movie/id-to-delete

// Routes handeling Users
router.post("/ban-user/:id",     (req, res) =>  UserController.banUser(req, res)); // url: /api/v1/admin/ban-user

// Routes handeling Rooms
router.post("/new-room",     (req, res) =>  RoomController.addRoom(req, res)); // url: /api/v1/admin/new-room
router.post("/update-room/:id",     (req, res) =>  RoomController.updateRoom(req, res)); // url: /api/v1/admin/update-room
router.post("/archive-room/:id",     (req, res) =>  RoomController.archiveRoom(req, res)); // url: /api/v1/admin/archive-room

export default router;