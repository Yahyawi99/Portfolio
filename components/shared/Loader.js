import React from "react";
import { useGlobal } from "../../context";
// css
import styles from "../../styles/shared/loader.module.css";

function Loader() {
  const { loadingPage } = useGlobal();
  return (
    <section
      className={`${styles.container} ${loadingPage || styles.finishLoading}`}
    >
      <div></div>

      <div></div>
    </section>
  );
}

export default Loader;
