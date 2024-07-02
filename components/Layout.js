import React from "react";
import { useGlobal } from "../context";
// components
import Nav from "./shared/Nav";
import Social from "./shared/Social";
import Header from "./shared/Header";
import Loader from "./shared/Loader";
// css
import styles from "../styles/layout.module.css";

function Layout({ children }) {
  const { mainRef, nav, loadingPage } = useGlobal();

  return (
    <main
      ref={mainRef}
      className={`${styles.main} ${nav && styles.stopScroll} ${
        loadingPage && styles.pageIsLoading
      }`}
    >
      <Header />

      <Social />
      <section>{children}</section>
      <Nav />

      <Loader />
    </main>
  );
}

export default Layout;
