import React from 'react';

const Settings: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col h-full overflow-y-auto">
      <main className="flex-1 px-4 sm:px-6 lg:px-40 py-8 max-w-[1440px] mx-auto w-full">
        {/* Header */}
        <div className="mb-8">
            <h1 className="text-text-primary-light dark:text-text-primary-dark text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Configuración</h1>
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-base font-normal">Administra tus preferencias de cuenta y notificaciones.</p>
        </div>

        {/* Settings Content */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm overflow-hidden p-6 space-y-8">
            
            {/* Section 1: Notifications */}
            <section>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Notificaciones</h2>
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                        <div>
                            <p className="font-medium text-slate-900 dark:text-white">Alertas de nuevas vacantes</p>
                            <p className="text-sm text-slate-500">Recibe un correo cuando se publiquen vacantes que coincidan con tu perfil.</p>
                        </div>
                        <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                            <input type="checkbox" name="toggle" id="toggle1" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 checked:border-primary"/>
                            <label htmlFor="toggle1" className="toggle-label block overflow-hidden h-6 rounded-full bg-slate-300 cursor-pointer checked:bg-primary"></label>
                        </div>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                        <div>
                            <p className="font-medium text-slate-900 dark:text-white">Actualizaciones de candidatos</p>
                            <p className="text-sm text-slate-500">Notificarme cuando un candidato cambie de fase.</p>
                        </div>
                        <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                            <input type="checkbox" name="toggle" id="toggle2" defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 checked:border-primary"/>
                            <label htmlFor="toggle2" className="toggle-label block overflow-hidden h-6 rounded-full bg-slate-300 cursor-pointer checked:bg-primary"></label>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="border-slate-200 dark:border-slate-700" />

            {/* Section 2: Account */}
            <section>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Seguridad de la Cuenta</h2>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-slate-900 dark:text-white">Contraseña</p>
                            <p className="text-sm text-slate-500">Último cambio hace 3 meses</p>
                        </div>
                        <button className="text-sm font-bold text-primary hover:underline">Cambiar Contraseña</button>
                    </div>
                </div>
            </section>
        </div>

        <style>{`
            .toggle-checkbox:checked {
                right: 0;
                border-color: #0f8ce6;
            }
            .toggle-checkbox:checked + .toggle-label {
                background-color: #0f8ce6;
            }
            .toggle-checkbox {
                right: auto;
                left: 0;
                transition: all 0.3s;
            }
            .toggle-label {
                width: 3rem;
            }
        `}</style>

      </main>
    </div>
  );
};

export default Settings;