import { StatusCodes } from "http-status-codes";
import Contact from "../../Schemas/Contact/contactSchema.js";
import Member from "../../Schemas/Investments/member.js";
//Create Contact Messages
export const createMessage = async (req, res) => {
  req.body.sentBy = req.user.memberId;
  const contact = await Contact.create(req.body);
  //Reciever
  const reciever = await Member.findByIdAndUpdate(
    req.params.groupMemberId,
    {
      $push: { messageRecieved: contact._id },
    },
    { new: true }
  );
  res.status(StatusCodes.CREATED).json({ msg: "message sent!" });
};
