import mongoose from "mongoose";
const moduleSchema = new mongoose.Schema({
    id: { type: String },
    name : { type: String },
    description: {type: String},
    course: {type: String},
    lessons: {type: [String]},
  },
  { collection: "modules" });
export default moduleSchema;