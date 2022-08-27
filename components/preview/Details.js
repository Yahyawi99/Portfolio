import React from "react";
import Link from "next/link";
// css
import styles from "../../styles/preview/details.module.css";

function Details({ project }) {
  return (
    <section className={styles.container}>
      {project.map((e) => {
        const { _id, name, description, languages, github, live } = e;

        return (
          <div key={_id}>
            <h2>{name}</h2>
            <p>{description}</p>

            <div>
              <span>
                <p>Technologies :</p>
                {languages.map((e, i) => {
                  return <p key={i}> {e}</p>;
                })}
              </span>

              <span>
                <p>Code :</p>
                <Link href={github}>
                  <a target="_blank">
                    <p>github</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" />
                    </svg>
                  </a>
                </Link>
              </span>
            </div>

            <Link href={live}>
              <a target="_blank">VISIT</a>
            </Link>
          </div>
        );
      })}
    </section>
  );
}

export default Details;
