import { BadgeDollarSign, Bike, CalendarCheck, Headphones } from "lucide-react";

const benefits = [
  {
    icon: BadgeDollarSign,
    title: "Harga Terjangkau",
    description: "Harga bersahabat tanpa biaya tersembunyi.",
  },
  {
    icon: Bike,
    title: "Motor Berkualitas",
    description: "Motor rutin servis & selalu dalam kondisi prima.",
  },
  {
    icon: Headphones,
    title: "Customer Friendly",
    description: "Layanan cepat, ramah dan siap membantu Anda.",
  },
  {
    icon: CalendarCheck,
    title: "Booking Mudah",
    description: "Proses cepat hanya dalam hitungan menit.",
  },
];

export default function Benefits() {
  return (
    <section id="tentang" className="px-5 py-16 md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-2xl bg-[#fbf8f1] md:grid-cols-4">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;

          return (
            <div
              key={benefit.title}
              className={`px-5 py-8 text-center md:px-6 ${
                index !== benefits.length - 1
                  ? "border-b border-[#e8e0d1] md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              <Icon
                size={28}
                strokeWidth={1.7}
                className="mx-auto mb-4 text-[#c5963a]"
              />

              <h3 className="text-sm font-bold text-[#17202a] md:text-base">
                {benefit.title}
              </h3>

              <p className="mx-auto mt-2 max-w-[190px] text-xs leading-5 text-gray-500">
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
