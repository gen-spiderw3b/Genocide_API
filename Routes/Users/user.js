import { Router } from "express";
import { currentUser } from "../../Controllers/Users/user.js";
const router = Router();

router.route("/current-user").get(currentUser);

export default router;
