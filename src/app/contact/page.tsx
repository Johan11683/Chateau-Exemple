import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./Contact.module.scss";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        <section className={styles.section} aria-labelledby="contact-title">
          <div className={styles.inner}>
            <p className={styles.kicker}>Contact</p>

            <h1 id="contact-title" className={styles.title}>
              Nous écrire
            </h1>

            <p className={styles.text}>
              Une question, une demande de visite ou une collaboration ?
              Laissez-nous un message.
            </p>

            <form className={styles.form}>
              <div className={styles.field}>
                <label htmlFor="name">Nom</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Votre nom"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="votre@email.fr"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Votre message"
                />
              </div>

              <button type="submit" className={styles.submit}>
                Envoyer le message
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
