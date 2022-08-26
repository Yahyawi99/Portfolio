import React from "react";
import axios from "axios";
import { useGlobal } from "../../../context";
// components
import Slider from "../../../components/preview/Slider";

function Preview(props) {
  const { project } = props;

  console.log(useGlobal());

  return (
    <section>
      <Slider project={project} />
    </section>
  );
}

// ***************
// SSR
export const getServerSideProps = async (context) => {
  const {
    params: { id },
  } = context;

  const response = await axios(
    `${process.env.BASE_URL}/api/single-project/${id}`
  );

  return {
    props: response.data,
  };
};

export default Preview;
