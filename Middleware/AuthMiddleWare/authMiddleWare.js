export const authMiddleWare = async (req, res, next) => {
  console.log("Auth middleWare");
  next();
};
