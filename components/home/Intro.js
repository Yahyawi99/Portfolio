import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useGlobal } from "../../context";
// css
import styles from "../../styles/home/intro.module.css";

function Intro() {
  const { asPath } = useGlobal();

  return (
    <motion.section
      key={asPath}
      animate={{
        translateY: 0,
        opacity: 1,
      }}
      className={styles.container}
    >
      <p>Hi, my name is</p>

      <div>
        <div>
          <motion.h2
            animate={{
              scaleX: 1,
            }}
          >
            Yassin
          </motion.h2>
          <motion.h2
            animate={{
              scaleX: 1,
            }}
          >
            Yahyawi.
          </motion.h2>
        </div>

        <div>
          <motion.h2
            animate={{
              scaleX: 1,
            }}
          >
            I{" "}
          </motion.h2>
          <motion.h2
            animate={{
              scaleX: 1,
            }}
          >
            build{" "}
          </motion.h2>
          <motion.h2
            animate={{
              scaleX: 1,
            }}
          >
            things{" "}
          </motion.h2>
          <motion.h2
            animate={{
              scaleX: 1,
            }}
          >
            for{" "}
          </motion.h2>
          <motion.h2
            animate={{
              scaleX: 1,
            }}
          >
            the{" "}
          </motion.h2>
          <motion.h2
            animate={{
              scaleX: 1,
            }}
          >
            web.
          </motion.h2>
        </div>
      </div>

      <p className={styles.paragraph}>
        I&apos;m a passionate Fullstack Developer with expertise in both
        Frontend and Backend technologies. My skillset allows me to seamlessly
        work on all aspects of the development process, ensuring the smooth
        functioning and appealing design of web applications.
      </p>

      <Link href="/contact">
        <button>
          <p>GET IN TOUCH</p>
        </button>
      </Link>
    </motion.section>
  );
}

export default Intro;
