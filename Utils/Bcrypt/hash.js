import bcrypt from "bcryptjs";

export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(5);
  const hashPwd = await bcrypt.hash(password, salt);
  return hashPwd;
};

export const checkPassword = async (password, hashedPassword) => {
  const isPasswordCorrect = await bcrypt.compare(password, hashedPassword);
  return isPasswordCorrect;
};
