import React from 'react';

const PaymentInfo: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col h-full overflow-y-auto">
      <main className="flex-1 px-4 sm:px-6 lg:px-40 py-8 max-w-[1440px] mx-auto w-full">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-2">
            <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Información de Pago</h1>
            <p className="text-slate-500 dark:text-slate-400 text-base font-normal">Registra tu cuenta bancaria para recibir automáticamente el pago de tus comisiones.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Form */}
            <div className="lg:col-span-8 space-y-6">
                <div className="bg-white dark:bg-[#1e293b] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 sm:p-8">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">account_balance</span>
                        Datos Bancarios
                    </h2>
                    
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-slate-900 dark:text-slate-200 text-sm font-semibold" htmlFor="holder">
                                    Titular de la cuenta
                                </label>
                                <input
                                    className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white h-11 px-4 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all uppercase"
                                    id="holder"
                                    placeholder="NOMBRE COMPLETO"
                                    type="text"
                                    defaultValue="ALEX MORGAN"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-slate-900 dark:text-slate-200 text-sm font-semibold" htmlFor="bank">
                                    Banco
                                </label>
                                <select 
                                    className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white h-11 px-4 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none"
                                    id="bank"
                                >
                                    <option>BBVA</option>
                                    <option>Santander</option>
                                    <option>Citibanamex</option>
                                    <option>Banorte</option>
                                    <option>HSBC</option>
                                    <option>Scotiabank</option>
                                    <option>Inbursa</option>
                                    <option>Otro</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-slate-900 dark:text-slate-200 text-sm font-semibold" htmlFor="clabe">
                                CLABE Interbancaria (18 dígitos)
                            </label>
                            <input
                                className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white h-11 px-4 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all tracking-wider font-mono"
                                id="clabe"
                                placeholder="000 000 0000000000 0"
                                type="text"
                                maxLength={18}
                            />
                            <p className="text-xs text-slate-500">Esta cuenta se utilizará para transferencias electrónicas en moneda nacional (MXN).</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-slate-900 dark:text-slate-200 text-sm font-semibold" htmlFor="rfc">
                                    RFC con Homoclave
                                </label>
                                <input
                                    className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white h-11 px-4 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all uppercase"
                                    id="rfc"
                                    placeholder="AAAA000000XXX"
                                    type="text"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-slate-900 dark:text-slate-200 text-sm font-semibold" htmlFor="email">
                                    Correo de notificaciones de pago
                                </label>
                                <input
                                    className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white h-11 px-4 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    id="email"
                                    type="email"
                                    defaultValue="alex.morgan@example.com"
                                />
                            </div>
                        </div>

                        <div className="pt-4 flex items-center justify-end gap-3">
                            <button type="button" className="px-5 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                                Cancelar
                            </button>
                            <button type="submit" className="px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold shadow-lg shadow-primary/20 transition-all active:scale-95 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[20px]">save</span>
                                Guardar Información
                            </button>
                        </div>
                    </form>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800 rounded-lg p-4 flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 mt-0.5">lock</span>
                    <div className="text-sm text-blue-800 dark:text-blue-200">
                        <p className="font-bold mb-1">Información Encriptada</p>
                        <p>Tus datos bancarios se almacenan de forma segura utilizando encriptación AES-256. Solo se utilizan para procesar los pagos de tus comisiones aprobadas.</p>
                    </div>
                </div>
            </div>

            {/* Right Column: Visual Preview */}
            <div className="lg:col-span-4">
                <div className="sticky top-8 space-y-6">
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-900 dark:to-black rounded-2xl p-6 text-white shadow-xl relative overflow-hidden aspect-[1.58/1]">
                         {/* Decorative Circles */}
                         <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
                         <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
                         
                         <div className="relative z-10 flex flex-col h-full justify-between">
                             <div className="flex justify-between items-start">
                                 <span className="material-symbols-outlined text-3xl">contactless</span>
                                 <span className="font-bold text-lg tracking-wider opacity-80">DEBIT / CLABE</span>
                             </div>
                             
                             <div className="space-y-4">
                                 <div className="flex gap-3 items-center">
                                     <div className="h-8 w-12 bg-yellow-500/80 rounded flex items-center justify-center text-[10px] font-bold text-yellow-900 shadow-inner">CHIP</div>
                                     <span className="material-symbols-outlined text-2xl">wifi</span>
                                 </div>
                                 <div className="font-mono text-xl md:text-2xl tracking-widest drop-shadow-md">
                                     •••• •••• •••• 1234
                                 </div>
                             </div>

                             <div className="flex justify-between items-end">
                                 <div className="flex flex-col">
                                     <span className="text-[10px] uppercase text-slate-400 font-bold">Titular</span>
                                     <span className="font-medium tracking-wide uppercase">Alex Morgan</span>
                                 </div>
                                 <div className="h-8 w-12 bg-white/90 rounded flex items-center justify-center">
                                    <span className="text-slate-900 font-black text-xs italic">BANK</span>
                                 </div>
                             </div>
                         </div>
                    </div>

                    <div className="bg-white dark:bg-[#1e293b] rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-3">Resumen de Pagos</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500 dark:text-slate-400">Próximo corte</span>
                                <span className="font-medium text-slate-900 dark:text-white">15 Octubre</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500 dark:text-slate-400">Método actual</span>
                                <span className="font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">check_circle</span>
                                    Activo
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default PaymentInfo;