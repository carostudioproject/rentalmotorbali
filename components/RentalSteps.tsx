import { Bike, CalendarDays, ClipboardList, CircleCheck } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Bike,
    title: "Pilih Motor",
    description: "Pilih motor yang sesuai kebutuhanmu.",
  },
  {
    number: "2",
    icon: CalendarDays,
    title: "Pilih Tanggal",
    description: "Tentukan tanggal mulai dan selesai rental.",
  },
  {
    number: "3",
    icon: ClipboardList,
    title: "Isi Data",
    description: "Lengkapi data diri dan informasi pemesanan.",
  },
  {
    number: "4",
    icon: CircleCheck,
    title: "Konfirmasi",
    description: "Konfirmasi via WhatsApp & motor siap digunakan.",
  },
];

export default function RentalSteps() {
  return (
    <section id="cara-rental" className="px-5 py-20 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-bold tracking-[0.2em] text-[#c5963a]">
            SIMPLE & CEPAT
          </p>

          <h2 className="text-3xl font-extrabold text-[#17202a] md:text-4xl">
            Cara Rental Motor
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-6">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative text-center">
                <span className="absolute left-1/2 top-[-8px] ml-8 flex h-7 w-7 items-center justify-center rounded-full bg-[#f5e8cc] text-xs font-bold text-[#8b6424]">
                  {step.number}
                </span>

                <div className="mx-auto flex h-[76px] w-[76px] items-center justify-center rounded-2xl border border-gray-200 bg-white text-[#c5963a] shadow-sm">
                  <Icon size={30} strokeWidth={1.7} />
                </div>

                <h3 className="mt-5 text-sm font-bold text-[#17202a] md:text-base">
                  {step.title}
                </h3>

                <p className="mx-auto mt-2 max-w-[190px] text-xs leading-5 text-gray-500">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
