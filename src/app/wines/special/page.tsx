import Image from "next/image";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "../WinePage.module.scss";

const VINTAGES = Array.from({ length: 26 }, (_, i) => 2000 + i);

export default function WinePage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.section}>
          <div className={styles.inner}>
            {/* IMAGE */}
            <div className={styles.media}>
              <Image
                src="/images/otherwine.jpg"
                alt="Cuvée spéciale effervescente du Château l’Exemple"
                fill
                className={styles.image}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* CONTENU */}
            <div className={styles.content}>
              <h1 className={styles.title}>Les Bulles de l&apos;Exemple</h1>

              <p className={styles.kicker}>
                Bulles fines et persistantes, nez délicat de fruits blancs et
                de notes briochées. Attaque vive, bouche aérienne, finale
                fraîche et élégante.
              </p>

              <p className={styles.description}>
                Élaborée selon une méthode traditionnelle, cette cuvée
                effervescente exprime la fraîcheur naturelle du terroir et la
                précision du travail en cave. L’élevage sur lies apporte
                complexité et finesse, tout en préservant la vivacité des
                arômes.
              </p>

              {/* MILLÉSIMES */}
              <div className={styles.vintages}>
                <p className={styles.vintagesTitle}>
                  Millésimes disponibles
                </p>

                <ul className={styles.vintageList}>
                  {VINTAGES.map((year) => (
                    <li key={year}>
                      <span
                        className={styles.vintageLinkDisabled}
                        aria-disabled="true"
                      >
                        {year}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
