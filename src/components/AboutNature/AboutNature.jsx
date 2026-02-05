import Image from "next/image";
import styles from "./AboutNature.module.scss";

export default function AboutNature() {
  return (
    <section className={styles.section} aria-labelledby="nature-title">
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.kicker}>Le lieu</p>
          <h2 id="nature-title" className={styles.title}>
            Notre domaine
          </h2>
          <p className={styles.text}>
            70 hectares partagés entre vignes, forêts centenaires et prairie.
            Le domaine ne s’impose pas au paysage, il en procède.
            Reliefs, expositions et sols dessinent naturellement les équilibres.
            Ici, le vin commence bien avant la vigne.
          </p>
        </div>

        <div className={styles.media}>
          <Image
            src="/images/wineyard.jpg"
            alt="Les vignes du Château l'Exemple"
            fill
            className={styles.image}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
