"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";

export default function Hero() {
  const [canLoadVideo, setCanLoadVideo] = useState(false);

  useEffect(() => {
    const id = "requestIdleCallback" in window
      ? window.requestIdleCallback(() => setCanLoadVideo(true), { timeout: 1500 })
      : window.setTimeout(() => setCanLoadVideo(true), 600);

    return () => {
      if (typeof id === "number") window.clearTimeout(id);
      else window.cancelIdleCallback?.(id);
    };
  }, []);

  return (
    <section id="hero" className={styles.hero} aria-label="Introduction">
      <div className={styles.media} aria-hidden="true">
        {!canLoadVideo ? (
          <Image
            src="/images/hero.jpg"
            alt=""
            fill
            priority
            className={styles.video}
            sizes="100vw"
          />
        ) : (
          <video
            className={styles.video}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/images/hero.jpg"
          >
            <source src="/videos/chateau.webm" type="video/webm" />
            <source src="/videos/chateau.mp4" type="video/mp4" />
          </video>
        )}

        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <p className={styles.kicker}>un exemple de site pour un château exemplaire</p>
        <h1 className={styles.title}>Château L&apos;Exemple</h1>
      </div>
    </section>
  );
}
