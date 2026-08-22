import { motorcycles } from "@/data/motorcycles";
import MotorcycleCard from "./MotorcycleCard";

export default function MotorcycleSection() {
  return (
    <section id="motor" className="px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-bold tracking-[0.2em] text-[#c5963a]">
            MOTOR PILIHAN
          </p>

          <h2 className="text-3xl font-extrabold text-[#17202a]">
            Pilihan Motor Populer
          </h2>

          <p className="mt-3 text-gray-500">
            Motor terbaik untuk menemani perjalananmu di Bali.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {motorcycles.map((motorcycle) => (
            <MotorcycleCard key={motorcycle.id} motorcycle={motorcycle} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="rounded-lg border border-gray-400 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">
            Lihat Semua Motor
          </button>
        </div>
      </div>
    </section>
  );
}
