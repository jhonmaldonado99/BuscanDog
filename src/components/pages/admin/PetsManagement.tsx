import { useState } from "react";
import { mockPets, Pet } from "../../../data/pets";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../ui/dialog";
import { Badge } from "../../ui/badge";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { Plus, Edit, Trash2, Check } from "lucide-react";
import { Switch } from "../../ui/switch";

export function PetsManagement() {
  const [pets, setPets] = useState(mockPets);
  const [showDialog, setShowDialog] = useState(false);
  const [editingPet, setEditingPet] = useState<Pet | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    type: "dog" as "dog" | "cat",
    age: 0,
    size: "medium" as "small" | "medium" | "large",
    sex: "male" as "male" | "female",
    breed: "",
    status: "available" as Pet['status'],
    story: "",
    vaccinated: false,
    vaccines: [] as string[],
    temperament: [] as string[],
    canSponsor: false
  });

  const handleCreateNew = () => {
    setEditingPet(null);
    setFormData({
      name: "",
      type: "dog",
      age: 0,
      size: "medium",
      sex: "male",
      breed: "",
      status: "available",
      story: "",
      vaccinated: false,
      vaccines: [],
      temperament: [],
      canSponsor: false
    });
    setShowDialog(true);
  };

  const handleEdit = (pet: Pet) => {
    setEditingPet(pet);
    setFormData({
      name: pet.name,
      type: pet.type,
      age: pet.age,
      size: pet.size,
      sex: pet.sex,
      breed: pet.breed,
      status: pet.status,
      story: pet.story,
      vaccinated: pet.vaccinated,
      vaccines: pet.vaccines,
      temperament: pet.temperament,
      canSponsor: pet.canSponsor
    });
    setShowDialog(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('¿Estás seguro de eliminar esta mascota?')) {
      setPets(pets.filter(p => p.id !== id));
    }
  };

  const handleMarkAdopted = (id: string) => {
    setPets(pets.map(p => p.id === id ? { ...p, status: 'adopted' as const } : p));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingPet) {
      setPets(pets.map(p => p.id === editingPet.id ? {
        ...editingPet,
        ...formData
      } : p));
    } else {
      const newPet: Pet = {
        id: String(Date.now()),
        images: [
          'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXJ8ZW58MXx8fHwxNzYzMjA2ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080'
        ],
        featured: false,
        ...formData
      };
      setPets([newPet, ...pets]);
    }
    
    setShowDialog(false);
  };

  const getStatusColor = (status: Pet['status']) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-700';
      case 'in-treatment':
        return 'bg-yellow-100 text-yellow-700';
      case 'adopted':
        return 'bg-gray-100 text-gray-700';
      case 'sponsored':
        return 'bg-blue-100 text-blue-700';
    }
  };

  const getStatusLabel = (status: Pet['status']) => {
    switch (status) {
      case 'available':
        return 'Disponible';
      case 'in-treatment':
        return 'En tratamiento';
      case 'adopted':
        return 'Adoptado';
      case 'sponsored':
        return 'Apadrinado';
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl text-gray-900 mb-2">Mascotas Registradas</h1>
          <p className="text-gray-600">Gestiona el catálogo de mascotas del albergue</p>
        </div>
        <Button onClick={handleCreateNew} className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white">
          <Plus className="w-4 h-4 mr-2" />
          Crear Nueva Mascota
        </Button>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl text-gray-900">{pets.length}</div>
            <p className="text-sm text-gray-600">Total mascotas</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl text-green-600">{pets.filter(p => p.status === 'available').length}</div>
            <p className="text-sm text-gray-600">Disponibles</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl text-gray-600">{pets.filter(p => p.status === 'adopted').length}</div>
            <p className="text-sm text-gray-600">Adoptadas</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl text-yellow-600">{pets.filter(p => p.status === 'in-treatment').length}</div>
            <p className="text-sm text-gray-600">En tratamiento</p>
          </CardContent>
        </Card>
      </div>

      {/* Pets Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left p-4 text-sm text-gray-600">Mascota</th>
                  <th className="text-left p-4 text-sm text-gray-600">Tipo</th>
                  <th className="text-left p-4 text-sm text-gray-600">Edad</th>
                  <th className="text-left p-4 text-sm text-gray-600">Estado</th>
                  <th className="text-left p-4 text-sm text-gray-600">Apadrinamiento</th>
                  <th className="text-right p-4 text-sm text-gray-600">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {pets.map((pet) => (
                  <tr key={pet.id} className="hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <ImageWithFallback
                          src={pet.images[0]}
                          alt={pet.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <div className="text-gray-900">{pet.name}</div>
                          <div className="text-sm text-gray-600">{pet.breed}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge variant="outline">
                        {pet.type === 'dog' ? 'Perro' : 'Gato'}
                      </Badge>
                    </td>
                    <td className="p-4 text-gray-700">
                      {pet.age} {pet.age === 1 ? 'año' : 'años'}
                    </td>
                    <td className="p-4">
                      <Badge className={getStatusColor(pet.status)}>
                        {getStatusLabel(pet.status)}
                      </Badge>
                    </td>
                    <td className="p-4">
                      {pet.canSponsor ? (
                        <Badge className="bg-blue-100 text-blue-700">Activo</Badge>
                      ) : (
                        <span className="text-sm text-gray-500">No</span>
                      )}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEdit(pet)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        {pet.status === 'available' && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleMarkAdopted(pet.id)}
                          >
                            <Check className="w-4 h-4" />
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(pet.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Create/Edit Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingPet ? 'Editar Mascota' : 'Crear Nueva Mascota'}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Nombre *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="breed">Raza *</Label>
                <Input
                  id="breed"
                  required
                  value={formData.breed}
                  onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="type">Tipo *</Label>
                <Select
                  value={formData.type}
                  onValueChange={(value: "dog" | "cat") => setFormData({ ...formData, type: value })}
                >
                  <SelectTrigger id="type" className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dog">Perro</SelectItem>
                    <SelectItem value="cat">Gato</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="age">Edad (años) *</Label>
                <Input
                  id="age"
                  type="number"
                  min="0"
                  required
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) })}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="size">Tamaño *</Label>
                <Select
                  value={formData.size}
                  onValueChange={(value: "small" | "medium" | "large") => setFormData({ ...formData, size: value })}
                >
                  <SelectTrigger id="size" className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Pequeño</SelectItem>
                    <SelectItem value="medium">Mediano</SelectItem>
                    <SelectItem value="large">Grande</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="sex">Sexo *</Label>
                <Select
                  value={formData.sex}
                  onValueChange={(value: "male" | "female") => setFormData({ ...formData, sex: value })}
                >
                  <SelectTrigger id="sex" className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Macho</SelectItem>
                    <SelectItem value="female">Hembra</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="status">Estado *</Label>
                <Select
                  value={formData.status}
                  onValueChange={(value: Pet['status']) => setFormData({ ...formData, status: value })}
                >
                  <SelectTrigger id="status" className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="available">Disponible</SelectItem>
                    <SelectItem value="in-treatment">En tratamiento</SelectItem>
                    <SelectItem value="adopted">Adoptado</SelectItem>
                    <SelectItem value="sponsored">Apadrinado</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <Switch
                  id="canSponsor"
                  checked={formData.canSponsor}
                  onCheckedChange={(checked) => setFormData({ ...formData, canSponsor: checked })}
                />
                <Label htmlFor="canSponsor">Activar apadrinamiento</Label>
              </div>
            </div>

            <div>
              <Label htmlFor="story">Historia *</Label>
              <Textarea
                id="story"
                required
                rows={4}
                value={formData.story}
                onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                className="mt-2"
              />
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-2">
                Nota: Las imágenes y videos se pueden subir después de crear la mascota
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                type="submit"
                className="flex-1 bg-[#ff6b35] hover:bg-[#e55a2b] text-white"
              >
                {editingPet ? 'Guardar Cambios' : 'Crear Mascota'}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowDialog(false)}
              >
                Cancelar
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
