"use client";

import { useEffect, useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["about", "leistungen", "kontakt"];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Overlay */}
      <div
        className={`${styles.overlay} ${menuOpen ? styles.showOverlay : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      <header
        className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      >
        <div className={styles.inner}>
          <div className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
  PURE ELEGANZ
</div>
          <nav
            className={`${styles.nav} ${
              menuOpen ? styles.open : ""
            }`}
          >
            <a
              href="#about"
              className={active === "about" ? styles.active : ""}
              onClick={() => setMenuOpen(false)}
            >
              Über uns
            </a>
             <a
              href="#sugaring"
              className={active === "sugaring" ? styles.active : ""}
              onClick={() => setMenuOpen(false)}
            >
              Sugaring - was ist das?
            </a>
            <a
              href="#leistungen"
              className={active === "leistungen" ? styles.active : ""}
              onClick={() => setMenuOpen(false)}
            >
              Preise
            </a>
            <a
              href="#kontakt"
              className={active === "kontakt" ? styles.active : ""}
              onClick={() => setMenuOpen(false)}
            >
              Kontakt
            </a>
          </nav>

          {/* BURGER */}
          <div
            className={`${styles.burger} ${
              menuOpen ? styles.burgerActive : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    </>
  );
}