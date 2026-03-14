import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot";
import "./globals.css";
import Footer from "@/components/componentsFooter";

export const metadata: Metadata = {
  title: "Olmem Technical Solutions",
  description: "Websites and CMS solutions for contractors and automotive businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}