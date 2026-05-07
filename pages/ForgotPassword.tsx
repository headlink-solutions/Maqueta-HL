import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para llamar a la API y enviar el correo
    setIsSubmitted(true);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col relative overflow-hidden text-[#0d161c] dark:text-slate-200">
      {/* Background Decoration (Matching Login Style) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-[440px] flex flex-col gap-6">
          {/* Logo Section */}
          <div className="flex flex-col items-center gap-4 mb-4">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn-R0FqA5tD0iJglKqg_fPq2zTqD-dO-t6z9E7d-gq7gq_tq_q" 
              alt="Hunterlink Logo" 
              className="h-24 w-auto object-contain"
            />
          </div>

          {/* Card Component */}
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#e7eef3] dark:border-slate-700 overflow-hidden">
            {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="p-6 sm:p-8 flex flex-col gap-5">
                    <div className="text-center mb-2">
                        <h1 className="text-[#0d161c] dark:text-white text-2xl font-bold leading-tight tracking-tight">Recuperar Contraseña</h1>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 font-medium">Ingresa tu correo y te enviaremos instrucciones.</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[#0d161c] dark:text-slate-200 text-sm font-semibold leading-normal" htmlFor="email">
                            Correo electrónico
                        </label>
                        <div className="relative">
                            <input
                                autoComplete="email"
                                className="w-full rounded-lg border border-[#cfdde8] dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50 text-[#0d161c] dark:text-white h-12 px-4 placeholder:text-[#4b799b] dark:placeholder:text-slate-500 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                id="email"
                                placeholder="ejemplo@correo.com"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4b799b] dark:text-slate-500 pointer-events-none flex items-center">
                                <span className="material-symbols-outlined text-[20px]">mail</span>
                            </div>
                        </div>
                    </div>

                    <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary hover:bg-blue-600 text-white text-base font-bold leading-normal tracking-[0.015em] transition-all shadow-md hover:shadow-lg mt-2">
                        <span>Enviar enlace de recuperación</span>
                    </button>

                    <button onClick={() => navigate('/')} type="button" className="text-sm font-semibold text-slate-500 hover:text-[#0d161c] dark:text-slate-400 dark:hover:text-white transition-colors flex items-center justify-center gap-2 mt-2">
                        <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                        Volver al inicio
                    </button>
                </form>
            ) : (
                <div className="p-6 sm:p-8 flex flex-col gap-6 text-center">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto">
                        <span className="material-symbols-outlined text-4xl">mark_email_read</span>
                    </div>
                    <div>
                        <h2 className="text-[#0d161c] dark:text-white text-xl font-bold mb-2">¡Correo enviado!</h2>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                            Hemos enviado un enlace de verificación a <span className="font-semibold text-[#0d161c] dark:text-white">{email}</span>.
                            <br/>Por favor revisa tu bandeja de entrada.
                        </p>
                    </div>
                    
                    <button onClick={() => navigate('/')} className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary hover:bg-blue-600 text-white text-base font-bold leading-normal tracking-[0.015em] transition-all shadow-md hover:shadow-lg">
                        <span>Volver a Iniciar Sesión</span>
                    </button>
                    
                    <button onClick={() => setIsSubmitted(false)} className="text-sm font-semibold text-primary hover:underline mt-2">
                        ¿No recibiste el correo? Reintentar
                    </button>
                </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForgotPassword;