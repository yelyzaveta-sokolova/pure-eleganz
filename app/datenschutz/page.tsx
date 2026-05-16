import styles from "../(legal)/LegalLayout.module.css";
import Link from "next/link";

export default function Datenschutz() {
  return (
    <div className={styles.page}>
      <Link href="/" className={styles.back}>
        Zurück
      </Link>

      <div className={styles.container}>
        <h1>Datenschutzerklärung</h1>

        <p>
          Der Schutz Ihrer persönlichen Daten ist mir sehr wichtig.
          Nachfolgend informiere ich Sie über die Verarbeitung personenbezogener Daten auf dieser Website.
        </p>

        <h2>1. Verantwortliche</h2>
        <p>
          PURE ELEGANZ<br />
          Serbul & Sokolova<br />
          Moltkestraße 23, 48599 Gronau<br />
          E-Mail: pure.eleganzzz@gmail.com
        </p>

        <h2>2. Erhebung und Speicherung personenbezogener Daten</h2>
        <p>
          Beim Besuch dieser Website werden automatisch Informationen durch den
          Browser an den Server gesendet. Diese Daten dienen der technischen
          Bereitstellung und Sicherheit der Website.
        </p>

        <h2>3. Kontaktaufnahme</h2>
        <p>
          Wenn Sie mich per E-Mail oder Formular kontaktieren, werden Ihre
          Angaben zur Bearbeitung der Anfrage gespeichert.
        </p>

        <h2>4. Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung oder
          Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.
        </p>
      </div>
    </div>
  );
}