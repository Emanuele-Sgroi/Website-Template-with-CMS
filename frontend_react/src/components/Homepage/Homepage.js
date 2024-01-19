import React, { useState, useEffect } from "react";
import styles from "./Homepage.module.scss";
import { client, urlFor } from "../../client";
import { images } from "../../constants";
import { motion } from "framer-motion";
import Loader from "../Loader/Loader";
import { HashLink } from "react-router-hash-link";

const Homepage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "homepage"]`)
      .then((data) => {
        setData(data);
      })
      .catch(console.error);
  }, []);

  const planets = [
    { key: 1, imagePlanet: images.planet_pink },
    { key: 2, imagePlanet: images.planet_blue },
    { key: 3, imagePlanet: images.planet_pink },
  ];

  return (
    <section
      id="home"
      className={`--w-100 purple-bg ${styles.homepageContainer}`}
    >
      <div className={styles.fakeNav} />

      {!data ? (
        <Loader />
      ) : (
        <>
          {Array.isArray(data)
            ? data.map((item, index) => (
                <React.Fragment key={index}>
                  {/* Top Section */}
                  <div className={styles.topSection}>
                    <motion.img
                      className={styles.topImage}
                      src={urlFor(item.image1)}
                      alt="Main"
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      whileInView={{ opacity: [0, 1], x: [-100, 0] }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                    <div className={styles.topTextContent}>
                      <motion.h1
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        whileInView={{ opacity: [0, 1], x: [100, 0] }}
                        transition={{ duration: 0.8 }}
                      >
                        {item.title}
                      </motion.h1>
                      <motion.h2
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        whileInView={{ opacity: [0, 1], x: [100, 0] }}
                        transition={{
                          duration: 0.5,
                          type: "tween",
                          delay: 0.3,
                        }}
                      >
                        {item.subtitle}
                      </motion.h2>
                      <HashLink to="/#chi-sono" smooth>
                        <motion.button
                          className={` --btn ${styles.topButton}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          whileInView={{ opacity: [0, 1] }}
                          transition={{
                            duration: 0.5,
                            type: "tween",
                            delay: 0.5,
                          }}
                        >
                          Scopri Chi Sono
                        </motion.button>
                      </HashLink>

                      {/* Planets */}
                      {planets.map((planet, index) => (
                        <motion.img
                          key={planet.key + 1}
                          className={`${styles.planet} ${
                            styles[`planet${index + 1}`]
                          }`}
                          src={planet.imagePlanet}
                          alt={`Planet ${index + 1}`}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          whileInView={{ opacity: [0, 1], scale: [0, 1] }}
                          transition={{
                            duration: 0.3,
                            delay: 0.2 + index * 0.1,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className={styles.bottomSection} key={index}>
                    <div className={styles.bottomTextContent}>
                      <motion.h3
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        whileInView={{ opacity: [0, 1], x: [-100, 0] }}
                        transition={{ duration: 0.8 }}
                      >
                        {item.title2}
                      </motion.h3>
                      <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        whileInView={{ opacity: [0, 1], x: [-100, 0] }}
                        transition={{
                          duration: 0.5,
                          type: "tween",
                          delay: 0.3,
                        }}
                      >
                        {item.text}
                      </motion.p>
                      <HashLink to="/#servizi" smooth>
                        <motion.button
                          className={` --btn2 ${styles.bottomButton}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          whileInView={{ opacity: [0, 1] }}
                          transition={{
                            duration: 0.5,
                            type: "tween",
                            delay: 0.5,
                          }}
                        >
                          Scopri i miei Servizi
                        </motion.button>
                      </HashLink>
                    </div>
                    <motion.img
                      className={styles.bottomImage}
                      src={urlFor(item.image2)}
                      alt="Main"
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      whileInView={{ opacity: [0, 1], x: [100, 0] }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </React.Fragment>
              ))
            : ""}
        </>
      )}

      {/* Curved Layers */}
      <div className={`${styles.bg_radius} ${styles.radius1}`} />
      <div className={`${styles.bg_radius} ${styles.radius2}`} />
      <div className={`${styles.bg_radius} ${styles.radius3}`} />
      <div className={`${styles.bg_radius} ${styles.radius4}`} />
      <div className={`${styles.bg_radius} ${styles.radius5}`} />
    </section>
  );
};

export default Homepage;
