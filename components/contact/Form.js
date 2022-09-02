import React from "react";
import { useGlobal } from "../../context";
// components
import Loader from "./Loader";
// css
import styles from "../../styles/contact/form.module.css";

function Form() {
  const {
    formHandler,
    name,
    email,
    subject,
    message,
    setName,
    setEmail,
    setSubject,
    setMessage,
    formLoader,
    sentSuccess,
    formMessage,
    sentFailed,
  } = useGlobal();

  return (
    <form
      className={styles.container}
      method="POST"
      action="/api/contact"
      onSubmit={(e) => formHandler(e)}
      noValidate
    >
      <div>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Yassin Yahyawi"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          className="email"
          placeholder="yassinyahyawi26@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
      </div>

      <div>
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          name="subject"
          placeholder="subject"
          value={subject}
          onChange={(e) => setSubject(e.currentTarget.value)}
        />
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <textarea
          type="text"
          name="message"
          placeholder="message"
          value={message}
          onChange={(e) => setMessage(e.currentTarget.value)}
        />
      </div>

      <button type="submit">{formLoader ? <Loader /> : "SEND"}</button>

      {sentSuccess && <p className={styles.message}>{formMessage}</p>}

      {sentFailed && (
        <p
          style={{
            color: "red",
          }}
          className={styles.message}
        >
          {formMessage}
        </p>
      )}
    </form>
  );
}

export default Form;
