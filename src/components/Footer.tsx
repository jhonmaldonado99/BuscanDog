import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#ff6b35] to-[#4ecdc4] rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
              <span className="text-xl text-gray-900" style={{ fontWeight: 700 }}>BuscanDog</span>
            </div>
            <p className="text-gray-600 mb-4">
              Albergue de adopción y apadrinamiento de mascotas. Cambiando vidas, una mascota a la vez.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-gray-600 hover:text-[#ff6b35] hover:bg-gray-100 transition-colors border border-gray-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-gray-600 hover:text-[#ff6b35] hover:bg-gray-100 transition-colors border border-gray-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-gray-600 hover:text-[#ff6b35] hover:bg-gray-100 transition-colors border border-gray-200"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-gray-900 mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catalogo" className="text-gray-600 hover:text-[#ff6b35] transition-colors">
                  Adopción
                </Link>
              </li>
              <li>
                <Link to="/apadrinar" className="text-gray-600 hover:text-[#ff6b35] transition-colors">
                  Apadrinamiento
                </Link>
              </li>
              <li>
                <Link to="/donar" className="text-gray-600 hover:text-[#ff6b35] transition-colors">
                  Donación
                </Link>
              </li>
              <li>
                <Link to="/historias" className="text-gray-600 hover:text-[#ff6b35] transition-colors">
                  Historias de Éxito
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-gray-600 hover:text-[#ff6b35] transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Información Legal */}
          <div>
            <h3 className="text-gray-900 mb-4">Información Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#ff6b35] transition-colors">
                  Políticas de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#ff6b35] transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#ff6b35] transition-colors">
                  Proceso de Adopción
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#ff6b35] transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-gray-900 mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-600">
                <MapPin className="w-5 h-5 text-[#ff6b35] flex-shrink-0 mt-0.5" />
                <span>Av. Los Rescatadores 123, Lima, Perú</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Phone className="w-5 h-5 text-[#ff6b35] flex-shrink-0" />
                <span>+51 999 888 777</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Mail className="w-5 h-5 text-[#ff6b35] flex-shrink-0" />
                <span>info@buscandog.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>© 2025 BuscanDog. Todos los derechos reservados. Hecho con ❤️ para los animales.</p>
        </div>
      </div>
    </footer>
  );
}
