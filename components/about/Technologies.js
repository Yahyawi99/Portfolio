import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// css
import styles from "../../styles/about/technologies.module.css";

function Technologies({ skills }) {
  return (
    <motion.section
      className={styles.container}
      animate={{
        translateY: 0,
        opacity: 1,
      }}
    >
      <h2>Here are some technologies I've been working with recently</h2>

      <div>
        {skills &&
          skills.map((e) => {
            const { _id, src } = e;

            return (
              <div key={_id} className={styles.skill}>
                <div>
                  <Image
                    src={src}
                    width="100"
                    height="100"
                    layout="responsive"
                    alt="skill"
                  />
                </div>
              </div>
            );
          })}
      </div>
    </motion.section>
  );
}

export default Technologies;
