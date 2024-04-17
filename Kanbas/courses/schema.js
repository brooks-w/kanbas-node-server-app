import mongoose from "mongoose";
const coursesSchema = new mongoose.Schema({
    id: {type: String},
    name: {type: String},
    number: {type: String},
    startDate: {type: Date},
    endDate: {type: Date},
    department: {type: String},
    credits: {type: Number},
    description: {type: String},
  },
  { collection: "courses" });
export default coursesSchema;