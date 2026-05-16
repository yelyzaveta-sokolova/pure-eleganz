"use client";

import { useEffect, useState } from "react";
import styles from "./Popup.module.css";

export default function LuxuryPopup({
  onBookNow,
}: {
  onBookNow: () => void;
}) {
  const [isOpen, setIsOpen] =
    useState(false);

  /* ========================= */
  /* CLOSE POPUP */
  /* ========================= */

  function closePopup() {
    setIsOpen(false);

    localStorage.setItem(
      "pure-eleganz-popup",
      "true"
    );

    document.body.style.overflow =
      "auto";
  }

  /* ========================= */
  /* OPEN POPUP */
  /* ========================= */

  useEffect(() => {
    const alreadySeen =
      localStorage.getItem(
        "pure-eleganz-popup"
      );

    if (alreadySeen) return;

    const timer = setTimeout(() => {
      setIsOpen(true);

      document.body.style.overflow =
        "hidden";
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  /* ========================= */
  /* ESC CLOSE */
  /* ========================= */

  useEffect(() => {
    function handleEsc(
      e: KeyboardEvent
    ) {
      if (e.key === "Escape") {
        closePopup();
      }
    }

    window.addEventListener(
      "keydown",
      handleEsc
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEsc
      );

      document.body.style.overflow =
        "auto";
    };
  }, []);

  /* ========================= */
  /* RENDER */
  /* ========================= */

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      onClick={closePopup}
    >
      <div
        className={styles.modal}
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        {/* glow */}

        <div className={styles.glow1}></div>

        <div className={styles.glow2}></div>

        {/* close */}

        <button
          className={styles.close}
          onClick={closePopup}
        >
          ×
        </button>

        {/* content */}

        <span className={styles.subtitle}>
          PURE ELEGANZ
        </span>

        <h2 className={styles.title}>
          Erster Besuch
          <span> Erfahrung </span>
        </h2>

        <p className={styles.description}>
          Sichern Sie sich 15 % Rabatt
          auf Ihre erste
          Sugaring-Behandlung und
          entdecken Sie luxuriöse
          Self-Care in einer ruhigen,
          eleganten Atmosphäre.
        </p>

        {/* buttons */}

        <div className={styles.actions}>
          <button
            className={
              styles.primaryBtn
            }
            onClick={() => {
              closePopup();
              onBookNow();
            }}
          >
            Termin reservieren
          </button>

          <button
            className={
              styles.secondaryBtn
            }
            onClick={closePopup}
          >
            Vielleicht später
          </button>
        </div>
      </div>
    </div>
  );
}