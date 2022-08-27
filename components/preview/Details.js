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
                  <a target="_blank">github</a>
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
