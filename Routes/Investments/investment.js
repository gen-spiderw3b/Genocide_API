import { Router } from "express";
import { createInvestmentGroup } from "../../Controllers/Investments/investment.js";
import { investmentValidation } from "../../Middleware/Validators/validation.js";
const router = Router();

router
  .route("/create-investment-group")
  .post(investmentValidation, createInvestmentGroup);

export default router;
