"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import WhatsAppIcon from "@/components/WhatsAppIcon";
import { getWhatsAppUrl } from "@/data/site";

const menuItems = [
  { label: "Beranda", href: "#home" },
  { label: "Motor", href: "#motor" },
  { label: "Cara Rental", href: "#cara-rental" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      {/* =========================
          MAIN NAVBAR
      ========================== */}
      <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-5 md:px-8 lg:px-12">
        {/* Logo */}
        <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f5e8cc]">
            <Image
              src="/images/icon-rental.png"
              alt="Rental Motor Bali"
              width={40}
              height={40}
              priority
              className="h-8 w-8 object-contain"
            />
          </span>

          <span className="text-[11px] font-bold leading-[1.1] tracking-wide text-[#17202a]">
            RENTAL MOTOR
            <strong className="block text-[17px]">BALI</strong>
          </span>
        </Link>

        {/* =========================
            DESKTOP NAVIGATION
        ========================== */}
        <nav className="hidden items-center gap-7 lg:flex">
          {menuItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative py-7 text-sm font-medium transition ${
                index === 0
                  ? "text-[#a97b28] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#c5963a]"
                  : "text-gray-700 hover:text-[#a97b28]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* =========================
            DESKTOP WHATSAPP
        ========================== */}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-lg bg-[#25b95b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1fa34f] lg:flex"
        >
          <WhatsAppIcon size={19} />
          WhatsApp
        </a>

        {/* =========================
            MOBILE MENU BUTTON
        ========================== */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          className="rounded-lg p-2 text-gray-700 lg:hidden"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* =========================
          MOBILE NAVIGATION
          OVERLAY
      ========================== */}
      {isOpen && (
        <nav className="absolute left-0 right-0 top-full z-50 border-t border-gray-100 bg-white shadow-lg lg:hidden">
          <div className="px-5 py-4">
            <div className="flex flex-col">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="border-b border-gray-100 py-4 text-base font-medium text-gray-700 transition hover:text-[#a97b28]"
                >
                  {item.label}
                </a>
              ))}

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#25b95b] px-5 py-3.5 text-base font-semibold text-white transition hover:bg-[#1fa34f]"
              >
                <WhatsAppIcon size={19} />
                Chat WhatsApp
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
