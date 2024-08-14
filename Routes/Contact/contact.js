import { Router } from "express";
import { createMessage } from "../../Controllers/Contacts/contacts.js";
import { contactValidation } from "../../Middleware/Validators/userGroupValidation.js";
const router = Router();

router
  .route("/create-message/:groupMemberId")
  .post(contactValidation, createMessage);

export default router;
