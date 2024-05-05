import { Router } from "express";
import { registerUser, LoginUser, logoutUser } from "../Controllers/users.js";
const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(LoginUser);
router.route("/logout").post(logoutUser);

export default router;
