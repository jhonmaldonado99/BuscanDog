import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Button } from "../../ui/button";
import { Heart, PawPrint, FileText, DollarSign, LogOut, Menu, X, FileCode } from "lucide-react";

export function AdminDashboard() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { path: "/admin", icon: PawPrint, label: "Mascotas Registradas", exact: true },
    { path: "/admin/solicitudes", icon: FileText, label: "Solicitudes de Adopción" },
    { path: "/admin/donaciones", icon: DollarSign, label: "Donaciones" },
    { path: "/wireflow", icon: FileCode, label: "Wireflow UX" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`bg-white border-r border-gray-200 transition-all duration-300 ${
        sidebarOpen ? 'w-64' : 'w-0 lg:w-20'
      } flex-shrink-0`}>
        <div className="sticky top-0 h-screen flex flex-col">
          {/* Logo */}
          <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
            {sidebarOpen && (
              <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[#ff6b35] to-[#4ecdc4] rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white fill-white" />
                </div>
                <span className="text-lg text-gray-900" style={{ fontWeight: 700 }}>BuscanDog</span>
              </Link>
            )}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg lg:hidden"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Menu */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {menuItems.map((item) => {
              const active = item.exact 
                ? location.pathname === item.path
                : location.pathname.startsWith(item.path);
              
              return (
                <Link key={item.path} to={item.path}>
                  <div className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    active
                      ? 'bg-[#ff6b35] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}>
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    {sidebarOpen && <span>{item.label}</span>}
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <Link to="/">
              <Button variant="outline" className="w-full justify-start">
                <LogOut className="w-5 h-5 mr-2" />
                {sidebarOpen && "Salir del Admin"}
              </Button>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center px-6">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg mr-4 hidden lg:block"
          >
            <Menu className="w-5 h-5" />
          </button>
          <h1 className="text-xl text-gray-900">Panel de Administración</h1>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}