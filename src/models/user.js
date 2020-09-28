import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema(
  {
    email: String,
    username: String,
    name: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
