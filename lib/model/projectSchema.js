const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    img: {
      type: String, // Store image URL (You can use Cloudinary or another service)
      required: true,
    },
    lan: {
      type: [String], // Array of technologies used
      required: true,
    },
    desc: {
      type: String,
      required: true,
      trim: true,
    },
    srcLink: {
      type: String,
      required: true,
      trim: true,
    },
    link: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const Project =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);
