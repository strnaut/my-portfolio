"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { Social_links } from "@/data/data";

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden px-4 sm:px-6"
    >
      {/* GRID UTAMA RESPONSIF:
        - Mobile: grid-cols-1 (Numpuk atas bawah)
        - Desktop (md): grid-cols-2 (Kiri kanan)
        - min-h: disesuaikan agar pas satu layar di desktop, tapi fleksibel di mobile (py-12)
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[calc(100vh-60px)] w-full max-w-5xl mx-auto py-12 md:py-0 gap-8 md:gap-4">
        
        {/* KOTAK FOTO: Di mobile tampil duluan di atas */}
        <div className="flex justify-center p-4 relative order-1 md:order-0">
          {/* Efek Radial Background: Ukurannya mengecil di mobile (w-64 h-64) dan membesar di desktop */}
          <span className="absolute bg-radial from-primary-a40 to-primary-a0 z-0 w-64 h-64 md:w-120 md:h-120 mx-auto rounded-full -translate-y-4 md:-translate-y-7 blur-xs animate-bounce-slow" />
          
          <Image
            src="/photos/hero-photo.webp"
            alt="Foto profil Farghali Syafyurrahman - Web Developer"
            width={480}
            height={480}
            /* RESPONSIF IMAGE:
              - Mobile: w-64 h-64 (Pas untuk genggaman HP)
              - Desktop (md): w-120 h-120 (Kembali ke ukuran aslimu)
            */
            className="relative w-64 h-64 md:w-120 md:h-120 object-cover mx-auto z-10 mask-[linear-gradient(to_bottom,black_95%,transparent_100%)] drop-shadow-[-15px_6px_26px_rgba(0,0,0)]"
            priority
            sizes="(max-width: 768px) 256px, 480px"
            draggable={false}
          />
        </div>

        {/* KOTAK TEKS PERKENALAN */}
        <div className="flex flex-col justify-center p-4 text-center md:text-left items-center md:items-start order-2 md:order-0">
          <h2 className="text-primary-a20 text-xl md:text-3xl font-medium mb-1">
            Hi, I&apos;m
          </h2>
          
          {/* RESPONSIF TYPOGRAPHY:
            - Mobile: text-3xl sampai text-4xl agar nama panjangmu muat tanpa kepotong
            - Desktop (md): text-6xl (Kembali ke setelan awal)
          */}
          <h1 className="group text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-white cursor-default leading-tight">
            <div className="flex justify-center md:justify-start gap-1">
              <span className="group-hover:text-surface-a20 transition-colors duration-300 ease-in-out">
                Far
              </span>
              <span className="group-hover:text-primary-a20 transition-all duration-300 ease-in-out group-hover:[text-shadow:0_0_25px_currentColor] group-hover:animate-flicker inline-block">
                ghali
              </span>
            </div>
            <div className="md:ps-4 group-hover:text-surface-a20 transition-colors duration-300 ease-in-out mt-1">
              Syafyurrahman
            </div>
          </h1>

          {/* Animasi teks mengecil di mobile agar tidak memakan baris baru */}
          <h2 className="text-primary-a30 text-xl md:text-4xl font-mono mb-4 h-8 md:h-10">
            <TypeAnimation
              sequence={[
                "Web Developer",
                1500,
                "Software Engineer",
                1500,
                "System Analyst",
                1500,
              ]}
              wrapper="span"
              speed={50}
              deletionSpeed={50}
              repeat={Infinity}
            />
          </h2>

          <p className="text-sm md:text-md text-surface-a50 text-justify md:text-left mb-6 bg-surface-a10/60 p-4 rounded-xl border border-white/5 max-w-md md:max-w-none">
            Graduate of Information Technology from Brawijaya University.
            Possesses strong expertise in web development using PHP
            (Laravel/CodeIgniter) and JavaScript (React/Next.js). Experienced
            in MySQL database management as well as the preparation of
            technical documentation such as SDDs and BRDs.
          </p>

          {/* Tombol Aksi: Ditengahin kalau di mobile, dikiriin kalau di desktop */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 font-semibold mb-6 items-center w-full">
            <Link href="#projects" className="text-surface-a0 rounded-md px-4 py-2 bg-primary-a10 transition duration-300 hover:-translate-y-0.5 ease-in-out shadow-md hover:shadow-primary-a0/50 text-sm md:text-base">
              View My Work
            </Link>
            <Link
              href="/files/CV_Farghali_Syafyurrahman_EN.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-a20 rounded-md px-4 py-2 bg-surface-a20 border border-primary-a30 transition duration-300 hover:-translate-y-0.5 ease-in-out shadow-md hover:shadow-primary-a0/50 text-sm md:text-base"
            >
              View CV
            </Link>
          </div>

          {/* Social Links Icons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-surface-a50 w-full">
            {Social_links.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Kunjungi profil ${social.name} Farghali`}
                className="text-surface-a30 hover:text-primary-a20 transition hover:-translate-y-0.5 duration-300 ease-in-out text-2xl md:text-3xl"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;