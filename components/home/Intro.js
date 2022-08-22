import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
// css
import styles from "../../styles/home/intro.module.css";

function Intro() {
  const layerMotion = {
    rest: {
      transform: "translateX(-100%)",
    },
    hover: {
      transform: "translateX(100%)",
    },
  };

  return (
    <section className={styles.container}>
      <p>Hi, my name is</p>

      <div>
        <h2>
          Yassin Yahyawi.
          <div className={styles.blinker}></div>
        </h2>
        <h2>
          I build things for the web.
          <div className={styles.blinker}></div>
        </h2>
      </div>

      <p className={styles.paragraph}>
        I&apos;m a passionate Frontend Developer with some Backend knowledge,
        specializing in building awesome UX/UI designs that deliver peculiar and
        exceptional digital experiences.
      </p>

      <Link href="/">
        <motion.button initial="rest" whileHover="hover" animate="rest">
          <p>GET IN TOUCH</p>

          <motion.div
            className={styles.layer}
            variants={layerMotion}
          ></motion.div>
        </motion.button>
      </Link>
    </section>
  );
}

export default Intro;
