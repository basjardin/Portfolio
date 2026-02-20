import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import "@/styles/input.scss";
import { assetPath } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Robin Basjardin - Développeur Web",
  description:
    "Portfolio de Robin Basjardin, développeur web junior. Projets, compétences et contact.",
  openGraph: {
    title: "Robin Basjardin - Développeur Web",
    description:
      "Portfolio de Robin Basjardin, développeur web junior. Projets, compétences et contact.",
  },
  icons: {
    icon: assetPath("/icons/Robin.svg"),
  },
};

const funnelDisplay = localFont({
  src: "../public/font/Funnel_Display/FunnelDisplay-VariableFont_wght.ttf",
  variable: "--font-funnel",
  weight: "100 900", // Variable fonts usually support range
});

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${funnelDisplay.variable}`}>
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
