import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import "./globals.css";
import Navigation from "@/elements/Navigation";
import { connectToDatabase } from "./mongo";
import dynamic from "next/dynamic";
import Card, { CardProps } from '../elements/Module/Card';
import Scraper from "../api/scraper";  
import { ReactElement } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <div className={styles.content}>
          {children}
        </div>
      </body>
    </html>
  );
}
