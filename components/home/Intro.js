import React from "react";
import Link from "next/link";
// css
import styles from "../../styles/home/intro.module.css";

function Intro() {
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

      <Link href="/contact">
        <button>
          <p>GET IN TOUCH</p>
        </button>
      </Link>
    </section>
  );
}

export default Intro;
