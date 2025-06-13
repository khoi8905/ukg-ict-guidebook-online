
export const Header = () => {
  return (
    <header className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 leading-tight">
        Petunjuk Teknis UKG Guru ICT
      </h1>
      <p className="text-xl text-slate-600 mb-6">
        Pelaksanaan : Juni - Juli 2025
      </p>
      
      <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-6 border border-blue-200 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl p-6 shadow-md border border-blue-100">
            <h3 className="font-bold text-slate-800 text-lg mb-2">Ujian Pedagogik</h3>
            <p className="text-slate-600 mb-3">Materi Ajar PDF + Video</p>
            <p className="text-blue-700 text-sm font-medium">
              Waktu Pelaksanaan: 16-21 Juni 2025<br />
              Pengumpulan Maks. 21 Juni 2025 pukul 14.00 WIB
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md border border-emerald-100">
            <h3 className="font-bold text-slate-800 text-lg mb-2">Ujian Teknikal Kognitif</h3>
            <p className="text-slate-600 mb-3">Proyek ICT (1 Jam) dengan Pengawasan Zoom / Google Meet</p>
            <p className="text-emerald-700 text-sm font-medium">
              Tanggal Ujian: 7 Juli 2025 (Dibagi 2 Sesi)<br />
              Lokasi: Dari lokasi masing-masing (online)
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-2xl font-bold text-slate-800">
            Total Peserta: <span className="text-blue-700">65 Guru</span>
          </p>
        </div>
      </div>
    </header>
  );
};
