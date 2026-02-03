import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/input.scss";

export const metadata: Metadata = {
  title: "Robin Basjardin - Développeur Web",
  description:
    "Portfolio de Robin Basjardin, développeur web junior. Projets, compétences et contact.",
  openGraph: {
    title: "Robin Basjardin - Développeur Web",
    description:
      "Portfolio de Robin Basjardin, développeur web junior. Projets, compétences et contact.",
  },
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body suppressHydrationWarning>
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
