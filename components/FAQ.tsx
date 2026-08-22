const faqs = [
  {
    question: "Apakah perlu deposit saat rental?",
    answer: "Deposit mengikuti jenis motor dan kebijakan rental.",
  },
  {
    question: "Apakah bisa antar jemput ke hotel / villa?",
    answer:
      "Bisa untuk area tertentu. Silakan konfirmasi lokasi melalui WhatsApp.",
  },
  {
    question: "Apa saja yang termasuk dalam rental?",
    answer: "Motor, 2 helm, dan jas hujan sesuai paket rental.",
  },
  {
    question: "Bagaimana jika motor rusak?",
    answer:
      "Segera hubungi customer service agar kami dapat membantu secepatnya.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="px-5 py-20 md:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <p className="mb-2 text-xs font-bold tracking-[0.2em] text-[#c5963a]">
            FAQ
          </p>

          <h2 className="text-3xl font-extrabold text-[#17202a] md:text-4xl">
            Pertanyaan yang Sering Diajukan
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-lg border border-gray-200 bg-white px-5 py-4"
            >
              <summary className="cursor-pointer list-none pr-6 text-sm font-semibold text-[#17202a]">
                <div className="flex items-center justify-between">
                  <span>{faq.question}</span>

                  <span className="text-xl text-gray-400 transition group-open:rotate-45">
                    +
                  </span>
                </div>
              </summary>

              <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-500">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
