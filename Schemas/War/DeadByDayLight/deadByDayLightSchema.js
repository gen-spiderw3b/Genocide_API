import mongoose from "mongoose";

const CreateGroup = new mongoose.Schema({}, { timestamps: true });

export default mongoose.model("DeadByDayLight", CreateGroup);
