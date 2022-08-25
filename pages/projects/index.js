import React from "react";
import axios from "axios";
import Image from "next/image";
// css
import styles from "../../styles/projects/projects.module.css";

const Projects = (props) => {
  const { AllProjects } = props;

  console.log(AllProjects);

  return (
    <section className={styles.container}>
      <div>
        <h2>WORKS</h2>
        <h2>
          MY <span>PROJECTS</span>
        </h2>
      </div>

      <div>
        {AllProjects.map((e) => {
          const { _id, name, images } = e;
          return (
            <div kay={_id}>
              <div className={styles.layer}>
                <img src={images.logo} alt="logo" />

                <h2>{name}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

/*************/
// SSR
export const getStaticProps = async () => {
  const res = await axios(`${process.env.BASE_URL}/api/projects`);

  return {
    props: res.data,
  };
};

export default Projects;
