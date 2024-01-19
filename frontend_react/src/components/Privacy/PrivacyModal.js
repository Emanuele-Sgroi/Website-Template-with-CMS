import React from "react";
import styles from "./Privacy.module.scss";

const PrivacyModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button onClick={onClose} className={styles.closeButton}>
          Chiudi
        </button>
        {children}
      </div>
    </div>
  );
};

export default PrivacyModal;
