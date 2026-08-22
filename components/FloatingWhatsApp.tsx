import WhatsAppIcon from "@/components/WhatsAppIcon";
import { getWhatsAppUrl } from "@/data/site";

export default function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat melalui WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition duration-300 hover:scale-110 hover:bg-[#20bd5a]"
    >
      <WhatsAppIcon size={27} />
    </a>
  );
}
