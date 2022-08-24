import React from "react";
import { useGlobal } from "../../context";
import { Fade } from "hamburger-react";
import Image from "next/image";
// css
import styles from "../../styles/shared/header.module.css";

function Header() {
  const { nav, setNav } = useGlobal();

  return (
    <header className={styles.container}>
      <div>
        <Image
          src="/assets/images/godfather.jpg"
          layout="fill"
          alt="logo"
          priority
        />
      </div>

      <div>
        <Fade toggled={nav} toggle={setNav} />
      </div>
    </header>
  );
}

export default Header;
