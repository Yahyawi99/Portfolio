import React from "react";
import Link from "next/link";
// icons
import { MdHome, MdPerson, MdEmail } from "react-icons/md";
import { FaBriefcase, FaGamepad } from "react-icons/fa";
// css
import styles from "../../styles/shared/nav.module.css";

function Nav() {
  return (
    <section className={styles.container}>
      <div>
        <Link href="/">
          <a>
            <MdHome />
          </a>
        </Link>

        <Link href="/">
          <a>
            <MdPerson />
          </a>
        </Link>

        <Link href="/">
          <a>
            <FaBriefcase />
          </a>
        </Link>

        <Link href="/">
          <a>
            <FaGamepad />
          </a>
        </Link>

        <Link href="/">
          <a>
            <MdEmail />
          </a>
        </Link>
      </div>
    </section>
  );
}

export default Nav;
