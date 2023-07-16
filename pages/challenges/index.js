import React, { useEffect, useRef } from "react";
import axios from "axios";
import { useGlobal } from "../../context";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
// css
import styles from "../../styles/projects/projects.module.css";

const Challenges = (props) => {
  const { projectHoverEffect, setLoadingPage, mainRef } = useGlobal();
  const ProjectsRef = useRef(null);

  useEffect(() => {
    projectHoverEffect(ProjectsRef.current);
  });

  if (props) {
    const { AllChallenges } = props;

    if (AllChallenges.length > 0) {
      return (
        <section className={styles.container}>
          <motion.div
            animate={{
              translateY: 0,
              opacity: 1,
            }}
          >
            <h2>COOL</h2>

            <h2>
              <span>FUN</span> PROJECTS
            </h2>
          </motion.div>

          <motion.div
            ref={ProjectsRef}
            className={styles.projectsContainer}
            animate={{
              translateY: 0,
              opacity: 1,
            }}
          >
            {AllChallenges.length &&
              AllChallenges.map((e, i) => {
                const { _id, name, images } = e;

                return (
                  <Link key={_id} href={`/preview/${_id}/?type=challenge`}>
                    <div
                      onClick={() => {
                        mainRef.current.scrollTo({
                          top: 0,
                        });
                        setLoadingPage(true);
                      }}
                    >
                      <Image
                        src={images.preview}
                        layout="fill"
                        alt="preview"
                        priority
                      />

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
          </motion.div>
        </section>
      );
    }
  }
};

/*************/
export const getServerSideProps = async () => {
  const res = await axios(`${process.env.BASE_URL}/api/challenges`);

  return {
    props: res.data,
  };
};

export default Challenges;
