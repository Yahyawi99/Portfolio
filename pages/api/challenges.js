import { StatusCodes } from "http-status-codes";

import connectMongo from "../../utils/connectDB";
import Challenges from "../../models/Challenges";

// import AllChallenges from "../../challenges.json";

const getChallenges = async (req, res) => {
  try {
    await connectMongo();

    const AllChallenges = await Challenges.find();

    res
      .status(StatusCodes.OK)
      .json({ AllChallenges, hits: AllChallenges.length });
  } catch (error) {
    console.log(error);
    res.send();
  }
};

export default getChallenges;
