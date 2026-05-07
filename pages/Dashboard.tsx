import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col h-full overflow-y-auto">
        {/* Mobile Header */}
        <header className="sticky top-0 z-40 bg-surface-light dark:bg-surface-dark border-b border-slate-200 dark:border-slate-800 h-16 px-4 sm:px-6 lg:px-8 shadow-sm flex items-center justify-between lg:hidden">
             <div className="flex items-center gap-2">
                <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn-R0FqA5tD0iJglKqg_fPq2zTqD-dO-t6z9E7d-gq7gq_tq_q" 
                    alt="Hunterlink" 
                    className="h-8 w-auto" 
                />
            </div>
            <button className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
                <span className="material-symbols-outlined">menu</span>
            </button>
        </header>

      <div className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
        
        {/* Top Section: Title & Filters */}
        <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Explorar Vacantes</h1>
            
            {/* Filter Bar */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="flex-1 w-full relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                        <input className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-900 dark:text-white" placeholder="Buscar por puesto, empresa o palabras clave..." type="text"/>
                    </div>
                    <div className="w-full md:w-auto flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 md:pb-0">
                         <span className="text-sm font-medium text-slate-500 shrink-0 mr-1">Ubicación:</span>
                         <div className="flex gap-2">
                             {['CDMX', 'Guadalajara', 'Monterrey', 'Remoto'].map(loc => (
                                 <button key={loc} className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all whitespace-nowrap bg-white dark:bg-slate-800 active:scale-95">
                                    {loc}
                                 </button>
                             ))}
                         </div>
                         <button className="ml-3 text-sm text-slate-400 hover:text-primary hover:underline whitespace-nowrap font-medium transition-colors">Limpiar</button>
                    </div>
                </div>
            </div>
        </div>

        {/* Center Feed */}
        <section className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Recomendado para ti</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Basado en tu perfil y preferencias</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-500 hidden sm:inline">Ordenar por:</span>
              <select className="text-sm font-medium bg-transparent border-none text-slate-900 dark:text-white focus:ring-0 cursor-pointer pr-8 py-0">
                <option>Relevancia</option>
                <option>Comisión (Alta a Baja)</option>
                <option>Más recientes</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {/* Vacancy Card 1 */}
            <VacancyCard 
                title="Desarrollador Full Stack Senior"
                company="Fintech Global Inc."
                time="Hace 2 horas"
                salary="$60,000 - $70,000 MXN"
                commission="$18,400 MXN"
                logo="https://lh3.googleusercontent.com/aida-public/AB6AXuCPcMERg26CRwBpLFV11au0hj9gm2HkcA5LPTYvX5_HEE7-0dOTTiN7HbkgizMoTkKy3N3qfXLf4WgRWisLWYpAHxYFNXIC43wJ2F-vQ8KWF_IP60jKV-fEVEG0ZvWv5cablpSgAhwn5LXZkzww1NVzER3K8JSPPvC1Akbsy_9NTCY5FJxBZtMwmG1i51Vwxe-3oItMC7mISho3KqzWtm2c6Es-43uGrQiHekPDvfpRW5zgpEqt5tU9_zmdBBE8NaBLZiRS6r_LSqA"
                tags={['React', 'Node.js', 'Inglés Avanzado']}
                badges={['Nuevo']}
                onClick={() => navigate('/vacancy/1')}
            />
             {/* Vacancy Card 2 */}
             <VacancyCard 
                title="Product Designer UX/UI"
                company="Airbnb Latam"
                time="Hace 5 horas"
                salary="$45,000 - $55,000 MXN"
                commission="$12,500 MXN"
                logo="https://lh3.googleusercontent.com/aida-public/AB6AXuCH82DZikwobX55Lqd5r_JpuWPqv64F4-xpDTOPgM1Sn9AVhoME6puVAZF7tPt3wgs4eE_coXmNwTDUyFYk9rShy3iCDOVtOYiqvi0szPb6pjqlY6gge624hK8PpaoiL4jWSe5k3u-Dsf9sVQTmKhn7yyB-uOFFY-RhQGVhRrReXkUn5WAShCxWA6dz4Uq7dorE7zgVTLXUck6tFQ6gFgpbUkZuXeNtpD_bE3SCni4iccTkBCb7WvNBaFDWg7zIv41Km9MOyq8O3pk"
                tags={['Figma', 'Design Systems']}
                onClick={() => navigate('/vacancy/1')}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

interface VacancyCardProps {
    title: string;
    company: string;
    time: string;
    salary: string;
    commission: string;
    logo: string;
    tags: string[];
    badges?: string[];
    onClick: () => void;
}

const VacancyCard: React.FC<VacancyCardProps> = ({ title, company, time, salary, commission, logo, tags, badges, onClick }) => (
    <article className="bg-surface-light dark:bg-surface-dark rounded-lg border border-slate-200 dark:border-slate-800 p-5 shadow-sm hover:shadow-md transition-shadow group relative">
        <div className="absolute top-5 right-5">
            <button className="text-slate-400 hover:text-primary transition-colors">
                <span className="material-symbols-outlined">bookmark</span>
            </button>
        </div>
        <div className="flex gap-4">
            <div className="w-14 h-14 rounded-md bg-white border border-slate-100 flex items-center justify-center shrink-0 p-1">
                <img alt={`${company} Logo`} className="w-full h-full object-contain" src={logo} />
            </div>
            <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                    <h3 onClick={onClick} className="text-lg font-bold text-slate-900 dark:text-white hover:underline cursor-pointer">{title}</h3>
                    {badges?.map(badge => (
                        <span key={badge} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">{badge}</span>
                    ))}
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{company} • {time}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-700">{tag}</span>
                    ))}
                </div>
                <hr className="border-slate-100 dark:border-slate-800 mb-4" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-col">
                        <p className="text-sm text-slate-500 dark:text-slate-400">Salario Mensual</p>
                        <p className="font-semibold text-slate-900 dark:text-white">{salary}</p>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-lg border border-blue-100 dark:border-blue-900/30">
                        <div className="flex flex-col">
                            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Tu Comisión</span>
                            <span className="text-lg font-bold text-slate-900 dark:text-white">{commission}</span>
                        </div>
                        <button onClick={onClick} className="bg-primary hover:bg-sky-600 text-white text-sm font-bold py-2 px-4 rounded-lg transition-colors shadow-sm shadow-blue-500/30 flex items-center gap-2">
                            Ver Detalles
                            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </article>
);

export default Dashboard;