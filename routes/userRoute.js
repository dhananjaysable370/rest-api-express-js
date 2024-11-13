import express from "express";
import { create } from "../controllers/userController.js";
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "Hello world!" });
})

router.post("/users", create);

export default router;
