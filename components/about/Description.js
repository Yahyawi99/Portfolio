import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
// css
import styles from "../../styles/about/description.module.css";

function Description({ skills }) {
  return (
    <motion.section
      className={styles.container}
      animate={{
        translateY: 0,
        opacity: 1,
      }}
    >
      <div>
        <h2>WHO AM I?</h2>
        <p>
          An ambitious and bilingual professional developer with the educational
          background and proven work ethic to guide and help support frontend
          developement, and more. Dedicated leader who is known for producing
          high-quality code, maintain web apps that are easy to use, visually
          appealing, optimized for phones and tablets, and will help you grow
          your business.
        </p>

        <Link href="/contact">
          <button>GET IN TOUCH</button>
        </Link>
      </div>

      <div className={styles.info}>
        <div>
          <p>{skills && skills.length} +</p>
          <p>Technologies used</p>
        </div>

        <div>
          <span>
            <p>Name : </p>
            <p>Yassin Yahyawi</p>
          </span>

          <span>
            <p>Location : </p>
            <p>Morocco, Casablanca</p>
          </span>

          <span>
            <p>Languages : </p>
            <p>en/ar</p>
          </span>

          <span>
            <p>Phone : </p>
            <p>+212625819239</p>
          </span>

          <span>
            <p>Freelancing : </p>
            <p>Available</p>
          </span>

          <span>
            <p>Email : </p>
            <p> yassinyahyawi49@gmail.com</p>
          </span>
        </div>
      </div>
    </motion.section>
  );
}

export default Description;
