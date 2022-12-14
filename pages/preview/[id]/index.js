import React from "react";
import axios from "axios";
import { motion } from "framer-motion";
// components
import Slider from "../../../components/preview/Slider";
import Details from "../../../components/preview/Details";
// css
import styles from "../../../styles/preview/preview.module.css";

function Preview(props) {
  const { data } = props;

  return (
    <section className={styles.container}>
      <motion.div
        className={styles.backBtn}
        animate={{
          translateY: 0,
          opacity: 1,
        }}
      >
        <button onClick={() => window.history.back()}>
          <svg
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z"
              fillRule="nonzero"
            />
          </svg>

          <p>Go Back</p>
        </button>
      </motion.div>

      <Slider data={data} />

      <Details data={data} />
    </section>
  );
}

// ***************
// SSR
export const getServerSideProps = async (context) => {
  const {
    params: { id },
    query: { type },
  } = context;

  const response = await axios(
    `${process.env.BASE_URL}/api/single-${type}/${id}`
  );

  return {
    props: { data: response.data[type] },
  };
};

export default Preview;
