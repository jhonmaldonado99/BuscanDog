import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Card, CardContent } from "../ui/card";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { CheckCircle } from "lucide-react";

export function AdoptionFormPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const pet = location.state?.pet;
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    hasOtherPets: "",
    otherPetsDetails: "",
    hasExperience: "",
    experienceDetails: "",
    timeAvailability: "",
    livingSpace: "",
    hasYard: "",
    reason: "",
    emergencyContact: "",
    veterinarian: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <Card className="max-w-md w-full">
          <CardContent className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-2xl text-gray-900 mb-4">¡Solicitud Enviada!</h2>
            <p className="text-gray-600 mb-6">
              Hemos recibido tu solicitud de adopción{pet ? ` para ${pet.name}` : ''}. 
              Nuestro equipo la revisará y te contactará pronto.
            </p>
            <div className="space-y-3">
              <Button 
                className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] text-white"
                onClick={() => navigate('/perfil')}
              >
                Ver mis solicitudes
              </Button>
              <Button 
                variant="outline"
                className="w-full"
                onClick={() => navigate('/catalogo')}
              >
                Volver al catálogo
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
      <div className="bg-gradient-to-br from-[#ff6b35] to-[#4ecdc4] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl mb-4">Solicitud de Adopción</h1>
          {pet && (
            <p className="text-xl opacity-90">
              Estás solicitando adoptar a {pet.name}
            </p>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Datos Personales */}
              <div>
                <h2 className="text-2xl text-gray-900 mb-6">Datos Personales</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName">Nombre completo *</Label>
                    <Input
                      id="fullName"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Correo electrónico *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Teléfono *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="city">Ciudad *</Label>
                    <Input
                      id="city"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="mt-2"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <Label htmlFor="address">Dirección completa *</Label>
                    <Input
                      id="address"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>

              {/* Experiencia con Mascotas */}
              <div>
                <h2 className="text-2xl text-gray-900 mb-6">Experiencia con Mascotas</h2>
                
                <div className="space-y-6">
                  <div>
                    <Label>¿Tienes otras mascotas actualmente? *</Label>
                    <RadioGroup
                      value={formData.hasOtherPets}
                      onValueChange={(value) => setFormData({ ...formData, hasOtherPets: value })}
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="other-pets-yes" />
                        <Label htmlFor="other-pets-yes" className="cursor-pointer">Sí</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="other-pets-no" />
                        <Label htmlFor="other-pets-no" className="cursor-pointer">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {formData.hasOtherPets === 'yes' && (
                    <div>
                      <Label htmlFor="otherPetsDetails">Describe tus otras mascotas *</Label>
                      <Textarea
                        id="otherPetsDetails"
                        required
                        value={formData.otherPetsDetails}
                        onChange={(e) => setFormData({ ...formData, otherPetsDetails: e.target.value })}
                        placeholder="Tipo, raza, edad, temperamento..."
                        className="mt-2"
                      />
                    </div>
                  )}

                  <div>
                    <Label>¿Has tenido mascotas anteriormente? *</Label>
                    <RadioGroup
                      value={formData.hasExperience}
                      onValueChange={(value) => setFormData({ ...formData, hasExperience: value })}
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="experience-yes" />
                        <Label htmlFor="experience-yes" className="cursor-pointer">Sí</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="experience-no" />
                        <Label htmlFor="experience-no" className="cursor-pointer">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {formData.hasExperience === 'yes' && (
                    <div>
                      <Label htmlFor="experienceDetails">Cuéntanos sobre tu experiencia *</Label>
                      <Textarea
                        id="experienceDetails"
                        required
                        value={formData.experienceDetails}
                        onChange={(e) => setFormData({ ...formData, experienceDetails: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Hogar y Disponibilidad */}
              <div>
                <h2 className="text-2xl text-gray-900 mb-6">Hogar y Disponibilidad</h2>
                
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="livingSpace">Tipo de vivienda *</Label>
                    <Select
                      value={formData.livingSpace}
                      onValueChange={(value) => setFormData({ ...formData, livingSpace: value })}
                    >
                      <SelectTrigger id="livingSpace" className="mt-2">
                        <SelectValue placeholder="Selecciona una opción" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="house">Casa</SelectItem>
                        <SelectItem value="apartment">Departamento</SelectItem>
                        <SelectItem value="condo">Condominio</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>¿Tu vivienda tiene patio o jardín? *</Label>
                    <RadioGroup
                      value={formData.hasYard}
                      onValueChange={(value) => setFormData({ ...formData, hasYard: value })}
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="yard-yes" />
                        <Label htmlFor="yard-yes" className="cursor-pointer">Sí</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="yard-no" />
                        <Label htmlFor="yard-no" className="cursor-pointer">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="timeAvailability">Disponibilidad de tiempo para la mascota *</Label>
                    <Select
                      value={formData.timeAvailability}
                      onValueChange={(value) => setFormData({ ...formData, timeAvailability: value })}
                    >
                      <SelectTrigger id="timeAvailability" className="mt-2">
                        <SelectValue placeholder="Selecciona una opción" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">Todo el día</SelectItem>
                        <SelectItem value="part-time">Medio tiempo</SelectItem>
                        <SelectItem value="weekends">Fines de semana</SelectItem>
                        <SelectItem value="variable">Variable</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Motivación */}
              <div>
                <h2 className="text-2xl text-gray-900 mb-6">Motivación</h2>
                
                <div>
                  <Label htmlFor="reason">¿Por qué quieres adoptar{pet ? ` a ${pet.name}` : ' esta mascota'}? *</Label>
                  <Textarea
                    id="reason"
                    required
                    rows={5}
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    placeholder="Cuéntanos qué te motiva a adoptar y cómo crees que esta mascota se adaptará a tu estilo de vida..."
                    className="mt-2"
                  />
                </div>
              </div>

              {/* Información Adicional */}
              <div>
                <h2 className="text-2xl text-gray-900 mb-6">Información Adicional</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="emergencyContact">Contacto de emergencia</Label>
                    <Input
                      id="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                      placeholder="Nombre y teléfono"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="veterinarian">Veterinario de referencia</Label>
                    <Input
                      id="veterinarian"
                      value={formData.veterinarian}
                      onChange={(e) => setFormData({ ...formData, veterinarian: e.target.value })}
                      placeholder="Nombre y clínica"
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="border-t pt-6">
                <div className="flex gap-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-[#ff6b35] hover:bg-[#e55a2b] text-white"
                    size="lg"
                  >
                    Enviar Solicitud
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate(-1)}
                    size="lg"
                  >
                    Cancelar
                  </Button>
                </div>
                <p className="text-sm text-gray-600 mt-4 text-center">
                  * Campos obligatorios. Revisaremos tu solicitud en 2-3 días hábiles.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
