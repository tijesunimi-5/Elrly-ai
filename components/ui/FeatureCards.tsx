import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm flex flex-col gap-4">
    <div className="w-12 h-12 rounded-full bg-[#E8FDF0] flex items-center justify-center text-[#14F169]">
      {icon}
    </div>
    <h3 className="text-2xl font-bold font-jakarta leading-tight">{title}</h3>
    <p className="text-[#6B7C74] leading-relaxed">{description}</p>
  </div>
);
