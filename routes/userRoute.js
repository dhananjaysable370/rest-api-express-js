import express from "express";
import { allUsers, create, getOneUser } from "../controllers/userController.js";

const router = express.Router();
router.get("/allusers", allUsers);
router.post("/users", create);
router.get("/user/:id", getOneUser);

export default router;
