import { Icon } from "@iconify/react";
import Link from "next/link";

const Contact = () => {
  const contactLinks = [
    {
      label: "Email",
      value: "farghali.rahman@gmail.com", 
      icon: "solar:letter-bold",
      href: "mailto:farghali.rahman@gmail.com",
    },
    {
      label: "LinkedIn",
      value: "Farghali Syafyurrahman",
      icon: "mdi:linkedin",
      href: "https://linkedin.com/in/farghali-syafyurrahman", 
    },
    {
      label: "GitHub",
      value: "github.com/strnaut",
      icon: "mdi:github",
      href: "https://github.com/strnaut",
    },
    {
      label: "instagram",
      value: "instagram.com/strnaut",
      icon: "mdi:instagram",
      href: "https://instagram.com/strnaut",
    },
  ];

  return (
    <section
      className=""
      id="contact"
    >
      <div className="w-full py-24 px-6 rounded-2xl">
        <div className="container mx-auto max-w-4xl">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let&apos;s <span className="text-primary-a0">Connect</span>
            </h2>
            <p className="text-surface-a50 text-lg max-w-xl mx-auto">
              Tertarik untuk berkolaborasi atau sekadar bertanya tentang IT
              Support dan Web Development? Pintu saya selalu terbuka!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* SISI KIRI: Info Kontak */}
            <div className="space-y-6 flex flex-col justify-center">
              {contactLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 p-5 rounded-2xl bg-surface-a20/80 border border-white/5 hover:border-primary-a0/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-a0 border border-white/10 group-hover:scale-110 group-hover:text-primary-a0 transition-all duration-300">
                    <Icon icon={link.icon} className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-surface-a50 mb-1">
                      {link.label}
                    </p>
                    <p
                      className="text-white font-medium transition-colors hover:text-blue-400"
                    >
                      {link.value}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="relative group overflow-hidden rounded-3xl bg-linear-to-br from-primary-a0/80 to-surface-a0/80 border border-primary-a0/20 p-8 flex flex-col justify-between">         

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Start a Conversation
                </h3>
                <p className="text-white leading-relaxed mb-8">
                  Saat ini saya berdomisili di Jakarta dan terbuka untuk peluang
                  kerja sebagai IT Staff, Web Developer, atau proyek freelance.
                </p>
              </div>

              <div className="relative z-10">
                <Link
                  href="https://wa.me/62895392511022" // Ganti dengan nomor WA aslimu
                  className="inline-flex items-center gap-3 px-6 py-3 text-primary-a20 rounded-md bg-surface-a20 border border-surface-a30 transition duration-300 hover:-translate-y-0.5 ease-in-out shadow-md hover:shadow-primary-a0/50 hover:border-primary-a30"
                >
                  <Icon icon="mdi:whatsapp" className="text-2xl" />
                  Say Hello via WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
