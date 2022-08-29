import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
// components
import Description from "../../components/about/Description";
import Technologies from "../../components/about/Technologies";
// css
import styles from "../../styles/about/about.module.css";

function About(props) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <h1>Fallback</h1>;
  }

  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h2>PROFILE</h2>
        <h2>
          ABOUT <span>ME</span>
        </h2>
      </div>

      <Description props={props} />

      <Technologies props={props} />
    </section>
  );
}

// *******************
export const getStaticProps = async () => {
  const response = await axios(`${process.env.BASE_URL}/api/skills`);

  return { props: response.data };
};

export default About;
