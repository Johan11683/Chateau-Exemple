import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-label="Introduction">
      <div className={styles.media} aria-hidden="true">
        <video
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero.jpg"
        >
          <source src="/videos/chateau.mp4" type="video/mp4" />
        </video>

        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <p className={styles.kicker}>
          un exemple de site pour un château exemplaire
        </p>
        <h1 className={styles.title}>Château L&apos;Exemple</h1>
      </div>
    </section>
  );
}
