import jwt from "jsonwebtoken";

//Create Token
export const createToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};
//Group Token
export const groupToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_GROUP_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};

//Verify Token
export const verifyToken = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};
