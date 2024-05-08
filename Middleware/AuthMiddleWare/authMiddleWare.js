import { UnauthenticatedError } from "../../Middleware/RequestErrors/errors.js";
import { verifyToken } from "../../Utils/JsonWebToken/jsonWebToken.js";

export const authMiddleWare = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    throw new UnauthenticatedError("authentication invalid!");
  }
  try {
    const { userId, role } = verifyToken(token);
    req.user = { userId, role };
    console.log(role);
    next();
  } catch (error) {
    console.log(error);
    throw new UnauthenticatedError("authentication invalid!");
  }
};
