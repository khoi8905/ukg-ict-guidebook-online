
import { Wrench, Target, Settings, CheckCircle2, Percent } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';

export const ProjectExam = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
      <SectionHeader icon={Wrench} title="Tahap 2: Pengerjaan Proyek ICT (Ujian Kognitif Teknikal)" />
      
      <div className="space-y-6">
        <div className="bg-red-50 rounded-xl p-6 border border-red-200">
          <p className="text-slate-700 text-lg">
            <strong className="text-slate-800">Durasi:</strong> 1 jam per peserta<br />
            <strong className="text-slate-800">Platform Pengawasan:</strong> Zoom
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
                Menguji kemampuan teknis dan problem solving guru
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                Menilai kemampuan kognitif guru ICT
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
                Proyek diberikan secara random
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                Diawasi ketat melalui Zoom
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                Boleh mencari referensi internet
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-red-100 rounded-xl p-6 border-2 border-red-300">
          <h4 className="font-bold text-red-800 text-lg mb-3">⚠️ Aturan Penting</h4>
          <ul className="space-y-2 text-red-700">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              <strong>DILARANG menggunakan bantuan AI generatif</strong>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              <strong>DILARANG ada joki (pengerjaan oleh pihak lain)</strong>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              Kamera harus selalu menyala dan mengarah ke area kerja
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
          <h4 className="font-bold text-slate-800 text-lg mb-4 flex items-center">
            <CheckCircle2 className="w-5 h-5 mr-2 text-purple-600" />
            Hal yang Dinilai
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-slate-800 mb-2">Fungsionalitas Proyek</h5>
              <p className="text-slate-600 text-sm">Proyek berjalan sesuai instruksi</p>
            </div>
            <div>
              <h5 className="font-semibold text-slate-800 mb-2">Efisiensi Kode/Solusi</h5>
              <p className="text-slate-600 text-sm">Kualitas kode yang bersih dan terstruktur</p>
            </div>
            <div>
              <h5 className="font-semibold text-slate-800 mb-2">Kreativitas</h5>
              <p className="text-slate-600 text-sm">Sentuhan inovasi pada proyek</p>
            </div>
            <div>
              <h5 className="font-semibold text-slate-800 mb-2">Kemandirian</h5>
              <p className="text-slate-600 text-sm">Menyelesaikan proyek tanpa bantuan</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
          <h4 className="font-bold text-slate-800 text-lg mb-4 flex items-center">
            <Percent className="w-5 h-5 mr-2 text-amber-600" />
            Aspek Penilaian Proyek ICT (Bobot 60% dari Nilai Akhir)
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h5 className="font-semibold text-slate-800">Fungsionalitas & Kelengkapan (45%)</h5>
              <p className="text-slate-600 text-sm">Proyek berjalan sesuai persyaratan</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h5 className="font-semibold text-slate-800">Kualitas Kode/Struktur (30%)</h5>
              <p className="text-slate-600 text-sm">Kebersihan dan efisiensi kode</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h5 className="font-semibold text-slate-800">Kemandirian & Problem Solving (15%)</h5>
              <p className="text-slate-600 text-sm">Kemampuan menyelesaikan tanpa bantuan</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h5 className="font-semibold text-slate-800">Manajemen Waktu (10%)</h5>
              <p className="text-slate-600 text-sm">Proyek selesai tepat waktu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
