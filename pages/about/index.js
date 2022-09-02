import React from "react";
import axios from "axios";
import { motion } from "framer-motion";
// components
import Description from "../../components/about/Description";
import Technologies from "../../components/about/Technologies";
// css
import styles from "../../styles/about/about.module.css";

function About(props) {
  const { skills } = props;

  return (
    <section className={styles.container}>
      <motion.div
        className={styles.title}
        animate={{
          translateY: 0,
          opacity: 1,
        }}
      >
        <h2>PROFILE</h2>
        <h2>
          ABOUT <span>ME</span>
        </h2>
      </motion.div>

      <Description skills={skills} />

      <Technologies skills={skills} />
    </section>
  );
}

// *******************
export const getStaticProps = async () => {
  const response = await axios(`${process.env.BASE_URL}/api/skills`);

  return {
    props: response.data,
  };
};

export default About;
