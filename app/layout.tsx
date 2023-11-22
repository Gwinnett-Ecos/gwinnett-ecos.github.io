import { Navbar } from "@/components";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gwinnett Ecos",
  description: "A student-led organization for environmental advocacy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar />
        <div className={`w-[100vw] overflow-x-clip`}>{children}</div>
      </body>
    </html>
  );
}
