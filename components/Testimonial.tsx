export default function Testimonial() {
  return (
    <section className="bg-[#faf9f6] px-5 py-20 md:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-bold tracking-[0.2em] text-[#c5963a]">
            CUSTOMER LOVE
          </p>

          <h2 className="text-3xl font-extrabold text-[#17202a] md:text-4xl">
            Apa Kata Mereka?
          </h2>
        </div>

        <div className="rounded-2xl border border-[#e7e2d8] bg-white px-6 py-10 text-center shadow-sm md:px-12">
          <div className="mb-2 font-serif text-6xl leading-none text-[#e5c987]">
            “
          </div>

          <p className="mx-auto max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
            Pelayanan sangat ramah, motor bersih dan enak dikendarai. Antar
            jemput juga tepat waktu. Recommended!
          </p>

          <div className="mt-7">
            <p className="font-bold text-[#17202a]">Made Agus</p>

            <p className="mt-1 text-xs text-gray-500">Denpasar</p>
          </div>
        </div>
      </div>
    </section>
  );
}
