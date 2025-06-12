
import { BarChart3 } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';

export const Scoring = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
      <SectionHeader icon={BarChart3} title="Komponen Penilaian Keseluruhan" />
      
      <p className="text-lg text-slate-700 mb-8">
        Nilai akhir peserta akan merupakan gabungan dari kedua komponen penilaian dengan bobot sebagai berikut:
      </p>

      <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 border border-blue-200">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12 mb-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-white">40%</span>
            </div>
            <p className="text-slate-700 font-semibold">Pengumpulan Video Presentasi</p>
            <p className="text-slate-500 text-sm">Pedagogik</p>
          </div>
          
          <div className="text-6xl font-bold text-slate-400">+</div>
          
          <div className="text-center">
            <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-white">60%</span>
            </div>
            <p className="text-slate-700 font-semibold">Pengerjaan Proyek ICT</p>
            <p className="text-slate-500 text-sm">Teknikal</p>
          </div>
        </div>

        <div className="flex w-full rounded-xl overflow-hidden shadow-lg">
          <div className="bg-blue-500 text-white text-center py-4 font-bold text-lg flex items-center justify-center" style={{ width: '40%' }}>
            Video (40%)
          </div>
          <div className="bg-emerald-500 text-white text-center py-4 font-bold text-lg flex items-center justify-center" style={{ width: '60%' }}>
            Proyek (60%)
          </div>
        </div>
      </div>
    </div>
  );
};
