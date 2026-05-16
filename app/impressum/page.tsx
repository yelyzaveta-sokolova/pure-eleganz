import styles from "../(legal)/LegalLayout.module.css";
import Link from "next/link";

export default function Impressum() {
  return (
    <div className={styles.page}>
      <Link href="/" className={styles.back}>
        Zurück
      </Link>

      <div className={styles.container}>
        <h1>Impressum</h1>

        <p>
          Angaben gemäß § 5 TMG:
        </p>

        <p>
          PURE ELEGANZ<br />
          Serbul & Sokolova<br />
          Moltkestraße 23<br />
          48599 Gronau
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: +491757043089<br />
          E-Mail: pure.eleganzzz@gmail.com
        </p>

        <h2>Umsatzsteuer</h2>
        <p>
          Umsatzsteuer-ID gemäß §27 a Umsatzsteuergesetz: [falls vorhanden]
        </p>

        <h2>Haftungsausschluss</h2>
        <p>
          Trotz sorgfältiger inhaltlicher Kontrolle übernehme ich keine Haftung
          für die Inhalte externer Links.
        </p>
      </div>
    </div>
  );
}