import React, { useState, useEffect } from "react";
import styles from "./Contacts.module.scss";
import { useGlobalState } from "../../context/GlobalStateContext";
import { client, urlFor } from "../../client";
import { images } from "../../constants/index";
import Loader from "../Loader/Loader";
import emailjs from "emailjs-com";

const Contacts = () => {
  const { general } = useGlobalState();
  const [selectedSubject, setSelectedSubject] = useState("");
  const [customSubject, setCustomSubject] = useState("");
  const [subject, setSubject] = useState("");
  const [servicesDetailData, setServicesDetailData] = useState([]);
  const [isSending, setIsSending] = useState(false);
  const [emailSuccess, setIsEmailSuccess] = useState(false);
  const [emailFail, setIsEmailFail] = useState(false);

  useEffect(() => {
    client
      .fetch(`*[_type == "services"] | order(orderNumber asc)`)
      .then((data) => {
        setServicesDetailData(data);
      })
      .catch(console.error);
  }, []);

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
    if (event.target.value !== "Altro") {
      setCustomSubject("");
    }
  };

  const handleCustomSubjectChange = (event) => {
    setCustomSubject(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setIsEmailFail(false);
    setIsEmailSuccess(false);

    // Determine the actual subject to send
    const actualSubject =
      selectedSubject === "other" ? customSubject : selectedSubject;

    // Update form data
    const formData = new FormData(e.target);
    formData.set("user_subject", actualSubject); // Set the actual subject

    // Log for debugging
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    // Send the form data to EmailJS
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          // Reset the form fields
          e.target.reset();
          // Reset the states for controlled form fields
          setSelectedSubject("");
          setCustomSubject("");
          setSubject("");
          setIsSending(false);
          setIsEmailSuccess(true);
        },
        (error) => {
          console.log("error");
          console.log(error.text);
          setIsSending(false);
          setIsEmailFail(true);
        }
      );
  };

  return (
    <section
      id="contatti"
      className={`--flx --ai-c --jc-c --flx-d-clm ${styles.contactSection}`}
    >
      <h1>Contattami</h1>
      {general ? (
        <div className={styles.contactContainer}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <p>{general.textContact}</p>
            <input
              type="text"
              name="user_name"
              placeholder="Inserisci il tuo nome"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Inserisci la tua email"
              required
            />
            {/* <input type="text" placeholder="Scrivi un oggetto" required /> */}
            <select
              name="user_subject"
              value={selectedSubject}
              onChange={handleSubjectChange}
              required
            >
              <option value="" disabled>
                Seleziona un oggetto
              </option>
              {servicesDetailData.map((service, index) => {
                const key = `option-${service.id || index}`;
                return (
                  <option key={key} value={service.title}>
                    {service.title}
                  </option>
                );
              })}
              <option value="Altro">Altro</option>
            </select>
            {selectedSubject === "Altro" && (
              <input
                type="text"
                name="custom_subject"
                value={customSubject}
                onChange={handleCustomSubjectChange}
                placeholder="Scrivi il tuo oggetto"
                required
              />
            )}
            <textarea
              name="message"
              placeholder="Scrivi il tuo messaggio"
              required
            ></textarea>

            {!isSending ? (
              <button type="submit" className={`--btn2`}>
                Invia
              </button>
            ) : (
              <div className={styles.sending}>
                <div /> <div /> <div />
              </div>
            )}

            {emailFail ? (
              <h6 className={styles.emailFail}>
                Il servizio non é al momento disponibile. Riprova piú tardi.
              </h6>
            ) : (
              ""
            )}
            {emailSuccess ? (
              <h6 className={styles.emailSuccess}>
                Email ricevuta GRAZIE. Ti contatteró al piú presto.
              </h6>
            ) : (
              ""
            )}
          </form>
          <div className={styles.infoContainer}>
            <img
              src={urlFor(general.contactImg)}
              alt="Martina Vecchio - Contattami"
            />
            <div className={styles.socials}>
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
            <div className={styles.emailBox}>
              {/* <img src={images.email} alt="email" /> */}
              <a href={`mailto:${general.emailAddress}`}>
                {general.emailAddress}
              </a>
            </div>
            <div className={styles.number}>
              {/* <img src={images.phone} alt="numero di telefono" /> */}
              <a href={`tel:${general.phoneNumber}`}>{general.phoneNumber}</a>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default Contacts;
