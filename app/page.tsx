import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/layout/Hero";
import { FeatureCard } from "@/components/ui/FeatureCards";
import { Button } from "@/components/ui/Button";
import { Sparkles, Leaf, UtensilsCrossed } from "lucide-react";

export default function LandingPage() {
  return (
    <main>
      <Navbar />
      <Hero />

      {/* Why Elrly AI Section */}
      <section className="py-24 container mx-auto px-6 text-center">
        <span className="text-[#14F169] font-bold tracking-[0.2em] uppercase text-sm">Why Elrly AI?</span>
        <h2 className="text-4xl md:text-5xl font-bold font-jakarta mt-6 mb-4">Smarter Cooking</h2>
        <p className="text-[#6B7C74] max-w-lg mx-auto mb-16">
          Stop staring at your fridge. Start creating amazing meals with zero waste.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          <FeatureCard
            icon={<Sparkles size={24} />}
            title="AI Discovery"
            description="Instantly find gourmet recipes based on the exact stock in your pantry."
          />
          <FeatureCard
            icon={<Leaf size={24} />}
            title="Zero Waste"
            description="We help you use every last ingredient before it expires. Save money and the planet."
          />
          <FeatureCard
            icon={<UtensilsCrossed size={24} />}
            title="Pro Quality"
            description="Chef-vetted instructions that make complex flavors easy to achieve at home."
          />
        </div>
      </section>

      {/* Community CTA Section */}
      <section className="pb-24 px-6">
        <div className="container mx-auto bg-white rounded-[40px] p-8 md:p-16 border border-gray-100 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold font-jakarta">Join 50k+ home chefs</h2>
            <p className="text-[#6B7C74] text-lg">
              Our community is reducing food waste by 30% on average. Ready to join the revolution?
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button>Get Started Free</Button>
              <Button variant="secondary">Learn More</Button>
            </div>
          </div>
          <div className="lg:w-1/2 bg-[#FDE8D9] rounded-4xl p-8 flex justify-center">
            {/* Mockup Placeholder */}
            <div className="w-60 h-120 bg-black rounded-[40px] border-8px border-gray-800 shadow-2xl relative overflow-hidden">
              <Image src="/app-screenshot.jpg" alt="App interface" width={240} height={480} className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}