import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavFooter from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any"/>
        <link
          rel="icon"
          href="/images/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link rel="manifest" href="/manifest/manifest.webmanifest"/>
      </head>
      <body className={"flex flex-col " + inter.className}>
        {children}
        <NavFooter />
      </body>
    </html>
  );
}
