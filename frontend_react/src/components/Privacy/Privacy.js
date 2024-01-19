import React from "react";
import styles from "./Privacy.module.scss";
import { useGlobalState } from "../../context/GlobalStateContext";

const Privacy = () => {
  const { general } = useGlobalState();

  const get43DaysBeforeDate = () => {
    const today = new Date();
    const daysBefore = new Date(today.setDate(today.getDate() - 43));
    return `${daysBefore.getDate()}/${
      daysBefore.getMonth() + 1
    }/${daysBefore.getFullYear()}`;
  };

  return (
    <div className={styles.privacyPolicyInfo}>
      <h2>Politica sulla Privacy</h2>

      <p>
        <strong>Aggiornato il {get43DaysBeforeDate()} </strong>
      </p>

      <h3>Informazioni Generali</h3>
      <p>
        Questo sito web, <strong>{general.myLink}</strong>, è gestito da{" "}
        <strong>Martina Vecchio</strong>
      </p>
      <ul>
        <li>•&nbsp;{general.pIva.length > 0 ? general.pIva : ""}</li>
        <li>•&nbsp;{general.emailAddress}</li>
        <li>•&nbsp;{general.phoneNumber}</li>
      </ul>

      <h3>Raccolta dei Dati Personali</h3>
      <p>
        Il sito utilizza il modulo di contatto per raccogliere il nome e
        l'indirizzo email dei visitatori. Questi dati sono utilizzati
        esclusivamente per rispondere alle richieste degli utenti e non vengono
        condivisi con terze parti.
      </p>

      <h3>Utilizzo dei Dati</h3>
      <p>
        I dati raccolti tramite il modulo di contatto vengono utilizzati solo
        per fornire risposte alle richieste degli utenti. Il sito non utilizza
        questi dati per inviare newsletter o aggiornamenti promozionali. Nel
        caso in cui questa funzionalitá verrebbe aggiunta, il sito non
        utilizzerá questi dati per inviare newsletter o aggiornamenti
        promozionali senza il consenso esplicito dell'utente.
      </p>

      <h3>Sicurezza dei Dati</h3>
      <p>
        Il sito adotta misure di sicurezza appropriate per proteggere i dati
        raccolti. In questo caso: email e nome dell'utente
      </p>

      <h3>Diritti dell'Utente</h3>
      <p>
        Gli utenti hanno il diritto di accedere ai propri dati personali,
        richiedere la loro correzione o cancellazione. Per qualsiasi richiesta
        relativa ai tuoi dati personali, contattaci all'indirizzo email fornito.
      </p>

      <h3>Modifiche alla Politica sulla Privacy</h3>
      <p>
        Questa politica sulla privacy può essere aggiornata periodicamente. Gli
        utenti sono invitati a rivedere questa pagina regolarmente per essere
        informati su eventuali modifiche.
      </p>
    </div>
  );
};

export default Privacy;
