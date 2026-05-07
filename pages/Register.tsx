import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulamos registro exitoso y redirigimos al dashboard
    navigate('/dashboard');
  };

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
        <div className="w-full max-w-[480px] flex flex-col gap-6">
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
            <form onSubmit={handleRegister} className="p-6 sm:p-8 flex flex-col gap-5">
              <div className="text-center mb-2">
                <h1 className="text-[#0d161c] dark:text-white text-2xl font-bold leading-tight tracking-tight">Crear cuenta</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 font-medium">Únete a la red de reclutadores más grande</p>
              </div>

              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label className="text-[#0d161c] dark:text-slate-200 text-sm font-semibold leading-normal" htmlFor="name">
                  Nombre completo
                </label>
                <div className="relative">
                  <input
                    autoComplete="name"
                    className="w-full rounded-lg border border-[#cfdde8] dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50 text-[#0d161c] dark:text-white h-12 px-4 placeholder:text-[#4b799b] dark:placeholder:text-slate-500 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    id="name"
                    placeholder="Tu nombre"
                    type="text"
                    required
                  />
                </div>
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
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="flex flex-col gap-2">
                <label className="text-[#0d161c] dark:text-slate-200 text-sm font-semibold leading-normal" htmlFor="password">
                    Contraseña
                </label>
                <div className="relative flex w-full items-stretch rounded-lg">
                  <input
                    className="flex-1 w-full rounded-lg border border-[#cfdde8] dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50 text-[#0d161c] dark:text-white h-12 px-4 placeholder:text-[#4b799b] dark:placeholder:text-slate-500 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all pr-12"
                    id="password"
                    placeholder="Mínimo 8 caracteres"
                    type={showPassword ? "text" : "password"}
                    required
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

              {/* Terms */}
              <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" required />
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                      Al crear una cuenta, aceptas nuestros <a href="#" className="text-primary hover:underline">Términos de Servicio</a> y <a href="#" className="text-primary hover:underline">Política de Privacidad</a>.
                  </p>
              </div>

              {/* Submit Button */}
              <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary hover:bg-blue-600 text-white text-base font-bold leading-normal tracking-[0.015em] transition-all shadow-md hover:shadow-lg mt-2">
                <span>Crear Cuenta</span>
              </button>
            </form>

            {/* Footer / Login Link */}
            <div className="bg-slate-50 dark:bg-[#15202b] px-6 py-4 border-t border-[#e7eef3] dark:border-slate-700 flex flex-wrap items-center justify-center gap-2">
              <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">¿Ya tienes cuenta?</span>
              <button onClick={() => navigate('/')} className="text-primary hover:text-blue-600 dark:hover:text-blue-400 text-sm font-bold transition-colors">
                Iniciar Sesión
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;