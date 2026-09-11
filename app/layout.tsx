import type { Metadata } from "next";
import "./globals.css";
import "./logo-fixes.css";

export const metadata: Metadata = {
  title: "GOGP| Relevamiento de Uso",
  description: "Plataforma que centraliza todos los links de relevamiento de uso.",
  icons: {
    icon: "/app-icon-192.png",
    apple: "/app-icon-192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
