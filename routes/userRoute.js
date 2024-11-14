import { Router } from "express";
import {
  allUsers,
  create,
  getOneUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const userRouter = Router();
userRouter.get("/user", (req, res) => {
  res.render("dashboard.ejs", { title: "Hello,", user:"Guest" });
});
userRouter.get("/allusers", allUsers);
userRouter.post("/users", create);
userRouter.get("/user/:id", getOneUser);
userRouter.put("/updateuser/:id", updateUser);
userRouter.delete("/deleteuser/:id", deleteUser);

export default userRouter;
