import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from "../Middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", authorize, getUser);
userRouter.post("/", (req, res) => res.send({ title: "CREATE new user" }));
userRouter.put("/:id", (req, res) => res.send({ title: "UPDATE users" }));
userRouter.delete("/:id", (req, res) => res.send({ title: "DELETE users" }));

export default userRouter;
