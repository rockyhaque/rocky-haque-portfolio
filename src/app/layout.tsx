import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Inter } from "next/font/google";

// Configure the Inter font with optional settings
const inter = Inter({
  subsets: ['latin'], 
  variable: '--font-inter', 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], 
});

export const metadata: Metadata = {
  title: "Rocky Haque Portfolio",
  description: "A Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
