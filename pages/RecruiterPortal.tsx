import React from 'react';
import { useNavigate } from 'react-router-dom';

const RecruiterPortal: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col min-h-screen overflow-y-auto">
      <div className="flex-1 p-6 md:p-10 max-w-[1400px] mx-auto w-full flex flex-col gap-8">
        {/* Page Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-[#0d161c] dark:text-white text-3xl md:text-4xl font-black tracking-[-0.033em]">Mis Candidatos</h1>
            <p className="text-[#4b799b] dark:text-slate-400 text-base font-normal">Gestiona y rastrea el estado de tus candidatos en tiempo real.</p>
          </div>
          <button 
            onClick={() => navigate('/upload')}
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg shadow-sm transition-all active:scale-95"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
            <span className="text-sm font-bold tracking-wide">Añadir Candidato</span>
          </button>
        </header>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard label="Total Activos" value="45" change="+5%" color="emerald" />
          <StatCard label="Contratados" value="12" change="+12%" color="emerald" />
          <StatCard label="Rechazados" value="8" subtext="0% vs mes pasado" />
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-[#1a2632] p-4 rounded-lg border border-[#e7eef3] dark:border-slate-700 shadow-sm flex flex-col lg:flex-row gap-4 items-end lg:items-center">
            <div className="w-full lg:flex-1 relative group">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none material-symbols-outlined text-[#4b799b]">search</span>
                <input className="block w-full pl-10 pr-3 py-2.5 border border-[#cfdde8] dark:border-slate-600 rounded-lg leading-5 bg-[#f8fafc] dark:bg-slate-800 text-[#0d161c] dark:text-white focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Buscar candidato por nombre..." type="text"/>
            </div>
            <div className="w-full lg:w-64 relative">
                <select className="block w-full pl-3 pr-10 py-2.5 border border-[#cfdde8] dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-[#0d161c] dark:text-white focus:outline-none focus:ring-1 focus:ring-primary appearance-none cursor-pointer">
                    <option value="">Todas las vacantes</option>
                </select>
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-[#4b799b] material-symbols-outlined">expand_more</span>
            </div>
        </div>

        {/* Data Table */}
        <div className="bg-white dark:bg-[#1a2632] border border-[#e7eef3] dark:border-slate-700 rounded-lg shadow-sm overflow-hidden flex flex-col">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-[#e7eef3] dark:divide-slate-700">
              <thead className="bg-[#f8fafc] dark:bg-slate-800/50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-[#4b799b] dark:text-slate-400 uppercase tracking-wider">Nombre del Candidato</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-[#4b799b] dark:text-slate-400 uppercase tracking-wider">Vacante</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-[#4b799b] dark:text-slate-400 uppercase tracking-wider">Progreso</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-[#4b799b] dark:text-slate-400 uppercase tracking-wider">Estado</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-[#4b799b] dark:text-slate-400 uppercase tracking-wider">Última Actualización</th>
                  <th className="relative px-6 py-4"><span className="sr-only">Acciones</span></th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-[#1a2632] divide-y divide-[#e7eef3] dark:divide-slate-700">
                <CandidateRow 
                    name="Juan Pérez" 
                    email="juan.perez@example.com" 
                    role="Senior React Developer" 
                    department="Tecnología" 
                    status="Contratado" 
                    date="12 Oct 2023"
                    progress={100}
                    hasAction={false}
                    img="https://lh3.googleusercontent.com/aida-public/AB6AXuCfI-EsYKtJbbd-LT9zgM1qiPELtZDupba4PfqG9S9ktflsoaG5Q8zXdsV-atdmWyWCRb68KFnqE_Nqq7U6Q0-7q-ln6XLldqGFSqrtxBB9yIzbzf9wKR2U_War0CrUZHaBlLxrmRLgQRYiIISjD4dFT7V09EVAxa3t_bLjIf6LNV8WPbdCa6LJfId8h7q3OnIDcWWReRSDYPlN3uz8zc5z_FJaQk7IV1DNNqDz9MdPjHLV80nbISKFD71oHkgf_MhJykigD3CWjtw"
                    onClick={() => navigate('/candidate/1')}
                />
                <CandidateRow 
                    name="Maria Garcia" 
                    email="maria.design@example.com" 
                    role="UX Designer" 
                    department="Producto" 
                    status="Rechazado" 
                    date="10 Oct 2023"
                    progress={60}
                    hasAction={true}
                    actionMessage="Revisar portafolio"
                    onClick={() => navigate('/candidate/2')}
                />
                 <CandidateRow 
                    name="Carlos Lopez" 
                    email="carlos.pm@example.com" 
                    role="Project Manager" 
                    department="Operaciones" 
                    status="En revisión" 
                    date="09 Oct 2023"
                    progress={40}
                    hasAction={true}
                    actionMessage="Entrevista pendiente"
                    img="https://lh3.googleusercontent.com/aida-public/AB6AXuCs0Kh2P5BJHKvd7pyacp4ulek1tysjgkUrth4hV8rtT140WtYHGQIirj7O0bvd1moB2zJGNtUGvmCnbaMgahwGC1xD3B_BFFe8dOK3AYO8eqXRzYMsdbIOH59iO9_nILk6H-Xh_R-Z2jpsllr90B2nsM-aQiOc1i9J1A2_zey12jYGal3XWn0BW0fEkJMT3RmnHEEfTrmdY2m5wLbzW3aBqg9JTNH8tRkZnRN015JL0ih35kJRog4AmtV4n490YXZdJBW0W2fQtPU"
                    onClick={() => navigate('/candidate/3')}
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard: React.FC<{ label: string; value: string; change?: string; color?: string; subtext?: string }> = ({ label, value, change, color, subtext }) => (
    <div className="bg-white dark:bg-[#1a2632] border border-[#e7eef3] dark:border-slate-700 rounded-lg p-5 flex flex-col gap-1 shadow-sm">
        <p className="text-[#4b799b] dark:text-slate-400 text-sm font-medium">{label}</p>
        <div className="flex items-end gap-2">
            <p className="text-[#0d161c] dark:text-white text-2xl font-bold leading-none">{value}</p>
            {change && <span className={`text-${color}-600 dark:text-${color}-400 text-xs font-bold bg-${color}-100 dark:bg-${color}-900/30 px-1.5 py-0.5 rounded`}>{change}</span>}
            {subtext && <span className="text-[#4b799b] dark:text-slate-500 text-xs font-medium">{subtext}</span>}
        </div>
    </div>
);

const CandidateRow: React.FC<any> = ({ name, email, role, department, status, date, img, progress = 0, hasAction, actionMessage, onClick }) => {
    let statusClass = "";
    let dotClass = "";
    
    if (status === "Contratado") {
        statusClass = "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300";
        dotClass = "bg-emerald-500";
    } else if (status === "Rechazado") {
        statusClass = "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300";
        dotClass = "bg-rose-500";
    } else {
        statusClass = "bg-primary/10 text-primary dark:bg-primary/20 dark:text-sky-300";
        dotClass = "bg-primary";
    }

    return (
        <tr className="hover:bg-[#f8fafc] dark:hover:bg-slate-800/50 transition-colors group cursor-pointer" onClick={onClick}>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="h-10 w-10 shrink-0 relative">
                        {img ? (
                            <div className="h-10 w-10 rounded-full bg-cover bg-center" style={{ backgroundImage: `url("${img}")` }}></div>
                        ) : (
                            <div className="h-10 w-10 shrink-0 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-300 font-bold text-sm">
                                {name.substring(0, 2).toUpperCase()}
                            </div>
                        )}
                        {hasAction && (
                            <span className="absolute -top-1 -right-1 flex h-4 w-4">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-4 w-4 bg-rose-500 border-2 border-white dark:border-slate-800"></span>
                            </span>
                        )}
                    </div>
                    <div className="ml-4">
                        <div className="flex items-center gap-2">
                             <div className="text-sm font-medium text-[#0d161c] dark:text-white">{name}</div>
                             {hasAction && (
                                 <span className="inline-flex items-center gap-1 text-[10px] bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 px-1.5 py-0.5 rounded leading-none font-bold animate-pulse">
                                     <span className="material-symbols-outlined text-[12px]">notification_important</span>
                                     ACCIÓN
                                 </span>
                             )}
                        </div>
                        <div className="text-sm text-[#4b799b] dark:text-slate-400">{email}</div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-[#0d161c] dark:text-slate-200">{role}</div>
                <div className="text-xs text-[#4b799b] dark:text-slate-500">{department}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-full max-w-[120px]">
                    <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Progreso</span>
                        <span className="text-[10px] font-bold text-primary">{progress}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div 
                            className={`h-full transition-all duration-500 ${status === 'Rechazado' ? 'bg-rose-400' : 'bg-primary'}`} 
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    {hasAction && actionMessage && (
                        <p className="text-[10px] mt-1 text-rose-500 font-medium italic animate-pulse">
                            {actionMessage}
                        </p>
                    )}
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${statusClass}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${dotClass}`}></span>
                    {status}
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#4b799b] dark:text-slate-400 tabular-nums">{date}</td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="text-primary hover:text-primary/80 flex items-center justify-end gap-1 group-hover:underline">
                    <span className="material-symbols-outlined text-[20px]">visibility</span>
                    Ver detalle
                </button>
            </td>
        </tr>
    );
};

export default RecruiterPortal;