import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name cannot be empty"],
  },
  src: {
    type: String,
    required: [true, "source cannot be empty"],
  },
});

let Skills;
try {
  Skills = mongoose.model("Skills");
} catch (error) {
  Skills = mongoose.model("Skills", SkillSchema);
}

module.exports = Skills;
