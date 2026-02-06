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
                src="/images/whitewine.jpg"
                alt="Cuvée blanc du Château l’Exemple"
                fill
                className={styles.image}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* CONTENU */}
            <div className={styles.content}>
              <h1 className={styles.title}>L&apos;exemple Blanc</h1>

              <p className={styles.kicker}>
                Robe claire aux reflets dorés, nez d’agrumes mûrs et de fleurs
                blanches. Bouche fraîche, équilibrée, finale saline et
                élégante.
              </p>

              <p className={styles.description}>
                Cette cuvée blanche est issue de parcelles sélectionnées pour
                leur fraîcheur naturelle et leur exposition maîtrisée.
                Vinification précise et élevage délicat permettent de
                préserver l’expression du fruit et la tension minérale du
                terroir.
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
