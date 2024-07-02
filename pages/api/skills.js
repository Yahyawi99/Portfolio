import { StatusCodes } from "http-status-codes";

import connectMongo from "../../utils/connectDB";
import Skills from "../../models/Skills";

const getSkills = async (req, res) => {
  try {
    await connectMongo();

    const skills = await Skills.find();

    res.status(StatusCodes.OK).json({ skills, hits: skills.length });
  } catch (error) {
    res.status(201).json({ success: false, error });
  }
};

export default getSkills;
