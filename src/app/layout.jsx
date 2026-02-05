import "@/app/globals.scss";
import Header from "@/components/Header/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
