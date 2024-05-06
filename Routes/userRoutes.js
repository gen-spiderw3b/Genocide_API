import { Router } from "express";
import { registerUser, LoginUser, logoutUser } from "../Controllers/users.js";
import { validateRegister } from ".././Middleware/Validators/validation.js";
const router = Router();

router.route("/register").post(validateRegister, registerUser);
router.route("/login").post(LoginUser);
router.route("/logout").post(logoutUser);

export default router;
