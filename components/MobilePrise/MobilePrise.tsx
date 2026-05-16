import { useState } from "react";
import styles from "./MobilePrise.module.css";

type Item = {
  name: string;
  price: string;
};

type Bundle = {
  name: string;
  price: number;
  includes: string[];
};

type CardData = {
  category: string;
  services: Item[];
  extras: Item[];
};

const bundles: Bundle[] = [
  {
    name: "Komplett Beine + Bikini",
    price: 50,
    includes: [
      "Komplette Beine (Oberschenkel + Unterschenkel)",
      "Bikini-Zone komplett",
      "Hautberuhigung nach der Behandlung",
    ],
  },
  {
    name: "Bikini + Achseln",
    price: 25,
    includes: [
      "Bikini-Zone (klassisch oder tief)",
      "Achseln komplett",
      "Pflege & Beruhigung der Haut",
    ],
  },
  {
    name: "Full Body Angebot",
    price: 100,
    includes: [
      "Beine komplett",
      "Bikini-Zone",
      "Achseln",
      "Arme",
      "Optional: Gesicht",
      "Intensive Pflege nach der Behandlung",
    ],
  },
];

const cards: CardData[] = [
  {
    category: "Sugaring Pakete",
    services: bundles.map((b) => ({
      name: b.name,
      price: `${b.price}€`,
    })),
    extras: [],
  },
  {
    category: "Maniküre",
    services: [
      { name: "Hygienische Maniküre", price: "20€" },
      { name: "Maniküre mit Gel Lack", price: "35€" },
      { name: "Männer Maniküre", price: "25€" },
    ],
    extras: [
      { name: "Design", price: "10€" },
      { name: "Entfernung der alten Beschichtung", price: "5€" },
      { name: "Pflege (Peeling und Wachs)", price: "10€" },
    ],
  },
  {
    category: "Pediküre",
    services: [
      { name: "Hygienische Pediküre", price: "25€" },
      { name: "Pediküre mit Gel Lack", price: "40€" },
      { name: "Nasse Pediküre", price: "35€" },
    ],
    extras: [
      { name: "Fußmaske", price: "10€" },
      { name: "Peeling & Pflege", price: "10€" },
      { name: "Massage", price: "10€" },
    ],
  },
];

const MobilePriceSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.mobilePriceSection}>
    
      <div className={styles.wrapper}>
        {cards.map((card, index) => {
          const isSugaring = card.category === "Sugaring Pakete";
          const isOpen = openIndex === index;

          return (
            <div key={card.category} className={styles.card}>
              {/* ===================== */}
              {/* SUGARING (ACCORDION) */}
              {/* ===================== */}
              {isSugaring ? (
                <div className={styles.accordionCard}>
                  <div
                    className={styles.accordionHeader}
                    onClick={() => toggle(index)}
                  >
                    <h3 className={styles.cardTitle}>{card.category}</h3>
                    <span className={styles.icon}>{isOpen ? "−" : "+"}</span>
                  </div>

                  <div
                    className={`${styles.accordionBody} ${
                      isOpen ? styles.open : ""
                    }`}
                  >
                    {bundles.map((b) => (
                      <div key={b.name} className={styles.bundleBlock}>
                        <div className={styles.bundleTitle}>
                          {b.name} — {b.price}€
                        </div>

                        <ul className={styles.bundleList}>
                          {b.includes.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* ===================== */
                /* MANIKÜRE / PEDIKÜRE (FLIP) */
                /* ===================== */
                <div
                  className={`${styles.flipCard} ${
                    isOpen ? styles.flipped : ""
                  }`}
                  onClick={() => toggle(index)}
                >
                  <div className={styles.flipCardInner}>
                    {/* FRONT */}
                    <div className={styles.flipCardFront}>
                      <h3 className={styles.cardTitle}>
                        {card.category}
                      </h3>

                      <div className={styles.list}>
                        {card.services.map((item) => (
                          <div key={item.name} className={styles.row}>
                            <span className={styles.name}>
                              {item.name}
                            </span>
                            <span className={styles.price}>
                              {item.price}
                            </span>
                          </div>
                        ))}
                      </div>

                      <p className={styles.flipHint}>
                        Zusätzliche Details →
                      </p>
                    </div>

                    {/* BACK */}
                    <div className={styles.flipCardBack}>
                      <h3 className={styles.cardTitle}>
                        Extras {card.category}
                      </h3>

                      <div className={styles.list}>
                        {card.extras.map((item) => (
                          <div key={item.name} className={styles.row}>
                            <span className={styles.name}>
                              {item.name}
                            </span>
                            <span className={styles.price}>
                              {item.price}
                            </span>
                          </div>
                        ))}
                      </div>

                      <p className={styles.flipHint}>← Zurück</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MobilePriceSection;