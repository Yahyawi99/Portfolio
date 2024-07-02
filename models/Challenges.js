import mongoose from "mongoose";

const ChallengeSchema = new mongoose.Schema({
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
});

let Challenges;
try {
  Challenges = mongoose.model("Challenges");
} catch (error) {
  Challenges = mongoose.model("Challenges", ChallengeSchema);
}

module.exports = Challenges;
