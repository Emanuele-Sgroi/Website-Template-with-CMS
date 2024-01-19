import React, { useState } from "react";
import styles from "./Footer.module.scss";
import { useGlobalState } from "../../context/GlobalStateContext";
import { urlFor } from "../../client";
import Loader from "../Loader/Loader";
import { images } from "../../constants/index";
import { Link } from "react-router-dom";
import { Privacy, PrivacyModal } from "../index";

const Footer = () => {
  const { general } = useGlobalState();
  let date = new Date();
  let yearDate = date.getFullYear();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePrivacyClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLinkClick = (e, section) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      const targetSection = document.getElementById(section);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className={`--flx --jc-sa --ai-c ${styles.footer}`}>
      {general ? (
        <>
          <div className={styles.footerInfo}>
            <Link to="/" onClick={(e) => handleLinkClick(e, "home")}>
              <img
                src={urlFor(general.logoFooter)}
                alt="logo"
                className={styles.logo}
              />
            </Link>
            <div className={styles.footerTextContent}>
              <p onClick={handlePrivacyClick} className={styles.privacyButton}>
                Informazioni sulla Privacy
              </p>
              <p>
                {general.busName}
                <span>
                  {general.pIva.length > 0 ? `| ${general.pIva}` : ""}
                </span>
              </p>
              <p>
                © <span>{yearDate}</span> All rights reserved
                <span>
                  | Sito sviluppato da{" "}
                  <a href={general.websiteDev} target="_blank" rel="noreferrer">
                    {general.developer}
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className={styles.footerSocials}>
            <a href={general.instagram} target="_blank" rel="noreferrer">
              <img src={images.instagram} alt="instagram"></img>
            </a>
            <a href={general.linkedin} target="_blank" rel="noreferrer">
              <img src={images.linkedin} alt="linkedin"></img>
            </a>
            <a href={general.whatsapp} target="_blank" rel="noreferrer">
              <img src={images.whatsapp} alt="whatsapp"></img>
            </a>
          </div>
        </>
      ) : (
        <Loader />
      )}
      <PrivacyModal isOpen={isModalOpen} onClose={handleCloseModal}>
        <Privacy />
      </PrivacyModal>
    </div>
  );
};

export default Footer;
