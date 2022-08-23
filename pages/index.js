import React from "react";
import Head from "next/head";
// components
import Intro from "../components/home/Intro";
// css
import styles from "../styles/home/Home.module.css";

function Home() {
  return (
    <>
      <Head>
        <title>Yassin Yahyawi</title>
      </Head>

      <section className={styles.container}>
        <Intro />
      </section>
    </>
  );
}

export default Home;
