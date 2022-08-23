import React from "react";
// components
import Nav from "./shared/Nav";
import Social from "./shared/Social";
// css
import styles from "../styles/layout.module.css";

function Layout({ children }) {
  return (
    <main className={styles.main}>
      <section>
        <Social />
        {children}
      </section>

      <Nav />
    </main>
  );
}

export default Layout;
