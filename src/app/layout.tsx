import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";
import ProductState from "../context/productState";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ProductState>
          <Header />
          {children}
          <Footer />
        </ProductState>
      </body>
    </html>
  );
}
