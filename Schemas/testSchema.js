import mongoose from "mongoose";

const testSchema = new mongoose.Schema({});

export default mongoose.model("Test", testSchema);
