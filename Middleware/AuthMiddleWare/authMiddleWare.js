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
    const { userId, role, memberId, groupRole, email, firstName, lastName } =
      verifyToken(token);
    req.user = {
      userId,
      role,
      memberId,
      groupRole,
      email,
      firstName,
      lastName,
    };
    next();
  } catch (error) {
    console.log(error);
    throw new UnauthenticatedError("authentication invalid!");
  }
};

export const authorizeAdmin = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError("Unauthorized to access this route");
    }
    next();
  };
};
