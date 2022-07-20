import mongoose from "mongoose";

const PostSchema = mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
    },
    jobTitle: {
      type: String,
      required: true,
      trim: true,
    },

    jobDescription: {

      type: String,
      required: true,
      trim: true,
    },
    skills: [{ type: { String } }],
    salary: {
      type: Number,
    },
    jobType: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
