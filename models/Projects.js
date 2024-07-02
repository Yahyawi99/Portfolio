import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name cannot be empty!"],
  },
  github: {
    type: String,
    required: [true, "github cannot be empty!"],
  },
  live: {
    type: String,
    required: [true, "live cannot be empty!"],
  },
  languages: {
    type: Array,
    required: [true, "languages cannot be empty!"],
  },
  images: {
    type: Object,
    required: [true, "images cannot be empty!"],
  },
  order: {
    type: String,
  },
});

let Projects;
try {
  Projects = mongoose.model("Projects");
} catch (error) {
  Projects = mongoose.model("Projects", ProjectSchema);
}

module.exports = Projects;
