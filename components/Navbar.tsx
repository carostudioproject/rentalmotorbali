"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
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
      <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-5 md:px-8 lg:px-12">
        {/* Logo */}
        <a href="#home" onClick={closeMenu} className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5e8cc] text-[#c5963a]">
            <span className="text-lg">🛵</span>
          </span>

          <span className="text-[11px] font-bold leading-[1.1] tracking-wide text-[#17202a]">
            RENTAL MOTOR
            <strong className="block text-[17px]">BALI</strong>
          </span>
        </a>

        {/* Desktop Navigation */}
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

        {/* Desktop WhatsApp */}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-lg bg-[#25b95b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1fa34f] lg:flex"
        >
          <WhatsAppIcon size={19} />
          WhatsApp
        </a>

        {/* Mobile */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          className="rounded-lg p-2 text-gray-700 lg:hidden"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="border-t border-gray-100 bg-white px-5 py-4 shadow-lg lg:hidden">
          <div className="flex flex-col">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-gray-100 py-3 text-sm font-medium text-gray-700 last:border-0"
              >
                {item.label}
              </a>
            ))}

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-[#25b95b] px-5 py-3 text-sm font-semibold text-white"
            >
              <WhatsAppIcon size={19} />
              Chat WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
