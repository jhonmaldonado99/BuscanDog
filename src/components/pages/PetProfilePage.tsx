import { useParams, Link, useNavigate } from "react-router-dom";
import { mockPets } from "../../data/pets";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowLeft, Heart, Calendar, Weight, Ruler, Stethoscope, Award } from "lucide-react";
import { useState } from "react";

export function PetProfilePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pet = mockPets.find(p => p.id === id);
  const [currentImage, setCurrentImage] = useState(0);

  if (!pet) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-gray-900 mb-4">Mascota no encontrada</h2>
          <Link to="/catalogo">
            <Button className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white">
              Volver al catálogo
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-[#ff6b35]">Inicio</Link>
            <span className="text-gray-400">/</span>
            <Link to="/catalogo" className="text-gray-600 hover:text-[#ff6b35]">Catálogo</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{pet.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver
        </Button>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Image Gallery */}
          <div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-4">
              <ImageWithFallback
                src={pet.images[currentImage]}
                alt={pet.name}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-3">
              {pet.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`rounded-lg overflow-hidden border-2 transition-all ${
                    currentImage === index ? 'border-[#ff6b35]' : 'border-transparent'
                  }`}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${pet.name} - ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Video Player Placeholder */}
            {pet.video && (
              <div className="mt-4 bg-gray-900 rounded-lg p-8 text-center">
                <p className="text-white mb-2">Video de {pet.name}</p>
                <p className="text-gray-400 text-sm">Reproductor de video</p>
              </div>
            )}
          </div>

          {/* Pet Info */}
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-4xl text-gray-900 mb-2">{pet.name}</h1>
                <p className="text-xl text-gray-600">{pet.breed}</p>
              </div>
              <Badge className={
                pet.status === 'available' ? 'bg-green-100 text-green-700' :
                pet.status === 'in-treatment' ? 'bg-yellow-100 text-yellow-700' :
                pet.status === 'adopted' ? 'bg-gray-100 text-gray-700' :
                'bg-blue-100 text-blue-700'
              }>
                {pet.status === 'available' ? 'Disponible' :
                 pet.status === 'in-treatment' ? 'En tratamiento' :
                 pet.status === 'adopted' ? 'Adoptado' :
                 'Apadrinado'}
              </Badge>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <Calendar className="w-8 h-8 text-[#ff6b35]" />
                  <div>
                    <p className="text-sm text-gray-600">Edad</p>
                    <p className="text-lg text-gray-900">{pet.age} {pet.age === 1 ? 'año' : 'años'}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <Weight className="w-8 h-8 text-[#ff6b35]" />
                  <div>
                    <p className="text-sm text-gray-600">Sexo</p>
                    <p className="text-lg text-gray-900">{pet.sex === 'male' ? 'Macho' : 'Hembra'}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <Ruler className="w-8 h-8 text-[#ff6b35]" />
                  <div>
                    <p className="text-sm text-gray-600">Tamaño</p>
                    <p className="text-lg text-gray-900">
                      {pet.size === 'small' ? 'Pequeño' : pet.size === 'medium' ? 'Mediano' : 'Grande'}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <Stethoscope className="w-8 h-8 text-[#ff6b35]" />
                  <div>
                    <p className="text-sm text-gray-600">Tipo</p>
                    <p className="text-lg text-gray-900">{pet.type === 'dog' ? 'Perro' : 'Gato'}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Temperament */}
            <div className="mb-6">
              <h3 className="text-lg text-gray-900 mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#ff6b35]" />
                Temperamento
              </h3>
              <div className="flex flex-wrap gap-2">
                {pet.temperament.map((trait, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {trait}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 mb-6">
              {pet.status === 'available' && (
                <Link to="/solicitud-adopcion" state={{ pet }}>
                  <Button className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] text-white" size="lg">
                    <Heart className="w-5 h-5 mr-2" />
                    Solicitar Adopción
                  </Button>
                </Link>
              )}
              
              {pet.canSponsor && (
                <Link to="/apadrinar" state={{ pet }}>
                  <Button className="w-full bg-[#4ecdc4] hover:bg-[#45b8b0] text-white" size="lg">
                    Apadrinar a {pet.name}
                  </Button>
                </Link>
              )}

              <Button variant="outline" className="w-full" size="lg">
                <Heart className="w-5 h-5 mr-2" />
                Agregar a Favoritos
              </Button>
            </div>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Story */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl text-gray-900 mb-4">Historia de {pet.name}</h2>
              <p className="text-gray-700 leading-relaxed">{pet.story}</p>
            </CardContent>
          </Card>

          {/* Health Info */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl text-gray-900 mb-4">Estado de Salud</h2>
              
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-3 h-3 rounded-full ${pet.vaccinated ? 'bg-green-500' : 'bg-yellow-500'}`} />
                  <span className="text-gray-900">
                    {pet.vaccinated ? 'Vacunado' : 'Vacunas pendientes'}
                  </span>
                </div>
              </div>

              {pet.vaccines.length > 0 && (
                <div>
                  <h3 className="text-lg text-gray-900 mb-3">Vacunas aplicadas:</h3>
                  <ul className="space-y-2">
                    {pet.vaccines.map((vaccine, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b35]" />
                        {vaccine}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {pet.status === 'in-treatment' && (
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    {pet.name} está actualmente en tratamiento médico. Puedes apadrinarle para ayudar con los gastos.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Similar Pets */}
        <div className="mt-12">
          <h2 className="text-2xl text-gray-900 mb-6">Otras mascotas que podrían interesarte</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockPets
              .filter(p => p.id !== pet.id && p.type === pet.type && p.status === 'available')
              .slice(0, 3)
              .map((similarPet) => (
                <Card key={similarPet.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <ImageWithFallback
                    src={similarPet.images[0]}
                    alt={similarPet.name}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg text-gray-900 mb-2">{similarPet.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {similarPet.breed} • {similarPet.age} {similarPet.age === 1 ? 'año' : 'años'}
                    </p>
                    <Link to={`/mascotas/${similarPet.id}`}>
                      <Button className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] text-white">
                        Ver perfil
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
