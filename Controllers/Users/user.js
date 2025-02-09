import Investment from "../../Schemas/Investments/investments.js";
import Member from "../../Schemas/Investments/member.js";
import War from "../../Schemas/War/war.js";
import Users from "../../Schemas/userSchema.js";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import cloudinary from "cloudinary";
import { formatImage } from "../../Middleware/Multer/multerMiddleWare.js";

//Get Current User
export const currentUser = async (req, res) => {
  const user = await Users.findOne({ _id: req.user.userId });
  res.status(StatusCodes.OK).json({ user });
};

/*
============
User Profile
============
*/

//User Profiles
export const userProfile = async (req, res) => {
  const user = await Users.findOne({ _id: req.user.userId });
  const investmentGroup = await Investment.aggregate([
    {
      $match: {
        authorize: mongoose.Types.ObjectId.createFromHexString(req.user.userId),
      },
    },
    {
      $lookup: {
        from: "members",
        localField: "joinedBy",
        foreignField: "_id",
        as: "member",
      },
    },
  ]);
  res.status(StatusCodes.OK).json({ user, investmentGroup });
};
//Update Profiles
export const updateProfile = async (req, res) => {
  const updateUser = await Users.findByIdAndUpdate(
    req.user.userId,
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      state: req.body.state,
      city: req.body.city,
      phoneNumber: req.body.phoneNumber,
    },
    { new: true }
  );
  const members = await Member.updateMany(
    { createdBy: req.user.userId },
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      state: req.body.state,
      city: req.body.city,
      phoneNumber: req.body.phoneNumber,
    },
    { new: true }
  );
  res.status(StatusCodes.OK).json({ msg: "you have updated this user!" });
};

//Update Pic
export const updatePic = async (req, res) => {
  const user = await Users.findById(req.user.userId);

  if (req.file) {
    const file = formatImage(req.file);
    const response = await cloudinary.v2.uploader.upload(file);
    user.avatar = response.secure_url;
    user.avatarPublicId = response.public_id;
  }

  const updatedPic = await Users.findByIdAndUpdate(user._id, user);

  if (req.file && updatedPic.avatarPublicId) {
    await cloudinary.v2.uploader.destroy(updatedPic.avatarPublicId);
  }

  res.status(StatusCodes.OK).json({ msg: "img Upload Successfull" });
};
/*
==================
Leave Organization
==================
*/

export const leaveOrg = async (req, res) => {
  const investment = await Investment.find({
    authorize: req.user.userId,
  }).countDocuments();

  if (investment > 0) {
    throw new Error("you have to leave all investment groups first!");
  } else {
    const war = await War.deleteMany({ createdBy: req.user.userId });
    const member = await Member.deleteMany({ createdBy: req.user.userId });
    const user = await Users.findByIdAndDelete({ _id: req.user.userId });
  }
  res.status(StatusCodes.OK).json({ msg: "you have left genocide" });
};
