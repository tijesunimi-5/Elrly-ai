// components/layout/Navbar.tsx
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#0A1A12] rounded-full flex items-center justify-center text-[#14F169]">
            <SparklesIcon size={20} />
          </div>
          <span className="font-jakarta font-bold text-xl tracking-tight">Elrly AI</span>
        </Link>

        {/* Desktop Links / Right Side */}
        <div className="flex items-center gap-8">
          <Link
            href="/login"
            className="text-[#14F169] font-semibold hover:opacity-80 transition-opacity"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

const SparklesIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3 1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3Z" />
    <path d="M5 3v4" /><path d="M3 5h4" />
  </svg>
);