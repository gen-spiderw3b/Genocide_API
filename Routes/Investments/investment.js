import { Router } from "express";
import {
  createInvestmentGroup,
  browseInvestmentGroups,
  getGroupInfo,
  createMember,
} from "../../Controllers/Investments/investment.js";
import {
  investmentValidation,
  joinInvestmentGroup,
} from "../../Middleware/Validators/validation.js";
const router = Router();

router
  .route("/create-investment-group")
  .post(investmentValidation, createInvestmentGroup);
router.route("/browse-investment-group").get(browseInvestmentGroups);
router.route("/group-info/:id").get(getGroupInfo);
router.route("/create-member/:groupId").post(joinInvestmentGroup, createMember);

export default router;
