
import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
}

export const SectionHeader = ({ icon: Icon, title }: SectionHeaderProps) => {
  return (
    <div className="flex items-center mb-8 pb-4 border-b-2 border-gradient-to-r from-blue-300 to-emerald-300">
      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h2 className="text-3xl font-bold text-slate-800">{title}</h2>
    </div>
  );
};
