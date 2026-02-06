import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
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
