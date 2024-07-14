import Users from "../../Schemas/userSchema.js";
import Member from "../../Schemas/Investments/member.js";

//Get Current User
export const currentUser = async (req, res) => {
  const user = await Users.findOne({ _id: req.user.userId });
  const member = await Member.findOne({ _id: req.user.memberId });
  res.status(200).json({ user, member });
};
