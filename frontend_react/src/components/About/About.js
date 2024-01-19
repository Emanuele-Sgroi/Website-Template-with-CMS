import React, { useState, useEffect } from "react";
import styles from "./About.module.scss";
import { useGlobalState } from "../../context/GlobalStateContext";
import { client, urlFor } from "../../client";
import BlockContent from "@sanity/block-content-to-react";
import { motion } from "framer-motion";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { images } from "../../constants/index";
import Loader from "../Loader/Loader";
import { HashLink } from "react-router-hash-link";

const About = () => {
  const [aboutData, setAboutData] = useState(null);
  const { general } = useGlobalState();

  useEffect(() => {
    client
      .fetch(`*[_type == "about"][0]`)
      .then((data) => {
        setAboutData(data);
      })
      .catch(console.error);
  }, []);

  const { title1, text, title2, bulletPoints, image } = aboutData || {};

  const serializers = {
    types: {
      block(props) {
        return BlockContent.defaultSerializers.types.block(props);
      },
    },
    marks: {
      strong(props) {
        return <strong style={{ fontWeight: 900 }}>{props.children}</strong>;
      },
    },
  };

  return (
    <section id="chi-sono" className={`--flx ${styles.aboutSection}`}>
      {!aboutData ? (
        <Loader />
      ) : (
        <>
          <motion.div
            className={` --flx --jc-c --ai-fs --flx-d-clm ${styles.textContent}`}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileInView={{ opacity: [0, 1], x: [-100, 0] }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1>{title1}</h1>
            <div className={styles.richTextArea}>
              <BlockContent
                blocks={text}
                serializers={serializers}
                {...client.config()}
              />
              <div className={styles.lineSeparator}>
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
              <h2>{title2}</h2>
              <ul className={styles.studiesList}>
                {bulletPoints.map((point, index) => (
                  <li key={index}>
                    <div className="--flx --jc-fs --ai-c">
                      <VscDebugBreakpointLog color="#8F38AE" />
                      <p className="--px5-l">{point}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className={`--flx --jc-c --ai-c ${styles.aboutSocials}`}>
                {general &&
                  general.instagram &&
                  general.linkedin &&
                  general.whatsapp && (
                    <>
                      <a
                        href={general.instagram}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={images.instagram} alt="instagram"></img>
                      </a>
                      <a
                        href={general.linkedin}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={images.linkedin} alt="linkedin"></img>
                      </a>
                      <a
                        href={general.whatsapp}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={images.whatsapp} alt="whatsapp"></img>
                      </a>
                    </>
                  )}
              </div>
              <div className={` --flx --jc-c - ai-c ${styles.aboutButtons}`}>
                <HashLink to="/#servizi" smooth>
                  <button className={` --btn2 ${styles.aboutButton}`}>
                    Servizi
                  </button>
                </HashLink>
                <HashLink to="/#contatti" smooth>
                  <button className={` --btn2 ${styles.aboutButton}`}>
                    Contattami
                  </button>
                </HashLink>
              </div>
            </div>
          </motion.div>
          <div
            className={`${styles.imageContent}`}
            style={{
              backgroundImage: `url(${urlFor(image)})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img src={urlFor(aboutData.image)} alt="Martina Vecchio" />
          </div>
        </>
      )}
    </section>
  );
};

export default About;
