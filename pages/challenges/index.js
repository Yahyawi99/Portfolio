import React, { useEffect, useRef } from "react";
import axios from "axios";
import { useGlobal } from "../../context";
import Link from "next/link";
import Image from "next/image";
// css
import styles from "../../styles/projects/projects.module.css";

function Challenges(props) {
  const { projectHoverEffect } = useGlobal();
  const { AllChallenges } = props;
  const ProjectsRef = useRef(null);

  useEffect(() => {
    projectHoverEffect(ProjectsRef.current);
  });

  return (
    <section className={styles.container}>
      <div>
        <h2>COOL</h2>

        <h2>
          <span>FUN</span> PROJECTS
        </h2>
      </div>

      <div ref={ProjectsRef} className={styles.projectsContainer}>
        {AllChallenges.length &&
          AllChallenges.map((e, i) => {
            const { _id, name, images } = e;

            return (
              <Link key={_id} href={`/preview/${_id}/?type=challenge`}>
                <div>
                  <Image src={images.preview} layout="fill" priority />

                  <div className={styles.layer}>
                    <img
                      src={images.logo}
                      alt="logo"
                      className={styles.challengesIcon}
                    />

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
  const res = await axios(`${process.env.BASE_URL}/api/challenges`);

  return {
    props: res.data,
  };
};

export default Challenges;
