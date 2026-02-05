import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import AboutHumans from "@/components/AboutHumans/AboutHumans";
import AboutNature from "@/components/AboutNature/AboutNature";
import Care from "@/components/Care/Care";


export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHumans />
        <AboutNature />
        <Care />
      </main>

      <Footer />
    </>
  );
}
