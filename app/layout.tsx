import { ConstNavbar, Footer } from "@/components";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "material-symbols";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GECOS",
  description: "A student-led organization for environmental advocacy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="max-w-full overflow-x-hidden scroll-smooth">
      <body className={`${inter.className} max-w-full overflow-x-hidden`}>
        <ConstNavbar />
        <div className={`w-[100vw] overflow-x-clip`}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
