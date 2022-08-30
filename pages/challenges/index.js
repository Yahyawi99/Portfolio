import React from "react";
// css
import styles from "../../styles/projects/projects.module.css";

function Challenges() {
  return (
    <section className={styles.container}>
      <div>
        <h2>COOL</h2>

        <h2>
          <span>FUN</span> PROJECTS
        </h2>
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
