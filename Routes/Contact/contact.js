import { Router } from "express";
import {
  createMessage,
  getMessages,
  deleteMessage,
} from "../../Controllers/Contacts/contacts.js";
import { contactValidation } from "../../Middleware/Validators/userGroupValidation.js";
const router = Router();

router
  .route("/create-message/:groupMemberId")
  .post(contactValidation, createMessage);
router.route("/get-messages").get(getMessages);
router.route("/delete-message/:messageId").delete(deleteMessage);

export default router;
