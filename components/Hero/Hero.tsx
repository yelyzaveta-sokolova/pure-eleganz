"use client";

import styles from "./Hero.module.css";

export default function Hero({
  onOpenBooking,
}: {
  onOpenBooking: () => void;
}) {
  return (
    <section className={styles.hero}>
      {/* Видео фон */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className={styles.video}
      >
        <source src="/hero.mov" type="video/mp4" />
      </video>

      {/* Затемнение */}
      <div className={styles.overlay} />

      {/* Контент */}
      <div className={styles.content}>
        <h1>PURE ELEGANZ</h1>

        <p>Sugaring, Maniküre & Pediküre in Gronau</p>

        <h3 className={styles.text}>
          Professionelle Beauty-Behandlungen mit Fokus auf Ästhetik,
          Hygiene und Wohlbefinden. Termin nur nach Vereinbarung
        </h3>

        <button
          className={styles.button}
          onClick={onOpenBooking}
        >
          Termin buchen
        </button>
      </div>
    </section>
  );
}