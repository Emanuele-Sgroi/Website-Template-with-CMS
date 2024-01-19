import React from "react";
import styles from "./ServiceDetailsComp.module.scss";
import BlockContent from "@sanity/block-content-to-react";
import { urlFor } from "../../client";
import { HashLink } from "react-router-hash-link";

const ServiceDetailsComp = ({ serviceDetails }) => {
  const serializers = {
    types: {
      block(props) {
        // Normal block content serialization
        return BlockContent.defaultSerializers.types.block(props);
      },
    },
    marks: {
      // This is the mark type name from Sanity schema
      strong(props) {
        return <strong style={{ fontWeight: 900 }}>{props.children}</strong>;
      },
    },
  };

  return (
    <div className={styles.serviceDetailsComponent}>
      <div className={styles.serviceTextContent}>
        <div className={styles.serviceText}>
          <h1>{serviceDetails.title}</h1>
          <img
            className={styles.serviceImageTop}
            src={urlFor(serviceDetails.image)}
            alt={serviceDetails.title}
          />
          <h3>{serviceDetails.text1}</h3>
          <ul>
            {serviceDetails.bulletPoints.map((point, index) => (
              <li key={index}>
                <BlockContent blocks={point} serializers={serializers} />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.serviceImage}>
          <img src={urlFor(serviceDetails.image)} alt={serviceDetails.title} />
        </div>
      </div>
      <div className={styles.lineSeparator}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      <div className={styles.serviceOutro}>
        <h3>{serviceDetails.text2}</h3>
        <HashLink to="/#contatti" smooth className={`--btn2`}>
          Contattami
        </HashLink>
      </div>
    </div>
  );
};

export default ServiceDetailsComp;
