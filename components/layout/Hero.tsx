import { Button } from "../ui/Button";

export const Hero = () => (
  <section className="relative h-[85vh] min-h-150 flex items-center justify-center overflow-hidden">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img
        src="/kitchen-bg.jpg" // Replace with your actual asset
        className="w-full h-full object-cover"
        alt="Kitchen background"
      />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
    </div>

    <div className="relative z-10 container mx-auto px-6 text-center text-white max-w-3xl">
      <h1 className="text-5xl md:text-7xl font-bold font-jakarta mb-6 leading-[1.1]">
        Cook like a pro with what you have
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl mx-auto">
        Snap a photo of your fridge or list your ingredients. Our AI handles the rest.
      </p>
      <div className="flex flex-col items-center gap-4">
        <Button className="w-full md:w-auto px-16">Get Started</Button>
        <span className="text-sm text-gray-400">Available on iOS and Android</span>
      </div>
    </div>
  </section>
);