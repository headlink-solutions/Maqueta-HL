import React from 'react';
import { useNavigate } from 'react-router-dom';

const CandidateDetail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Sticky Header for quick actions */}
        <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 z-20 shadow-sm sticky top-0">
            <div>
                <div 
                    className="flex items-center gap-2 text-xs text-slate-500 mb-1 cursor-pointer hover:text-primary"
                    onClick={() => navigate('/recruiter-portal')}
                >
                    <span>Candidatos</span>
                    <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                    <span>Senior Frontend Dev</span>
                </div>
                <div className="flex items-center gap-3">
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Juan Pérez</h1>
                    <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">En proceso</span>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-sm font-bold hover:bg-slate-50 transition-all shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">block</span>
                    Retirar
                </button>
                <button className="flex items-center gap-2 px-6 py-2 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all shadow-md shadow-primary/20">
                    <span className="material-symbols-outlined text-[18px]">check_circle</span>
                    Aprobar Fase
                </button>
            </div>
        </header>

      <main className="max-w-[1440px] w-full mx-auto p-4 lg:p-8 flex flex-col gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full flex-1">
          {/* Left Column: CV Viewer (8 cols) */}
          <div className="lg:col-span-8 flex flex-col h-[800px] lg:h-auto min-h-[600px] bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            {/* Toolbar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
              <div className="flex items-center gap-3">
                <div className="bg-red-100 text-red-600 p-1.5 rounded flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">CV_Juan_Perez_2024.pdf</span>
                  <span className="text-xs text-slate-500">2.4 MB • Subido 12 Oct</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary text-xs font-bold rounded transition-colors">
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  Descargar
                </button>
              </div>
            </div>
            {/* PDF Content (Mock) */}
            <div className="flex-1 bg-slate-200 dark:bg-slate-900 p-8 overflow-y-auto flex justify-center">
              <div className="w-full max-w-3xl bg-white shadow-lg min-h-[1000px] p-12 flex flex-col gap-6 select-none">
                {/* Header Mock */}
                <div className="flex justify-between border-b pb-8 border-slate-100">
                  <div>
                    <div className="h-8 w-48 bg-slate-800 rounded mb-2"></div>
                    <div className="h-4 w-32 bg-slate-400 rounded"></div>
                  </div>
                  <div className="h-16 w-16 bg-slate-100 rounded-full"></div>
                </div>
                {/* Body Mock */}
                <div className="space-y-4">
                  <div className="h-4 w-full bg-slate-100 rounded"></div>
                  <div className="h-4 w-5/6 bg-slate-100 rounded"></div>
                  <div className="h-4 w-4/6 bg-slate-100 rounded"></div>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-4">
                  <div className="space-y-4">
                    <div className="h-5 w-24 bg-slate-300 rounded mb-4"></div>
                    <div className="h-20 w-full bg-slate-50 rounded border border-slate-100"></div>
                    <div className="h-20 w-full bg-slate-50 rounded border border-slate-100"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-5 w-24 bg-slate-300 rounded mb-4"></div>
                    <div className="h-4 w-full bg-slate-100 rounded"></div>
                    <div className="h-4 w-full bg-slate-100 rounded"></div>
                    <div className="h-4 w-3/4 bg-slate-100 rounded"></div>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-slate-50 rounded border border-slate-100 h-64 flex items-center justify-center text-slate-300">
                  <span className="italic">Previsualización del documento</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Tracker & Details (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Card 1: Candidate Contact Info */}
            <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="size-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 group-hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[18px]">call</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Teléfono</p>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">+52 55 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="size-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 group-hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[18px]">mail</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Email</p>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">juan.perez@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Visual Tracker */}
            <div className="bg-surface-light dark:bg-surface-dark p-0 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">Proceso de Selección</h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">ACTIVO</span>
              </div>
              <div className="p-5 relative">
                <div className="absolute left-[39px] top-8 bottom-8 w-0.5 bg-slate-100 dark:bg-slate-800 -z-0"></div>
                <div className="flex flex-col gap-6 relative z-10">
                  <TrackerStep icon="check" title="Enviado" sub="12 Oct • Por Recruiter A" active />
                  <TrackerStep icon="check" title="En Revisión" sub="14 Oct • Aprobado por Lead" active />
                  <TrackerStep icon="radio_button_checked" title="Entrevista Técnica" sub="En curso • Programada hoy 10:00 AM" current />
                  <TrackerStep number="4" title="Oferta" sub="Pendiente" />
                  <TrackerStep number="5" title="Contratado" sub="Firma de contrato" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const TrackerStep: React.FC<{ icon?: string; number?: string; title: string; sub: string; active?: boolean; current?: boolean }> = ({ icon, number, title, sub, active, current }) => {
    let iconClass = "bg-slate-100 text-slate-400 dark:bg-slate-800";
    if (active) iconClass = "bg-primary text-white";
    if (current) iconClass = "bg-white border-2 border-primary text-primary shadow-[0_0_10px_rgba(15,140,230,0.3)]";

    return (
        <div className={`flex gap-4 ${!active && !current ? 'opacity-50' : ''}`}>
            <div className={`size-10 rounded-full flex items-center justify-center shrink-0 ring-4 ring-white dark:ring-surface-dark ${iconClass}`}>
                {icon ? <span className="material-symbols-outlined text-[20px]">{icon}</span> : <span className="text-xs font-bold">{number}</span>}
            </div>
            <div className="flex flex-col pt-1">
                <p className={`text-sm font-bold ${current ? 'text-primary' : 'text-slate-900 dark:text-white'}`}>{title}</p>
                <p className={`text-xs ${current ? 'text-primary/80 font-medium' : 'text-slate-500'}`}>{sub}</p>
            </div>
        </div>
    )
}

export default CandidateDetail;