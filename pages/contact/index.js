import React from "react";
import { motion } from "framer-motion";
// components
import Form from "../../components/contact/Form";
import Text from "../../components/contact/Text";
// css
import styles from "../../styles/contact/contact.module.css";

function Contact() {
  return (
    <section className={styles.container}>
      <motion.div
        animate={{
          translateY: 0,
          opacity: 1,
        }}
      >
        <h2>CONTACT</h2>
        <h2>
          GET <span>IN TOUCH</span>
        </h2>
      </motion.div>

      <motion.section
        animate={{
          translateY: 0,
          opacity: 1,
        }}
      >
        <Text />
        <Form />
      </motion.section>
    </section>
  );
}

export default Contact;
