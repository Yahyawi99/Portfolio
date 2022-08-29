import React from "react";
import axios from "axios";
// components
import Description from "../../components/about/Description";
import Technologies from "../../components/about/Technologies";
// css
import styles from "../../styles/about/about.module.css";

const About = (props) => {
  const { skills } = props;

  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h2>PROFILE</h2>
        <h2>
          ABOUT <span>ME</span>
        </h2>
      </div>

      <Description skills={skills} />

      <Technologies skills={skills} />
    </section>
  );
};

// *******************
// SSR
export const getStaticProps = async () => {
  const response = await axios(`${process.env.BASE_URL}/api/skills`);

  return { props: response.data };
};

export default About;
