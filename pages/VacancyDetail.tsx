import React from 'react';
import { useNavigate } from 'react-router-dom';

const VacancyDetail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 overflow-y-auto">
      <main className="w-full max-w-[1280px] mx-auto px-4 md:px-8 py-6 md:py-10">
        {/* Breadcrumbs */}
        <nav className="flex mb-6 text-sm">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <span className="cursor-pointer inline-flex items-center text-text-secondary-light dark:text-text-secondary-dark hover:text-primary" onClick={() => navigate('/dashboard')}>
                <span className="material-symbols-outlined text-lg mr-1">home</span>
                Inicio
              </span>
            </li>
            <li>
              <div className="flex items-center">
                <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark text-lg mx-1">chevron_right</span>
                <span className="ml-1 text-text-primary-light dark:text-text-primary-dark font-medium md:ml-2">Senior React Developer</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <div className="flex items-center gap-2 px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-semibold text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-wide">
                  <span className="material-symbols-outlined text-sm">lock</span>
                  Empresa Confidencial
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full text-xs font-medium border border-green-200 dark:border-green-800">Activa</span>
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-primary rounded-full text-xs font-medium border border-blue-100 dark:border-blue-900">IT / Desarrollo</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4 tracking-tight">Senior React Developer</h1>
              <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg">public</span>
                  <span>Remoto (Latam)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg">schedule</span>
                  <span>Tiempo Completo</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg">calendar_today</span>
                  <span>Publicado hace 2 días</span>
                </div>
              </div>
            </div>

            {/* Description Content */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-800 space-y-8">
              <section>
                <h3 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark mb-4 flex items-center gap-2">
                  Descripción del puesto
                </h3>
                <div className="prose prose-slate dark:prose-invert max-w-none text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                  <p className="mb-4">
                    Estamos buscando un Desarrollador Senior de React altamente calificado para unirse a un equipo de ingeniería dinámico. El candidato ideal será responsable de diseñar y desarrollar aplicaciones web complejas, asegurando un alto rendimiento y una experiencia de usuario excepcional.
                  </p>
                  <p>
                    Trabajarás en colaboración con diseñadores de UI/UX y desarrolladores backend para crear interfaces robustas y escalables. Esta posición requiere una profunda comprensión de los principios fundamentales de React.js y experiencia en flujos de trabajo modernos de frontend.
                  </p>
                </div>
              </section>
              <hr className="border-slate-100 dark:border-slate-800" />
              <section>
                <h3 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark mb-4 flex items-center gap-2">
                  Habilidades Requeridas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'TypeScript', 'Redux', 'HTML5 / CSS3', 'REST APIs', 'Git', 'Inglés B2+'].map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-text-primary-light dark:text-text-primary-dark rounded-md text-sm font-medium border border-slate-200 dark:border-slate-700">{skill}</span>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* Right Column: Sidebar / Stats */}
          <div className="lg:col-span-4 space-y-6">
            {/* Main CTA Card */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden sticky top-24">
              <div className="bg-primary/5 p-6 border-b border-primary/10">
                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark font-medium mb-1">Comisión Estimada</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-primary">$2,500</span>
                  <span className="text-lg font-semibold text-primary">USD</span>
                  <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark ml-1">/ contratación</span>
                </div>
              </div>
              <div className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-lg text-text-secondary-light dark:text-text-secondary-dark">
                        <span className="material-symbols-outlined">attach_money</span>
                      </div>
                      <div>
                        <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark uppercase font-semibold">Salario Anual</p>
                        <p className="text-base font-semibold text-text-primary-light dark:text-text-primary-dark">$60k - $80k USD</p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="border-slate-100 dark:border-slate-800" />
                <button onClick={() => navigate('/upload')} className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-4 rounded-lg shadow-md shadow-primary/20 transition-all transform active:scale-95 flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">upload_file</span>
                  Subir Candidatos
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VacancyDetail;