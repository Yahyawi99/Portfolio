import { StatusCodes } from "http-status-codes";

import connectMongo from "../../../utils/connectDB";
import Projects from "../../../models/Projects";

import AllProjects from "../../../data.json";

async function getSingleProject(req, res) {
  try {
    const { id } = req.query;

    // await connectMongo();

    // let project = await Projects.find();

    // project = project.filter((e) => e._id.toHexString() === id);

    const project = AllProjects.filter((e) => e._id === id);

    res.status(StatusCodes.OK).json({ project, success: true });
  } catch (error) {
    console.log(error);
    res.send();
  }
}

export default getSingleProject;
