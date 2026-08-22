import { Mail, MapPin, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { siteConfig, getWhatsAppUrl } from "@/data/site";

import Image from "next/image";
import Link from "next/link";

const menuLinks = [
  { label: "Beranda", href: "#home" },
  { label: "Motor", href: "#motor" },
  { label: "Cara Rental", href: "#cara-rental" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

const serviceLinks = [
  "Sewa Harian",
  "Sewa Mingguan",
  "Sewa Bulanan",
  "Antar Jemput",
  "Layanan 24 Jam",
];

export default function Footer() {
  return (
    <footer
      id="kontak"
      className="bg-[#111820] px-5 pt-14 text-gray-300 md:px-8 lg:px-12"
    >
      <div className="mx-auto grid max-w-6xl gap-10 pb-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.1fr]">
        {/* Brand */}
        <div>
          <a href="#home" className="inline-flex items-center gap-3 text-white">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f5e8cc] text-xl">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/icon-rental.png"
                  alt="Rental Motor Bali"
                  width={150}
                  height={50}
                  priority
                  className="h-auto w-[135px] object-contain"
                />
              </Link>
            </span>

            <span className="text-xs font-bold leading-tight">
              RENTAL MOTOR
              <strong className="block text-lg">BALI</strong>
            </span>
          </a>

          <p className="mt-5 max-w-[280px] text-sm leading-6 text-gray-400">
            Solusi terbaik untuk sewa motor di Bali. Motor terawat, harga
            bersahabat, layanan terbaik untuk perjalanan Anda.
          </p>

          <div className="mt-5 flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-sm transition hover:border-[#c5963a] hover:text-[#c5963a]"
            >
              IG
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-sm transition hover:border-[#c5963a] hover:text-[#c5963a]"
            >
              F
            </a>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-sm transition hover:border-[#25b95b] hover:text-[#25b95b]"
            >
              WA
            </a>
          </div>
        </div>

        {/* Menu */}
        <div>
          <h3 className="mb-5 text-sm font-bold text-white">Menu</h3>

          <div className="space-y-3">
            {menuLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm text-gray-400 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-5 text-sm font-bold text-white">Layanan</h3>

          <div className="space-y-3">
            {serviceLinks.map((service) => (
              <p key={service} className="text-sm text-gray-400">
                {service}
              </p>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-sm font-bold text-white">Kontak</h3>

          <div className="space-y-4 text-sm text-gray-400">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-3 transition hover:text-white"
            >
              <Phone size={16} />
              {siteConfig.phone}
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition hover:text-white"
            >
              <WhatsAppIcon size={16} />
              WhatsApp
            </a>

            <p className="flex items-center gap-3">
              <MapPin size={16} />
              {siteConfig.location}
            </p>

            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 transition hover:text-white"
            >
              <Mail size={16} />
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-5 text-center text-xs text-gray-500">
        © 2026 Rental Motor Bali. All rights reserved.
      </div>
    </footer>
  );
}
