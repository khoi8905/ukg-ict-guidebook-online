
import { Award, Target, Settings, CheckCircle2, Percent } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';

export const VideoPresentation = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
      <SectionHeader icon={Award} title="Tahap 1: Pengumpulan Materi & Video Presentasi (Pedagogik)" />
      
      <div className="space-y-6">
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
          <p className="text-slate-700 text-lg">
            <strong className="text-slate-800">Durasi Video:</strong> 20 menit (inti materi saja)<br />
            <strong className="text-slate-800">Batas Pengumpulan:</strong> 16-21 Juni 2025, Maksimal 21 Juni 2025 pukul 14.00 WIB
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
            <h4 className="font-bold text-slate-800 text-lg mb-4 flex items-center">
              <Target className="w-5 h-5 mr-2 text-emerald-600" />
              Tujuan
            </h4>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                Mengukur kemampuan guru dalam menyajikan materi ICT secara online
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                Menilai pemahaman inti materi yang diampu
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                Menilai kemampuan komunikasi dan interaksi dengan peserta
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h4 className="font-bold text-slate-800 text-lg mb-4 flex items-center">
              <Settings className="w-5 h-5 mr-2 text-blue-600" />
              Mekanisme
            </h4>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                Siapkan materi presentasi dalam format PDF
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                Rekam video mengajar secara online
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                Upload ke YouTube dengan status unlisted
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
          <h4 className="font-bold text-slate-800 text-lg mb-4 flex items-center">
            <CheckCircle2 className="w-5 h-5 mr-2 text-purple-600" />
            Hal yang Dinilai
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-slate-800 mb-2">Struktur dan Kejelasan Materi</h5>
              <p className="text-slate-600 text-sm">Materi tersusun rapi, mudah dipahami, dan fokus pada inti materi</p>
            </div>
            <div>
              <h5 className="font-semibold text-slate-800 mb-2">Cara Mengajar</h5>
              <p className="text-slate-600 text-sm">Kemampuan mengajar secara interaktif dan menarik</p>
            </div>
            <div>
              <h5 className="font-semibold text-slate-800 mb-2">Penguasaan Materi</h5>
              <p className="text-slate-600 text-sm">Kedalaman pemahaman guru terhadap materi</p>
            </div>
            <div>
              <h5 className="font-semibold text-slate-800 mb-2">Efisiensi Waktu</h5>
              <p className="text-slate-600 text-sm">Menyampaikan inti materi dalam 20 menit</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
          <h4 className="font-bold text-slate-800 text-lg mb-4 flex items-center">
            <Percent className="w-5 h-5 mr-2 text-amber-600" />
            Aspek Penilaian Video Presentasi (Bobot 40% dari Nilai Akhir)
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h5 className="font-semibold text-slate-800">Kualitas Konten (40%)</h5>
              <p className="text-slate-600 text-sm">Kedalaman materi, relevansi dengan jenjang</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h5 className="font-semibold text-slate-800">Kualitas Pedagogis (30%)</h5>
              <p className="text-slate-600 text-sm">Metode penyampaian, interaksi</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h5 className="font-semibold text-slate-800">Manajemen Waktu (10%)</h5>
              <p className="text-slate-600 text-sm">Kesesuaian dengan durasi 20 menit</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h5 className="font-semibold text-slate-800">Kelengkapan Berkas (5%)</h5>
              <p className="text-slate-600 text-sm">PDF materi dan tautan video</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
