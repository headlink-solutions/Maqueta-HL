import React from 'react';
import { useNavigate } from 'react-router-dom';

const BulkUpload: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-slate-100 dark:bg-black font-display overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCum_nEEPF_-EU2FDY6GR9VWJ8QhxcttuTbdJra8sNTwQsTT8HYUKkcfwsFpAlsC5pWmKorLGiD3VfpDzT5D8lTOS4GOVvRVIIXpjFZea_3ObnJEop3Ry8C11Y4HcjjOx0q7LXsgKj2rczFwhL49JkY0sGivsKgfh7a_lHzvGpjCNpXONm2CIO9W8edTFwCpKFPkXsa6myFymDg19AbsOVhGPwep2L-XuCRhyenAaghdhkmAXUGrzzwEoMKKxsQCRHA6oQVxGsBxnI')" }}></div>
      <div className="relative z-10 flex h-full grow flex-col items-center justify-center p-4 backdrop-blur-sm bg-black/40">
        <div className="w-full max-w-[960px] max-h-[90vh] flex flex-col bg-background-light dark:bg-surface-dark rounded-2xl shadow-2xl overflow-hidden border border-white/20 dark:border-gray-700">
          <div className="flex items-center justify-between px-6 py-5 border-b border-border-light dark:border-border-dark bg-surface-light dark:bg-background-dark shrink-0">
            <div className="flex flex-col gap-1">
              <h2 className="text-slate-900 dark:text-white tracking-tight text-xl font-bold leading-tight">Carga Masiva de Candidatos</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-normal">Sube los CVs en PDF para procesar la información automáticamente.</p>
            </div>
            <button onClick={() => navigate(-1)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-background-light dark:bg-surface-dark">
            <div className="flex flex-col gap-4">
              <div className="relative group cursor-pointer flex flex-col items-center justify-center w-full h-48 rounded-xl border-2 border-dashed border-primary/40 hover:border-primary bg-primary/5 hover:bg-primary/10 transition-all duration-300">
                <div className="flex flex-col items-center gap-3 text-center px-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl">upload_file</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-slate-900 dark:text-white text-lg font-semibold">Arrastra tus archivos PDF aquí</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Soporta carga múltiple. Máximo 10MB por archivo.</p>
                  </div>
                  <button className="mt-2 text-primary text-sm font-bold hover:underline">Seleccionar archivos</button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-slate-900 dark:text-white text-base font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-slate-400">list</span>
                Candidatos Identificados (2)
              </h3>
              <details className="group rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-background-dark overflow-hidden transition-all duration-200 open:shadow-md" open>
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-4 bg-slate-50/50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                      <span className="material-symbols-outlined text-lg">check</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-slate-900 dark:text-white text-sm font-semibold">Juan Pérez</span>
                      <span className="text-slate-500 dark:text-slate-400 text-xs flex items-center gap-1">
                        CV_Juan_Perez_2023.pdf
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="hidden sm:inline-block rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/40 dark:text-green-300">Listo</span>
                    <span className="material-symbols-outlined text-slate-400 transition-transform duration-200 group-open:rotate-180">expand_more</span>
                  </div>
                </summary>
                <div className="p-6 border-t border-border-light dark:border-border-dark grid grid-cols-1 md:grid-cols-2 gap-5">
                  <label className="flex flex-col gap-1.5">
                    <span className="text-slate-700 dark:text-slate-300 text-xs font-medium uppercase tracking-wide">Nombre Completo</span>
                    <input className="w-full rounded-lg border border-border-light dark:border-border-dark bg-slate-50 dark:bg-surface-dark px-4 py-2.5 text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all text-sm" type="text" defaultValue="Juan Pérez" />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-slate-700 dark:text-slate-300 text-xs font-medium uppercase tracking-wide">Correo Electrónico</span>
                    <input className="w-full rounded-lg border border-border-light dark:border-border-dark bg-slate-50 dark:bg-surface-dark px-4 py-2.5 text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all text-sm" type="email" defaultValue="juan.perez@example.com" />
                  </label>
                </div>
              </details>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 px-6 py-5 border-t border-border-light dark:border-border-dark bg-slate-50 dark:bg-background-dark shrink-0">
            <button onClick={() => navigate(-1)} className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-surface-dark transition-colors">
              Cancelar
            </button>
            <button onClick={() => navigate('/recruiter-portal')} className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all">
              <span>Enviar candidatos</span>
              <span className="material-symbols-outlined text-lg">send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkUpload;