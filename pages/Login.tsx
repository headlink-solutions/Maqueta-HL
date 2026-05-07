import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  const handleAdminDemo = () => {
      navigate('/admin');
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col relative overflow-hidden text-[#0d161c] dark:text-slate-200">
      {/* Background Decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-[440px] flex flex-col gap-6">
          {/* Logo & Header Section */}
          <div className="flex flex-col items-center gap-4 mb-4">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn-R0FqA5tD0iJglKqg_fPq2zTqD-dO-t6z9E7d-gq7gq_tq_q" 
              alt="Hunterlink Logo" 
              className="h-24 w-auto object-contain"
            />
          </div>

          {/* Card Component */}
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#e7eef3] dark:border-slate-700 overflow-hidden">
            <form onSubmit={handleLogin} className="p-6 sm:p-8 flex flex-col gap-5">
              {/* Header inside card */}
              <div className="text-center mb-2">
                <h1 className="text-[#0d161c] dark:text-white text-2xl font-bold leading-tight tracking-tight">Iniciar Sesión</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 font-medium">Conectando talento con oportunidades</p>
              </div>

              {/* Email Field */}
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
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4b799b] dark:text-slate-500 pointer-events-none flex items-center">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </div>
                </div>
              </div>

              {/* Password Field */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label className="text-[#0d161c] dark:text-slate-200 text-sm font-semibold leading-normal" htmlFor="password">
                    Contraseña
                  </label>
                  <button type="button" onClick={() => navigate('/forgot-password')} className="text-primary hover:text-blue-600 text-sm font-semibold transition-colors">
                    ¿Olvidaste tu contraseña?
                  </button>
                </div>
                <div className="relative flex w-full items-stretch rounded-lg">
                  <input
                    className="flex-1 w-full rounded-lg border border-[#cfdde8] dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50 text-[#0d161c] dark:text-white h-12 px-4 placeholder:text-[#4b799b] dark:placeholder:text-slate-500 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all pr-12"
                    id="password"
                    placeholder="Introduce tu contraseña"
                    type={showPassword ? "text" : "password"}
                  />
                  <button 
                    onClick={togglePasswordVisibility}
                    className="absolute right-0 top-0 bottom-0 px-3 flex items-center justify-center text-[#4b799b] dark:text-slate-500 hover:text-primary dark:hover:text-primary transition-colors rounded-r-lg focus:outline-none focus:ring-2 focus:ring-primary/50" 
                    type="button"
                    aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                        {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary hover:bg-blue-600 text-white text-base font-bold leading-normal tracking-[0.015em] transition-all shadow-md hover:shadow-lg mt-2">
                <span>Iniciar Sesión</span>
              </button>

              {/* Guest/Test Login Button */}
              <button 
                type="button" 
                onClick={() => navigate('/dashboard')}
                className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 border-2 border-primary/20 hover:border-primary/40 text-primary dark:text-blue-400 text-sm font-bold tracking-[0.015em] transition-all hover:bg-primary/5"
              >
                <span className="material-symbols-outlined mr-2 text-[18px]">test_mode</span>
                <span>Acceso de Prueba (Sin Credenciales)</span>
              </button>
            </form>

            <div className="px-6 pb-6 text-center">
                <button onClick={handleAdminDemo} className="text-xs text-slate-400 hover:text-primary underline">
                    Admin Demo Login
                </button>
            </div>

            {/* Footer / Register Link */}
            <div className="bg-slate-50 dark:bg-[#15202b] px-6 py-4 border-t border-[#e7eef3] dark:border-slate-700 flex flex-wrap items-center justify-center gap-2">
              <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">¿Eres nuevo aquí?</span>
              <button onClick={() => navigate('/register')} className="text-primary hover:text-blue-600 dark:hover:text-blue-400 text-sm font-bold transition-colors">
                Registrarme como reclutador
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2 opacity-60">
            <span className="material-symbols-outlined text-sm">lock</span>
            <span className="text-xs text-[#0d161c] dark:text-slate-400 font-medium">Acceso seguro y encriptado</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;