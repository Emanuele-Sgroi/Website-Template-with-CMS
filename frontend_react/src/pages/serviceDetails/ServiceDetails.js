import React, { useState, useEffect } from "react";
import styles from "./ServiceDetails.module.scss";
import { useParams } from "react-router-dom";
import { client } from "../../client";
import { Loader, ServiceDetailsComp } from "../../components/index";
import { TiArrowDownThick } from "react-icons/ti";
import { HashLink } from "react-router-hash-link";

const ServiceDetails = () => {
  const [serviceDetails, setServiceDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    client
      .fetch(`*[_type == "services"]`)
      .then((data) => {
        const matchedService = data.find((service) => {
          const generatedSlug = service.title
            .toLowerCase()
            .replace(/\s+/g, "-");
          return generatedSlug === slug;
        });
        if (matchedService) {
          setServiceDetails(matchedService);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching service details:", error);
        setLoading(false);
      });
  }, [slug]);

  const { title, orderNumber, homeText, text1, bulletPoints, text2, image } =
    serviceDetails || {};

  return (
    <section
      className={`${styles.serviceDetailsSection} --flx --jc-c --ai-c --flx-d-clm`}
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          <HashLink
            to="/#servizi"
            smooth
            className={styles.backButtonContainer}
          >
            <div className={styles.backIcon}>
              <TiArrowDownThick />
            </div>
            <div className={styles.backText}>
              <p>Torna indietro</p>
            </div>
          </HashLink>
          <ServiceDetailsComp serviceDetails={serviceDetails} />
        </>
      )}
    </section>
  );
};

export default ServiceDetails;
