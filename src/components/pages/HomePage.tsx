import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Heart, DollarSign, Users, CheckCircle, ArrowRight } from "lucide-react";
import { mockPets } from "../../data/pets";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useState, useEffect } from "react";

export function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredPets = mockPets.filter(pet => pet.featured);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredPets.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [featuredPets.length]);

  const testimonials = [
    {
      name: "María González",
      pet: "Max",
      text: "Adoptar a Max fue la mejor decisión de mi vida. Nos ha llenado de alegría y amor. El proceso fue muy sencillo y el equipo de BuscanDog siempre estuvo dispuesto a ayudarnos.",
      image: "https://images.unsplash.com/photo-1655761167947-cb93277c192c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMGRvZ3xlbnwxfHx8fDE3NjMyNjUzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Carlos Mendoza",
      pet: "Luna",
      text: "Luna es increíble. Es muy cariñosa y se adaptó perfectamente a nuestra familia. Gracias BuscanDog por hacer tan fácil el proceso de adopción.",
      image: "https://images.unsplash.com/photo-1700665537604-412e89a285c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYWwlMjBzaGVsdGVyJTIwdm9sdW50ZWVyc3xlbnwxfHx8fDE3NjMyNjUzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const adoptionSteps = [
    {
      number: 1,
      title: "Explora",
      description: "Navega por nuestro catálogo y encuentra a tu compañero ideal"
    },
    {
      number: 2,
      title: "Solicita",
      description: "Completa el formulario de adopción con tus datos"
    },
    {
      number: 3,
      title: "Evaluación",
      description: "Nuestro equipo revisará tu solicitud y te contactará"
    },
    {
      number: 4,
      title: "Adopta",
      description: "¡Lleva a tu nuevo amigo a casa y cambia dos vidas!"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#fff9f5] to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl text-gray-900 mb-6">
                Encuentra tu mejor amigo en <span className="text-[#ff6b35]">BuscanDog</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Miles de perros y gatos esperan un hogar lleno de amor. Cambia una vida hoy y gana un amigo para siempre.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/catalogo">
                  <Button size="lg" className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white">
                    Ver mascotas en adopción
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/nosotros">
                  <Button size="lg" variant="outline">
                    Conocer más
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBhbmQlMjBjYXQlMjB0b2dldGhlcnxlbnwxfHx8fDE3NjMyNjUzMDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Perros y gatos esperando adopción"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#4ecdc4] rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white fill-white" />
                  </div>
                  <div>
                    <div className="text-2xl text-gray-900" style={{ fontWeight: 700 }}>500+</div>
                    <div className="text-sm text-gray-600">Adopciones exitosas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Qué es BuscanDog? */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">¿Qué es BuscanDog?</h2>
            <p className="text-lg text-gray-600">
              Somos un albergue dedicado a rescatar, cuidar y encontrar hogares amorosos para perros y gatos abandonados. 
              Cada mascota merece una segunda oportunidad, y cada persona merece la compañía incondicional de un amigo peludo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-[#ff6b35] transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#ff6b35] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-[#ff6b35]" />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">Adoptar</h3>
                <p className="text-gray-600 mb-4">
                  Dale un hogar permanente a una mascota que te llenará de amor y alegría
                </p>
                <Link to="/catalogo">
                  <Button className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white">
                    Explorar
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#4ecdc4] transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#4ecdc4] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#4ecdc4]" />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">Apadrinar</h3>
                <p className="text-gray-600 mb-4">
                  Ayuda con los gastos médicos y cuidados de mascotas en tratamiento
                </p>
                <Link to="/apadrinar">
                  <Button className="bg-[#4ecdc4] hover:bg-[#45b8b0] text-white">
                    Apadrinar
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#95e1d3] transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#95e1d3] bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-[#4ecdc4]" />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">Donar</h3>
                <p className="text-gray-600 mb-4">
                  Tu donación nos ayuda a seguir rescatando y cuidando más mascotas
                </p>
                <Link to="/donar">
                  <Button className="bg-[#95e1d3] hover:bg-[#85d1c3] text-gray-900">
                    Contribuir
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Carrusel de Mascotas Destacadas */}
      <section className="py-16 bg-gradient-to-br from-[#fff9f5] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Mascotas Destacadas</h2>
            <p className="text-lg text-gray-600">
              Conoce a algunos de nuestros amigos que están buscando un hogar
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredPets.map((pet) => (
                  <div key={pet.id} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden shadow-lg">
                      <div className="relative h-80 md:h-auto">
                        <ImageWithFallback
                          src={pet.images[0]}
                          alt={pet.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <div className="inline-block px-3 py-1 bg-[#ff6b35] bg-opacity-10 text-[#ff6b35] rounded-full w-fit mb-4">
                          {pet.type === 'dog' ? 'Perro' : 'Gato'}
                        </div>
                        <h3 className="text-3xl text-gray-900 mb-2">{pet.name}</h3>
                        <p className="text-gray-600 mb-4">
                          {pet.breed} • {pet.age} {pet.age === 1 ? 'año' : 'años'} • {pet.sex === 'male' ? 'Macho' : 'Hembra'}
                        </p>
                        <p className="text-gray-700 mb-6">{pet.story.substring(0, 150)}...</p>
                        <div className="flex gap-3">
                          <Link to={`/mascotas/${pet.id}`}>
                            <Button className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white">
                              Ver perfil completo
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {featuredPets.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-[#ff6b35]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Lo que dicen nuestros adoptantes</h2>
            <p className="text-lg text-gray-600">
              Historias reales de familias felices
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-lg text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">Adoptó a {testimonial.pet}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona la adopción */}
      <section className="py-16 bg-gradient-to-br from-[#fff9f5] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">¿Cómo funciona la adopción?</h2>
            <p className="text-lg text-gray-600">
              Un proceso simple en 4 pasos
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {adoptionSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#ff6b35] to-[#4ecdc4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">{step.number}</span>
                </div>
                <h3 className="text-xl text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < adoptionSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-[#ff6b35] to-[#4ecdc4] opacity-30" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/catalogo">
              <Button size="lg" className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white">
                Comenzar ahora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-[#ff6b35] to-[#4ecdc4] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6">Ayúdanos cambiando una vida hoy</h2>
          <p className="text-xl mb-8 opacity-90">
            Cada adopción, apadrinamiento o donación hace una diferencia real. 
            Juntos podemos darle a más mascotas la oportunidad que merecen.
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
      </section>
    </div>
  );
}
