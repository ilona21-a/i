import Header from "@/components/Header/Header";
import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";

const primaryFont = Manrope({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const secondaryFont = Inter({
  variable: "--font-secondary",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "RentalCar",
  description: "Find and rent your perfect car with ease. Browse our extensive collection of vehicles for any occasion.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const fontClasses = `${primaryFont.variable} ${secondaryFont.variable}`;

  return (
    <html lang="en">
      <body className={fontClasses}>
        <TanStackProvider>
          <Header />
          <main>{children}</main>
        </TanStackProvider>
      </body>
    </html>
  );
}