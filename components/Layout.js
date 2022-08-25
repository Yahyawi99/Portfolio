import React from "react";
// components
import Nav from "./shared/Nav";
import Social from "./shared/Social";
import Header from "./shared/Header";
// css
import styles from "../styles/layout.module.css";

function Layout({ children }) {
  return (
    <main className={styles.main}>
      <Header />

      <Social />
      <section>{children}</section>
      <Nav />
    </main>
  );
}

export default Layout;
