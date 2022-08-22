import React from "react";
// components
import Intro from "../components/home/Intro";
// css
import styles from "../styles/home/Home.module.css";

function Home() {
  return (
    <section className={styles.container}>
      <Intro />
    </section>
  );
}

export default Home;
