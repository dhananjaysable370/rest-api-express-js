import { Router } from "express";
import {
    allUsers,
    create,
    deleteUser,
    getOneUser,
    updateUser,
} from "../controllers/userController.js";

const userRouter = Router();

userRouter.get('/allusers', allUsers);

userRouter.post("/users", create);
userRouter.get("/user/:id", getOneUser);
userRouter.put("/updateuser/:id", updateUser);
userRouter.delete("/deleteuser/:id", deleteUser);

export default userRouter;
