import React from "react";
import Link from "next/link";
import { useGlobal } from "../../context";
// css
import styles from "../../styles/shared/nav.module.css";

function Nav() {
  const { nav, setNav, currentPath, setLoadingPage, mainRef } = useGlobal();

  return (
    <section className={`${styles.container} ${nav ? styles.openNav : ""}`}>
      <div onClick={() => setNav(false)}>
        <Link href="/">
          <a
            className={`${currentPath === "/" ? styles.currentPath : ""}`}
            onClick={() => {
              mainRef.current.scrollTo({
                top: 0,
              });

              setLoadingPage(true);
            }}
          >
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M3 14.828v9.172h18v-9.172l-9-8.375-9 8.375zm11 7.172h-4v-6h4v6zm10-9.852l-1.361 1.465-10.639-9.883-10.639 9.868-1.361-1.465 12-11.133 12 11.148z" />
              </svg>
            </i>
            <p>HOME</p>
          </a>
        </Link>

        <Link href="/about">
          <a
            className={`${currentPath === "/about" ? styles.currentPath : ""}`}
            onClick={() => {
              mainRef.current.scrollTo({
                top: 0,
              });

              setLoadingPage(true);
            }}
          >
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
              </svg>
            </i>
            <p>ABOUT</p>
          </a>
        </Link>

        <Link href="/projects">
          <a
            className={`${
              currentPath === "/projects" || currentPath.includes("preview")
                ? styles.currentPath
                : ""
            }`}
            onClick={() => {
              mainRef.current.scrollTo({
                top: 0,
              });

              setLoadingPage(true);
            }}
          >
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12.23 15.5c-6.801 0-10.367-1.221-12.23-2.597v9.097h24v-8.949c-3.218 2.221-9.422 2.449-11.77 2.449zm1.77 2.532c0 1.087-.896 1.968-2 1.968s-2-.881-2-1.968v-1.032h4v1.032zm-14-8.541v-2.491h24v2.605c0 5.289-24 5.133-24-.114zm9-7.491c-1.104 0-2 .896-2 2v2h2v-1.5c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1.5h2v-2c0-1.104-.896-2-2-2h-6z" />
              </svg>
            </i>
            <p>PROJECTS</p>
          </a>
        </Link>

        <Link href="/challenges">
          <a
            className={`${
              currentPath === "/challenges" ? styles.currentPath : ""
            }`}
            onClick={() => {
              mainRef.current.scrollTo({
                top: 0,
              });

              setLoadingPage(true);
            }}
          >
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M6 1l1.172.203c-.356 2.245.791 2.519 2.697 2.874 1.469.273 3.131.622 3.131 3.284v.639h-1.183v-.639c0-1.556-.479-1.809-2.163-2.122-2.584-.48-4.097-1.391-3.654-4.239zm15.563 9.38c-.202-.811-.931-1.38-1.767-1.38h-15.592c-.836 0-1.565.569-1.768 1.38-.146.603-2.436 9.824-2.436 10.377 0 1.379 1.094 2.243 2.286 2.243.633 0 1.263-.274 1.83-.781 3.591-3.208 3.77-4.219 4.759-4.219h6.264c.971 0 1.163 1.018 4.745 4.219.567.507 1.197.781 1.83.781 1.192 0 2.286-.864 2.286-2.243 0-.553-2.29-9.774-2.437-10.377zm-12.563 3.62h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1zm4 1h-2v-1h2v1zm2.75-.75c-.414 0-.75-.335-.75-.75s.336-.75.75-.75.75.335.75.75-.336.75-.75.75zm1.75 1.75c-.414 0-.75-.335-.75-.75s.336-.75.75-.75.75.335.75.75-.336.75-.75.75zm0-3.531c-.414 0-.75-.335-.75-.75s.336-.75.75-.75.75.335.75.75-.336.75-.75.75zm1.734 1.781c-.414 0-.75-.335-.75-.75s.336-.75.75-.75.75.335.75.75-.336.75-.75.75z" />
              </svg>
            </i>
            <p>CHALLENGES</p>
          </a>
        </Link>

        <Link href="/contact">
          <a
            className={`${
              currentPath === "/contact" ? styles.currentPath : ""
            }`}
            onClick={() => {
              mainRef.current.scrollTo({
                top: 0,
              });

              setLoadingPage(true);
            }}
          >
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
              </svg>
            </i>
            <p>CONTACT</p>
          </a>
        </Link>
      </div>

      <div className={styles.layer} onClick={() => setNav(false)}></div>
    </section>
  );
}

export default Nav;
