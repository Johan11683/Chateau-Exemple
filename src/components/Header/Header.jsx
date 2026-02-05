"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
  const headerRef = useRef(null);

  // ✅ stable SSR/CSR : toujours false au premier rendu
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");

    // ✅ pas de hero => scrolled
    if (!hero) {
      // on passe par rAF (callback externe) -> pas de mismatch + évite la règle dans beaucoup de setups
      requestAnimationFrame(() => setIsScrolled(true));
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          L&apos;Ex
        </Link>

        <nav className={styles.nav} aria-label="Navigation principale">
          <Link href="/">Accueil</Link>
          <Link href="/about">Le domaine</Link>
          <Link href="/wines">Les vins</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
