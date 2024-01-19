import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import { useGlobalState } from "../../context/GlobalStateContext";
import { urlFor } from "../../client";
import { HashLink } from "react-router-hash-link";
import { images } from "../../constants/index";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  const { general, isAllFetched } = useGlobalState();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigateAndScroll = (e, targetSectionId) => {
    e.preventDefault();
    console.log("Function called with targetSectionId:", targetSectionId);

    const scrollToElement = () => {
      const element = document.getElementById(targetSectionId);
      console.log("Element to scroll to:", element);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (window.location.pathname === "/") {
      console.log("Already on the homepage, scrolling to element");
      scrollToElement();
    } else {
      console.log("Not on homepage, navigating first");
      window.location.href = `/#${targetSectionId}`;
    }
  };

  return (
    <>
      <div
        className={`${styles.navbar_container} ${
          scrolled ? styles.scrolled : ""
        } --w-100`}
      >
        <div
          className={`${styles.navbar} ${
            isAllFetched ? styles.opening_animation : ""
          } --w-100 --flx --jc-sb --ai-c`}
        >
          <div className={`${styles.nav_left} --flx --jc-fs --ai-c`}>
            {general && general.logo && (
              <HashLink to="/#home" smooth>
                <img
                  src={urlFor(general.logo)}
                  alt="logo"
                  className={styles.logo}
                />
              </HashLink>
            )}
            <ul className={`--flx`}>
              <li>
                <HashLink to="/#home" smooth>
                  Home
                </HashLink>
              </li>
              <li>
                <HashLink to="/#chi-sono" smooth>
                  Chi Sono
                </HashLink>
              </li>
              <li>
                <HashLink to="/#servizi" smooth>
                  Servizi
                </HashLink>
              </li>
              <li>
                <HashLink to="/#contatti">Contattami</HashLink>
              </li>
            </ul>
          </div>
          <div className={`${styles.nav_right} --flx --jc-fe --ai-c `}>
            <ul className={`--flx`}>
              {general && general.instagram && (
                <li>
                  <a href={general.instagram} target="_blank" rel="noreferrer">
                    <img src={images.instagram} alt="instagram"></img>
                  </a>
                </li>
              )}
              {general && general.linkedin && (
                <li>
                  <a href={general.linkedin} target="_blank" rel="noreferrer">
                    <img src={images.linkedin} alt="linkedin"></img>
                  </a>
                </li>
              )}
              {general && general.whatsapp && (
                <li>
                  <a href={general.whatsapp} target="_blank" rel="noreferrer">
                    <img src={images.whatsapp} alt="whatsapp"></img>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <NavbarMobile />
    </>
  );
};

export default Navbar;
