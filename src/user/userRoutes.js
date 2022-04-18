const { Router } = require("express");
const { addUser, login, updatePassword, deleteUser, listUser  } = require("./userControlers");
const { hashPassword, decryptPassword, checkToken } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPassword, addUser);
userRouter.post("/login", decryptPassword, login);
userRouter.get("/user", checkToken, login);
userRouter.get("/login", listUser)
userRouter.patch("/user", hashPassword, checkToken, updatePassword);
userRouter.delete("/user/:filterVal/:filterKey", deleteUser);

module.exports = userRouter;
