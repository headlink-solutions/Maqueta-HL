import React, { useState, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

interface SidebarProps {
  isAdmin?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isAdmin }) => {
  const navigate = useNavigate();
  // Estado para la imagen de perfil
  const [profileImage, setProfileImage] = useState("https://lh3.googleusercontent.com/aida-public/AB6AXuAs96GosR-ZZlBafH798ckIgF3fQa3VJPmcXJ6bXg6KeXojDJCtiIzwQY6KrE_GLugiosvQq_GJqJW7B1GZqLDPN7OVJMCH1XvwQ3gcNXFYG6AFHro7nKAI-lPP6aPfV5x8CFsVD6wQHcod6I4AhkRLKYBEGhtMcWIHyAgaK2ljGQzX4s2LC2UXUaPw610nyOrU4-Z1uYuuSPy2WUxrqEBuAJOjNb2qXkdXOJp15ZOW-1A2QX4f4p93MhayZ8Zrxk-svDCC8Dnq-Wg");
  // Estado para controlar la visibilidad del modal de foto
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLogout = () => {
    navigate('/');
  };

  // Abre el modal en lugar del selector de archivos directamente
  const handleProfileClick = () => {
    setIsModalOpen(true);
  };

  // Dispara el input oculto desde el botón del modal
  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      // Opcional: Cerrar el modal al seleccionar o dejarlo abierto para que vea el cambio
      // setIsModalOpen(false); 
    }
  };

  return (
    <>
      <aside className="w-72 bg-white dark:bg-[#1a2632] border-r border-[#e7eef3] dark:border-slate-700 flex flex-col h-full z-10 hidden lg:flex flex-shrink-0">
        <div className="p-6 flex flex-col h-full justify-between">
          <div className="flex flex-col gap-8">
            {/* User Profile / Brand */}
            <div className="flex items-center gap-3">
              {isAdmin ? (
                  // Logo for Admin
                  <img 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn-R0FqA5tD0iJglKqg_fPq2zTqD-dO-t6z9E7d-gq7gq_tq_q" 
                      alt="Hunterlink" 
                      className="h-10 w-auto" 
                  />
              ) : (
                  // Profile for Recruiter
                  <>
                      <div className="relative group cursor-pointer shrink-0" onClick={handleProfileClick} title="Ver foto de perfil">
                          <div 
                          className="bg-center bg-no-repeat bg-cover rounded-full size-12 shadow-sm transition-opacity group-hover:opacity-80" 
                          style={{ backgroundImage: `url('${profileImage}')` }}
                          ></div>
                          {/* Overlay icon on hover */}
                          <div className="absolute inset-0 bg-black/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                               <span className="material-symbols-outlined text-white text-sm">visibility</span>
                          </div>
                          {/* Input file moved outside or kept here, functionality triggered via ref */}
                          <input 
                              type="file" 
                              ref={fileInputRef} 
                              onChange={handleFileChange} 
                              className="hidden" 
                              accept="image/*"
                          />
                      </div>
                      <div className="flex flex-col">
                      <h1 className="text-[#0d161c] dark:text-white text-base font-bold leading-normal">
                          Alex Morgan
                      </h1>
                      <p className="text-[#4b799b] dark:text-slate-400 text-sm font-normal leading-normal">
                          Recruiter Senior
                      </p>
                      </div>
                  </>
              )}
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-2">
              {!isAdmin ? (
                  <>
                      <NavItem to="/dashboard" icon="work" label="Vacantes" />
                      <NavItem to="/recruiter-portal" icon="group" label="Mis Candidatos" />
                      <NavItem to="/earnings" icon="payments" label="Comisiones" />
                      <NavItem to="/payment-info" icon="credit_card" label="Información de pago" />
                      <NavItem to="/settings" icon="settings" label="Configuración" />
                  </>
              ) : (
                  <>
                      <NavItem to="/admin" icon="grid_view" label="Panel de Control" />
                      <NavItem to="/admin/queue" icon="group" label="Cola de Revisión" />
                      <NavItem to="/admin/finance" icon="payments" label="Finanzas" />
                      <NavItem to="/admin/companies" icon="domain" label="Empresas" />
                      <NavItem to="/settings" icon="settings" label="Configuración" />
                  </>
              )}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <button 
              onClick={handleLogout}
              className="flex items-center gap-3 px-3 py-2 text-[#4b799b] dark:text-slate-400 hover:text-[#0d161c] dark:hover:text-white transition-colors w-full text-left"
            >
              <span className="material-symbols-outlined">logout</span>
              <span className="text-sm font-medium">Cerrar Sesión</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Profile Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 transition-all" onClick={() => setIsModalOpen(false)}>
            <div 
                className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-2xl p-8 max-w-sm w-full flex flex-col items-center gap-6 relative border border-slate-200 dark:border-slate-700" 
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button 
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                >
                    <span className="material-symbols-outlined">close</span>
                </button>

                {/* Title */}
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Foto de Perfil</h2>

                {/* Large Image */}
                <div className="relative group">
                    <div 
                        className="w-48 h-48 rounded-full bg-cover bg-center bg-no-repeat shadow-lg ring-4 ring-slate-100 dark:ring-slate-700"
                        style={{ backgroundImage: `url('${profileImage}')` }}
                    ></div>
                </div>

                {/* Action Button */}
                <div className="w-full flex flex-col gap-3">
                    <button 
                        onClick={triggerFileSelect}
                        className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-xl shadow-md shadow-blue-500/20 transition-all active:scale-95 flex items-center justify-center gap-2"
                    >
                        <span className="material-symbols-outlined">add_a_photo</span>
                        Cambiar foto
                    </button>
                </div>
            </div>
        </div>
      )}
    </>
  );
};

const NavItem: React.FC<{ to: string; icon: string; label: string }> = ({ to, icon, label }) => (
  <NavLink
    to={to}
    end={to === "/dashboard" || to === "/admin"}
    className={({ isActive }) =>
      `flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group ${
        isActive
          ? 'bg-primary/10 dark:bg-primary/20 text-primary'
          : 'hover:bg-background-light dark:hover:bg-slate-800 text-[#4b799b] dark:text-slate-400'
      }`
    }
  >
    {({ isActive }) => (
      <>
        <span className={`material-symbols-outlined ${isActive ? 'text-primary fill-current' : 'group-hover:text-primary dark:text-slate-400'}`}>
          {icon}
        </span>
        <p className={`text-sm font-medium ${isActive ? 'text-primary font-bold' : 'text-[#0d161c] dark:text-slate-200'}`}>
          {label}
        </p>
      </>
    )}
  </NavLink>
);

export default Sidebar;