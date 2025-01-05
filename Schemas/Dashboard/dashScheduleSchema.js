import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema(
  {
    title: String,
    start: String,
    start_time: String,
    end: String,
    end_time: String,
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

export default mongoose.model("DashSchedule", scheduleSchema);
