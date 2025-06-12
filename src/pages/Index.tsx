
import { useState, useEffect } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { Overview } from '@/components/sections/Overview';
import { Materials } from '@/components/sections/Materials';
import { VideoPresentation } from '@/components/sections/VideoPresentation';
import { ProjectExam } from '@/components/sections/ProjectExam';
import { Scoring } from '@/components/sections/Scoring';
import { Preparation } from '@/components/sections/Preparation';
import { Rules } from '@/components/sections/Rules';
import { Schedule } from '@/components/sections/Schedule';

const Index = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'overview', component: Overview },
    { id: 'materials', component: Materials },
    { id: 'video-presentation', component: VideoPresentation },
    { id: 'project-exam', component: ProjectExam },
    { id: 'scoring', component: Scoring },
    { id: 'preparation', component: Preparation },
    { id: 'rules', component: Rules },
    { id: 'schedule', component: Schedule }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="flex">
        <Sidebar 
          activeSection={activeSection}
          onSectionClick={scrollToSection}
          isMobileMenuOpen={isMobileMenuOpen}
          onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
        
        <main className="flex-1 lg:ml-80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Header />
            
            <div className="space-y-12">
              {sections.map(({ id, component: Component }) => (
                <section key={id} id={id} className="scroll-mt-20">
                  <Component />
                </section>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
