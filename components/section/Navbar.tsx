"use client"; // Tambahkan ini di paling atas karena kita menggunakan komponen interaktif/icon jika diperlukan

import Link from "next/link";
import { Nav_items } from "../../data/data";
import Container from "../Container";
import { Icon } from "@iconify/react"; // Memanfaatkan Iconify yang sudah kamu install

function Navbar() {
  // Fungsi pembantu untuk mencocokkan icon berdasarkan nama menu (bisa kamu sesuaikan)
  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "home": return "lucide:home";
      case "about": return "lucide:user";
      case "skills": return "lucide:code-2";
      case "projects": return "lucide:folder-git-2";
      case "experiences": return "lucide:briefcase";
      default: return "lucide:menu";
    }
  };

  return (
    <nav className="navbar sticky z-50 top-0 w-full py-4 bg-surface-a10/80 backdrop-blur-md border-b border-surface-a20">
      <Container>
        <div className="flex flex-row items-center justify-between px-2 md:px-3 ">
          <h1 className="text-lg md:text-xl font-bold text-white tracking-wide shrink-0 px-2 md:px-3">
            <Link href="#">
              <span className="text-primary-a0">Farghali</span>&apos;s Space
            </Link>
          </h1>

          <ul className="flex items-center gap-1 sm:gap-2 md:gap-4 text-white">
            {Nav_items.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="flex items-center gap-1.5 px-2 py-1 md:px-3 md:py-1.5 rounded-xl transition-all duration-200 cursor-pointer ease-in-out hover:text-primary-a10 hover:-translate-y-0.5"
                >
                  {/* HP: Muncul Icon, iPad & Laptop: Sembunyi */}
                  <Icon
                    icon={getIcon(item.name)}
                    className="text-xl lg:hidden text-white/70 hover:text-primary-a10"
                  />

                  {/* HP: Sembunyi, iPad & Laptop: Muncul Teks */}
                  <span className="text-xs lg:text-sm font-medium hidden lg:inline">
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
