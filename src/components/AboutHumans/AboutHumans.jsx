import Image from "next/image";
import styles from "./AboutHumans.module.scss";

export default function AboutHumans() {
  return (
    <section className={styles.section} aria-labelledby="humans-title">
      <div className={styles.inner}>
        <div className={styles.media}>
          <Image
            src="/images/winemaker.jpg"
            alt="Le vigneron du Château l'Exemple"
            fill
            className={styles.image}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className={styles.content}>
          <p className={styles.kicker}>Des Hommes</p>
          <h1 id="humans-title" className={styles.title}>
            Notre Histoire
          </h1>
          <p className={styles.text}>
            Le Château l’Exemple est né d’un attachement au lieu avant d’être un projet viticole.
            D’abord observé, puis compris, le domaine s’est construit dans le respect de son rythme, de sa terre et de ceux qui la travaillent.
            Chaque génération y ajoute un geste, jamais un excès.
          </p>
        </div>
      </div>
    </section>
  );
}
