import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Bike, Cog, Users } from "lucide-react";

import Navbar from "@/components/Navbar";
import PricingTable from "@/components/PricingTable";
import WhatsAppIcon from "@/components/WhatsAppIcon";

import { motorcycles } from "@/data/motorcycles";
import { getMotorWhatsAppUrl } from "@/data/site";
import Footer from "@/components/Footer";

interface MotorcycleDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}
export async function generateMetadata({
  params,
}: MotorcycleDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  const motorcycle = motorcycles.find((item) => item.slug === slug);

  if (!motorcycle) {
    return {
      title: "Motor Tidak Ditemukan",
    };
  }

  return {
    title: `Sewa ${motorcycle.name} di Bali`,
    description: `Sewa ${motorcycle.name} di Bali dengan harga mulai dari Rp${new Intl.NumberFormat(
      "id-ID",
    ).format(
      Math.min(...motorcycle.pricing.map((price) => price.pricePerDay)),
    )}/hari. Hubungi Rental Motor Bali melalui WhatsApp.`,
  };
}

export function generateStaticParams() {
  return motorcycles.map((motorcycle) => ({
    slug: motorcycle.slug,
  }));
}

export default async function MotorcycleDetailPage({
  params,
}: MotorcycleDetailPageProps) {
  const { slug } = await params;

  const motorcycle = motorcycles.find((item) => item.slug === slug);

  if (!motorcycle) {
    notFound();
  }

  const lowestPrice = Math.min(
    ...motorcycle.pricing.map((price) => price.pricePerDay),
  );

  const formattedPrice = new Intl.NumberFormat("id-ID").format(lowestPrice);

  const whatsappUrl = getMotorWhatsAppUrl(motorcycle.name);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f6f7f8]">
        <div className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-10 lg:px-10">
          {/* ========================================
              BACK
          ======================================== */}
          <Link
            href="/#motor"
            className="mb-7 inline-flex items-center gap-2 text-sm font-medium text-[#4b5563] transition hover:text-[#a97b28]"
          >
            <ArrowLeft size={17} />
            Kembali ke pilihan motor
          </Link>

          {/* ========================================
              MOBILE IMAGE
          ======================================== */}
          <div className="relative mb-6 flex h-[330px] items-center justify-center overflow-hidden rounded-2xl border border-[#e7e2d8] bg-[#f8f6f0] lg:hidden">
            <Image
              src={motorcycle.image}
              alt={motorcycle.name}
              fill
              priority
              sizes="100vw"
              className="object-contain p-8"
            />

            <span className="absolute left-5 top-5 rounded-full bg-[#f5e8cc] px-3.5 py-1.5 text-xs font-bold text-[#8b6424]">
              {motorcycle.transmission}
            </span>
          </div>

          {/* ========================================
              MAIN PRODUCT LAYOUT
          ======================================== */}
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_1fr]">
            {/* ======================================
                LEFT — STICKY MOTOR
            ====================================== */}
            <div className="hidden self-start lg:block">
              <div className="sticky top-[92px]">
                <div className="relative flex h-[calc(100vh-120px)] min-h-[560px] max-h-[760px] items-center justify-center overflow-hidden rounded-2xl border border-[#e7e2d8] bg-[#f8f6f0]">
                  <Image
                    src={motorcycle.image}
                    alt={motorcycle.name}
                    fill
                    priority
                    sizes="50vw"
                    className="object-contain p-8 xl:p-12"
                  />

                  <span className="absolute left-5 top-5 rounded-full bg-[#f5e8cc] px-3.5 py-1.5 text-xs font-bold text-[#8b6424]">
                    {motorcycle.transmission}
                  </span>
                </div>
              </div>
            </div>

            {/* ======================================
                RIGHT — PRODUCT INFORMATION
            ====================================== */}
            <div className="rounded-2xl border border-[#e7e2d8] bg-white p-6 shadow-sm md:p-8 lg:p-9">
              {/* Label */}
              <p className="text-xs font-bold tracking-[0.22em] text-[#c5963a]">
                RENTAL MOTOR BALI
              </p>

              {/* Title */}
              <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#17202a] md:text-4xl">
                {motorcycle.name}
              </h1>

              {/* Starting Price */}
              <div className="mt-5">
                <p className="text-xs text-gray-400">Mulai dari</p>

                <div className="mt-1 flex items-baseline">
                  <span className="text-3xl font-extrabold text-[#a97b28]">
                    Rp{formattedPrice}
                  </span>

                  <span className="ml-1.5 text-sm text-gray-400">/hari</span>
                </div>

                <p className="mt-1 text-[11px] text-gray-400">
                  Harga berdasarkan durasi rental
                </p>
              </div>

              {/* ====================================
                  SPECS
              ==================================== */}
              <div className="mt-7 grid grid-cols-3 gap-2.5">
                <div className="rounded-xl bg-[#fbf8f1] px-2 py-4 text-center">
                  <Bike size={19} className="mx-auto text-[#c5963a]" />

                  <p className="mt-2 text-[11px] text-gray-400">Mesin</p>

                  <p className="mt-1 text-sm font-bold text-[#17202a]">
                    {motorcycle.cc}
                  </p>
                </div>

                <div className="rounded-xl bg-[#fbf8f1] px-2 py-4 text-center">
                  <Cog size={19} className="mx-auto text-[#c5963a]" />

                  <p className="mt-2 text-[11px] text-gray-400">Transmisi</p>

                  <p className="mt-1 text-sm font-bold text-[#17202a]">
                    {motorcycle.transmission}
                  </p>
                </div>

                <div className="rounded-xl bg-[#fbf8f1] px-2 py-4 text-center">
                  <Users size={19} className="mx-auto text-[#c5963a]" />

                  <p className="mt-2 text-[11px] text-gray-400">Kapasitas</p>

                  <p className="mt-1 text-sm font-bold text-[#17202a]">
                    {motorcycle.seats} Orang
                  </p>
                </div>
              </div>

              {/* ====================================
                  DESCRIPTION
              ==================================== */}
              <section className="mt-8">
                <h2 className="text-base font-bold text-[#17202a]">
                  Tentang Motor
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {motorcycle.description}
                </p>
              </section>

              {/* ====================================
                  PRICING
              ==================================== */}
              <PricingTable motorcycle={motorcycle} />

              {/* ====================================
                  RENTAL NOTE
              ==================================== */}
              <div className="mt-5 rounded-xl border border-[#eadfca] bg-[#fbf8f1] p-4">
                <p className="text-xs font-bold text-[#8b6424]">
                  Catatan Rental
                </p>

                <p className="mt-1.5 text-xs leading-5 text-gray-500">
                  Hubungi kami melalui WhatsApp untuk mengecek ketersediaan
                  motor, ketentuan rental, dan detail pengantaran.
                </p>
              </div>

              {/* ====================================
                  WHATSAPP CTA
              ==================================== */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 text-sm font-bold text-white transition duration-200 hover:bg-[#20bd5a] hover:shadow-md"
              >
                <WhatsAppIcon size={20} />
                Sewa Motor via WhatsApp
              </a>

              <p className="mt-3 text-center text-[11px] text-gray-400">
                Ketersediaan akan dikonfirmasi melalui WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
