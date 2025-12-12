import { useState } from "react";
import { Card, CardContent } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { DollarSign, TrendingUp, Calendar, CreditCard } from "lucide-react";

interface Donation {
  id: string;
  amount: number;
  donorName: string;
  donorEmail: string;
  method: string;
  date: string;
  type: 'one-time' | 'recurring';
}

export function DonationsManagement() {
  const [donations] = useState<Donation[]>([
    {
      id: '1',
      amount: 100,
      donorName: 'María González',
      donorEmail: 'maria@email.com',
      method: 'Tarjeta',
      date: '2024-11-15',
      type: 'one-time'
    },
    {
      id: '2',
      amount: 50,
      donorName: 'Carlos Mendoza',
      donorEmail: 'carlos@email.com',
      method: 'Yape',
      date: '2024-11-14',
      type: 'one-time'
    },
    {
      id: '3',
      amount: 200,
      donorName: 'Ana Torres',
      donorEmail: 'ana@email.com',
      method: 'Tarjeta',
      date: '2024-11-13',
      type: 'recurring'
    },
    {
      id: '4',
      amount: 75,
      donorName: 'Luis Ramírez',
      donorEmail: 'luis@email.com',
      method: 'Plin',
      date: '2024-11-12',
      type: 'one-time'
    },
    {
      id: '5',
      amount: 150,
      donorName: 'Patricia Silva',
      donorEmail: 'patricia@email.com',
      method: 'Tarjeta',
      date: '2024-11-11',
      type: 'one-time'
    },
    {
      id: '6',
      amount: 50,
      donorName: 'Roberto Castro',
      donorEmail: 'roberto@email.com',
      method: 'Yape',
      date: '2024-11-10',
      type: 'recurring'
    }
  ]);

  const stats = {
    total: donations.reduce((sum, d) => sum + d.amount, 0),
    count: donations.length,
    recurring: donations.filter(d => d.type === 'recurring').length,
    average: Math.round(donations.reduce((sum, d) => sum + d.amount, 0) / donations.length)
  };

  const thisMonth = donations.filter(d => {
    const donationDate = new Date(d.date);
    const now = new Date();
    return donationDate.getMonth() === now.getMonth() && 
           donationDate.getFullYear() === now.getFullYear();
  });

  const monthlyTotal = thisMonth.reduce((sum, d) => sum + d.amount, 0);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl text-gray-900 mb-2">Gestión de Donaciones</h1>
        <p className="text-gray-600">Visualiza y gestiona las donaciones recibidas</p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <Card className="border-2">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 bg-[#ff6b35] bg-opacity-10 rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-[#ff6b35]" />
              </div>
            </div>
            <div className="text-3xl text-gray-900 mb-1">S/ {stats.total.toLocaleString()}</div>
            <p className="text-sm text-gray-600">Total recaudado</p>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 bg-[#4ecdc4] bg-opacity-10 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-[#4ecdc4]" />
              </div>
            </div>
            <div className="text-3xl text-gray-900 mb-1">S/ {monthlyTotal.toLocaleString()}</div>
            <p className="text-sm text-gray-600">Este mes</p>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 bg-[#95e1d3] bg-opacity-30 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#4ecdc4]" />
              </div>
            </div>
            <div className="text-3xl text-gray-900 mb-1">S/ {stats.average}</div>
            <p className="text-sm text-gray-600">Donación promedio</p>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="text-3xl text-gray-900 mb-1">{stats.recurring}</div>
            <p className="text-sm text-gray-600">Donaciones recurrentes</p>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Chart Placeholder */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <h2 className="text-xl text-gray-900 mb-4">Donaciones por Mes</h2>
          <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
            <p className="text-gray-500">Gráfico de donaciones mensuales</p>
          </div>
        </CardContent>
      </Card>

      {/* Donations Table */}
      <Card>
        <CardContent className="p-0">
          <div className="p-6 border-b">
            <h2 className="text-xl text-gray-900">Historial de Donaciones</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left p-4 text-sm text-gray-600">Donante</th>
                  <th className="text-left p-4 text-sm text-gray-600">Email</th>
                  <th className="text-left p-4 text-sm text-gray-600">Monto</th>
                  <th className="text-left p-4 text-sm text-gray-600">Método</th>
                  <th className="text-left p-4 text-sm text-gray-600">Tipo</th>
                  <th className="text-left p-4 text-sm text-gray-600">Fecha</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {donations.map((donation) => (
                  <tr key={donation.id} className="hover:bg-gray-50">
                    <td className="p-4">
                      <div className="text-gray-900">{donation.donorName}</div>
                    </td>
                    <td className="p-4 text-gray-700">
                      {donation.donorEmail}
                    </td>
                    <td className="p-4">
                      <div className="text-gray-900">
                        S/ {donation.amount.toLocaleString()}
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge variant="outline">
                        {donation.method}
                      </Badge>
                    </td>
                    <td className="p-4">
                      {donation.type === 'recurring' ? (
                        <Badge className="bg-blue-100 text-blue-700">
                          Recurrente
                        </Badge>
                      ) : (
                        <Badge variant="outline">
                          Única vez
                        </Badge>
                      )}
                    </td>
                    <td className="p-4 text-gray-700">
                      {new Date(donation.date).toLocaleDateString('es-PE', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Top Donors */}
      <Card className="mt-6">
        <CardContent className="p-6">
          <h2 className="text-xl text-gray-900 mb-4">Principales Donantes</h2>
          <div className="space-y-3">
            {donations
              .sort((a, b) => b.amount - a.amount)
              .slice(0, 5)
              .map((donation, index) => (
                <div key={donation.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      index === 0 ? 'bg-yellow-100 text-yellow-700' :
                      index === 1 ? 'bg-gray-200 text-gray-700' :
                      index === 2 ? 'bg-orange-100 text-orange-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-gray-900">{donation.donorName}</div>
                      <div className="text-sm text-gray-600">{donation.donorEmail}</div>
                    </div>
                  </div>
                  <div className="text-xl text-gray-900">
                    S/ {donation.amount.toLocaleString()}
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
