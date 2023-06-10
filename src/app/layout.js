import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import "./globals.css";

export const metadata = {
  title: "Mortgage Fishing | Home",
  description:
    "Home page for mortgage fishing so you can learn more and find the best mortgage deals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
