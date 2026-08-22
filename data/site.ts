export const siteConfig = {
  name: "Rental Motor Bali",
  whatsappNumber: "6281234567890",
  phone: "+62 812-3456-7890",
  email: "info@rentalmotorbali.com",
  location: "Denpasar, Bali",
};

export function getWhatsAppUrl(message?: string) {
  const defaultMessage =
    "Halo Rental Motor Bali, saya ingin menyewa motor. Mohon info motor yang tersedia.";

  const text = encodeURIComponent(message ?? defaultMessage);

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}

export function getMotorWhatsAppUrl(motorcycleName: string) {
  const message = `Halo Rental Motor Bali,

Saya tertarik menyewa ${motorcycleName}.

Mohon informasi mengenai:
- Ketersediaan motor
- Harga rental
- Syarat rental

Terima kasih.`;

  return getWhatsAppUrl(message);
}
