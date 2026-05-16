"use client";

import { useEffect, useState } from "react";
import styles from "./FloatingBookButton.module.css";

export default function FloatingBookButton({
  onOpenBooking,
}: {
  onOpenBooking: () => void;
}) {
  const [visible, setVisible] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(
        window.scrollY > 400
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    handleScroll();

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <div
      className={`${styles.wrapper} ${
        visible
          ? styles.show
          : ""
      }`}
    >
      <button
        className={styles.button}
        onClick={onOpenBooking}
      >
        Book Now
      </button>
    </div>
  );
}