import Users from "../../Schemas/userSchema.js";

//Get Current User
export const currentUser = async (req, res) => {
  const user = await Users.findOne({ _id: req.user.userId });
  res.status(200).json({ user });
};
