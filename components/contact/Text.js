import React from "react";
// css
import styles from "../../styles/contact/text.module.css";

function Text() {
  return (
    <section className={styles.container}>
      <h2>SAY HELLO!</h2>
      <p>
        Feel free to contact me whenever you want. I am always available and
        open to discussing new projects, creative ideas or opportunities to be
        part of your business.
      </p>

      <div>
        <a>
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
            </svg>
          </i>

          <span>
            <p>Email me :</p>
            <p>yassinyahyawi26@gmail.com</p>
          </span>
        </a>

        <a href="tel:+212675391909">
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M18.48 22.926l-1.193.658c-6.979 3.621-19.082-17.494-12.279-21.484l1.145-.637 3.714 6.467-1.139.632c-2.067 1.245 2.76 9.707 4.879 8.545l1.162-.642 3.711 6.461zm-9.808-22.926l-1.68.975 3.714 6.466 1.681-.975-3.715-6.466zm8.613 14.997l-1.68.975 3.714 6.467 1.681-.975-3.715-6.467z" />
            </svg>
          </i>

          <span>
            <p>Call me :</p>
            <p>+212675391909</p>
          </span>
        </a>
      </div>
    </section>
  );
}

export default Text;

// SAY HELLO!
// Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
