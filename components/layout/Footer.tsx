// components/layout/Footer.tsx
import { Globe, Share2, HelpCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#0A1A12] text-white py-16 px-6 rounded-t-[40px]">
      <div className="container mx-auto flex flex-col items-center text-center">
        {/* Logo Mark */}
        <div className="flex items-center gap-2 mb-8">
          <div className="text-[#14F169]">
            <SparklesIcon size={24} />
          </div>
          <span className="font-jakarta font-bold text-2xl">Elrly AI</span>
        </div>

        {/* Copy */}
        <p className="text-gray-400 max-w-xs mb-10 text-sm leading-relaxed">
          Made for the modern kitchen. © 2024 Elrly AI Inc.
        </p>

        {/* Social / Action Icons */}
        <div className="flex items-center gap-8 text-gray-400">
          <button className="hover:text-[#14F169] transition-colors">
            <Globe size={20} />
          </button>
          <button className="hover:text-[#14F169] transition-colors">
            <Share2 size={20} />
          </button>
          <button className="hover:text-[#14F169] transition-colors">
            <HelpCircle size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

// Re-using the same icon path for consistency
const SparklesIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3 1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3Z" />
    <path d="M5 3v4" /><path d="M3 5h4" />
  </svg>
);