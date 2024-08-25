import { StatusCodes } from "http-status-codes";
import Contact from "../../Schemas/Contact/contactSchema.js";
import Member from "../../Schemas/Investments/member.js";
import mongoose from "mongoose";

//Create Contact Messages
export const createMessage = async (req, res) => {
  req.body.sentBy = req.user.memberId;
  req.body.firstName = req.user.firstName;
  req.body.lastName = req.user.lastName;
  const contact = await Contact.create(req.body);
  //Reciever
  const reciever = await Member.findByIdAndUpdate(
    req.params.groupMemberId,
    {
      $push: { messageReceived: contact._id },
    },
    { new: true }
  );
  res.status(StatusCodes.CREATED).json({ msg: "message sent!" });
};

//Get Messages
export const getMessages = async (req, res) => {
  const messages = await Member.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId.createFromHexString(req.user.memberId),
      },
    },
    {
      $lookup: {
        from: "contacts",
        localField: "messageReceived",
        foreignField: "_id",
        as: "messenger",
      },
    },
  ]);
  res.status(StatusCodes.OK).json({ messages });
};

//Delete Messages
export const deleteMessage = async (req, res) => {
  const deleteMessage = await Contact.findByIdAndDelete(req.params.messageId);
  res.status(StatusCodes.OK).json({ msg: "you have deleted a message!" });
};
