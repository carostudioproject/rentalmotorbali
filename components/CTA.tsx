import WhatsAppIcon from "@/components/WhatsAppIcon";
import { getWhatsAppUrl } from "@/data/site";

export default function CTA() {
  return (
    <section className="px-5 pb-20 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-[#202a30]">
        <div className="relative px-6 py-14 text-center md:px-12 md:py-16">
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=80')",
            }}
          />

          <div className="relative z-10">
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-[#e0b75f]">
              READY TO RIDE?
            </p>

            <h2 className="text-3xl font-extrabold text-white md:text-4xl">
              Siap Menjelajahi Bali?
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-gray-300">
              Booking sekarang via WhatsApp dan dapatkan penawaran terbaik!
            </p>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#25b95b] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#1fa34f]"
            >
              <WhatsAppIcon size={18} />
              Chat WhatsApp Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
