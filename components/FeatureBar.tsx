import { Clock3, CloudRain, MapPin, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Motor Terawat",
    description: "Bersih & prima",
  },
  {
    icon: CloudRain,
    title: "Helm & Jas Hujan",
    description: "Gratis",
  },
  {
    icon: Clock3,
    title: "Layanan 24 Jam",
    description: "Siap membantu",
  },
  {
    icon: MapPin,
    title: "Antar Jemput",
    description: "Area tertentu",
  },
];

export default function FeatureBar() {
  return (
    <section className="relative z-20 mx-auto -mt-8 max-w-6xl px-5">
      <div className="grid grid-cols-2 gap-4 rounded-xl bg-[#252b2f] px-5 py-5 text-white shadow-xl md:grid-cols-4 md:px-7">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="flex items-center gap-3 border-white/10 md:border-r md:last:border-0"
            >
              <Icon
                size={24}
                strokeWidth={1.7}
                className="shrink-0 text-white"
              />

              <div>
                <p className="text-xs font-bold md:text-sm">{feature.title}</p>

                <p className="mt-1 text-[11px] text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
