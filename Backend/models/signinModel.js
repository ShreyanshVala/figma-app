const mongoose = require("mongoose");

const signinSchema = new mongoose.Schema(
  {
    // createdBy: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true, // User who created the post is required
    // },
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

const Signin = mongoose.model("Signin", signinSchema);
module.exports = Signin;
