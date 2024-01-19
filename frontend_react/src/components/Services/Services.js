import React, { useState, useEffect } from "react";
import styles from "./Services.module.scss";
import { client, urlFor } from "../../client";
import { motion } from "framer-motion";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Services = () => {
  const [servicesData, setServicesData] = useState(null);
  const [servicesDetailData, setServicesDetailData] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "services"] | order(orderNumber asc)`)
      .then((data) => {
        setServicesDetailData(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    client
      .fetch(`*[_type == "services_static"][0]`)
      .then((data) => {
        setServicesData(data);
      })
      .catch(console.error);
  }, []);

  const isLoading = !servicesData || !servicesDetailData.length;

  const { title1, text1, text2, image } = servicesData || {};
  const createSlug = (title) => title.toLowerCase().replace(/\s+/g, "-");

  const truncateText = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };

  return (
    <section
      id="servizi"
      className={`${styles.servicesSection} --flx --flx-d-clm --ai-c`}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1>{title1}</h1>

          <div
            className={`${styles.introDiv} --flx --ai-c --jc-c`}
            style={{
              backgroundImage: `url(${urlFor(image)})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className={`--flx --ai-c --jc-c`}>
              <h3>{text1}</h3>
            </div>
          </div>
          <div className={`${styles.servicesContainer}`}>
            {servicesDetailData.map((item, index) => {
              return (
                <motion.div
                  className={styles.serviceCard}
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.2 }}
                >
                  <img src={urlFor(item.image)} alt={item.title} />
                  <h2>{item.title}</h2>
                  <h5>{truncateText(item.homeText, 16)}</h5>
                  <Link
                    to={`/servizio/${createSlug(item.title)}`}
                    className="--btn2"
                  >
                    Scopri
                  </Link>
                </motion.div>
              );
            })}
          </div>
          <h3>{text2}</h3>
          <HashLink to="/#contatti" smooth>
            <button className={` --btn2 ${styles.servicesButton}`}>
              CONTATTAMI
            </button>
          </HashLink>
        </>
      )}
    </section>
  );
};

export default Services;
