
import { ClipboardList } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';

export const Preparation = () => {
  const preparations = [
    {
      title: 'Perangkat',
      description: 'Pastikan memiliki laptop/komputer dengan spesifikasi yang memadai, kamera, dan mikrofon yang berfungsi baik'
    },
    {
      title: 'Koneksi Internet',
      description: 'Pastikan koneksi internet stabil dan kuat untuk menghindari kendala selama ujian'
    },
    {
      title: 'Lingkungan Ujian',
      description: 'Siapkan ruangan yang tenang dan bebas gangguan'
    },
    {
      title: 'Aplikasi/Software',
      description: 'Pastikan sudah menginstal semua aplikasi/software yang diperlukan sesuai materi jenjang Anda (Scratch Desktop, Arduino IDE, Construct 3, XAMPP/Laragon, dsb.)'
    },
    {
      title: 'Penguasaan Materi',
      description: 'Pelajari kembali semua materi yang akan diujikan'
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
      <SectionHeader icon={ClipboardList} title="Persiapan Peserta" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {preparations.map((item, index) => (
          <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-slate-800 text-lg mb-3 flex items-center">
              <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                {index + 1}
              </span>
              {item.title}
            </h3>
            <p className="text-slate-600 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
