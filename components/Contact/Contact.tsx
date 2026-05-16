"use client";
import styles from "./Contact.module.css";
import useFadeInOnScroll from "@/hooks/useFadeInOnScroll";

export default function Contact() {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <section
      id="kontakt"
      ref={ref}
      className={`${styles.section} ${
        isVisible ? styles.visible : styles.hidden
      }`}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>Kontakt</h2>

        <p className={styles.info}>
          Termin nur nach Vereinbarung
        </p>

        <p className={styles.info}>
          Telefon:{" "}
          <a href="tel:+491757043089" className={styles.link}>
            +49 175 7043089
          </a>
        </p>

        <p className={styles.info}>
          E-Mail:{" "}
          <a
            href="mailto:pure.eleganzzz@gmail.com"
            className={styles.link}
          >
            pure.eleganzzz@gmail.com
          </a>
        </p>

        <a
          href="https://wa.me/491757043089"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          WhatsApp schreiben
        </a>
      </div>
    </section>
  );
}