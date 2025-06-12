
import { Calendar } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';

export const Schedule = () => {
  const scheduleData = [
    {
      session: 'Sesi 1',
      date: '7 Juli 2025',
      time: '08.00 - 09.00',
      participants: 32
    },
    {
      session: 'Sesi 2',
      date: '7 Juli 2025',
      time: '09.30 - 10.30',
      participants: 32
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
      <SectionHeader icon={Calendar} title="Jadwal Ujian Tahap 2" />
      
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white">
              <th className="px-6 py-4 rounded-tl-xl font-semibold">Sesi</th>
              <th className="px-6 py-4 font-semibold">Tanggal</th>
              <th className="px-6 py-4 font-semibold">Waktu (WIB)</th>
              <th className="px-6 py-4 rounded-tr-xl font-semibold">Jumlah Guru</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((item, index) => (
              <tr key={index} className={`${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}>
                <td className="px-6 py-4 font-semibold text-slate-800">{item.session}</td>
                <td className="px-6 py-4 text-slate-600">{item.date}</td>
                <td className="px-6 py-4 text-slate-600">{item.time}</td>
                <td className="px-6 py-4 text-slate-600">{item.participants}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <p className="text-sm text-slate-500 mt-6 italic bg-amber-50 p-4 rounded-xl border border-amber-200">
        *Catatan: Jadwal detail pembagian peserta akan diinformasikan sebelum liburan.
      </p>
    </div>
  );
};
