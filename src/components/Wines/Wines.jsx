import Image from "next/image";
import styles from "./Wines.module.scss";

const WINES = [
  { title: "Rouges", src: "/images/redwine.jpg", alt: "Vins rouges" },
  { title: "Blancs", src: "/images/whitewine.jpg", alt: "Vins blancs" },
  { title: "Cuvées spéciales", src: "/images/otherwine.jpg", alt: "Cuvées spéciales" },
];

export default function Wines() {
  return (
    <section id="wines" className={styles.section} aria-labelledby="wines-title">
      <div className={styles.inner}>
        <header className={styles.heading}>
          <p className={styles.kicker}>Notre signature</p>
          <h2 id="wines-title" className={styles.title}>Les vins</h2>
        </header>

        <div className={styles.grid}>
          {WINES.map((item) => (
            <article key={item.title} className={styles.card}>
              <div className={styles.media} aria-hidden="true">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.image}
                />
              </div>

              <h3 className={styles.cardTitle}>{item.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
