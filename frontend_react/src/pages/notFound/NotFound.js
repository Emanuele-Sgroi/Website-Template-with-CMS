import React from "react";
import styles from "./NotFound.module.scss";
import { images } from "../../constants";
import { useNavigate, Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleClick = async (e, id) => {
    e.preventDefault();

    // Navigation logic
    if (!isHomePage) {
      await navigate("/");
    }

    // Wait for the navigation to complete and the new page to load
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error("Element not found:", id);
      }
    }, 250); // timeout
  };

  return (
    <section className={`--flx --jc-c --ai-c ${styles.notFoundSection}`}>
      <div className={`--flx --jc-c --ai-c --flx-d-clm`}>
        <h1>
          Oops! <span>Errore 404</span>
        </h1>
        <img src={images.notfound} alt="errore 404" />
        <p>Pagina non trovata</p>
        <Link
          to={`/#home`}
          onClick={(e) => handleClick(e, "home")}
          className={`--btn2`}
        >
          Torna alla Homepage
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
