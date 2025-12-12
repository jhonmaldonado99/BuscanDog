import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Heart, Target, Eye, Users, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export function AboutPage() {
  const team = [
    {
      name: "María González",
      role: "Fundadora y Directora",
      image: "https://images.unsplash.com/photo-1700665537604-412e89a285c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYWwlMjBzaGVsdGVyJTIwdm9sdW50ZWVyc3xlbnwxfHx8fDE3NjMyNjUzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Dr. Carlos Ruiz",
      role: "Veterinario Principal",
      image: "https://images.unsplash.com/photo-1700665537604-412e89a285c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYWwlMjBzaGVsdGVyJTIwdm9sdW50ZWVyc3xlbnwxfHx8fDE3NjMyNjUzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Ana Martínez",
      role: "Coordinadora de Adopciones",
      image: "https://images.unsplash.com/photo-1700665537604-412e89a285c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYWwlMjBzaGVsdGVyJTIwdm9sdW50ZWVyc3xlbnwxfHx8fDE3NjMyNjUzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Luis Torres",
      role: "Coordinador de Voluntarios",
      image: "https://images.unsplash.com/photo-1700665537604-412e89a285c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYWwlMjBzaGVsdGVyJTIwdm9sdW50ZWVyc3xlbnwxfHx8fDE3NjMyNjUzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-[#ff6b35] to-[#4ecdc4] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl mb-6">Sobre BuscanDog</h1>
              <p className="text-xl opacity-90 mb-8">
                Desde 2020, hemos dedicado nuestro corazón a rescatar, cuidar y encontrar 
                hogares amorosos para perros y gatos abandonados en Lima, Perú.
              </p>
              <div className="flex gap-4">
                <Link to="/catalogo">
                  <Button size="lg" className="bg-white text-[#ff6b35] hover:bg-gray-100">
                    Adoptar una mascota
                  </Button>
                </Link>
                <Link to="/donar">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#ff6b35]">
                    Apóyanos
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1700665537604-412e89a285c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYWwlMjBzaGVsdGVyJTIwdm9sdW50ZWVyc3xlbnwxfHx8fDE3NjMyNjUzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Equipo de BuscanDog"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* History */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-6">Nuestra Historia</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            BuscanDog nació del sueño de María González, una amante de los animales que no podía 
            quedarse indiferente ante la cantidad de perros y gatos abandonados en las calles de Lima. 
            Lo que comenzó como un pequeño refugio en su casa, hoy es un albergue que ha rescatado 
            y encontrado hogares para más de 500 mascotas.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Trabajamos incansablemente para brindar atención veterinaria, alimentación de calidad 
            y mucho amor a cada animal que llega a nuestras puertas. Creemos que cada mascota merece 
            una segunda oportunidad y una familia que los ame incondicionalmente.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-[#ff6b35] bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#ff6b35]" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-4">Misión</h3>
              <p className="text-gray-700 leading-relaxed">
                Rescatar, rehabilitar y encontrar hogares amorosos para perros y gatos abandonados, 
                promoviendo la tenencia responsable y el bienestar animal en nuestra comunidad.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-[#4ecdc4] bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-[#4ecdc4]" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-4">Visión</h3>
              <p className="text-gray-700 leading-relaxed">
                Ser el albergue de referencia en Lima, reconocido por nuestro compromiso con el 
                bienestar animal y por haber creado una comunidad consciente que valora y respeta 
                la vida de todos los animales.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-8 text-center">Nuestros Valores</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Amor", description: "Por los animales y nuestro trabajo" },
              { icon: Users, title: "Compromiso", description: "Con cada mascota rescatada" },
              { icon: Target, title: "Transparencia", description: "En todas nuestras acciones" },
              { icon: Eye, title: "Responsabilidad", description: "Social y ambiental" }
            ].map((value, index) => (
              <Card key={index} className="border-2 hover:border-[#ff6b35] transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#ff6b35] to-[#4ecdc4] rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-8 text-center">Nuestro Equipo</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Facilities */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-8 text-center">Nuestras Instalaciones</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBhbmQlMjBjYXQlMjB0b2dldGhlcnxlbnwxfHx8fDE3NjMyNjUzMDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Área de juegos"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg text-gray-900 mb-2">Área de Juegos</h3>
                <p className="text-sm text-gray-600">
                  Espacios amplios y seguros para que nuestras mascotas jueguen y socialicen
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1641760884883-4e3daa581442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMHNoZWx0ZXJ8ZW58MXx8fHwxNzYzMjY1MzA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Clínica veterinaria"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg text-gray-900 mb-2">Clínica Veterinaria</h3>
                <p className="text-sm text-gray-600">
                  Atención médica profesional disponible las 24 horas
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1700665537604-412e89a285c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYWwlMjBzaGVsdGVyJTIwdm9sdW50ZWVyc3xlbnwxfHx8fDE3NjMyNjUzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Área de descanso"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg text-gray-900 mb-2">Área de Descanso</h3>
                <p className="text-sm text-gray-600">
                  Espacios cómodos y limpios para el descanso de nuestras mascotas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-8 text-center">Contáctanos</h2>
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#ff6b35] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#ff6b35]" />
                    </div>
                    <div>
                      <h3 className="text-lg text-gray-900 mb-1">Dirección</h3>
                      <p className="text-gray-600">
                        Av. Los Rescatadores 123<br />
                        San Miguel, Lima, Perú
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#4ecdc4] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#4ecdc4]" />
                    </div>
                    <div>
                      <h3 className="text-lg text-gray-900 mb-1">Teléfono</h3>
                      <p className="text-gray-600">
                        +51 999 888 777<br />
                        +51 988 777 666
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#95e1d3] bg-opacity-30 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#4ecdc4]" />
                    </div>
                    <div>
                      <h3 className="text-lg text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">
                        info@buscandog.org<br />
                        adopciones@buscandog.org
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#ff6b35] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#ff6b35]" />
                    </div>
                    <div>
                      <h3 className="text-lg text-gray-900 mb-1">Horario de Visitas</h3>
                      <p className="text-gray-600">
                        Lunes a Viernes: 9:00 AM - 6:00 PM<br />
                        Sábados: 9:00 AM - 4:00 PM<br />
                        Domingos: Cerrado
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-gray-200 rounded-lg h-full min-h-[400px] flex items-center justify-center">
                    <p className="text-gray-500">Mapa de ubicación</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-[#ff6b35] to-[#4ecdc4] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6">¿Quieres ser parte del cambio?</h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a nuestra comunidad de amantes de los animales y ayúdanos a seguir rescatando vidas
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/catalogo">
              <Button size="lg" className="bg-white text-[#ff6b35] hover:bg-gray-100">
                Adoptar una mascota
              </Button>
            </Link>
            <Link to="/donar">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#ff6b35]">
                Hacer una donación
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
