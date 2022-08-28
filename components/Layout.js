import React from "react";
import { useGlobal } from "../context";
// components
import Nav from "./shared/Nav";
import Social from "./shared/Social";
import Header from "./shared/Header";
// css
import styles from "../styles/layout.module.css";

function Layout({ children }) {
  const { mainRef } = useGlobal();

  return (
    <main ref={mainRef} className={styles.main}>
      <Header />

      <Social />
      <section>{children}</section>
      <Nav />
    </main>
  );
}

export default Layout;
