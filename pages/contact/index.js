import React from "react";
// components
import Form from "../../components/contact/Form";
import Text from "../../components/contact/Text";
// css
import styles from "../../styles/contact/contact.module.css";

function Contact() {
  return (
    <section className={styles.container}>
      <div>
        <h2>CONTACT</h2>
        <h2>
          GET <span>IN TOUCH</span>
        </h2>
      </div>

      <section>
        <Text />
        <Form />
      </section>
    </section>
  );
}

export default Contact;
