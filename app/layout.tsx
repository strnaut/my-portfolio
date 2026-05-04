import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/section/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-surface-a0 scroll-smooth">
      <body className={`${poppins.className} font-sans antialiased text-white select-none`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
