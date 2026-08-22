import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${jakarta.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    default: "Rental Motor Bali | Sewa Motor Bali",
    template: "%s | Rental Motor Bali",
  },

  description:
    "Rental motor di Bali dengan motor terawat, harga bersahabat, dan layanan antar jemput. Pilih motor dan hubungi kami melalui WhatsApp.",

  keywords: [
    "rental motor Bali",
    "sewa motor Bali",
    "rental motor Denpasar",
    "sewa motor Bali murah",
    "rental Honda Beat Bali",
    "rental Honda PCX Bali",
  ],

  authors: [
    {
      name: "Rental Motor Bali",
    },
  ],

  openGraph: {
    title: "Rental Motor Bali | Sewa Motor Bali",

    description:
      "Sewa motor di Bali dengan harga bersahabat dan motor terawat.",

    type: "website",

    locale: "id_ID",

    siteName: "Rental Motor Bali",

    images: [
      {
        url: "/images/motorcycles/beat-street-110.png",
        width: 1200,
        height: 630,
        alt: "Rental Motor Bali",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Rental Motor Bali | Sewa Motor Bali",

    description:
      "Sewa motor di Bali dengan harga bersahabat dan motor terawat.",

    images: ["/images/og-rental-motor.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};