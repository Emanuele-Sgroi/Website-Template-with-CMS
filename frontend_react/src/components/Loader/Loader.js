import React from "react";
import styles from "./Loader.module.scss";
import { images } from "../../constants";

const Loader = () => {
  return (
    <div className={`${styles.loader}`}>
      <img src={images.loader} alt="Caricamento" />
    </div>
  );
};

export default Loader;
