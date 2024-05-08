import jwt from "jsonwebtoken";

//Create Token
export const createToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};

//Verify Token
export const verifyToken = () => {};
