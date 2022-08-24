import React from "react";
import Link from "next/link";
import { useGlobal } from "../../context";
// icons
import { MdHome, MdPerson, MdEmail } from "react-icons/md";
import { FaBriefcase, FaGamepad } from "react-icons/fa";
// css
import styles from "../../styles/shared/nav.module.css";

function Nav() {
  const { nav, currentPath } = useGlobal();
  console.log(currentPath);

  return (
    <section className={`${styles.container} ${nav ? styles.openNav : ""}`}>
      <div>
        <Link href="/">
          <a className={`${currentPath === "/" ? styles.currentPath : ""}`}>
            <MdHome />
            <p>HOME</p>
          </a>
        </Link>

        <Link href="/">
          <a>
            <MdPerson />
            <p>ABOUT</p>
          </a>
        </Link>

        <Link href="/">
          <a>
            <FaBriefcase />
            <p>PROJECTS</p>
          </a>
        </Link>

        <Link href="/">
          <a>
            <FaGamepad />
            <p>CHALLENGES</p>
          </a>
        </Link>

        <Link href="/">
          <a>
            <MdEmail />
            <p>CONTACT</p>
          </a>
        </Link>
      </div>

      <div className={styles.layer}></div>
    </section>
  );
}

export default Nav;
