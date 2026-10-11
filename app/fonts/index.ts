import localFont from "next/font/local"

// Fontes hospedadas no próprio projeto (antes vinham de next/font/google).
// Assim o build não precisa acessar fonts.googleapis.com, o que travava o deploy.

export const geistSans = localFont({
  src: "./geist-latin-wght-normal.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
})

export const geistMono = localFont({
  src: "./geist-mono-latin-wght-normal.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
})

export const roboto = localFont({
  src: [
    { path: "./roboto-latin-300-normal.woff2", weight: "300", style: "normal" },
    { path: "./roboto-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./roboto-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "./roboto-latin-900-normal.woff2", weight: "900", style: "normal" },
  ],
  display: "swap",
})

export const aboreto = localFont({
  src: "./aboreto-latin-400-normal.woff2",
  weight: "400",
  display: "swap",
})
