import { Router } from "express";
import {
  createInvestmentGroup,
  browseInvestmentGroups,
  joinInvestmentGroups,
} from "../../Controllers/Investments/investment.js";
import {
  investmentValidation,
  alreadyJoined,
} from "../../Middleware/Validators/validation.js";
const router = Router();

router
  .route("/create-investment-group")
  .post(investmentValidation, createInvestmentGroup);
router.route("/browse-investment-group").get(browseInvestmentGroups);
router
  .route("/join-group/:id/:userId")
  .patch(alreadyJoined, joinInvestmentGroups);

export default router;
