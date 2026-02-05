import Image from "next/image";
import styles from "./Care.module.scss";

export default function Care() {
  return (
    <section className={styles.section} aria-labelledby="care-title">
      <div className={styles.inner}>
        {/* Image à gauche */}
        <div className={styles.media} aria-hidden="true">
          <Image
            src="/images/wineyard2.jpg"
            alt="Biodiversité et paysages du domaine"
            fill
            className={styles.image}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className={styles.overlay} />
        </div>

        {/* Texte à droite */}
        <div className={styles.content}>
          <p className={styles.kicker}>Philosophie</p>
          <h2 id="care-title" className={styles.title}>
            Prendre soin du vivant
          </h2>

          <p className={styles.text}>
            Une viticulture raisonnée, sans désherbants, privilégiant des
            alternatives naturelles aux traitements chimiques.
          </p>

          <p className={styles.text}>
            Une partie de la forêt est confiée à un apiculteur depuis plus de
            vingt ans, participant concrètement à l’équilibre du lieu.
          </p>

          <p className={styles.note}>
            Labels HVE : niveau 3 (2018) — niveau 4 (2023)
          </p>
        </div>
      </div>
    </section>
  );
}
