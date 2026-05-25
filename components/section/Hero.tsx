"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { Social_links } from "@/data/data";

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center "
    >
        <div className="grid grid-cols-2 items-center min-h-[calc(100vh-60px)]">
          <div className="col-span-1 flex justify-center p-4">
            <span className="absolute bg-radial from-primary-a40 to-primary-a0 z-0 w-120 h-120 mx-auto rounded-full -translate-y-7 blur-xs animate-bounce-slow" />
            <Image
              src="/photos/hero-photo.webp"
              alt="Foto profil Farghali Syafyurrahman - Web Developer"
              width={480}
              height={480}
              className=" relative w-120 h-120 object-cover mx-auto z-10 mask-[linear-gradient(to_bottom,black_95%,transparent_100%)] drop-shadow-[-15px_6px_26px_rgba(0,0,0)]"
              priority
              sizes="(max-width: 768px) 100vw, 480px"
              draggable={false}
            />
          </div>
          <div className="col-span-1 flex flex-col justify-center p-4">
            <h2 className="text-primary-a20 text-3xl font-medium mb-1">
              Hi, I&apos;m
            </h2>
            <h1 className="group text-6xl font-bold mb-6 text-white cursor-default">
              <div>
                <span className="group-hover:text-surface-a20 transition-colors duration-300 ease-in-out">
                  Far
                </span>
                <span className="group-hover:text-primary-a20 transition-all duration-300 ease-in-out group-hover:[text-shadow:0_0_25px_currentColor] group-hover:animate-flicker inline-block">
                  ghali
                </span>
              </div>
              <div className="ps-4 group-hover:text-surface-a20 transition-colors duration-300 ease-in-out">
                Syafyurrahman
              </div>
            </h1>
            <h2 className="text-primary-a30 text-4xl font-mono mb-4 h-10">
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  1500,
                  "Software Engineer",
                  1500,
                  "System analyst",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                deletionSpeed={50}
                repeat={Infinity}
              />
            </h2>
            <p className="text-md text-surface-a50 text-justify mb-6 bg-surface-a10/60 p-2 ">
              Graduate of Information Technology from Brawijaya University.
              Possesses strong expertise in web development using PHP
              (Laravel/CodeIgniter) and JavaScript (React/Next.js). Experienced
              in MySQL database management as well as the preparation of
              technical documentation such as SDDs and BRDs.
            </p>
            <div className="flex flex-wrap gap-4 font-semibold mb-4 items-center">
              <Link href="#projects" className="text-surface-a0 rounded-md px-4 py-2 bg-primary-a10 transition duration-300 hover:-translate-y-0.5 ease-in-out shadow-md hover:shadow-primary-a0/50">
                View My Work
              </Link>
              <Link
                href="/files/CV_Farghali_Syafyurrahman_EN.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-a20 rounded-md px-4 py-2 bg-surface-a20 border border-primary-a30 transition duration-300 hover:-translate-y-0.5 ease-in-out shadow-md hover:shadow-primary-a0/50"
              >
                View CV
              </Link>
              
            </div>
            <div className="flex flex-wrap gap-4 text-md text-surface-a50">
                {Social_links.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Kunjungi profil ${social.name} Farghali`}
                  className="text-surface-a30 hover:text-primary-a20 transition hover:-translate-y-0.5 duration-300 ease-in-out text-3xl"
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

//
export default Hero;
