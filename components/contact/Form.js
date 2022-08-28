import React from "react";
// css
import styles from "../../styles/contact/form.module.css";

function Form() {
  return (
    <form className={styles.container}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Yassin Yahyawi" />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="yassinyahyawi26@gmail.com"
        />
      </div>

      <div>
        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" placeholder="subject" />
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <textarea type="text" name="message" placeholder="message" />
      </div>

      <button type="submit">SEND</button>
    </form>
  );
}

export default Form;
