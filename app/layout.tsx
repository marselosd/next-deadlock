import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/organisms/header/Header";
import Footer from "./components/organisms/footer/Footer";
import { FavoritesProvider } from "./context/FavoritesContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextDeadlock",
  description: "Made by Marcelo Dalcin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
        backgroundImage: "url('/img/background/deadlock-main-background.webp')",
        backgroundSize: "cover",        
        backgroundPosition: "center",      
        backgroundRepeat: "no-repeat",     
        backgroundAttachment: "fixed",     
        backgroundColor: "#000000",       
      }}
      >
        <Header/>
        <FavoritesProvider>
          {children}
        </FavoritesProvider>
        <Footer/>
      </body>
    </html>
  );
}
