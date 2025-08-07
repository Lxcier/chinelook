import type { Metadata } from "next";
import { Lora, Quicksand, Playball } from "next/font/google";
import "./globals.css";

const LoraFont = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const PlayballFont = Playball({
  variable: "--font-playball",
  weight: "400",
  subsets: ["latin"],
});

const QuicksandFont = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chinelook | Brilhando a cada passo",
  description:
    "Havaianas personalizadas com aplicações exclusivas — feitas à mão com carinho pra você brilhar com conforto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${QuicksandFont.variable} ${LoraFont.variable} ${PlayballFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
