import { StatusCodes } from "http-status-codes";

import connectMongo from "../../utils/connectDB";
import Projects from "../../models/Projects";

// import AllProjects from "../../data.json";

const getProjects = async (req, res) => {
  try {
    await connectMongo();

    const AllProjects = await Projects.find();

    res.status(StatusCodes.OK).json({ AllProjects, hits: AllProjects.length });
  } catch (error) {
    console.log(error);
    res.send();
  }
};

export default getProjects;
