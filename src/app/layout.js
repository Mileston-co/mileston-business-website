import Footer from "@/layouts/Footer";
import "./globals.css";
import Header from "@/layouts/Header";
import { BaseFramerAnimation, ScrollTriggeredAnimation } from "@/components/Animation";


export const metadata = {
  title: "Mileston",
  description: "Crypto transactions made simple",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        <BaseFramerAnimation>
          <Header />
        </BaseFramerAnimation>
        {children}
        <ScrollTriggeredAnimation>
          <Footer />
        </ScrollTriggeredAnimation>
      </body>
    </html>
  );
}
