import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Provider from "@/providers";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased container min-h-screen mx-auto font-geist-serif flex relative px-4`}
      >
        <Provider>
          <LeftSidebar />
          {children}
          <RightSidebar />
        </Provider>
      </body>
    </html>
  );
}
