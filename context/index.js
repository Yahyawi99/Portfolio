import React, { useContext, useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const AppContext = React.createContext();
function Provider({ children }) {
  const { asPath } = useRouter();

  const [nav, setNav] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  const SliderContainerRef = useRef(null);
  const mainRef = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [formLoader, setFormLoader] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [sentFailed, setsentFailed] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  // *****************************************
  // changing Icons styles depending on the path
  useEffect(() => {
    setCurrentPath(asPath);

    mainRef.current.scrollTo({
      top: 0,
    });
  }, [asPath]);

  // *****************************************
  // Hover effect on Project
  const projectHoverEffect = (container) => {
    const myProjects = [...container.children];

    myProjects.forEach((e) => {
      const layer = e.children[1];

      e.addEventListener("mouseenter", (e) => {
        if (e.offsetY <= 30) {
          layer.style.display = "flex";
          layer.style.transform = "translateY(-100%)";

          setTimeout(() => {
            layer.style.transform = "translateY(0%)";
          }, 50);
          return;
        }

        if (e.offsetX >= 200) {
          layer.style.display = "flex";
          layer.style.transform = "translateX(100%)";

          setTimeout(() => {
            layer.style.transform = "translateX(0%)";
          }, 50);
          return;
        }

        if (e.offsetY >= 200) {
          layer.style.display = "flex";
          layer.style.transform = "translateY(100%)";

          setTimeout(() => {
            layer.style.transform = "translateY(0%)";
          }, 50);
          return;
        }

        if (e.offsetX <= 20) {
          layer.style.display = "flex";
          layer.style.transform = "translateX(-100%)";

          setTimeout(() => {
            layer.style.transform = "translateX(0%)";
          }, 50);
          return;
        }
      });

      e.addEventListener("mouseleave", (e) => {
        if (e.offsetY <= 30) {
          layer.style.transform = "translateY(-100%)";

          setTimeout(() => {
            layer.style.display = "none";
          }, 250);
          return;
        }

        if (e.offsetX >= 200) {
          layer.style.transform = "translateX(100%)";

          setTimeout(() => {
            layer.style.display = "none";
          }, 250);
          return;
        }

        if (e.offsetY >= 200) {
          layer.style.transform = "translateY(100%)";

          setTimeout(() => {
            layer.style.display = "none";
          }, 250);
          return;
        }

        if (e.offsetX <= 30) {
          layer.style.transform = "translateX(-100%)";

          setTimeout(() => {
            layer.style.display = "none";
          }, 250);
        }
      });
    });
  };

  // *****************************************
  // Slider
  const slider = (direction) => {
    const container = [...SliderContainerRef.current.children];

    container.forEach((e) => {
      const value = e.style.left.replace("%", "");

      if (direction === "right") {
        if (value === "0") {
          e.style.left = "100%";
          e.style.zIndex = -1;
          e.style.opacity = 0;
        } else if (value === "100") {
          e.style.left = "-100%";
          e.style.zIndex = -1;
          e.style.opacity = 0;
        } else {
          e.style.left = "0%";
          e.style.zIndex = 1;
          e.style.opacity = 1;
        }
      }

      if (direction === "left") {
        if (value === "0") {
          e.style.left = "-100%";
          e.style.zIndex = -1;
          e.style.opacity = 0;
        } else if (value === "100") {
          e.style.left = "0%";
          e.style.zIndex = 1;
          e.style.opacity = 1;
        } else {
          e.style.left = "100%";
          e.style.zIndex = -1;
          e.style.opacity = 0;
        }
      }
    });
  };

  // *****************************************
  // Form submit
  const formHandler = async (e) => {
    e.preventDefault();

    const EMAIL_INPUT = document.querySelector(".email");

    if (
      name &&
      email &&
      subject &&
      message &&
      validateEmail(EMAIL_INPUT.value)
    ) {
      try {
        const data = {
          name,
          email,
          subject,
          message,
        };

        setFormLoader(true);

        const response = await axios.post("/api/contact", data);

        formSuccess();
      } catch (error) {
        formError();
      }
    } else {
      const INPUTS = document.querySelectorAll("input");
      const MESSAGE_INPUT = document.querySelector("textarea");

      INPUTS.forEach((e) => checkIfEmpty(e));

      checkIfEmpty(MESSAGE_INPUT);
    }
  };

  const checkIfEmpty = (element) => {
    if (element.value) {
      element.style.borderColor = "var(--clr-light-4)";
    } else {
      element.style.borderColor = "red";
    }

    if (element.name === "email" && !validateEmail(element.value)) {
      element.style.borderColor = "red";
    }

    setTimeout(() => {
      element.style.borderColor = "var(--clr-light-4)";
    }, 5000);
  };

  const validateEmail = (email) => {
    const regex = /^[a-z]{3,}\d*@[a-z]*[.][a-z]*$/gi;
    return regex.test(email);
  };

  const clearInputs = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const formSuccess = () => {
    clearInputs();
    setFormLoader(false);

    setFormMessage("Thank you. I will be contacting you as soon as possible.");
    setSentSuccess(true);
    setsentFailed(false);

    setTimeout(() => {
      setSentSuccess(false);
    }, 5000);
  };

  const formError = () => {
    setFormLoader(false);

    setFormMessage("Something went wrong! please try again.");
    setSentSuccess(false);
    setsentFailed(true);

    setTimeout(() => {
      setsentFailed(false);
    }, 5000);
  };

  return (
    <AppContext.Provider
      value={{
        nav,
        setNav,
        currentPath,
        projectHoverEffect,
        slider,
        SliderContainerRef,
        mainRef,
        formHandler,
        name,
        email,
        subject,
        message,
        setName,
        setEmail,
        setSubject,
        setMessage,
        formLoader,
        setFormLoader,
        sentSuccess,
        formMessage,
        sentFailed,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobal = () => {
  return useContext(AppContext);
};

export default Provider;
