"use client";

import Script from "next/script";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <>
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="lazyOnload"
      />

      <section className={styles.section}>
        <div className={styles.header}>
          <span className={styles.subtitle}>
            GOOGLE REVIEWS
          </span>

          <h2 className={styles.title}>
            Kundinnen <span>Feedback</span>
          </h2>

          <p className={styles.description}>
            Echte Erfahrungen unserer Kundinnen bei PURE ELEGANZ.
          </p>
        </div>

        <div className={styles.reviewsWrapper}>
          <div
            className="elfsight-app-10a673bd-2433-4405-8152-80a8fc42c56e"
            data-elfsight-app-lazy
          />
        </div>
      </section>
    </>
  );
}