"use client";

import { useState } from "react";
import styles from "./Sugaring.module.css";

const faqItems = [
  {
    question: "Ist Sugaring schmerzhaft?",
    answer:
      "Sugaring ist deutlich sanfter als klassisches Waxing. Mit regelmäßigen Behandlungen werden die Haare feiner und die Behandlung angenehmer.",
  },
  {
    question: "Wie lange hält das Ergebnis?",
    answer:
      "Die Haut bleibt in der Regel 3 bis 5 Wochen glatt – abhängig vom Haarwachstum und der behandelten Zone.",
  },
  {
    question: "Welche Haarlänge ist ideal?",
    answer:
      "Optimal sind etwa 4–6 mm Haarlänge, damit die Zuckerpaste die Haare perfekt greifen kann.",
  },
  {
    question: "Ist Sugaring für empfindliche Haut geeignet?",
    answer:
      "Ja. Die natürliche Zuckerpaste ist besonders hautschonend und ideal für empfindliche Hauttypen.",
  },
];

export default function SugaringInfo() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section id="sugaring" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>PURE ELEGANZ SUGARING</span>

        <h2 className={styles.title}>
          Sanfte Haarentfernung mit professionellem Sugaring
        </h2>

        <p className={styles.description}>
          Sugaring ist eine besonders hautschonende Methode zur Haarentfernung
          mit natürlicher Zuckerpaste. Die Haare werden sanft in Wuchsrichtung
          entfernt, wodurch Hautirritationen, eingewachsene Haare und starke
          Reizungen minimiert werden.
        </p>

        <div className={styles.cards}>
          <div className={styles.infoCard}>
            <h3>Warum Sugaring?</h3>

            <p>
              Im Vergleich zur Rasur bleibt die Haut deutlich länger glatt. Die
              Haare wachsen feiner nach und die Haut fühlt sich geschmeidiger an.
            </p>

            <ul>
              <li>Langanhaltend glatte Haut</li>
              <li>Weniger Hautirritationen</li>
              <li>Ideal für empfindliche Haut</li>
              <li>Natürlich & hygienisch</li>
            </ul>
          </div>

          <div className={styles.infoCard}>
            <h3>Unsere Materialien</h3>

            <p>
              Wir arbeiten ausschließlich mit hochwertiger professioneller
              Zuckerpaste und achten auf maximale Hygiene und sanfte Pflege.
            </p>

            <ul>
              <li>Professionelle Zuckerpaste</li>
              <li>Sanfte Pflegeprodukte</li>
              <li>Hygienische Einwegmaterialien</li>
              <li>Für sensible Haut geeignet</li>
            </ul>
          </div>
        </div>

        <div className={styles.process}>
          <h3 className={styles.processTitle}>So läuft die Behandlung ab</h3>

          <div className={styles.steps}>
            <div className={styles.step}>
              <span>01</span>
              <p>Reinigung & Vorbereitung der Haut</p>
            </div>

            <div className={styles.step}>
              <span>02</span>
              <p>Sanftes Entfernen der Haare mit Zuckerpaste</p>
            </div>

            <div className={styles.step}>
              <span>03</span>
              <p>Beruhigende Pflege nach der Behandlung</p>
            </div>
          </div>
        </div>

        <div className={styles.faq}>
          <h3 className={styles.faqTitle}>Häufige Fragen</h3>

          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div key={item.question} className={styles.accordionItem}>
                <button
                  type="button"
                  className={styles.accordionButton}
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span className={styles.accordionIcon}>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`${styles.accordionContent} ${
                    isOpen ? styles.open : ""
                  }`}
                >
                  <div className={styles.accordionInner}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}