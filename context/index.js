import React, { useContext, useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

const AppContext = React.createContext();
function Provider({ children }) {
  const { asPath } = useRouter();

  const [nav, setNav] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  // changing Icons styles depending on the path
  useEffect(() => {
    setCurrentPath(asPath);
  }, [asPath]);

  // Hover effect on Project
  const projectHoverEffect = (myProjects) => {
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

        if (e.offsetX <= 30) {
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

  // Slider
  const slider = (direction) => {
    console.log(direction);
  };
  return (
    <AppContext.Provider
      value={{
        nav,
        setNav,
        currentPath,
        projectHoverEffect,
        slider,
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
