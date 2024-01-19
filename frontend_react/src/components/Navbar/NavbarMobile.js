import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { useGlobalState } from "../../context/GlobalStateContext";
import { urlFor } from "../../client";
import { images } from "../../constants/index";
import { HashLink } from "react-router-hash-link";

const NavbarMobile = () => {
  const { general, isAllFetched } = useGlobalState();
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClickLogo = () => {
    if (isOpen === true) {
      setIsOpen(false);
    }
  };
  return (
    <div
      className={`${styles.navbar_mobile} ${
        isAllFetched ? styles.opening_animation : ""
      } --w-100 --flx --jc-sb --ai-c`}
    >
      {general && general.logo && (
        <HashLink to="/#home" smooth onClick={handleLinkClickLogo}>
          <img src={urlFor(general.logo)} alt="logo" className={styles.logo} />
        </HashLink>
      )}
      <div
        className={`${styles.icon} ${styles.nav_icon} ${
          isOpen ? styles.open : ""
        }`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={styles.fakeNav} />
      <div
        className={`${styles.menu} ${
          isOpen ? styles.open : ""
        } --w-100 --jc-c --ai-c`}
      >
        <ul className={`--w-h-100 --flx --jc-c --ai-c --flx-d-clm `}>
          <li>
            <HashLink to="/#home" smooth onClick={handleLinkClick}>
              Home
            </HashLink>
          </li>
          <li>
            <HashLink to="/#chi-sono" smooth onClick={handleLinkClick}>
              Chi Sono
            </HashLink>
          </li>
          <li>
            <HashLink to="/#servizi" smooth onClick={handleLinkClick}>
              Servizi
            </HashLink>
          </li>
          <li>
            <HashLink to="/#contatti" smooth onClick={handleLinkClick}>
              Contattami
            </HashLink>
          </li>
          <li>
            <div className={`--flx --jc-c --ai-c ${styles.socials}`}>
              {general && general.instagram && (
                <a href={general.instagram} target="_blank" rel="noreferrer">
                  <img src={images.instagram} alt="instagram"></img>
                </a>
              )}
              {general && general.linkedin && (
                <a href={general.linkedin} target="_blank" rel="noreferrer">
                  <img src={images.linkedin} alt="linkedin"></img>
                </a>
              )}
              {general && general.whatsapp && (
                <a href={general.whatsapp} target="_blank" rel="noreferrer">
                  <img src={images.whatsapp} alt="whatsapp"></img>
                </a>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarMobile;
