import React, { useEffect, useState } from "react";
import styles from "./Scroller.module.scss";
import { TiArrowDownThick } from "react-icons/ti";
import { Link as ScrollLink } from "react-scroll";

const Scroller = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 200;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.scroller} ${scrolled ? styles.open : ""}`}>
      <ScrollLink to="home" duration={500}>
        <TiArrowDownThick />
      </ScrollLink>
    </div>
  );
};

export default Scroller;
