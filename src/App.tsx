import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EmergencyFAB } from "@/components/EmergencyFAB";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { Emergency } from "@/components/sections/Emergency";
import { Contact } from "@/components/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Emergency />
        <Contact />
      </main>

      <Footer />
      <EmergencyFAB />
    </div>
  );
}
