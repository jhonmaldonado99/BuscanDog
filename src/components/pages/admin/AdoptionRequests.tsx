import { useState } from "react";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../ui/dialog";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { Eye, Check, X, AlertCircle } from "lucide-react";

interface AdoptionRequest {
  id: string;
  petName: string;
  petImage: string;
  applicantName: string;
  applicantEmail: string;
  phone: string;
  address: string;
  hasOtherPets: boolean;
  otherPetsDetails?: string;
  timeAvailability: string;
  livingSpace: string;
  reason: string;
  status: 'received' | 'in-review' | 'approved' | 'rejected';
  date: string;
}

export function AdoptionRequests() {
  const [requests, setRequests] = useState<AdoptionRequest[]>([
    {
      id: '1',
      petName: 'Max',
      petImage: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXJ8ZW58MXx8fHwxNzYzMjA2ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      applicantName: 'María García',
      applicantEmail: 'maria@email.com',
      phone: '999888777',
      address: 'Av. Principal 123, San Miguel',
      hasOtherPets: false,
      timeAvailability: 'full-time',
      livingSpace: 'house',
      reason: 'Siempre he querido tener un perro grande y Max parece perfecto para nuestra familia. Tenemos un patio grande donde puede jugar.',
      status: 'in-review',
      date: '2024-11-10'
    },
    {
      id: '2',
      petName: 'Luna',
      petImage: 'https://images.unsplash.com/photo-1593483316242-efb5420596ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjBjYXR8ZW58MXx8fHwxNzYzMTUwNjY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      applicantName: 'Carlos Mendoza',
      applicantEmail: 'carlos@email.com',
      phone: '988777666',
      address: 'Calle Los Gatos 456, Miraflores',
      hasOtherPets: true,
      otherPetsDetails: 'Tengo un gato de 5 años, muy tranquilo y sociable',
      timeAvailability: 'part-time',
      livingSpace: 'apartment',
      reason: 'Busco compañía para mi gato y Luna parece ser muy dulce.',
      status: 'received',
      date: '2024-11-14'
    },
    {
      id: '3',
      petName: 'Bella',
      petImage: 'https://images.unsplash.com/photo-1676484606502-3f1837111e64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXBweSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzI2NTMwOHww&ixlib=rb-4.1.0&q=80&w=1080',
      applicantName: 'Ana Torres',
      applicantEmail: 'ana@email.com',
      phone: '977666555',
      address: 'Jr. Las Flores 789, Surco',
      hasOtherPets: false,
      timeAvailability: 'full-time',
      livingSpace: 'house',
      reason: 'Bella sería perfecta para nuestra familia con niños.',
      status: 'approved',
      date: '2024-11-05'
    }
  ]);

  const [selectedRequest, setSelectedRequest] = useState<AdoptionRequest | null>(null);

  const handleUpdateStatus = (id: string, status: AdoptionRequest['status']) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status } : req
    ));
    setSelectedRequest(null);
  };

  const getStatusBadge = (status: AdoptionRequest['status']) => {
    switch (status) {
      case 'received':
        return <Badge className="bg-blue-100 text-blue-700">Recibida</Badge>;
      case 'in-review':
        return <Badge className="bg-yellow-100 text-yellow-700">En revisión</Badge>;
      case 'approved':
        return <Badge className="bg-green-100 text-green-700">Aprobada</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-700">Rechazada</Badge>;
    }
  };

  const stats = {
    total: requests.length,
    received: requests.filter(r => r.status === 'received').length,
    inReview: requests.filter(r => r.status === 'in-review').length,
    approved: requests.filter(r => r.status === 'approved').length,
    rejected: requests.filter(r => r.status === 'rejected').length
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl text-gray-900 mb-2">Solicitudes de Adopción</h1>
        <p className="text-gray-600">Gestiona las solicitudes de adopción pendientes</p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-5 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl text-gray-900">{stats.total}</div>
            <p className="text-sm text-gray-600">Total</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl text-blue-600">{stats.received}</div>
            <p className="text-sm text-gray-600">Recibidas</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl text-yellow-600">{stats.inReview}</div>
            <p className="text-sm text-gray-600">En revisión</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl text-green-600">{stats.approved}</div>
            <p className="text-sm text-gray-600">Aprobadas</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl text-red-600">{stats.rejected}</div>
            <p className="text-sm text-gray-600">Rechazadas</p>
          </CardContent>
        </Card>
      </div>

      {/* Requests Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left p-4 text-sm text-gray-600">Mascota</th>
                  <th className="text-left p-4 text-sm text-gray-600">Solicitante</th>
                  <th className="text-left p-4 text-sm text-gray-600">Contacto</th>
                  <th className="text-left p-4 text-sm text-gray-600">Fecha</th>
                  <th className="text-left p-4 text-sm text-gray-600">Estado</th>
                  <th className="text-right p-4 text-sm text-gray-600">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {requests.map((request) => (
                  <tr key={request.id} className="hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <ImageWithFallback
                          src={request.petImage}
                          alt={request.petName}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <span className="text-gray-900">{request.petName}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div>
                        <div className="text-gray-900">{request.applicantName}</div>
                        <div className="text-sm text-gray-600">{request.applicantEmail}</div>
                      </div>
                    </td>
                    <td className="p-4 text-gray-700">
                      {request.phone}
                    </td>
                    <td className="p-4 text-gray-700">
                      {new Date(request.date).toLocaleDateString('es-PE', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </td>
                    <td className="p-4">
                      {getStatusBadge(request.status)}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedRequest(request)}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        {request.status !== 'approved' && request.status !== 'rejected' && (
                          <>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleUpdateStatus(request.id, 'approved')}
                              className="text-green-600 hover:text-green-700 hover:bg-green-50"
                            >
                              <Check className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleUpdateStatus(request.id, 'rejected')}
                              className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Request Detail Dialog */}
      <Dialog open={!!selectedRequest} onOpenChange={() => setSelectedRequest(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedRequest && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">Detalles de la Solicitud</DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                {/* Pet Info */}
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <ImageWithFallback
                    src={selectedRequest.petImage}
                    alt={selectedRequest.petName}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-xl text-gray-900">{selectedRequest.petName}</h3>
                    <p className="text-sm text-gray-600">
                      Fecha de solicitud: {new Date(selectedRequest.date).toLocaleDateString('es-PE', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                    {getStatusBadge(selectedRequest.status)}
                  </div>
                </div>

                {/* Applicant Info */}
                <div>
                  <h3 className="text-lg text-gray-900 mb-4">Datos del Solicitante</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Nombre</p>
                      <p className="text-gray-900">{selectedRequest.applicantName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="text-gray-900">{selectedRequest.applicantEmail}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Teléfono</p>
                      <p className="text-gray-900">{selectedRequest.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Dirección</p>
                      <p className="text-gray-900">{selectedRequest.address}</p>
                    </div>
                  </div>
                </div>

                {/* Living Situation */}
                <div>
                  <h3 className="text-lg text-gray-900 mb-4">Situación del Hogar</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Tipo de vivienda</p>
                      <p className="text-gray-900">
                        {selectedRequest.livingSpace === 'house' ? 'Casa' :
                         selectedRequest.livingSpace === 'apartment' ? 'Departamento' :
                         'Condominio'}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Disponibilidad de tiempo</p>
                      <p className="text-gray-900">
                        {selectedRequest.timeAvailability === 'full-time' ? 'Todo el día' :
                         selectedRequest.timeAvailability === 'part-time' ? 'Medio tiempo' :
                         selectedRequest.timeAvailability === 'weekends' ? 'Fines de semana' :
                         'Variable'}
                      </p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-gray-600">Otras mascotas</p>
                      <p className="text-gray-900">
                        {selectedRequest.hasOtherPets ? (
                          <>Sí - {selectedRequest.otherPetsDetails}</>
                        ) : (
                          'No tiene otras mascotas'
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reason */}
                <div>
                  <h3 className="text-lg text-gray-900 mb-2">Motivación para Adoptar</h3>
                  <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">
                    {selectedRequest.reason}
                  </p>
                </div>

                {/* Actions */}
                {selectedRequest.status !== 'approved' && selectedRequest.status !== 'rejected' && (
                  <div className="flex gap-3 pt-4 border-t">
                    <Button
                      onClick={() => handleUpdateStatus(selectedRequest.id, 'in-review')}
                      variant="outline"
                      className="flex-1"
                    >
                      <AlertCircle className="w-4 h-4 mr-2" />
                      Marcar en revisión
                    </Button>
                    <Button
                      onClick={() => handleUpdateStatus(selectedRequest.id, 'approved')}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                    >
                      <Check className="w-4 h-4 mr-2" />
                      Aprobar
                    </Button>
                    <Button
                      onClick={() => handleUpdateStatus(selectedRequest.id, 'rejected')}
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                    >
                      <X className="w-4 h-4 mr-2" />
                      Rechazar
                    </Button>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
