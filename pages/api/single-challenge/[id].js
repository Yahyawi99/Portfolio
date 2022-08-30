import { StatusCodes } from "http-status-codes";

import connectMongo from "../../../utils/connectDB";
import Challenges from "../../../models/Challenges";

const getSingleChallenge = async (req, res) => {
  try {
    const { id } = req.query;

    await connectMongo();

    let challenge = await Challenges.find();

    challenge = challenge.filter((e) => e._id.toHexString() === id);

    res.status(StatusCodes.OK).json({ challenge, success: true });
  } catch (error) {
    console.log(error);
    res.send();
  }
};

export default getSingleChallenge;
