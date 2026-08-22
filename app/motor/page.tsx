import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Navbar from "@/components/Navbar";
import WhatsAppIcon from "@/components/WhatsAppIcon";

import { motorcycles } from "@/data/motorcycles";
import { getWhatsAppUrl } from "@/data/site";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Pilihan Motor | Rental Motor Bali",
  description:
    "Lihat pilihan motor rental di Bali dengan harga terjangkau dan layanan terbaik.",
};

export default function MotorPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        {/* =========================================
            PAGE HEADER
        ========================================== */}
        <section className="border-b border-gray-100 bg-white">
          <div className="mx-auto max-w-[1400px] px-5 pb-12 pt-8 md:px-8 lg:px-12">
            <div className="mx-auto mt-10 max-w-[700px] text-center">
              <p className="text-xs font-bold tracking-[0.2em] text-[#c5963a]">
                KOLEKSI MOTOR
              </p>

              <h1 className="mt-3 text-3xl font-extrabold leading-tight text-[#17202a] md:text-4xl lg:text-5xl">
                Pilihan Motor untuk
                <span className="block text-[#a97b28]">Menjelajahi Bali</span>
              </h1>

              <p className="mx-auto mt-4 max-w-[600px] text-sm leading-7 text-gray-500 md:text-base">
                Pilih motor yang sesuai dengan kebutuhan perjalananmu. Lihat
                harga rental dan langsung hubungi kami melalui WhatsApp.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================
            MOTOR LIST
        ========================================== */}
        <section id="motor" className="bg-[#fafafa] py-12 md:py-16">
          <div className="mx-auto max-w-[1200px] px-5 md:px-8 lg:px-10">
            {/* Heading */}
            <div className="mb-7 text-center">
              <p className="text-xs font-bold tracking-[0.2em] text-[#c5963a]">
                PILIHAN KAMI
              </p>

              <h2 className="mt-2 text-2xl font-extrabold text-[#17202a] md:text-3xl">
                Semua Motor
              </h2>

              <div className="mx-auto mt-3 h-[2px] w-12 bg-[#c5963a]" />

              <p className="mt-3 text-sm text-gray-500">
                {motorcycles.length} motor tersedia untuk disewa
              </p>
            </div>

            {/* Cards */}
            <div className="grid gap-6 md:grid-cols-2">
              {motorcycles.map((motorcycle) => {
                const lowestPrice = Math.min(
                  ...motorcycle.pricing.map((price) => price.pricePerDay),
                );

                const formattedPrice = new Intl.NumberFormat("id-ID").format(
                  lowestPrice,
                );

                return (
                  <article
                    key={motorcycle.id}
                    className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                  >
                    {/* Image */}
                    <Link
                      href={`/motor/${motorcycle.slug}`}
                      className="group relative block h-[280px] overflow-hidden bg-[#faf9f5] md:h-[310px]"
                    >
                      <Image
                        src={motorcycle.image}
                        alt={motorcycle.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain p-8 transition duration-300 group-hover:scale-[1.03]"
                      />

                      {/* Transmission */}
                      <span className="absolute left-4 top-4 rounded-md bg-[#f5e8cc] px-3 py-1.5 text-xs font-bold text-[#8b6424]">
                        {motorcycle.transmission}
                      </span>
                    </Link>

                    {/* Content */}
                    <div className="p-5 md:p-6">
                      {/* Name + Price */}
                      <div className="flex items-start justify-between gap-4">
                        <Link
                          href={`/motor/${motorcycle.slug}`}
                          className="min-w-0"
                        >
                          <h3 className="text-lg font-extrabold text-[#17202a] transition hover:text-[#a97b28] md:text-xl">
                            {motorcycle.name}
                          </h3>
                        </Link>

                        <div className="shrink-0 text-right">
                          <span className="text-lg font-extrabold text-[#b58224]">
                            Rp{formattedPrice}
                          </span>

                          <span className="ml-1 text-xs text-gray-400">
                            /hari
                          </span>
                        </div>
                      </div>

                      {/* Specs */}
                      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <span className="text-[#c5963a]">◉</span>
                          {motorcycle.cc}
                        </span>

                        <span className="flex items-center gap-1.5">
                          <span className="text-[#c5963a]">⚙</span>
                          {motorcycle.transmission}
                        </span>

                        <span className="flex items-center gap-1.5">
                          <span className="text-[#c5963a]">♙</span>
                          {motorcycle.seats} Orang
                        </span>
                      </div>

                      {/* Description */}
                      <p className="mt-4 min-h-[48px] text-sm leading-6 text-gray-500">
                        {motorcycle.description}
                      </p>

                      {/* CTA */}
                      <a
                        href={getWhatsAppUrl(
                          `Halo, saya tertarik menyewa ${motorcycle.name}. Apakah motor ini masih tersedia?`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-[#c5963a] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#a97b28]"
                      >
                        <WhatsAppIcon size={18} />
                        Sewa Sekarang
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================
            BOTTOM CTA
        ========================================== */}
        <section className="px-5 py-12 md:px-8 md:py-16 lg:px-12">
          <div className="mx-auto max-w-[1200px] overflow-hidden rounded-2xl bg-[#26372f] px-6 py-10 text-center md:px-12 md:py-12">
            <p className="text-xs font-bold tracking-[0.2em] text-[#e0b75f]">
              SIAP MENJELAJAHI BALI?
            </p>

            <h2 className="mt-3 text-2xl font-extrabold text-white md:text-3xl">
              Temukan Motor yang Cocok untukmu
            </h2>

            <p className="mx-auto mt-3 max-w-[600px] text-sm leading-6 text-gray-300">
              Hubungi kami melalui WhatsApp untuk mengecek ketersediaan motor,
              harga, dan informasi rental.
            </p>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-[#25b95b] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#1fa34f]"
            >
              <WhatsAppIcon size={18} />
              Chat WhatsApp Sekarang
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
