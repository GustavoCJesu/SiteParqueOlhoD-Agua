import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Roboto } from "next/font/google"
import ClientLayout from '../components/ClientLayout'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ["300", "400", "700", "900"],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://parqueolhodagua.com.br'),
  title: {
    template: "%s | Parque Olho D'Água",
    default: "Parque Olho D'Água | Natureza e Aventura em Andradas, MG",
  },
  description: "Descubra o Parque Olho D'Água em Andradas/MG: cachoeiras, trilhas, quadriciclo, restaurante e muito mais. O refúgio natural perfeito para toda a família.",
  keywords: ["parque olho d'água", "andradas", "minas gerais", "ecoturismo", "cachoeiras", "trilhas", "natureza", "lazer", "turismo rural"],
  authors: [{ name: "Parque Olho D'Água" }],
  openGraph: {
    siteName: "Parque Olho D'Água",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "TAr87LJg2jH33NTLD_nTee0EEoX5nNmu6A4Rkc3Px40",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${geistSans.variable} ${geistMono.variable} w-full antialiased`}
    >
      <body className={`${roboto.className} w-full min-h-screen`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
