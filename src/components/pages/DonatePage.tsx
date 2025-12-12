import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Heart, DollarSign, CheckCircle, CreditCard, Smartphone } from "lucide-react";

export function DonatePage() {
  const [amount, setAmount] = useState<string>("50");
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<string>("card");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <Card className="max-w-md w-full">
          <CardContent className="p-12 text-center">
            <div className="w-20 h-20 bg-[#95e1d3] bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-12 h-12 text-[#4ecdc4] fill-[#4ecdc4]" />
            </div>
            <h2 className="text-2xl text-gray-900 mb-4">¡Gracias por tu Donación!</h2>
            <p className="text-gray-600 mb-6">
              Tu generosidad ayudará a rescatar y cuidar más mascotas. Recibirás un correo 
              con los detalles de tu donación y un comprobante para fines tributarios.
            </p>
            <div className="space-y-3">
              <Button 
                className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] text-white"
                onClick={() => window.location.href = '/'}
              >
                Volver al inicio
              </Button>
              <Button 
                variant="outline"
                className="w-full"
                onClick={() => setSubmitted(false)}
              >
                Hacer otra donación
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
      <div className="bg-gradient-to-br from-[#95e1d3] to-[#4ecdc4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl mb-4">Haz una Donación</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Cada donación nos ayuda a rescatar, alimentar y cuidar a más mascotas abandonadas. 
            Tu generosidad salva vidas.
          </p>
        </div>
      </div>

      {/* Impact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-2 hover:border-[#4ecdc4] transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-[#ff6b35] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-[#ff6b35]" />
              </div>
              <h3 className="text-xl text-gray-900 mb-2">S/ 20</h3>
              <p className="text-gray-600">
                Alimenta a una mascota por una semana
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-[#4ecdc4] transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-[#4ecdc4] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-[#4ecdc4]" />
              </div>
              <h3 className="text-xl text-gray-900 mb-2">S/ 50</h3>
              <p className="text-gray-600">
                Cubre las vacunas básicas de una mascota
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-[#4ecdc4] transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-[#95e1d3] bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-[#4ecdc4]" />
              </div>
              <h3 className="text-xl text-gray-900 mb-2">S/ 100</h3>
              <p className="text-gray-600">
                Financia un tratamiento médico menor
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Donation Form */}
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Amount Selection */}
                <div>
                  <h2 className="text-2xl text-gray-900 mb-6">Selecciona el monto de tu donación</h2>
                  <RadioGroup value={amount} onValueChange={setAmount}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                      <div className={`border-2 rounded-lg p-4 text-center cursor-pointer transition-all ${
                        amount === '20' ? 'border-[#ff6b35] bg-[#ff6b35] bg-opacity-5' : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <RadioGroupItem value="20" id="amount-20" className="sr-only" />
                        <Label htmlFor="amount-20" className="cursor-pointer">
                          <div className="text-2xl text-gray-900 mb-1">S/ 20</div>
                        </Label>
                      </div>
                      
                      <div className={`border-2 rounded-lg p-4 text-center cursor-pointer transition-all ${
                        amount === '50' ? 'border-[#ff6b35] bg-[#ff6b35] bg-opacity-5' : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <RadioGroupItem value="50" id="amount-50" className="sr-only" />
                        <Label htmlFor="amount-50" className="cursor-pointer">
                          <div className="text-2xl text-gray-900 mb-1">S/ 50</div>
                        </Label>
                      </div>
                      
                      <div className={`border-2 rounded-lg p-4 text-center cursor-pointer transition-all ${
                        amount === '100' ? 'border-[#ff6b35] bg-[#ff6b35] bg-opacity-5' : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <RadioGroupItem value="100" id="amount-100" className="sr-only" />
                        <Label htmlFor="amount-100" className="cursor-pointer">
                          <div className="text-2xl text-gray-900 mb-1">S/ 100</div>
                        </Label>
                      </div>
                      
                      <div className={`border-2 rounded-lg p-4 text-center cursor-pointer transition-all ${
                        amount === 'custom' ? 'border-[#ff6b35] bg-[#ff6b35] bg-opacity-5' : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <RadioGroupItem value="custom" id="amount-custom" className="sr-only" />
                        <Label htmlFor="amount-custom" className="cursor-pointer">
                          <div className="text-sm text-gray-900">Otro monto</div>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>

                  {amount === 'custom' && (
                    <div>
                      <Label htmlFor="customAmount">Monto personalizado (S/)</Label>
                      <Input
                        id="customAmount"
                        type="number"
                        min="10"
                        placeholder="100"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        required
                        className="mt-2"
                      />
                    </div>
                  )}
                </div>

                {/* Personal Info */}
                <div>
                  <h2 className="text-2xl text-gray-900 mb-6">Tus datos</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="donorName">Nombre completo *</Label>
                      <Input id="donorName" required className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="donorEmail">Correo electrónico *</Label>
                      <Input id="donorEmail" type="email" required className="mt-2" />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <h2 className="text-2xl text-gray-900 mb-6">Método de pago</h2>
                  <Tabs value={paymentMethod} onValueChange={setPaymentMethod}>
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="card" className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4" />
                        Tarjeta
                      </TabsTrigger>
                      <TabsTrigger value="mobile" className="flex items-center gap-2">
                        <Smartphone className="w-4 h-4" />
                        Yape/Plin
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="card" className="mt-6 space-y-4">
                      <div>
                        <Label htmlFor="cardNumber">Número de tarjeta</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          required
                          className="mt-2"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Vencimiento</Label>
                          <Input
                            id="expiry"
                            placeholder="MM/YY"
                            required
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            placeholder="123"
                            required
                            className="mt-2"
                          />
                        </div>
                      </div>
                      <p className="text-xs text-gray-600">
                        🔒 Tus datos están protegidos con encriptación SSL
                      </p>
                    </TabsContent>

                    <TabsContent value="mobile" className="mt-6">
                      <div className="bg-gray-50 rounded-lg p-6 text-center">
                        <div className="w-48 h-48 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center border-2 border-gray-200">
                          <p className="text-gray-400">Código QR</p>
                        </div>
                        <p className="text-gray-700 mb-2">Escanea este código con Yape o Plin</p>
                        <p className="text-sm text-gray-600">Número: 999 888 777</p>
                        <p className="text-sm text-gray-600">A nombre de: BuscanDog</p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>

                {/* Benefits */}
                <div className="bg-gradient-to-br from-[#fff9f5] to-white rounded-lg p-6">
                  <h3 className="text-lg text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#4ecdc4]" />
                    Tu donación incluye:
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b35]" />
                      Comprobante para fines tributarios
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b35]" />
                      Certificado digital de donante
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b35]" />
                      Actualizaciones sobre el impacto de tu donación
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b35]" />
                      Invitación a eventos especiales del albergue
                    </li>
                  </ul>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#ff6b35] to-[#4ecdc4] hover:opacity-90 text-white"
                  size="lg"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Donar ahora
                </Button>

                <p className="text-xs text-gray-600 text-center">
                  Al hacer clic en "Donar ahora", aceptas nuestros términos y condiciones
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
