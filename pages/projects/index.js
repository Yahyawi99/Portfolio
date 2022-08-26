import React, { useEffect, useRef } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
// css
import styles from "../../styles/projects/projects.module.css";

function Projects(props) {
  const { AllProjects } = props;
  const ProjectsRef = useRef(null);

  useEffect(() => {
    const myProjects = [...ProjectsRef.current.children];

    myProjects.forEach((e) => {
      const layer = e.children[1];

      e.addEventListener("mouseenter", (e) => {
        if (e.offsetY <= 30) {
          layer.style.display = "flex";
          layer.style.transform = "translateY(-100%)";

          setTimeout(() => {
            layer.style.transform = "translateY(0%)";
          }, 50);
          return;
        }

        if (e.offsetX >= 240) {
          layer.style.display = "flex";
          layer.style.transform = "translateX(100%)";

          setTimeout(() => {
            layer.style.transform = "translateX(0%)";
          }, 50);
          return;
        }

        if (e.offsetY >= 240) {
          layer.style.display = "flex";
          layer.style.transform = "translateY(100%)";

          setTimeout(() => {
            layer.style.transform = "translateY(0%)";
          }, 50);
          return;
        }

        if (e.offsetX <= 30) {
          layer.style.display = "flex";
          layer.style.transform = "translateX(-100%)";

          setTimeout(() => {
            layer.style.transform = "translateX(0%)";
          }, 50);
          return;
        }
      });

      e.addEventListener("mouseleave", (e) => {
        if (e.offsetY <= 30) {
          layer.style.transform = "translateY(-100%)";

          setTimeout(() => {
            layer.style.display = "none";
          }, 250);
          return;
        }

        if (e.offsetX >= 240) {
          layer.style.transform = "translateX(100%)";

          setTimeout(() => {
            layer.style.display = "none";
          }, 250);
          return;
        }

        if (e.offsetY >= 240) {
          layer.style.transform = "translateY(100%)";

          setTimeout(() => {
            layer.style.display = "none";
          }, 250);
          return;
        }

        if (e.offsetX <= 30) {
          layer.style.transform = "translateX(-100%)";

          setTimeout(() => {
            layer.style.display = "none";
          }, 250);
        }
      });
    });
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
              <Link key={_id} href="/">
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
// SSR
export const getServerSideProps = async () => {
  const res = await axios(`${process.env.BASE_URL}/api/projects`);

  return {
    props: res.data,
  };
};

export default Projects;
