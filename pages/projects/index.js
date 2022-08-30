import React, { useEffect, useRef } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useGlobal } from "../../context";
// css
import styles from "../../styles/projects/projects.module.css";

function Projects(props) {
  const { projectHoverEffect } = useGlobal();
  const { AllProjects } = props;
  const ProjectsRef = useRef(null);

  useEffect(() => {
    projectHoverEffect(ProjectsRef.current);
  });

  return (
    <section className={styles.container}>
      <div>
        <h2>WORK</h2>
        <h2>
          MY <span>PROJECTS</span>
        </h2>
      </div>

      <div ref={ProjectsRef} className={styles.projectsContainer}>
        {AllProjects.length &&
          AllProjects.map((e, i) => {
            const { _id, name, images } = e;

            return (
              <Link key={_id} href={`/preview/${_id}/?type=project`}>
                <div>
                  <Image src={images.preview} layout="fill" priority />

                  <div className={styles.layer}>
                    <img src={images.logo} alt="logo" />

                    <h2>{name}</h2>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </section>
  );
}

/*************/
export const getStaticProps = async () => {
  const res = await axios(`${process.env.BASE_URL}/api/projects`);

  return {
    props: res.data,
  };
};

export default Projects;
