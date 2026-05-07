import React from 'react';

const AdminDashboard: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
      <main className="flex-1 overflow-y-auto p-6 lg:p-10">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Page Heading */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Panel de Control</h1>
              <p className="mt-1 text-base text-slate-500 dark:text-slate-400">Resumen general y métricas de rendimiento en tiempo real.</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-500 dark:text-slate-400">Última actualización: Hoy, 09:41 AM</span>
              <button className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors">
                <span className="material-symbols-outlined text-[20px]">refresh</span>
              </button>
            </div>
          </div>

          {/* KPI Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            <KPICard icon="work" title="Vacantes" value="24" change="+2" color="emerald" />
            <KPICard icon="inbox" title="Recibidos" value="156" change="+15%" color="emerald" />
            <KPICard icon="check_circle" title="Aprobados" value="42" change="+5%" color="emerald" />
            <KPICard icon="cancel" title="Rechazados" value="18" change="-2%" color="rose" />
          </div>

          {/* Review Queue Section */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Cola de Revisión</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">Candidatos enviados por reclutadores pendientes de validación.</p>
              </div>
            </div>

            {/* Table Card */}
            <div className="bg-white dark:bg-[#15202b] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
                  <thead className="bg-slate-50 dark:bg-[#1e2a36]">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Candidato</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Vacante</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Reclutador</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Fecha</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Estado</th>
                      <th className="relative px-6 py-3"><span className="sr-only">Acciones</span></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-[#15202b] divide-y divide-slate-200 dark:divide-slate-800">
                    <AdminRow name="Juan Pérez" email="juan.perez@email.com" vacancy="Senior Frontend Dev" recruiter="Ana Lopez" date="12 Oct 2023" status="Enviado por reclutador" />
                    <AdminRow name="Maria Garcia" email="maria.garcia@email.com" vacancy="UX/UI Designer" recruiter="Carlos Ruiz" date="11 Oct 2023" status="Enviado por reclutador" />
                    <AdminRow name="Roberto Lima" email="roberto.lima@email.com" vacancy="DevOps Engineer" recruiter="Ana Lopez" date="11 Oct 2023" status="Revisión Manual Req." statusColor="amber" />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const KPICard: React.FC<{ icon: string; title: string; value: string; change: string; color: string }> = ({ icon, title, value, change, color }) => (
    <div className="flex flex-col p-5 bg-white dark:bg-[#15202b] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
        <dt className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
            <span className="material-symbols-outlined text-[18px]">{icon}</span>
            {title}
        </dt>
        <dd className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900 dark:text-white">{value}</span>
            <span className={`text-xs font-medium text-${color}-600 dark:text-${color}-400`}>{change}</span>
        </dd>
    </div>
);

const AdminRow: React.FC<any> = ({ name, email, vacancy, recruiter, date, status, statusColor = 'blue' }) => (
    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
        <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
                <div className="h-10 w-10 flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-sm">
                    {name.substring(0, 2).toUpperCase()}
                </div>
                <div className="ml-4">
                    <div className="text-sm font-medium text-slate-900 dark:text-white">{name}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">{email}</div>
                </div>
            </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm text-slate-900 dark:text-white">{vacancy}</div></td>
        <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm text-slate-900 dark:text-white">{recruiter}</div></td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">{date}</td>
        <td className="px-6 py-4 whitespace-nowrap">
            <span className={`inline-flex items-center rounded-md bg-${statusColor}-50 dark:bg-${statusColor}-900/20 px-2 py-1 text-xs font-medium text-${statusColor}-700 dark:text-${statusColor}-400`}>
                {status}
            </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <div className="flex items-center justify-end gap-2">
                <button className="p-1.5 text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-[20px]">visibility</span></button>
                <button className="p-1.5 text-slate-400 hover:text-emerald-600 transition-colors"><span className="material-symbols-outlined text-[20px]">check_circle</span></button>
                <button className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors"><span className="material-symbols-outlined text-[20px]">cancel</span></button>
            </div>
        </td>
    </tr>
);

export default AdminDashboard;