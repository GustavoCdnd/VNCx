import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VNCx — Tecnologia com propósito",
  description: "Software, sites e experiências digitais sob medida. Conheça o portfólio VNCx.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/logo-vncx.png",
    shortcut: "/logo-vncx.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
