import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/section/Navbar";
import Container from "@/components/Container";
import Background from "@/components/Background";
import Footer from "@/components/section/Footer";
import { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Farghali Syafyurrahman | Web Developer Portfolio",
  description: "Portofolio profesional Farghali Syafyurrahman, seorang IT Graduate dan Web Developer spesialis React, Next.js, dan Laravel.",
  keywords: ["Farghali Syafyurrahman", "Web Developer", "Software Engineer", "Portfolio"],
  authors: [{ name: "Farghali Syafyurrahman" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-surface-a0 scroll-smooth">
      <body
        className={`${poppins.className} font-sans antialiased text-white select-none`}
      >
        <Navbar />
        <main>
          <Background>
            <Container>{children}</Container>
          </Background>
        </main>
        <Footer />
      </body>
    </html>
  );
}
