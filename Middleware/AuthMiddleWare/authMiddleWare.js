import {
  UnauthenticatedError,
  UnauthorizedError,
} from "../../Middleware/RequestErrors/errors.js";
import { verifyToken } from "../../Utils/JsonWebToken/jsonWebToken.js";

export const authMiddleWare = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    throw new UnauthenticatedError("authentication invalid!");
  }
  try {
    const { userId, role } = verifyToken(token);
    req.user = { userId, role };
    next();
  } catch (error) {
    console.log(error);
    throw new UnauthenticatedError("authentication invalid!");
  }
};

export const groupMiddleware = async (req, res, next) => {
  console.log("Group Middleware");
  next();
};

export const authorizeAdmin = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError("Unauthorized to access this route");
    }
    next();
  };
};
