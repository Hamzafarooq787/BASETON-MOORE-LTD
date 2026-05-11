import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  metadataBase: new URL("https://basetonmoore.co.uk"),
  title: {
    default: "Baseton Moore | Eco-Friendly Construction",
    template: "%s | Baseton Moore",
  },
  description: "Sustainable building and design for a greener future.",
  openGraph: {
    title: "Baseton Moore | Eco-Friendly Construction",
    description: "Sustainable building and design for a greener future.",
    url: "https://basetonmoore.co.uk",
    siteName: "Baseton Moore",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baseton Moore | Eco-Friendly Construction",
    description: "Sustainable building and design for a greener future.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <head>
        {/* Google Fonts & Material Symbols – ICONS KE LIYE ZAROORI */}
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Work+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}