
import { Info, Book, Award, Wrench, BarChart3, ClipboardList, Gavel, Calendar, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
  isMobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
}

export const Sidebar = ({ 
  activeSection, 
  onSectionClick, 
  isMobileMenuOpen, 
  onMobileMenuToggle 
}: SidebarProps) => {
  const navigation = [
    { id: 'overview', name: 'Gambaran Umum', icon: Info },
    { id: 'materials', name: 'Materi Ujian', icon: Book },
    { id: 'video-presentation', name: 'Tahap 1 (Video)', icon: Award },
    { id: 'project-exam', name: 'Tahap 2 (Proyek)', icon: Wrench },
    { id: 'scoring', name: 'Penilaian', icon: BarChart3 },
    { id: 'preparation', name: 'Persiapan', icon: ClipboardList },
    { id: 'rules', name: 'Tata Tertib', icon: Gavel },
    { id: 'schedule', name: 'Jadwal Ujian', icon: Calendar }
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={onMobileMenuToggle}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-800 text-white rounded-lg shadow-lg"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onMobileMenuToggle}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-slate-800 to-slate-900 shadow-2xl z-40 transform transition-transform duration-300 ease-in-out",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="p-6">
          {/* Logo */}
          <div className="text-center mb-8 pb-6 border-b border-slate-700">
            <h1 className="text-2xl font-bold text-white mb-2">UKG Guru ICT</h1>
            <p className="text-slate-300 text-sm">Petunjuk Teknis Online</p>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {navigation.map(({ id, name, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onSectionClick(id)}
                className={cn(
                  "w-full flex items-center px-4 py-3 rounded-lg text-left transition-all duration-200 group",
                  activeSection === id
                    ? "bg-emerald-600 text-white shadow-lg"
                    : "text-slate-300 hover:bg-slate-700 hover:text-white"
                )}
              >
                <Icon 
                  size={20} 
                  className={cn(
                    "mr-3 transition-colors",
                    activeSection === id ? "text-white" : "text-emerald-400 group-hover:text-emerald-300"
                  )} 
                />
                <span className="font-medium">{name}</span>
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};
