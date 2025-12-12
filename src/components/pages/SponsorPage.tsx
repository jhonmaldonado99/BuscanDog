import { useState } from "react";
import { mockPets } from "../../data/pets";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Heart, CheckCircle, Info } from "lucide-react";

export function SponsorPage() {
  const [selectedPet, setSelectedPet] = useState<string | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<string>("50");
  const [customAmount, setCustomAmount] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const sponsorablePets = mockPets.filter(pet => pet.canSponsor);
  const selectedPetData = sponsorablePets.find(p => p.id === selectedPet);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <Card className="max-w-md w-full">
          <CardContent className="p-12 text-center">
            <div className="w-20 h-20 bg-[#4ecdc4] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-[#4ecdc4]" />
            </div>
            <h2 className="text-2xl text-gray-900 mb-4">¡Gracias por Apadrinar!</h2>
            <p className="text-gray-600 mb-6">
              Tu apoyo mensual ayudará a cubrir los gastos médicos y cuidados de {selectedPetData?.name}. 
              Recibirás actualizaciones periódicas sobre su progreso.
            </p>
            <div className="space-y-3">
              <Button 
                className="w-full bg-[#4ecdc4] hover:bg-[#45b8b0] text-white"
                onClick={() => window.location.href = '/perfil'}
              >
                Ver mis apadrinamientos
              </Button>
              <Button 
                variant="outline"
                className="w-full"
                onClick={() => setSubmitted(false)}
              >
                Apadrinar otra mascota
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#4ecdc4] to-[#95e1d3] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl mb-4">Programa de Apadrinamiento</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Ayuda a mascotas en tratamiento médico con un aporte mensual. Tu apoyo marca la diferencia 
            mientras esperan encontrar su hogar definitivo.
          </p>
        </div>
      </div>

      {/* How it Works */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="mb-12 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-[#4ecdc4]">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-[#4ecdc4] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl text-gray-900 mb-4">¿Cómo funciona el apadrinamiento?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl mb-2">1️⃣</div>
                    <h3 className="text-lg text-gray-900 mb-2">Elige una mascota</h3>
                    <p className="text-gray-600">
                      Selecciona a la mascota que necesita apoyo médico
                    </p>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">2️⃣</div>
                    <h3 className="text-lg text-gray-900 mb-2">Define tu aporte</h3>
                    <p className="text-gray-600">
                      Elige el monto mensual que puedes contribuir
                    </p>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">3️⃣</div>
                    <h3 className="text-lg text-gray-900 mb-2">Recibe actualizaciones</h3>
                    <p className="text-gray-600">
                      Te mantendremos informado sobre su progreso
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {!selectedPet ? (
          <>
            <h2 className="text-3xl text-gray-900 mb-8 text-center">Mascotas que Necesitan Apadrinamiento</h2>
            
            {sponsorablePets.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <Heart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">No hay mascotas que necesiten apadrinamiento en este momento</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sponsorablePets.map((pet) => (
                  <Card key={pet.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <ImageWithFallback
                        src={pet.images[0]}
                        alt={pet.name}
                        className="w-full h-56 object-cover"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-yellow-100 text-yellow-700">
                          Necesita apoyo
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-xl text-gray-900 mb-2">{pet.name}</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {pet.breed} • {pet.age} {pet.age === 1 ? 'año' : 'años'}
                      </p>
                      <p className="text-gray-700 mb-4 line-clamp-2">{pet.story}</p>
                      <Button
                        onClick={() => setSelectedPet(pet.id)}
                        className="w-full bg-[#4ecdc4] hover:bg-[#45b8b0] text-white"
                      >
                        Apadrinar a {pet.name}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="max-w-4xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => setSelectedPet(null)}
              className="mb-6"
            >
              ← Elegir otra mascota
            </Button>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <ImageWithFallback
                  src={selectedPetData!.images[0]}
                  alt={selectedPetData!.name}
                  className="w-full h-80 object-cover rounded-t-lg"
                />
                <CardContent className="p-6">
                  <h2 className="text-2xl text-gray-900 mb-2">{selectedPetData!.name}</h2>
                  <p className="text-gray-600 mb-4">
                    {selectedPetData!.breed} • {selectedPetData!.age} {selectedPetData!.age === 1 ? 'año' : 'años'}
                  </p>
                  <p className="text-gray-700">{selectedPetData!.story}</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl text-gray-900 mb-6">Configura tu Apadrinamiento</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label className="mb-4 block">Selecciona el monto mensual:</Label>
                      <RadioGroup value={selectedAmount} onValueChange={setSelectedAmount}>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2 border-2 border-gray-200 rounded-lg p-4 hover:border-[#4ecdc4] transition-colors">
                            <RadioGroupItem value="20" id="amount-20" />
                            <Label htmlFor="amount-20" className="flex-1 cursor-pointer">
                              <span className="block">S/ 20 / mes</span>
                              <span className="text-sm text-gray-600">Apoyo básico</span>
                            </Label>
                          </div>
                          
                          <div className="flex items-center space-x-2 border-2 border-[#4ecdc4] bg-[#4ecdc4] bg-opacity-5 rounded-lg p-4">
                            <RadioGroupItem value="50" id="amount-50" />
                            <Label htmlFor="amount-50" className="flex-1 cursor-pointer">
                              <span className="block">S/ 50 / mes</span>
                              <span className="text-sm text-gray-600">Apoyo recomendado</span>
                            </Label>
                            <Badge className="bg-[#4ecdc4] text-white">Popular</Badge>
                          </div>
                          
                          <div className="flex items-center space-x-2 border-2 border-gray-200 rounded-lg p-4 hover:border-[#4ecdc4] transition-colors">
                            <RadioGroupItem value="80" id="amount-80" />
                            <Label htmlFor="amount-80" className="flex-1 cursor-pointer">
                              <span className="block">S/ 80 / mes</span>
                              <span className="text-sm text-gray-600">Apoyo completo</span>
                            </Label>
                          </div>
                          
                          <div className="flex items-center space-x-2 border-2 border-gray-200 rounded-lg p-4 hover:border-[#4ecdc4] transition-colors">
                            <RadioGroupItem value="custom" id="amount-custom" />
                            <Label htmlFor="amount-custom" className="flex-1 cursor-pointer">
                              <span className="block">Monto personalizado</span>
                            </Label>
                          </div>
                        </div>
                      </RadioGroup>

                      {selectedAmount === 'custom' && (
                        <div className="mt-4">
                          <Label htmlFor="customAmount">Ingresa tu monto (S/)</Label>
                          <Input
                            id="customAmount"
                            type="number"
                            min="10"
                            placeholder="50"
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                            required
                            className="mt-2"
                          />
                        </div>
                      )}
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="text-lg text-gray-900 mb-2">Tu aporte incluye:</h3>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#4ecdc4]" />
                          Gastos médicos y medicamentos
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#4ecdc4]" />
                          Alimentación de calidad
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#4ecdc4]" />
                          Actualizaciones mensuales
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#4ecdc4]" />
                          Certificado de padrino digital
                        </li>
                      </ul>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#4ecdc4] hover:bg-[#45b8b0] text-white"
                      size="lg"
                    >
                      Confirmar Apadrinamiento
                    </Button>

                    <p className="text-xs text-gray-600 text-center">
                      Podrás cancelar o modificar tu apadrinamiento en cualquier momento desde tu perfil
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
