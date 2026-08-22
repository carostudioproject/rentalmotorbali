import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureBar from "@/components/FeatureBar";
import MotorcycleSection from "@/components/MotorcycleSection";
import Benefits from "@/components/Benefits";
import RentalSteps from "@/components/RentalSteps";
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <FeatureBar />

        <MotorcycleSection />

        <Benefits />

        <RentalSteps />

        <Testimonial />

        <FAQ />

        <CTA />
      </main>

      <Footer />

      <FloatingWhatsApp />
    </>
  );
}
