import { getWhatsAppUrl } from "@/data/site";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[560px] overflow-hidden bg-[#26372f]"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=2000&q=85')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/10" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1400px] items-center px-5 py-20 md:px-8 lg:px-12">
        <div className="max-w-[650px] text-white">
          <p className="mb-4 text-xs font-bold tracking-[0.2em] text-[#e0b75f]">
            SEWA MOTOR DI BALI
          </p>

          <h1 className="font-[family-name:var(--font-jakarta)] text-4xl font-extrabold leading-[1.1] md:text-5xl lg:text-6xl">
            Jelajahi Bali dengan
            <br />
            Nyaman &amp; Bebas
          </h1>

          <p className="mt-6 max-w-[500px] text-sm leading-7 text-gray-200 md:text-base">
            Motor terawat, harga bersahabat, layanan terbaik untuk perjalananmu
            di Bali.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#motor"
              className="rounded-lg bg-[#c5963a] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#a97b28]"
            >
              Lihat Pilihan Motor
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition duration-200 hover:border-[#25b95b] hover:bg-[#25b95b] hover:text-white"
            >
              <WhatsAppIcon size={18} />
              Chat WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
