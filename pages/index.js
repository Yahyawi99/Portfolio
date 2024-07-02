import React from "react";
import Head from "next/head";
// components
import Intro from "../components/home/Intro";

function Home() {
  return (
    <>
      <Head>
        <title>Yassin Yahyawi</title>
      </Head>

      <section>
        <Intro />
      </section>
    </>
  );
}

export default Home;
