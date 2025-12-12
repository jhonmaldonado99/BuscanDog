import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Heart, FileText, PawPrint, Users, LogOut } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function UserProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      navigate('/login');
    } else {
      setUser(JSON.parse(userData));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  if (!user) return null;

  // Mock data
  const favorites = [
    {
      id: '1',
      name: 'Max',
      image: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXJ8ZW58MXx8fHwxNzYzMjA2ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      breed: 'Golden Retriever'
    },
    {
      id: '2',
      name: 'Luna',
      image: 'https://images.unsplash.com/photo-1593483316242-efb5420596ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjBjYXR8ZW58MXx8fHwxNzYzMTUwNjY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      breed: 'Gato Naranja'
    }
  ];

  const adoptionRequests = [
    {
      id: '1',
      petName: 'Max',
      petImage: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXJ8ZW58MXx8fHwxNzYzMjA2ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      status: 'in-review',
      date: '2024-11-10'
    },
    {
      id: '2',
      petName: 'Bella',
      petImage: 'https://images.unsplash.com/photo-1676484606502-3f1837111e64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXBweSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzI2NTMwOHww&ixlib=rb-4.1.0&q=80&w=1080',
      status: 'received',
      date: '2024-11-14'
    }
  ];

  const sponsorships = [
    {
      id: '1',
      petName: 'Rocky',
      petImage: 'https://images.unsplash.com/photo-1562464980-6f182d4730aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGRvZyUyMGN1dGV8ZW58MXx8fHwxNzYzMTk5MDg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      amount: 50,
      startDate: '2024-10-01'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'received':
        return <Badge className="bg-blue-100 text-blue-700">Recibida</Badge>;
      case 'in-review':
        return <Badge className="bg-yellow-100 text-yellow-700">En revisión</Badge>;
      case 'approved':
        return <Badge className="bg-green-100 text-green-700">Aprobada</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-700">Rechazada</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#ff6b35] to-[#4ecdc4] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <Avatar className="w-24 h-24 border-4 border-white">
              <AvatarFallback className="bg-white text-[#ff6b35] text-2xl">
                {user.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl mb-2">{user.name}</h1>
              <p className="text-lg opacity-90">{user.email}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-end mb-6">
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Cerrar Sesión
          </Button>
        </div>

        <Tabs defaultValue="favorites" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="favorites" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Favoritos
            </TabsTrigger>
            <TabsTrigger value="requests" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Solicitudes
            </TabsTrigger>
            <TabsTrigger value="adoptions" className="flex items-center gap-2">
              <PawPrint className="w-4 h-4" />
              Adopciones
            </TabsTrigger>
            <TabsTrigger value="sponsorships" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Apadrinamientos
            </TabsTrigger>
          </TabsList>

          {/* Favorites Tab */}
          <TabsContent value="favorites">
            <h2 className="text-2xl text-gray-900 mb-6">Mis Favoritos</h2>
            {favorites.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <Heart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">No tienes mascotas en favoritos aún</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favorites.map((pet) => (
                  <Card key={pet.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <ImageWithFallback
                      src={pet.image}
                      alt={pet.name}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-4">
                      <h3 className="text-lg text-gray-900 mb-1">{pet.name}</h3>
                      <p className="text-sm text-gray-600 mb-4">{pet.breed}</p>
                      <Button className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] text-white">
                        Ver perfil
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Adoption Requests Tab */}
          <TabsContent value="requests">
            <h2 className="text-2xl text-gray-900 mb-6">Mis Solicitudes de Adopción</h2>
            {adoptionRequests.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">No has enviado solicitudes de adopción aún</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {adoptionRequests.map((request) => (
                  <Card key={request.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-6">
                        <ImageWithFallback
                          src={request.petImage}
                          alt={request.petName}
                          className="w-24 h-24 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl text-gray-900">{request.petName}</h3>
                            {getStatusBadge(request.status)}
                          </div>
                          <p className="text-sm text-gray-600">
                            Fecha de solicitud: {new Date(request.date).toLocaleDateString('es-PE', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </p>
                        </div>
                        <Button variant="outline">Ver detalles</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Adoptions Tab */}
          <TabsContent value="adoptions">
            <h2 className="text-2xl text-gray-900 mb-6">Mis Adopciones</h2>
            <Card>
              <CardContent className="p-12 text-center">
                <PawPrint className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Aún no has completado ninguna adopción</p>
                <p className="text-sm text-gray-500 mt-2">
                  Una vez que tu solicitud sea aprobada, aparecerá aquí
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Sponsorships Tab */}
          <TabsContent value="sponsorships">
            <h2 className="text-2xl text-gray-900 mb-6">Mis Apadrinamientos</h2>
            {sponsorships.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">No estás apadrinando ninguna mascota aún</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {sponsorships.map((sponsorship) => (
                  <Card key={sponsorship.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-6">
                        <ImageWithFallback
                          src={sponsorship.petImage}
                          alt={sponsorship.petName}
                          className="w-24 h-24 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="text-xl text-gray-900 mb-2">{sponsorship.petName}</h3>
                          <p className="text-sm text-gray-600">
                            Aporte mensual: S/ {sponsorship.amount}
                          </p>
                          <p className="text-sm text-gray-600">
                            Desde: {new Date(sponsorship.startDate).toLocaleDateString('es-PE', {
                              year: 'numeric',
                              month: 'long'
                            })}
                          </p>
                        </div>
                        <Button variant="outline">Gestionar</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
