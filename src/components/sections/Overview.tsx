
import { Info } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';

export const Overview = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
      <SectionHeader icon={Info} title="Gambaran Umum" />
      
      <p className="text-lg leading-relaxed text-slate-700">
        Yayasan Al Abidin mengadakan UKG ICT untuk menguji kompetensi guru-guru ICT di bidang teknis dan pedagogis, 
        disesuaikan dengan materi yang menjadi tanggung jawab mereka. Tes akan dibagi menjadi 2 tahap, yaitu pedagogis 
        melalui materi ajar dan video, sedangkan teknis akan diuji melalui proyek ICT yang akan dikerjakan.
      </p>
    </div>
  );
};
