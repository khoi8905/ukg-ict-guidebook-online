
import { Gavel } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';

export const Rules = () => {
  const rules = [
    'Peserta wajib mengumpulkan video presentasi sesuai jadwal yang telah ditetapkan (maksimal 21 Juni 2025 pukul 14.00 WIB)',
    'Peserta wajib mengikuti ujian proyek sesuai jadwal yang telah ditetapkan',
    'Peserta wajib bergabung dengan link Zoom 10-15 menit sebelum waktu ujian proyek dimulai',
    'Selama sesi pengerjaan proyek, peserta wajib mengaktifkan kamera dan mikrofon (jika diminta), serta memastikan area kerja terlihat jelas',
    'DILARANG melakukan joki atau meminta bantuan pihak lain untuk mengerjakan proyek',
    'DILARANG menggunakan tools AI generatif untuk membantu pengerjaan proyek',
    'Apabila terjadi kendala teknis, segera laporkan kepada pengawas ujian',
    'Pelanggaran terhadap tata tertib ini akan mengakibatkan diskualifikasi'
  ];

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
      <SectionHeader icon={Gavel} title="Tata Tertib Ujian" />
      
      <div className="space-y-4">
        {rules.map((rule, index) => (
          <div key={index} className={`p-4 rounded-xl border-l-4 ${
            rule.includes('DILARANG') 
              ? 'bg-red-50 border-red-500 border border-red-200' 
              : 'bg-blue-50 border-blue-500 border border-blue-200'
          }`}>
            <div className="flex items-start">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5 ${
                rule.includes('DILARANG') 
                  ? 'bg-red-500 text-white' 
                  : 'bg-blue-500 text-white'
              }`}>
                {index + 1}
              </span>
              <p className={`leading-relaxed ${
                rule.includes('DILARANG') ? 'text-red-800' : 'text-slate-700'
              }`}>
                {rule}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
