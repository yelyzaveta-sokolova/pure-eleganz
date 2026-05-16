"use client";

import styles from "./Services.module.css";
import {
  useEffect,
  useRef,
  useState,
} from "react";

type Zone = {
  className: string;
  name: string;
  price: string;
  title: string;
  description: string;
};

type Bundle = {
  name: string;
  price: number;
};

type Service = {
  name: string;
  price: string;
};

type Extras = {
  maniküre: Service[];
  pediküre: Service[];
};



function MobileCard({
  zone,
}: {
  zone: Zone;
}) {
  const [flipped, setFlipped] =
    useState(false);

  return (
    <div
      className={`${styles.mobileFlipCard} ${
        flipped
          ? styles.mobileFlipped
          : ""
      }`}
      onClick={() =>
        setFlipped(!flipped)
      }
    >
      <div className={styles.mobileFlipInner}>
        {/* FRONT */}

        <div className={styles.mobileFront}>
          <h4>{zone.title}</h4>

          <span>{zone.price}</span>
        </div>

        {/* BACK */}

        <div className={styles.mobileBack}>
          <h4>{zone.title}</h4>

          <p>{zone.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [activeZone, setActiveZone] =
    useState<Zone | null>(null);

  const [selectedZone, setSelectedZone] =
    useState<Zone | null>(null);

  const cardRef =
    useRef<HTMLDivElement | null>(null);

  const sugaringZones: Zone[] = [
    {
      className: styles.legs,
      name: "Beine komplett",
      price: "45€",
      title: "Beine komplett",
      description:
        "Sugaring der gesamten Beine inklusive Oberschenkel und Unterschenkel.",
    },
    {
      className: styles.legsshort,
      name: "Beine bis zum Knie",
      price: "30€",
      title: "Beine bis zum Knie",
      description:
        "Sugaring der Unterschenkel bis zum Kniebereich.",
    },
    {
      className: styles.arms,
      name: "Arme",
      price: "25€",
      title: "Arme komplett",
      description:
        "Sugaring der gesamten Arme inklusive Ober- und Unterarme.",
    },
    {
      className: styles.armsshort,
      name: "Arme bis zum Ellenbogen",
      price: "15€",
      title:
        "Arme bis zum Ellenbogen",
      description:
        "Sugaring der Unterarme bis zum Ellenbogen.",
    },
    {
      className: styles.brazilian,
      name: "Brazilian",
      price: "30€",
      title: "Brazilian",
      description:
        "Komplette Intimzone inklusive empfindlicher Bereiche.",
    },
    {
      className: styles.bikini,
      name: "Bikini",
      price: "20€",
      title: "Bikini",
      description:
        "Sanfte Haarentfernung entlang der Bikini-Linie.",
    },
    {
      className: styles.axeln,
      name: "Achseln",
      price: "10€",
      title: "Achseln",
      description:
        "Schonendes Sugaring der Achselbereiche.",
    },
    {
      className: styles.face,
      name: "Gesicht",
      price: "10€",
      title: "Gesicht",
      description:
        "Feine Haarentfernung im Gesichtsbereich.",
    },
    {
      className: styles.lowerback,
      name: "Poperek",
      price: "10€",
      title: "Poperek",
      description:
        "Sugaring des unteren Rückenbereichs.",
    },
    {
      className: styles.belly,
      name: "Bauch",
      price: "10€",
      title: "Bauch",
      description:
        "Sanfte Haarentfernung im Bauchbereich.",
    },
  ];

  const bundles: Bundle[] = [
  { name: "Komplett Beine + Bikini", price: 50 },
  { name: "Bikini + Achseln", price: 25 },
  { name: "Full Body Angebot", price: 100 },
];

  const manicure: Service[] = [
    {
      name: "Hygienische Maniküre",
      price: "20€",
    },
    {
      name: "Maniküre mit Gel Lack",
      price: "35€",
    },
    {
      name: "Männer Maniküre",
      price: "25€",
    },
  ];

  const pedicure: Service[] = [
    {
      name: "Hygienische Pediküre",
      price: "25€",
    },
    {
      name: "Pediküre mit Gel Lack",
      price: "40€",
    },
    {
      name: "Nasse Pediküre",
      price: "35€",
    },
  ];

  const extras: Extras = {
  maniküre: [
    { name: "Design", price: "10€" },
    { name: "Entfernung der alten Beschichtung", price: "5€" },
    { name: "Pflege (Peeling und Wachs zur Feuchtigkeitspflege)", price: "10€" },
  ],
  pediküre: [
    { name: "Fußmaske", price: "10€" },
    { name: "Trockene Haut (Peeling und Wachs zur Feuchtigkeitspflege)", price: "10€" },
    { name: "Massage", price: "10€" },
  ],
};

  useEffect(() => {
    const handleClickOutside = (
      event: MouseEvent
    ) => {
      if (
        cardRef.current &&
        !cardRef.current.contains(
          event.target as Node
        )
      ) {
        setSelectedZone(null);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <section
      className={styles.section}
      id="leistungen"
    >
      <div className={styles.container}>
        {/* HEADER */}

        <div className={styles.header}>

          <h2 className={styles.btitle}>
            Pure <span>Eleganz</span>
          </h2>
            <h3 className={styles.title}>
            Preise
          </h3>
         

          <p className={styles.description}>
            Premium-Sugaring sowie Maniküre- &
            Pediküre-Behandlungen mit eleganter
            Pflege.
          </p>
        </div>

        {/* DESKTOP */}
{/*LEFT SIDE*/}
        <div className={styles.heroGrid}>
          {/* BODY MAP */}

          <div className={styles.bodyWrapper}>
            <p className={styles.helperText}>
             Klicken Sie auf die Körperregionen, um mehr über Preise und Behandlungen zu erfahren.
            </p>

            <div
              ref={cardRef}
              className={`${styles.flipContainer} ${
                selectedZone
                  ? styles.flipped
                  : ""
              }`}
            >
              <div className={styles.flipInner}>
                {/* FRONT */}

                <div className={styles.flipFront}>
                  <div className={styles.bodyCard}>
                    <img
                      src="/body.png"
                      alt="Body Map"
                      className={
                        styles.bodyImage
                      }
                    />

                    {sugaringZones.map(
                      (zone) => (
                        <div
                          key={zone.name}
                          className={
                            zone.className
                          }
                          onMouseEnter={() =>
                            setActiveZone(
                              zone
                            )
                          }
                          onMouseLeave={() =>
                            setActiveZone(
                              null
                            )
                          }
                          onClick={() =>
                            setSelectedZone(
                              zone
                            )
                          }
                        />
                      )
                    )}

                    <div
                      className={`${styles.pricePopup} ${
                        activeZone
                          ? styles.visible
                          : ""
                      }`}
                    >
                      {activeZone && (
                        <>
                          <span>
                            {
                              activeZone.name
                            }
                          </span>

                          <strong>
                            {
                              activeZone.price
                            }
                          </strong>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* BACK */}

                <div
                  className={styles.flipBack}
                  onClick={() =>
                    setSelectedZone(null)
                  }
                >
                  {selectedZone && (
                    <div
                      className={
                        styles.infoCard
                      }
                    >
                      <span
                        className={
                          styles.infoMini
                        }
                      >
                        SUGARING ZONE
                      </span>

                      <h3>
                        {
                          selectedZone.title
                        }
                      </h3>

                      <div
                        className={
                          styles.infoPrice
                        }
                      >
                        {
                          selectedZone.price
                        }
                      </div>

                      <p>
                        {
                          selectedZone.description
                        }
                      </p>

                      <div
                        className={
                          styles.tapHint
                        }
                      >
                        Tippen Sie irgendwohin zum Schließen.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
              <div className={styles.luxuryCard}>
              <span
                className={
                  styles.cardMiniTitle
                }
              >
                SUGARING ERLEBNIS
              </span>

              <h3>
               Weich. Glatt. Elegant.
              </h3>

              <p>
                Entdecken Sie sanfte Sugaring-Behandlungen –
konzipiert für seidig glatte Haut
und ein luxuriöses Self-Care-Erlebnis.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div className={styles.rightContent}>
            <div className={styles.servicesGrid}>
              {/* MANICURE */}

              <div
                className={styles.serviceCard}
              >
                <h4>Maniküre</h4>

                {manicure.map((item) => (
                  <div
                    key={item.name}
                    className={
                      styles.serviceRow
                    }
                  >
                    <span>{item.name}</span>

                    <span>
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>

              {/* PEDICURE */}

              <div
                className={styles.serviceCard}
              >
                <h4>Pediküre</h4>

                {pedicure.map((item) => (
                  <div
                    key={item.name}
                    className={
                      styles.serviceRow
                    }
                  >
                    <span>{item.name}</span>

                    <span>
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
              {/* BUNDLES */}

<div className={styles.serviceCard}>
  <h4>Sugaring Pakete</h4>

  {bundles.map((item) => (
    <div key={item.name} className={styles.serviceRow}>
      <span>{item.name}</span>
      <span>{item.price}€</span>
    </div>
  ))}
</div>
              {/* EXTRAS */}

<div className={styles.serviceCard}>
  <h4>Zusatzleistungen</h4>

  {/* Maniküre Extras */}
  <h5 style={{ marginTop: "10px", opacity: 0.7 }}>Maniküre</h5>

  {extras.maniküre.map((item) => (
    <div key={item.name} className={styles.serviceRow}>
      <span>{item.name}</span>
      <span>{item.price}</span>
    </div>
  ))}

  {/* Pediküre Extras */}
  <h5 style={{ marginTop: "20px", opacity: 0.7 }}>Pediküre</h5>

  {extras.pediküre.map((item) => (
    <div key={item.name} className={styles.serviceRow}>
      <span>{item.name}</span>
      <span>{item.price}</span>
    </div>
  ))}
</div>
            </div>
          </div>
        </div>

        {/* MOBILE VERSION */}

        <div className={styles.mobileCards}>
          {sugaringZones.map((zone) => (
            <MobileCard
              key={zone.name}
              zone={zone}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}

