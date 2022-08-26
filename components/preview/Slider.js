import React from "react";
import Image from "next/image";
// css
import styles from "../../styles/preview/silder.module.css";

function Slider({ project }) {
  console.log(project);
  return (
    <section className={styles.container}>
      {/* Left Arrow */}
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
      </button>

      <div>
        {project.map((elem) => {
          const {
            _id,
            screenshots: { first, second, third },
          } = elem;

          return (
            <div key={_id} className={styles.imageContainer}>
              <div>
                <Image src={first} layout="fill" alt="screenshot" />;
              </div>

              <div>
                <Image src={second} layout="fill" alt="screenshot" />;
              </div>

              <div>
                <Image src={third} layout="fill" alt="screenshot" />;
              </div>
            </div>
          );
        })}
      </div>

      {/* Right Arrow */}
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
        </svg>
      </button>
    </section>
  );
}

export default Slider;
