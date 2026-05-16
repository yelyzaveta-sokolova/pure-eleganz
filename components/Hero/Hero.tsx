"use client";

import styles from "./Hero.module.css";
import useFadeInOnScroll from "@/hooks/useFadeInOnScroll";

export default function Hero({
  onOpenBooking,
}: {
  onOpenBooking: () => void;
}) {
  const { ref, isVisible } =
    useFadeInOnScroll();

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
        <source
          src="/hero.mov"
          type="video/mp4"
        />
      </video>

      {/* Затемнение */}
      <div className={styles.overlay}></div>

      {/* Контент */}
      <div
        ref={ref}
        className={`${styles.content} ${
          isVisible
            ? styles.visible
            : styles.hidden
        }`}
      >

<h1>PURE ELEGANZ</h1>

        <p>
          Sugaring, Maniküre &
          Pediküre in Gronau
        </p>

        <h3 className={styles.text}>
          Professionelle
          Beauty-Behandlungen
          mit Fokus auf Ästhetik,
          Hygiene und Wohlbefinden.
          Termin nur nach
          Vereinbarung
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