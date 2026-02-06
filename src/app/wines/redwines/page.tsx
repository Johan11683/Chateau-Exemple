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
                src="/images/redwine.jpg"
                alt="Cuvée rouge du Château l’Exemple"
                fill
                className={styles.image}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* CONTENU */}
            <div className={styles.content}>
              <h1 className={styles.title}>L&apos;exemple Rouge</h1>

              <p className={styles.kicker}>
                Robe profonde, nez de fruits noirs et d’épices douces. Bouche
                structurée, tanins soyeux, finale persistante.
              </p>

              <p className={styles.description}>
                Issue des plus vieilles parcelles du domaine, cette cuvée
                exprime l’équilibre entre puissance et élégance. Élevage
                maîtrisé, respect du fruit, expression fidèle du terroir.
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
