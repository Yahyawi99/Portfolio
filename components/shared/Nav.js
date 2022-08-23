import React from "react";
// icons
import { MdHome, MdPerson, MdEmail } from "react-icons/md";
import { FaBriefcase, FaGamepad } from "react-icons/fa";
// css
import styles from "../../styles/shared/nav.module.css";

function Nav() {
  return (
    <section className={styles.container}>
      <div>
        <div>
          <MdHome />
        </div>

        <div>
          <MdPerson />
        </div>

        <div>
          <FaBriefcase />
        </div>

        <div>
          <FaGamepad />
        </div>

        <div>
          <MdEmail />
        </div>
      </div>
    </section>
  );
}

export default Nav;
