const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema(
  {
    // createdBy: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true, // User who created the post is required
    // },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true, // Post title is required
    },
    password: {
      type: String,
      required: true, // Post description is required
    },
  },
  { timestamps: true }
);

const Signup = mongoose.model("Signup", signupSchema);
module.exports = Signup;
