import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dayrunner Academy | TVET Institutional Ecosystem",
  description: "Premium Nigerian TVET Programme - Building the future workforce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}