import express from "express";
import { create, getOneUser } from "../controllers/userController.js";
const router = express.Router();

router.post("/users", create);
router.get('/user/:id', getOneUser);

export default router;
