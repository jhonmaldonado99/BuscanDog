import { useState } from "react";
import { Link } from "react-router-dom";
import { mockPets, Pet } from "../../data/pets";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Search, SlidersHorizontal } from "lucide-react";

export function CatalogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [sizeFilter, setSizeFilter] = useState<string>("all");
  const [ageFilter, setAgeFilter] = useState<string>("all");
  const [sexFilter, setSexFilter] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(true);

  const getAgeCategory = (age: number): string => {
    if (age <= 1) return "puppy";
    if (age <= 6) return "adult";
    return "senior";
  };

  const filteredPets = mockPets.filter((pet) => {
    const matchesSearch = pet.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "all" || pet.type === typeFilter;
    const matchesSize = sizeFilter === "all" || pet.size === sizeFilter;
    const matchesAge = ageFilter === "all" || getAgeCategory(pet.age) === ageFilter;
    const matchesSex = sexFilter === "all" || pet.sex === sexFilter;

    return matchesSearch && matchesType && matchesSize && matchesAge && matchesSex;
  });

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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#ff6b35] to-[#4ecdc4] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl mb-4">Catálogo de Mascotas</h1>
          <p className="text-xl opacity-90">
            Encuentra a tu compañero perfecto entre {mockPets.length} mascotas esperando un hogar
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-20">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl text-gray-900">Filtros</h2>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <SlidersHorizontal className="w-5 h-5" />
                </button>
              </div>

              {showFilters && (
                <div className="space-y-6">
                  {/* Search */}
                  <div>
                    <Label htmlFor="search">Buscar por nombre</Label>
                    <div className="relative mt-2">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="search"
                        placeholder="Ej: Max"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Type */}
                  <div>
                    <Label htmlFor="type">Tipo</Label>
                    <Select value={typeFilter} onValueChange={setTypeFilter}>
                      <SelectTrigger id="type" className="mt-2">
                        <SelectValue placeholder="Todos" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos</SelectItem>
                        <SelectItem value="dog">Perro</SelectItem>
                        <SelectItem value="cat">Gato</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Size */}
                  <div>
                    <Label htmlFor="size">Tamaño</Label>
                    <Select value={sizeFilter} onValueChange={setSizeFilter}>
                      <SelectTrigger id="size" className="mt-2">
                        <SelectValue placeholder="Todos" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos</SelectItem>
                        <SelectItem value="small">Pequeño</SelectItem>
                        <SelectItem value="medium">Mediano</SelectItem>
                        <SelectItem value="large">Grande</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Age */}
                  <div>
                    <Label htmlFor="age">Edad</Label>
                    <Select value={ageFilter} onValueChange={setAgeFilter}>
                      <SelectTrigger id="age" className="mt-2">
                        <SelectValue placeholder="Todos" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos</SelectItem>
                        <SelectItem value="puppy">Cachorro (0-1 años)</SelectItem>
                        <SelectItem value="adult">Adulto (2-6 años)</SelectItem>
                        <SelectItem value="senior">Senior (7+ años)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Sex */}
                  <div>
                    <Label htmlFor="sex">Sexo</Label>
                    <Select value={sexFilter} onValueChange={setSexFilter}>
                      <SelectTrigger id="sex" className="mt-2">
                        <SelectValue placeholder="Todos" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos</SelectItem>
                        <SelectItem value="male">Macho</SelectItem>
                        <SelectItem value="female">Hembra</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Reset Button */}
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      setSearchTerm("");
                      setTypeFilter("all");
                      setSizeFilter("all");
                      setAgeFilter("all");
                      setSexFilter("all");
                    }}
                  >
                    Limpiar filtros
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Pet Grid */}
          <div className="flex-1">
            <div className="mb-6">
              <p className="text-gray-600">
                Mostrando {filteredPets.length} {filteredPets.length === 1 ? 'mascota' : 'mascotas'}
              </p>
            </div>

            {filteredPets.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600 mb-4">No se encontraron mascotas con estos filtros</p>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setTypeFilter("all");
                    setSizeFilter("all");
                    setAgeFilter("all");
                    setSexFilter("all");
                  }}
                >
                  Limpiar filtros
                </Button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredPets.map((pet) => (
                  <Card key={pet.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <ImageWithFallback
                        src={pet.images[0]}
                        alt={pet.name}
                        className="w-full h-56 object-cover"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge className={getStatusColor(pet.status)}>
                          {getStatusLabel(pet.status)}
                        </Badge>
                      </div>
                      {pet.featured && (
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-[#ff6b35] text-white">Destacado</Badge>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-5">
                      <div className="mb-3">
                        <h3 className="text-xl text-gray-900 mb-1">{pet.name}</h3>
                        <p className="text-sm text-gray-600">
                          {pet.breed} • {pet.age} {pet.age === 1 ? 'año' : 'años'}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="outline" className="text-xs">
                          {pet.type === 'dog' ? '🐕 Perro' : '🐱 Gato'}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {pet.size === 'small' ? 'Pequeño' : pet.size === 'medium' ? 'Mediano' : 'Grande'}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {pet.sex === 'male' ? 'Macho' : 'Hembra'}
                        </Badge>
                      </div>

                      <Link to={`/mascotas/${pet.id}`}>
                        <Button className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] text-white">
                          Ver perfil
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
