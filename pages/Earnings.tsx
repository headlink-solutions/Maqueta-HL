import React from 'react';
import { useNavigate } from 'react-router-dom';

const Earnings: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col h-full overflow-y-auto">
      <main className="flex-1 px-4 sm:px-6 lg:px-40 py-8 max-w-[1440px] mx-auto w-full">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-text-primary-light dark:text-text-primary-dark text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Mis Ganancias</h1>
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-base font-normal">Resumen de tus comisiones y estado de pagos</p>
          </div>
          <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-white hover:bg-primary-dark transition-colors text-sm font-bold shadow-sm shadow-primary/30">
            <span className="material-symbols-outlined text-[20px]">download</span>
            <span>Descargar Reporte</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <EarningsCard icon="query_stats" label="Total Estimado" amount="$12,500" color="blue" />
          <EarningsCard icon="hourglass_top" label="En Validación" amount="$8,000" color="amber" progress={60} />
          <EarningsCard icon="payments" label="Disponibles" amount="$4,200" color="green" />
          <EarningsCard icon="block" label="No Elegibles" amount="$0" color="gray" opacity />
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm overflow-hidden">
          {/* Tabs & Search Header */}
          <div className="border-b border-border-light dark:border-border-dark p-4 md:px-6 md:pt-6 pb-0 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="relative w-full max-w-md group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-secondary-light dark:text-text-secondary-dark group-focus-within:text-primary transition-colors">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input className="block w-full pl-10 pr-3 py-2.5 border-none rounded-lg bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark placeholder-text-secondary-light dark:placeholder-text-secondary-dark focus:ring-2 focus:ring-primary/50 text-sm transition-all" placeholder="Buscar por vacante, ID o candidato..." type="text" />
              </div>
            </div>
            <div className="flex gap-6 overflow-x-auto no-scrollbar">
                <TabButton active label="Estimadas" />
                <TabButton label="Pendientes" count={2} />
                <TabButton label="Liberadas" />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] text-left border-collapse">
              <thead>
                <tr className="bg-background-light/50 dark:bg-background-dark/50 border-b border-border-light dark:border-border-dark">
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-secondary-light dark:text-text-secondary-dark w-1/4">Vacante</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-secondary-light dark:text-text-secondary-dark w-1/4">Candidato</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-secondary-light dark:text-text-secondary-dark w-1/6">Monto Comisión</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-secondary-light dark:text-text-secondary-dark w-1/6">Estado de Pago</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-secondary-light dark:text-text-secondary-dark w-1/6">Fecha Liberación</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-light dark:divide-border-dark">
                <EarningsRow vacancy="Sr. Java Developer" id="VAC-4022" candidate="Juan Pérez" amount="$4,000.00 MXN" status="En validación (3m)" statusColor="amber" date="15 Oct, 2023" />
                <EarningsRow vacancy="UX/UI Designer" id="VAC-3901" candidate="Ana López" amount="$4,000.00 MXN" status="En validación (3m)" statusColor="amber" date="22 Nov, 2023" />
                <EarningsRow vacancy="DevOps Engineer" id="VAC-1120" candidate="Carlos Ruiz" amount="$4,200.00 MXN" status="Liberado" statusColor="green" date="01 Sep, 2023" />
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

const EarningsCard: React.FC<{ icon: string; label: string; amount: string; color: string; progress?: number; opacity?: boolean }> = ({ icon, label, amount, color, progress, opacity }) => (
    <div className={`flex flex-col gap-3 rounded-xl p-6 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm ${opacity ? 'opacity-70' : ''}`}>
        <div className="flex items-center gap-2">
            <div className={`p-2 rounded-lg bg-${color}-50 dark:bg-${color}-900/20 text-${color}-600 dark:text-${color}-400`}>
                <span className="material-symbols-outlined">{icon}</span>
            </div>
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-medium">{label}</p>
        </div>
        <p className="text-text-primary-light dark:text-text-primary-dark tracking-tight text-2xl font-bold">{amount} <span className="text-sm font-normal text-text-secondary-light dark:text-text-secondary-dark">MXN</span></p>
        {progress && (
            <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className={`h-full bg-${color}-500 w-[${progress}%] rounded-full`}></div>
            </div>
        )}
    </div>
);

const TabButton: React.FC<{ label: string; active?: boolean; count?: number }> = ({ label, active, count }) => (
    <button className={`relative pb-4 text-sm font-bold transition-colors whitespace-nowrap ${active ? 'text-primary border-b-[3px] border-primary' : 'text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark'}`}>
        {label} {count && <span className="ml-1.5 px-1.5 py-0.5 rounded-md bg-primary/10 text-primary text-xs">{count}</span>}
    </button>
);

const EarningsRow: React.FC<any> = ({ vacancy, id, candidate, amount, status, statusColor, date }) => (
    <tr className="group hover:bg-background-light dark:hover:bg-background-dark/30 transition-colors cursor-pointer">
        <td className="px-6 py-4">
            <div className="flex flex-col">
                <span className="text-sm font-bold text-text-primary-light dark:text-text-primary-dark group-hover:text-primary transition-colors">{vacancy}</span>
                <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark">ID: #{id}</span>
            </div>
        </td>
        <td className="px-6 py-4"><span className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">{candidate}</span></td>
        <td className="px-6 py-4"><span className="text-sm font-bold text-text-primary-light dark:text-text-primary-dark">{amount}</span></td>
        <td className="px-6 py-4">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-${statusColor}-100 text-${statusColor}-700 dark:bg-${statusColor}-900/40 dark:text-${statusColor}-300`}>
                <span className={`size-1.5 rounded-full bg-${statusColor}-500`}></span>
                {status}
            </span>
        </td>
        <td className="px-6 py-4"><span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">{date}</span></td>
    </tr>
);

export default Earnings;