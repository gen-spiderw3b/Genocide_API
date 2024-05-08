export const getCurrentUser = (req, res) => {
  res.status(200).json({ msg: "current User!" });
};
