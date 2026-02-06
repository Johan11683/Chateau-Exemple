import Link from "next/link";
import styles from "./HeroHeader.module.scss";

export default function HeroHeader() {
  return (
    <nav className={styles.heroHeader} aria-label="Navigation accueil">
      <Link href="/about">Le domaine</Link>
      <Link href="/wines">Les vins</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
