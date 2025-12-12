import { useState } from "react";
import { mockSuccessStories } from "../../data/pets";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Heart, Calendar } from "lucide-react";

export function SuccessStoriesPage() {
  const [selectedStory, setSelectedStory] = useState<typeof mockSuccessStories[0] | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#ff6b35] via-[#4ecdc4] to-[#95e1d3] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-6">
            <Heart className="w-8 h-8 fill-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl mb-4">Historias de Éxito</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Cada adopción es una historia de amor. Conoce a las familias felices que encontraron 
            a su compañero perfecto en BuscanDog.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-2">
            <CardContent className="p-6 text-center">
              <div className="text-4xl text-[#ff6b35] mb-2">500+</div>
              <p className="text-gray-600">Adopciones exitosas</p>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardContent className="p-6 text-center">
              <div className="text-4xl text-[#4ecdc4] mb-2">98%</div>
              <p className="text-gray-600">Tasa de satisfacción</p>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardContent className="p-6 text-center">
              <div className="text-4xl text-[#95e1d3] mb-2">5 años</div>
              <p className="text-gray-600">Cambiando vidas</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockSuccessStories.map((story) => (
            <Card key={story.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <ImageWithFallback
                  src={story.afterImage}
                  alt={`${story.petName} con su familia`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white text-gray-900">
                    <Heart className="w-3 h-3 mr-1 fill-[#ff6b35] text-[#ff6b35]" />
                    Adoptado
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl text-gray-900 mb-2">{story.petName}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>
                    Adoptado el {new Date(story.adoptionDate).toLocaleDateString('es-PE', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <p className="text-gray-600 mb-2">
                  Familia: <span className="text-gray-900">{story.familyName}</span>
                </p>
                <p className="text-gray-700 mb-6 line-clamp-3">{story.story}</p>
                <Button
                  onClick={() => setSelectedStory(story)}
                  className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] text-white"
                >
                  Ver historia completa
                </Button>
              </CardContent>
            </Card>
          ))}

          {/* Additional placeholder stories */}
          {[...Array(6)].map((_, index) => (
            <Card key={`placeholder-${index}`} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <ImageWithFallback
                  src={`https://images.unsplash.com/photo-${index % 2 === 0 ? '1655761167947' : '1700665537604'}-cb93277c192c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMGRvZ3xlbnwxfHx8fDE3NjMyNjUzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080`}
                  alt="Historia de adopción"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white text-gray-900">
                    <Heart className="w-3 h-3 mr-1 fill-[#ff6b35] text-[#ff6b35]" />
                    Adoptado
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl text-gray-900 mb-2">
                  {['Bruno', 'Kira', 'Thor', 'Mia', 'Simba', 'Coco'][index]}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>Adoptado en 2024</span>
                </div>
                <p className="text-gray-600 mb-2">
                  Familia: <span className="text-gray-900">Familia Feliz</span>
                </p>
                <p className="text-gray-700 mb-6 line-clamp-3">
                  Una hermosa historia de amor y segunda oportunidad. Ahora es parte de una familia que lo adora.
                </p>
                <Button
                  className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] text-white"
                >
                  Ver historia completa
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Story Detail Dialog */}
      <Dialog open={!!selectedStory} onOpenChange={() => setSelectedStory(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedStory && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl text-gray-900">
                  La historia de {selectedStory.petName}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Antes de la adopción</p>
                    <ImageWithFallback
                      src={selectedStory.beforeImage}
                      alt={`${selectedStory.petName} antes`}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Después de la adopción</p>
                    <ImageWithFallback
                      src={selectedStory.afterImage}
                      alt={`${selectedStory.petName} después`}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>
                      Adoptado el {new Date(selectedStory.adoptionDate).toLocaleDateString('es-PE', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Familia adoptante: <span className="text-gray-900">{selectedStory.familyName}</span>
                  </p>
                  <p className="text-gray-700 leading-relaxed">{selectedStory.story}</p>
                </div>

                <div className="text-center">
                  <p className="text-gray-600 mb-4">
                    ¿Quieres vivir tu propia historia de adopción?
                  </p>
                  <Button
                    onClick={() => {
                      setSelectedStory(null);
                      window.location.href = '/catalogo';
                    }}
                    className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white"
                  >
                    Ver mascotas disponibles
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
