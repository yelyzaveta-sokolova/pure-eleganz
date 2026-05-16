"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";
import styles from "./BookingModal.module.css";

type Service =
  | "Sugaring"
  | "Maniküre"
  | "Pediküre"
  | "";

type FormState = {
  service: Service;

  selectedBundles: string[];
  selectedZones: string[];

  manicureBase: string[];
  manicureDesign: string[];

  pedicureBase: string[];
  pedicureDesign: string[];

  date: string;
  time: string;
  notes: string;
  firstVisit: boolean;
  allergies: string[];
};

const PRICES = {
  bundles: {
    "Komplett Beine + Bikini": 50,
    "Bikini + Achseln": 25,
    "Full Body Angebot": 100,
  },

  zones: {
    "Beine komplett": 45,
    "Beine bis zum Knie": 30,
    Arme: 25,
    "Arme bis zum Ellenbogen": 15,
    Brazilian: 30,
    Bikini: 20,
    Achseln: 10,
    Gesicht: 10,
    Bauch: 10,
    Rücken: 10,
  },

  manicureBase: {
    "Hygienische Maniküre": 20,
    "Maniküre mit Gel Lack": 35,
    "Männer Maniküre": 25,
  },

  pedicureBase: {
    "Hygienische Pediküre": 25,
    "Pediküre mit Gel Lack": 40,
    "Nasse Pediküre": 35,
  },

  extras: {
    Design: 10,
    "Entfernung der alten Beschichtung":
      5,
    "Pflege(Peeling und Wachs zur Feuchtigkeitspflege)":
      10,

    Fußmaske: 10,
    "Trockene Haut(Peeling und Wachs zur Feuchtigkeitspflege)":
      10,
    Massage: 10,
  },
};

const sugaringZones = [
  "Beine komplett",
  "Beine bis zum Knie",
  "Arme",
  "Arme bis zum Ellenbogen",
  "Brazilian",
  "Bikini",
  "Achseln",
  "Gesicht",
  "Rücken",
  "Bauch",
];

export default function BookingModal({
  open,
  onClose,
  firstVisitDefault = false,
}: {
  open: boolean;
  onClose: () => void;
  firstVisitDefault?: boolean;
}) {
  const [step, setStep] = useState(1);

  const [contactStep, setContactStep] =
    useState(false);

  const [sugaringStep, setSugaringStep] =
    useState<"bundles" | "zones">(
      "bundles"
    );

  const phone = "491757043089";

  const email =
    "	pure.eleganzzz@gmail.com";

const [form, setForm] =
  useState<FormState>({
    service: "",

    selectedBundles: [],
    selectedZones: [],

    manicureBase: [],
    manicureDesign: [],

    pedicureBase: [],
    pedicureDesign: [],

    date: "",
    time: "",
    notes: "",
    firstVisit: firstVisitDefault,
    allergies: [],
  });

useEffect(() => {
  if (open) {
    setForm((prev) => ({
      ...prev,
      firstVisit:
        firstVisitDefault,
    }));
  }
}, [
  firstVisitDefault,
  open,
]);

const toggle = <
    K extends keyof FormState
  >(
    value: string,
    key: K
  ) => {
    setForm((prev) => {
      const arr = prev[
        key
      ] as unknown as string[];

      const exists =
        arr.includes(value);

      return {
        ...prev,
        [key]: exists
          ? arr.filter(
              (v) => v !== value
            )
          : [...arr, value],
      };
    });
  };

  const lockedZones = useMemo(() => {
    const locked: string[] = [];

    if (
      form.selectedBundles.includes(
        "Full Body Angebot"
      )
    ) {
      return Object.keys(PRICES.zones);
    }

    if (
      form.selectedBundles.includes(
        "Komplett Beine + Bikini"
      )
    ) {
      locked.push(
        "Beine komplett",
        "Bikini"
      );
    }

    if (
      form.selectedBundles.includes(
        "Bikini + Achseln"
      )
    ) {
      locked.push(
        "Bikini",
        "Achseln"
      );
    }

    return locked;
  }, [form.selectedBundles]);

  const price = useMemo(() => {
    let total = 0;

    if (form.service === "Sugaring") {
      form.selectedBundles.forEach(
        (b) => {
          total +=
            PRICES.bundles[
              b as keyof typeof PRICES.bundles
            ] || 0;
        }
      );

      form.selectedZones.forEach((z) => {
        total +=
          PRICES.zones[
            z as keyof typeof PRICES.zones
          ] || 0;
      });
    }

    if (
      form.service === "Maniküre"
    ) {
      form.manicureBase.forEach((b) => {
        total +=
          PRICES.manicureBase[
            b as keyof typeof PRICES.manicureBase
          ] || 0;
      });

      form.manicureDesign.forEach(
        (d) => {
          total +=
            PRICES.extras[
              d as keyof typeof PRICES.extras
            ] || 0;
        }
      );
    }

    if (
      form.service === "Pediküre"
    ) {
      form.pedicureBase.forEach((b) => {
        total +=
          PRICES.pedicureBase[
            b as keyof typeof PRICES.pedicureBase
          ] || 0;
      });

      form.pedicureDesign.forEach(
        (d) => {
          total +=
            PRICES.extras[
              d as keyof typeof PRICES.extras
            ] || 0;
        }
      );
    }

    if (form.firstVisit) {
      total = total * 0.85;
    }

    return total.toFixed(2);
  }, [form]);

 
const bookingMessage = `
✨ PURE ELEGANZ BOOKING

Service: ${form.service}

${
  form.service === "Sugaring"
    ? `
Bundles:
${form.selectedBundles.join(", ") || "-"}

Zonen:
${form.selectedZones.join(", ") || "-"}
`
    : ""
}

${
  form.service === "Maniküre"
    ? `
Maniküre:
${form.manicureBase.join(", ") || "-"}

Maniküre Extras:
${form.manicureDesign.join(", ") || "-"}
`
    : ""
}

${
  form.service === "Pediküre"
    ? `
Pediküre:
${form.pedicureBase.join(", ") || "-"}

Pediküre Extras:
${form.pedicureDesign.join(", ") || "-"}
`
    : ""
}

Erstbesuch:
${form.firstVisit ? "Ja (-15%)" : "Nein"}

Allergien:
${form.allergies.join(", ") || "-"}

Nachricht:
${form.notes || "-"}

Datum: ${form.date || "-"}

Uhrzeit: ${form.time || "-"}

💰 Preis: €${price}
`;

  const resetBooking = () => {
    setStep(1);

    setSugaringStep("bundles");

    setContactStep(false);

    setForm({
      service: "",

      selectedBundles: [],
      selectedZones: [],

      manicureBase: [],
      manicureDesign: [],

      pedicureBase: [],
      pedicureDesign: [],

      date: "",
      time: "",
      notes: "",
      firstVisit: firstVisitDefault,
      allergies: [],
    });

    onClose();
  };

  const sendToWhatsApp = () => {
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(
        bookingMessage
      )}`,
      "_blank"
    );

    resetBooking();
  };

  const sendToEmail = () => {
    window.location.href = `mailto:${email}?subject=Terminbuchung PURE ELEGANZ&body=${encodeURIComponent(
      bookingMessage
    )}`;

    resetBooking();
  };

  const copyBooking = async () => {
    try {
      await navigator.clipboard.writeText(
        bookingMessage
      );

      alert(
        "Buchungsinformationen kopiert ✨"
      );
    } catch {
      alert(
        "Kopieren fehlgeschlagen"
      );
    }
  };

  if (!open) return null;

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
    >
      <div
  className={styles.modal}
  onClick={(e) =>
    e.stopPropagation()
  }
>
        {contactStep ? (
          <div>
            <h2 className={styles.title}>
              Buchung senden
            </h2>

            <p className={styles.subtitle}>
              Wähle deine bevorzugte
              Kontaktmethode
            </p>

            <div className={styles.grid}>
              <button
                className={styles.card}
                onClick={
                  sendToWhatsApp
                }
              >
                WhatsApp
              </button>

              <button
                className={styles.card}
                onClick={sendToEmail}
              >
                E-Mail
              </button>

              <button
                className={styles.card}
                onClick={copyBooking}
              >
                Text kopieren
              </button>
            </div>

            <p
              className={
                styles.helper
              }
            >
              Du kannst deine
              Buchungsinformationen
              kopieren und uns über
              Instagram, WhatsApp
              oder E-Mail senden.
            </p>

            <div
              className={
                styles.actions
              }
            >
              <button
                onClick={() =>
                  setContactStep(
                    false
                  )
                }
              >
                Zurück
              </button>
            </div>
          </div>
        ) : (
          <>

        {/* STEP 1 */}
        {step === 1 && (
          <div>
            <h2 className={styles.title}>
              Termin buchen
            </h2>

            <p className={styles.subtitle}>
              Wähle zuerst deine Dienstleistung
            </p>

            <div className={styles.grid}>
              {[
                "Sugaring",
                "Maniküre",
                "Pediküre",
              ].map((s) => (
                <div
                  key={s}
                  className={styles.card}
                  onClick={() => {
                    setForm({
                      ...form,
                      service: s as Service,
                    });

                    setStep(2);
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        )}
{/* STEP 2 — SUGARING */}
{step === 2 &&
  form.service === "Sugaring" && (
    <>
      {sugaringStep === "bundles" && (
        <div>
          <h2 className={styles.title}>
            Pakete
          </h2>

          <p className={styles.subtitle}>
            Optional: Paket wählen oder
            überspringen
          </p>

          <div className={styles.grid}>
            {Object.keys(PRICES.bundles).map(
              (b) => {
                const fullBodySelected =
                  form.selectedBundles.includes(
                    "Full Body Angebot"
                  );

                const disabled =
                  fullBodySelected &&
                  b !==
                    "Full Body Angebot";

                return (
                  <div
                    key={b}
                    className={`${styles.card} ${
                      form.selectedBundles.includes(
                        b
                      )
                        ? styles.selected
                        : ""
                    } ${
                      disabled
                        ? styles.disabled
                        : ""
                    }`}
                    onClick={() => {
                      // FULL BODY
                      if (
                        b ===
                        "Full Body Angebot"
                      ) {
                        const isSelected =
                          form.selectedBundles.includes(
                            "Full Body Angebot"
                          );

                        setForm({
                          ...form,
                          selectedBundles:
                            isSelected
                              ? []
                              : [
                                  "Full Body Angebot",
                                ],
                        });

                        return;
                      }

                      // block others
                      if (
                        form.selectedBundles.includes(
                          "Full Body Angebot"
                        )
                      ) {
                        return;
                      }

                      toggle(
                        b,
                        "selectedBundles"
                      );
                    }}
                  >
                    {b}
                  </div>
                );
              }
            )}
          </div>
        </div>
      )}

      {sugaringStep === "zones" && (
        <div>
          <h2 className={styles.title}>
            Zonen
          </h2>

          <div className={styles.grid}>
            {sugaringZones.map((z) => {
              const disabled =
                lockedZones.includes(z);

              return (
                <div
                  key={z}
                  className={`${styles.card} ${
                    form.selectedZones.includes(
                      z
                    )
                      ? styles.selected
                      : ""
                  } ${
                    disabled
                      ? styles.disabled
                      : ""
                  }`}
                  onClick={() => {
                    if (disabled) return;

                    toggle(
                      z,
                      "selectedZones"
                    );
                  }}
                >
                  {z}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  )}

        {/* STEP 2 — MANIKÜRE */}
        {step === 2 &&
          form.service === "Maniküre" && (
            <div>
              <h2 className={styles.title}>
                Maniküre auswählen
              </h2>

              <p className={styles.subtitle}>
                Wähle zuerst die
                Hauptbehandlung
              </p>

              <div className={styles.grid}>
                {[
                  "Hygienische Maniküre",
                  "Maniküre mit Gel Lack",
                  "Männer Maniküre",
                ].map((b) => (
                  <div
                    key={b}
                    className={`${styles.card} ${
                      form.manicureBase.includes(b)
                        ? styles.selected
                        : ""
                    }`}
                    onClick={() =>
                      setForm({
                        ...form,
                        manicureBase: [b],
                      })
                    }
                  >
                    {b}
                  </div>
                ))}
              </div>
            </div>
          )}

        {/* STEP 2 — PEDIKÜRE */}
        {step === 2 &&
          form.service === "Pediküre" && (
            <div>
              <h2 className={styles.title}>
                Pediküre auswählen
              </h2>

              <p className={styles.subtitle}>
                Wähle zuerst die
                Hauptbehandlung
              </p>

              <div className={styles.grid}>
                {[
                  "Hygienische Pediküre",
                  "Pediküre mit Gel Lack",
                  "Nasse Pediküre",
                ].map((b) => (
                  <div
                    key={b}
                    className={`${styles.card} ${
                      form.pedicureBase.includes(b)
                        ? styles.selected
                        : ""
                    }`}
                    onClick={() =>
                      setForm({
                        ...form,
                        pedicureBase: [b],
                      })
                    }
                  >
                    {b}
                  </div>
                ))}
              </div>
            </div>
          )}

        {/* STEP 3 — MANIKÜRE DESIGN */}
        {step === 3 &&
          form.service === "Maniküre" && (
            <div>
              <h2 className={styles.title}>
                Extras hinzufügen
              </h2>

              <p className={styles.subtitle}>
                Optionale Extras auswählen
              </p>

              <div className={styles.grid}>
                {[
                  "Design",
                  "Entfernung der alten Beschichtung",
                  "Pflege(Peeling und Wachs zur Feuchtigkeitspflege)",
                ].map((d) => (
                  <div
                    key={d}
                    className={`${styles.card} ${
                      form.manicureDesign.includes(
                        d
                      )
                        ? styles.selected
                        : ""
                    }`}
                    onClick={() =>
                      toggle(
                        d,
                        "manicureDesign"
                      )
                    }
                  >
                    {d}
                  </div>
                ))}
              </div>
            </div>
          )}

        {/* STEP 3 — PEDIKÜRE DESIGN */}
        {step === 3 &&
          form.service === "Pediküre" && (
            <div>
              <h2 className={styles.title}>
                Extras hinzufügen
              </h2>

              <p className={styles.subtitle}>
                Optionale Extras auswählen
              </p>

              <div className={styles.grid}>
                {[
                  "Fußmaske",
                  "Trockene Haut(Peeling und Wachs zur Feuchtigkeitspflege)",
                  "Massage",
                ].map((d) => (
                  <div
                    key={d}
                    className={`${styles.card} ${
                      form.pedicureDesign.includes(
                        d
                      )
                        ? styles.selected
                        : ""
                    }`}
                    onClick={() =>
                      toggle(
                        d,
                        "pedicureDesign"
                      )
                    }
                  >
                    {d}
                  </div>
                ))}
              </div>
            </div>
          )}

        {/* STEP 3 / STEP 4 — FINAL */}
        {((form.service === "Sugaring" &&
          step === 3) ||
          ((form.service === "Maniküre" ||
            form.service === "Pediküre") &&
            step === 4)) && (
          <div className={styles.step3}>
            <div className={styles.block}>
              <label>Datum</label>

              <input
                type="date"
                onChange={(e) =>
                  setForm({
                    ...form,
                    date: e.target.value,
                  })
                }
              />
            </div>

            <div className={styles.block}>
  <label>Uhrzeit (Wunschzeit)</label>

  <input
    type="time"
    onChange={(e) =>
      setForm({
        ...form,
        time: e.target.value,
      })
    }
  />

  <span className={styles.helper}>
    ⚠️ Hinweis: Uhrzeit ist nur ein
    Wunschtermin. Wir bestätigen die
    Verfügbarkeit.
  </span>
</div>

            {/* FIRST VISIT */}
            <div className={styles.grid}>
              <div
                className={`${styles.card} ${
                  form.firstVisit
                    ? styles.active
                    : ""
                }`}
                onClick={() =>
                  setForm({
                    ...form,
                    firstVisit:
                      !form.firstVisit,
                  })
                }
              >
                Erstbesuch -15%
              </div>
            </div>

            {/* ALLERGIES */}
            <div className={styles.grid}>
              {[
                "Empfindliche Haut",
                "Allergie",
                "Sensibel",
              ].map((a) => (
                <div
                  key={a}
                  className={`${styles.card} ${
                    form.allergies.includes(a)
                      ? styles.active
                      : ""
                  }`}
                  onClick={() =>
                    toggle(a, "allergies")
                  }
                >
                  {a}
                </div>
              ))}
            </div>

            {/* NOTES */}
            <div className={styles.block}>
              <label>Nachricht</label>

              <textarea
                value={form.notes}
                onChange={(e) =>
                  setForm({
                    ...form,
                    notes: e.target.value,
                  })
                }
                placeholder="Optionaler Kommentar..."
              />
            </div>

            <div className={styles.summary}>
              Preis: <b>€{price}</b>
            </div>
          </div>
        )}

        {/* ACTIONS */}
        <div className={styles.actions}>
          {step > 1 && (
            <button
              onClick={() => {
                if (
                  form.service ===
                    "Sugaring" &&
                  step === 2 &&
                  sugaringStep === "zones"
                ) {
                  setSugaringStep("bundles");
                  return;
                }

                setStep(step - 1);
              }}
            >
              Zurück
            </button>
          )}

          {/* SUGARING */}
          {form.service === "Sugaring" &&
            step < 3 && (
              <button
                onClick={() => {
                  if (
                    step === 2 &&
                    sugaringStep ===
                      "bundles"
                  ) {
                    setSugaringStep("zones");
                    return;
                  }

                  setStep(step + 1);
                }}
              >
                Weiter
              </button>
            )}

          {/* MANIKÜRE / PEDIKÜRE */}
          {(form.service === "Maniküre" ||
            form.service === "Pediküre") &&
            step < 4 && (
              <button
                onClick={() =>
                  setStep(step + 1)
                }
              >
                Weiter
              </button>
            )}

           {/* CONFIRM */}
            {((form.service ===
              "Sugaring" &&
              step === 3) ||
              ((form.service ===
                "Maniküre" ||
                form.service ===
                  "Pediküre") &&
                step === 4)) && (
              <button
                onClick={() =>
                  setContactStep(
                    true
                  )
                }
              >
                Termin bestätigen
              </button>
            )}
        </div>
      </>
    )}
  </div>
</div>
);
}