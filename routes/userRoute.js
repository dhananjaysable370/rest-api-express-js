import express from "express";
import { create } from "../controllers/userController";
const router = express.Router();

router.post("/users", create);

export default router;
