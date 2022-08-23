import React from "react";
import Image from "next/image";
// icons
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
// css
import styles from "../../styles/shared/social.module.css";

function Social() {
  return (
    <section className={styles.container}>
      <div>
        <div>
          <Image
            src="/assets/images/godfather.jpg"
            layout="fill"
            alt="Logo"
            objectFit="contain"
            priority
          />
        </div>

        <div>
          <div>
            <FaGithub />
          </div>

          <div>
            <FaTwitter />
          </div>

          <div>
            <FaLinkedin />
          </div>

          <div>
            <FaFacebook />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Social;
