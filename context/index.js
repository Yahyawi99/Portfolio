import React, { useContext, useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

const AppContext = React.createContext();
function Provider({ children }) {
  const { asPath } = useRouter();

  const [nav, setNav] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  const SliderContainerRef = useRef(null);
  const mainRef = useRef(null);

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
