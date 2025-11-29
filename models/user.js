import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  provider: String,
  providerId: String,
  displayName: String,
  email: String,
  avatar: String,
});

const User = mongoose.model("User", userSchema);
export default User;

