import { CalendarDays } from "lucide-react";

import { Motorcycle } from "@/types/motorcycle";

interface PricingTableProps {
  motorcycle: Motorcycle;
}

export default function PricingTable({ motorcycle }: PricingTableProps) {
  return (
    <section className="mt-8">
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f5e8cc] text-[#a97b28]">
          <CalendarDays size={18} />
        </div>

        <div>
          <h2 className="text-base font-bold text-[#17202a]">Harga Rental</h2>

          <p className="text-xs text-gray-400">Harga berdasarkan lama rental</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        {motorcycle.pricing.map((price, index) => {
          const formattedPrice = new Intl.NumberFormat("id-ID").format(
            price.pricePerDay,
          );

          return (
            <div
              key={price.label}
              className={`flex items-center justify-between px-4 py-4 ${
                index !== motorcycle.pricing.length - 1
                  ? "border-b border-gray-100"
                  : ""
              } ${
                index === motorcycle.pricing.length - 1 ? "bg-[#fbf8f1]" : ""
              }`}
            >
              <span className="text-sm font-medium text-gray-600">
                {price.label}
              </span>

              <div className="text-right">
                <span className="text-sm font-bold text-[#a97b28]">
                  Rp{formattedPrice}
                </span>

                <span className="ml-1 text-xs text-gray-400">/hari</span>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-2 text-[11px] leading-5 text-gray-400">
        Harga dapat berubah sesuai kebijakan rental.
      </p>
    </section>
  );
}
