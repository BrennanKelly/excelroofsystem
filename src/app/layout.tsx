import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:
      "Excel Roof Systems | Commercial Roofing Restoration in Southwest Michigan",
    template: "%s | Excel Roof Systems",
  },
  description:
    "Excel Roof Systems provides expert commercial roofing restoration, roof coatings, and maintenance services in Southwest Michigan. Serving Kalamazoo, Three Rivers, and surrounding areas with durable, cost-effective roofing solutions.",
  keywords: [
    "commercial roofing",
    "roof restoration",
    "roof coatings",
    "commercial roof repair",
    "Kalamazoo MI",
    "Three Rivers MI",
    "Southwest Michigan",
    "flat roof repair",
    "roof maintenance",
    "silicone roof coatings",
    "commercial roofing contractor",
    "Excel Roof Systems",
  ],
  openGraph: {
    title:
      "Excel Roof Systems | Commercial Roofing Restoration in Southwest Michigan",
    description:
      "Expert commercial roofing restoration, roof coatings, and maintenance services in Southwest Michigan. Serving Kalamazoo, Three Rivers, and surrounding areas.",
    url: "https://www.excelroofsystems.com",
    siteName: "Excel Roof Systems",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Excel Roof Systems | Commercial Roofing Restoration in Southwest Michigan",
    description:
      "Expert commercial roofing restoration, roof coatings, and maintenance services in Southwest Michigan. Serving Kalamazoo, Three Rivers, and surrounding areas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
