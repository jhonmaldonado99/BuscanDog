import { Link, useLocation } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { path: "/", label: "Inicio" },
    { path: "/catalogo", label: "Catálogo de Mascotas" },
    { path: "/apadrinar", label: "Apadrinar" },
    { path: "/donar", label: "Donar" },
    { path: "/historias", label: "Historias de Éxito" },
    { path: "/nosotros", label: "Sobre Nosotros" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#ff6b35] to-[#4ecdc4] rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
            <span className="text-xl text-gray-900" style={{ fontWeight: 700 }}>BuscanDog</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  isActive(link.path)
                    ? "bg-[#ff6b35] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost">Iniciar Sesión</Button>
            </Link>
            <Link to="/admin">
              <Button className="bg-[#4ecdc4] hover:bg-[#45b8b0] text-white">
                Panel Admin
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-2 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg ${
                  isActive(link.path)
                    ? "bg-[#ff6b35] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2 border-t border-gray-100">
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full">
                  Iniciar Sesión
                </Button>
              </Link>
              <Link to="/admin" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-[#4ecdc4] hover:bg-[#45b8b0] text-white">
                  Panel Admin
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
