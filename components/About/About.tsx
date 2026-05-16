"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";
import useFadeInOnScroll from "@/hooks/useFadeInOnScroll";

export default function About() {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <section
      id="about"
      className={styles.section}
    >
      <div
        ref={ref}
        className={`${styles.card} ${
          isVisible ? styles.visible : styles.hidden
        }`}
      >
        <div className={styles.textBlock}>
          <h2 className={styles.title}>Über uns</h2>

          <p>
            Willkommen bei Pure Eleganz – Ihrem jungen Beauty-Studio im gemütlichen, privaten Rahmen.
Hinter unserem Studio stehen wir beide: zwei zertifizierte Masterinnen, die ihre Arbeit mit höchster Sorgfalt, strenger Hygiene und echter Leidenschaft ausführen.
          </p>

          <p>
           Bei uns erwartet Sie eine ganz persönliche Betreuung ohne anonyme Salon-Atmosphäre.
Wir bieten Ihnen professionelles Sugaring für spürbar glatte Haut sowie erstklassige Maniküre und Pedi­küre.
          </p>

          <p>
          Unser Ziel ist es, dass Sie sich rundum wohlfühlen.
Wir nehmen uns Zeit für Ihre Wünsche und bringen Ihre natürliche Schönheit zum Strahlen.
          </p>
        </div>
<div className={styles.imageBlock}>
  <div className={styles.imageWrapper}>
    <Image
      src="/about.jpg"
      alt="Pure Eleganz Studio"
      fill
      className={styles.image}
    />
  </div>
</div>
      </div>
    </section>
  );
}