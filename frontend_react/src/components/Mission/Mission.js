import React, { useState, useEffect } from "react";
import styles from "./Mission.module.scss";
import { client, urlFor } from "../../client";
import { motion } from "framer-motion";
import Loader from "../Loader/Loader";

const Mission = () => {
  const [missionData, setMissionData] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "mission"][0]`)
      .then((data) => {
        setMissionData(data);
      })
      .catch(console.error);
  }, []);

  const { title, text1, text2, text3, image } = missionData || {};

  return (
    <section className={`--flx ${styles.missionSection}`}>
      {!missionData ? (
        <Loader />
      ) : (
        <>
          <div
            className={`${styles.imageContent}`}
            style={{
              backgroundImage: `url(${urlFor(image)})`,
              backgroundSize: "cover",
              backgroundPosition: "right top",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img src={urlFor(image)} alt="Martina Vecchio" />
          </div>
          <motion.div
            className={` --flx --jc-c --ai-fs --flx-d-clm ${styles.textContent}`}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileInView={{ opacity: [0, 1], x: [-100, 0] }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1>{title}</h1>
            <p className={styles.handwritingP}>{text1}</p>
            <p className={styles.text2}>{text2}</p>
            <div className={styles.text3_bg}>
              <p className={styles.text3}>{text3}</p>
            </div>
          </motion.div>
        </>
      )}
    </section>
  );
};

export default Mission;
