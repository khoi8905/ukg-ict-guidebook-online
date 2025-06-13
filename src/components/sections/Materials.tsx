
import { Book, GraduationCap, School, BookOpen } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';

export const Materials = () => {
  const materials = [
    {
      level: 'SD',
      icon: GraduationCap,
      color: 'blue',
      items: ['Scratch Jr', 'Scratch', 'IoT Arduino (Thinkercad)']
    },
    {
      level: 'SMP',
      icon: School,
      color: 'emerald',
      items: ['Construct 3', 'IoT Arduino', 'Web Statis']
    },
    {
      level: 'SMA',
      icon: BookOpen,
      color: 'purple',
      items: ['Web Dinamis', 'IoT ESP32 + MQTT']
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-gradient-to-br from-blue-50 to-blue-100',
        border: 'border-blue-200',
        text: 'text-blue-800',
        icon: 'text-blue-600'
      },
      emerald: {
        bg: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
        border: 'border-emerald-200',
        text: 'text-emerald-800',
        icon: 'text-emerald-600'
      },
      purple: {
        bg: 'bg-gradient-to-br from-purple-50 to-purple-100',
        border: 'border-purple-200',
        text: 'text-purple-800',
        icon: 'text-purple-600'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
      <SectionHeader icon={Book} title="Materi Ujian Berdasarkan Jenjang" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {materials.map(({ level, icon: Icon, color, items }) => {
          const colorClasses = getColorClasses(color);
          return (
            <div
              key={level}
              className={`${colorClasses.bg} ${colorClasses.border} border-2 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
            >
              <h3 className={`font-bold text-xl ${colorClasses.text} mb-4 flex items-center`}>
                <Icon className={`w-6 h-6 mr-3 ${colorClasses.icon}`} />
                Jenjang {level}
              </h3>
              <ul className="space-y-2">
                {items.map((item, index) => (
                  <li key={index} className="text-slate-700 flex items-start">
                    <span className={`w-2 h-2 ${colorClasses.icon.replace('text', 'bg')} rounded-full mt-2 mr-3 flex-shrink-0`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
