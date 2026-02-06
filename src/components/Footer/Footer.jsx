import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Colonne gauche : identité + contact */}
        <div className={styles.brandBlock}>
          <p className={styles.brand}>Château l’Exemple</p>

          <p className={styles.contact}>
            <a href="mailto:contact@chateau-exemple.fr">
              contact@chateau-exemple.fr
            </a><br />
            <a href="tel:+33500000000">
              +33&nbsp;5&nbsp;00&nbsp;00&nbsp;00&nbsp;00
            </a>
          </p>
        </div>

        {/* Colonne centre : horaires + droits */}
        <div className={styles.hoursBlock}>
          <p className={styles.hours}>
            <strong>Horaires</strong><br />
            Du lundi au vendredi<br />
            10h – 18h
          </p>

          <p className={styles.legal}>
            © {new Date().getFullYear()} Château l’Exemple<br />
            Tous droits réservés
          </p>
        </div>

        {/* Colonne droite : navigation */}
        <nav className={styles.nav} aria-label="Navigation pied de page">
          <Link href="/">Accueil</Link>
          <Link href="/about">Le domaine</Link>
          <Link href="/wines">Les vins</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/mentions-legales">Mentions légales</Link>
        </nav>
      </div>
    </footer>
  );
}
