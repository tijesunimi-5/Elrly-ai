import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export const Button = ({ children, variant = "primary", className = "" }: ButtonProps) => {
  const variants = {
    primary: "bg-[#14F169] text-[#0A1A12] hover:bg-[#12d85e]",
    secondary: "bg-[#F0F4F2] text-[#0A1A12] hover:bg-[#E2E8E5]",
  };

  return (
    <button className={`px-8 py-4 rounded-full font-bold transition-all active:scale-95 ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};