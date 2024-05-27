import CreateGroup from "../../Schemas/War/war.js";
import { StatusCodes } from "http-status-codes";

//Create Groups
export const createGroup = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const warGroup = await CreateGroup.create(req.body);
  res.status(StatusCodes.CREATED).json({ warGroup });
};

//Browse Groups
export const browseGroup = async (req, res) => {
  const groups = await CreateGroup.find({});
  res.status(StatusCodes.OK).json({ groups });
};

//My Groups
export const myWarGroup = async (req, res) => {
  const myGroup = await CreateGroup.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({ myGroup });
};

//Delete My Groups
export const deleteWarGroup = async (req, res) => {
  const deleteGroup = await CreateGroup.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ msg: "WarBand Deleted !" });
};

//Update My Groups
export const updateWarGroup = async (req, res) => {
  const updateGroup = await CreateGroup.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(StatusCodes.OK).json({ msg: "Group has been Updated!" });
};
