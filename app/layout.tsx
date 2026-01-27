import type { Metadata } from "next";
import { Oxanium } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";

const oxaniumSans = Oxanium({
  variable: "--font-oxanium-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yachay Legends",
  description: "Comunidad Gamer de la Universidad Yachay Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${oxaniumSans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
