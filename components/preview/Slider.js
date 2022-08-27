import React from "react";
import Image from "next/image";
import { useGlobal } from "../../context";
// css
import styles from "../../styles/preview/silder.module.css";

function Slider({ project }) {
  const { slider, SliderContainerRef } = useGlobal();

  return (
    <section className={styles.container}>
      {/* Left Arrow */}
      <button onClick={() => slider("left")}>
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
            <div
              key={_id}
              ref={SliderContainerRef}
              className={styles.imageContainer}
            >
              <div
                style={{
                  left: "0%",
                  zIndex: 1,
                  opacity: 1,
                }}
              >
                <Image src={first} layout="fill" alt="screenshot" priority />;
              </div>

              <div
                style={{
                  left: "-100%",
                  zIndex: -1,
                  opacity: 0,
                }}
              >
                <Image src={second} layout="fill" alt="screenshot" priority />;
              </div>

              <div
                style={{
                  left: "100%",
                  zIndex: -1,
                  opacity: 0,
                }}
              >
                <Image src={third} layout="fill" alt="screenshot" priority />;
              </div>
            </div>
          );
        })}
      </div>

      {/* Right Arrow */}
      <button onClick={() => slider("right")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
        </svg>
      </button>

      {/* mobile buttons */}
      <div className={styles.mobileBtns}>
        <button onClick={() => slider("left")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
          </svg>
        </button>

        <button onClick={() => slider("right")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Slider;
