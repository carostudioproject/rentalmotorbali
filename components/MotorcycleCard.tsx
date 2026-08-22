import Image from "next/image";
import Link from "next/link";
import { Bike, Cog, Users } from "lucide-react";

import { Motorcycle } from "@/types/motorcycle";
import { getWhatsAppUrl } from "@/data/site";
import WhatsAppIcon from "@/components/WhatsAppIcon";

interface MotorcycleCardProps {
  motorcycle: Motorcycle;
}

export default function MotorcycleCard({ motorcycle }: MotorcycleCardProps) {
  const lowestPrice = Math.min(
    ...motorcycle.pricing.map((price) => price.pricePerDay),
  );

  const formattedPrice = new Intl.NumberFormat("id-ID").format(lowestPrice);

  const whatsappUrl = getWhatsAppUrl(
    `Halo Rental Motor Bali, saya ingin menyewa ${motorcycle.name}. Mohon info ketersediaannya.`,
  );

  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f3ee]">
        <Link
          href={`/motor/${motorcycle.slug}`}
          className="absolute inset-0 flex items-center justify-center p-6"
        >
          <Image
            src={motorcycle.image}
            alt={motorcycle.name}
            fill
            className="object-contain p-5 transition duration-500 hover:scale-105"
          />
        </Link>

        <span className="absolute left-4 top-4 z-10 rounded-md bg-[#f5e8cc] px-3 py-1.5 text-xs font-bold text-[#8b6424]">
          {motorcycle.transmission}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-4">
          <Link
            href={`/motor/${motorcycle.slug}`}
            className="text-xl font-bold text-[#17202a] transition hover:text-[#a97b28]"
          >
            {motorcycle.name}
          </Link>

          <div className="text-right">
            <p className="text-[11px] text-gray-400">Mulai dari</p>

            <p className="whitespace-nowrap font-bold text-[#a97b28]">
              Rp{formattedPrice}
              <span className="text-xs font-normal text-gray-500"> /hari</span>
            </p>
            <p className="mt-1 text-[10px] text-gray-400">
              Harga berdasarkan durasi rental
            </p>
          </div>
        </div>

        {/* Specs */}
        <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <Bike size={14} />
            {motorcycle.cc}
          </span>

          <span className="flex items-center gap-1.5">
            <Cog size={14} />
            {motorcycle.transmission}
          </span>

          <span className="flex items-center gap-1.5">
            <Users size={14} />
            {motorcycle.seats} Orang
          </span>
        </div>

        {/* Description */}
        <p className="mt-4 min-h-10 text-sm leading-6 text-gray-500">
          {motorcycle.description}
        </p>

        {/* CTA */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <Link
            href={`/motor/${motorcycle.slug}`}
            className="flex items-center justify-center rounded-lg border border-gray-200 px-4 py-3 text-sm font-bold text-[#17202a] transition hover:border-[#c5963a] hover:text-[#a97b28]"
          >
            Lihat Detail
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#20bd5a]"
          >
            <WhatsAppIcon size={17} />
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
