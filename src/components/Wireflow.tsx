import React from 'react';
import { ArrowRight, Search, Grid3x3, Filter, Heart, User, Check, Plus, Upload, Save } from 'lucide-react';

export default function Wireflow() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl mb-4">BuscanDog - User Flow Completo</h1>
          <p className="text-gray-600">
            Flujos de navegación: Catálogo de Mascotas, Ver Perfil y Crear Perfil (Admin)
          </p>
        </div>

        {/* FLUJO 1: CATÁLOGO Y VER PERFIL */}
        <div className="mb-16">
          <div className="mb-6 bg-orange-100 border-l-4 border-orange-500 p-4">
            <h2 className="text-2xl mb-2">Flujo 1: Catálogo de Mascotas + Ver Perfil</h2>
            <p className="text-sm text-gray-700">Navegación del usuario desde el catálogo hasta ver el perfil detallado de una mascota</p>
          </div>
          
          <div className="overflow-x-auto pb-8">
            <div className="flex gap-8 min-w-max items-start">
              
              {/* STEP 1: Catálogo/Lista */}
              <div className="flex flex-col items-center gap-4">
                <div className="bg-white border-4 border-gray-800 rounded-lg p-6 w-[320px]">
                  <div className="text-center mb-4">
                    <div className="inline-block px-3 py-1 bg-gray-800 text-white rounded-full mb-3">
                      01
                    </div>
                    <h3 className="font-bold mb-2">Catálogo de Mascotas</h3>
                  </div>
                  
                  {/* Search + Sort */}
                  <div className="flex gap-2 mb-4">
                    <div className="flex-1 border-2 border-gray-400 rounded p-2 flex items-center gap-1">
                      <Search className="w-3 h-3" />
                      <span className="text-xs">Buscar</span>
                    </div>
                    <div className="border-2 border-gray-400 rounded p-2 text-xs">
                      Ordenar ▼
                    </div>
                  </div>
                  
                  {/* Filters */}
                  <div className="border-2 border-gray-600 rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Filter className="w-4 h-4" />
                      <span className="text-xs">Filtros</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="border border-gray-300 rounded p-1">□ Perros</div>
                      <div className="border border-gray-300 rounded p-1">□ Gatos</div>
                      <div className="border border-gray-300 rounded p-1">□ Cachorro</div>
                      <div className="border border-gray-300 rounded p-1">□ Adulto</div>
                      <div className="border border-gray-300 rounded p-1">□ Pequeño</div>
                      <div className="border border-gray-300 rounded p-1">□ Grande</div>
                    </div>
                  </div>
                  
                  {/* Results count */}
                  <div className="text-xs text-gray-500 mb-3">
                    Mostrando 24 mascotas
                  </div>
                  
                  {/* Grid of cards */}
                  <div className="grid grid-cols-2 gap-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="border-2 border-gray-600 rounded-lg p-2">
                        <div className="bg-gray-200 rounded h-20 mb-2 flex items-center justify-center">
                          <span className="text-xs">FOTO</span>
                        </div>
                        <div className="text-xs mb-1">Max</div>
                        <div className="text-xs text-gray-500">2 años · Mediano</div>
                        <div className="bg-green-100 border border-green-600 rounded px-1 py-0.5 text-xs inline-block mt-1">
                          Adoptable
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex flex-col items-center gap-1 mt-4">
                  <ArrowRight className="w-8 h-8 text-gray-800" />
                  <span className="text-xs bg-yellow-200 px-2 py-1 rounded text-center">
                    Click en<br/>Mascota
                  </span>
                </div>
              </div>

              {/* STEP 2: Detalle de Mascota (Ver Perfil) */}
              <div className="flex flex-col items-center gap-4">
                <div className="bg-white border-4 border-gray-800 rounded-lg p-6 w-[320px]">
                  <div className="text-center mb-4">
                    <div className="inline-block px-3 py-1 bg-gray-800 text-white rounded-full mb-3">
                      02
                    </div>
                    <h3 className="font-bold mb-2">Ver Perfil de Mascota</h3>
                  </div>
                  
                  {/* Breadcrumb */}
                  <div className="border border-gray-300 rounded p-2 mb-4 text-xs">
                    Inicio &gt; Catálogo &gt; Max
                  </div>
                  
                  {/* Main image */}
                  <div className="border-2 border-gray-600 rounded-lg h-40 mb-3 flex items-center justify-center bg-gray-100">
                    <span className="text-sm">IMAGEN PRINCIPAL</span>
                  </div>
                  
                  {/* Gallery thumbnails */}
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="border border-gray-400 rounded h-12 bg-gray-100"></div>
                    ))}
                  </div>
                  
                  {/* Info */}
                  <div className="mb-4">
                    <h4 className="text-lg mb-2">Max</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                      <div>Edad: <span className="font-bold">2 años</span></div>
                      <div>Tamaño: <span className="font-bold">Mediano</span></div>
                      <div>Raza: <span className="font-bold">Labrador</span></div>
                      <div>Sexo: <span className="font-bold">Macho</span></div>
                    </div>
                    <div className="bg-green-100 border-2 border-green-600 rounded p-2 text-center text-xs mb-3">
                      ✓ Disponible para Adopción
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="border border-gray-300 rounded p-3 mb-4">
                    <div className="text-xs mb-1">Descripción:</div>
                    <div className="text-xs text-gray-500 leading-tight">
                      Max es un perro cariñoso y juguetón. Le encanta correr y es muy...
                    </div>
                  </div>
                  
                  {/* Characteristics */}
                  <div className="mb-4">
                    <div className="text-xs mb-2">Características:</div>
                    <div className="flex flex-wrap gap-1">
                      <span className="bg-blue-100 border border-blue-400 text-xs px-2 py-1 rounded">Vacunado</span>
                      <span className="bg-blue-100 border border-blue-400 text-xs px-2 py-1 rounded">Sociable</span>
                      <span className="bg-blue-100 border border-blue-400 text-xs px-2 py-1 rounded">Activo</span>
                    </div>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="space-y-2">
                    <div className="bg-gray-800 text-white rounded-lg p-3 text-center">
                      <span className="text-sm">Iniciar Proceso de Adopción</span>
                    </div>
                    <div className="border-2 border-gray-600 rounded-lg p-3 text-center flex items-center justify-center gap-2">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">Guardar en Favoritos</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* FLUJO 2: CREAR PERFIL DE MASCOTA (ADMIN) */}
        <div className="mb-16">
          <div className="mb-6 bg-purple-100 border-l-4 border-purple-500 p-4">
            <h2 className="text-2xl mb-2">Flujo 2: Crear Perfil de Mascota (Panel Admin)</h2>
            <p className="text-sm text-gray-700">Proceso del administrador para registrar una nueva mascota en el sistema</p>
          </div>
          
          <div className="overflow-x-auto pb-8">
            <div className="flex gap-8 min-w-max items-start">
              
              {/* STEP 1: Panel Admin - Lista de Mascotas */}
              <div className="flex flex-col items-center gap-4">
                <div className="bg-white border-4 border-purple-600 rounded-lg p-6 w-[340px]">
                  <div className="text-center mb-4">
                    <div className="inline-block px-3 py-1 bg-purple-600 text-white rounded-full mb-3">
                      A1
                    </div>
                    <h3 className="font-bold mb-2">Panel Admin - Mascotas</h3>
                  </div>
                  
                  {/* Header with sidebar hint */}
                  <div className="flex gap-2 mb-4">
                    <div className="w-12 border-2 border-gray-400 rounded flex flex-col gap-1 p-1">
                      <div className="h-1 bg-gray-400 rounded"></div>
                      <div className="h-1 bg-gray-400 rounded"></div>
                      <div className="h-1 bg-gray-400 rounded"></div>
                    </div>
                    <div className="flex-1 border-2 border-gray-400 rounded p-2 flex items-center justify-between">
                      <span className="text-xs">Panel de Administración</span>
                      <User className="w-4 h-4" />
                    </div>
                  </div>
                  
                  {/* Title and create button */}
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm">Mascotas Registradas</h4>
                    <div className="bg-purple-600 text-white rounded-lg px-3 py-2 flex items-center gap-1">
                      <Plus className="w-4 h-4" />
                      <span className="text-xs">Nueva</span>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="border border-gray-300 rounded p-2">
                      <div className="text-xs text-gray-500">Total</div>
                      <div className="text-lg">48</div>
                    </div>
                    <div className="border border-gray-300 rounded p-2">
                      <div className="text-xs text-gray-500">Adoptables</div>
                      <div className="text-lg">32</div>
                    </div>
                    <div className="border border-gray-300 rounded p-2">
                      <div className="text-xs text-gray-500">Adoptados</div>
                      <div className="text-lg">16</div>
                    </div>
                  </div>
                  
                  {/* Search */}
                  <div className="border-2 border-gray-400 rounded p-2 mb-4 flex items-center gap-2">
                    <Search className="w-4 h-4" />
                    <span className="text-xs text-gray-400">Buscar por nombre, raza...</span>
                  </div>
                  
                  {/* Table */}
                  <div className="border-2 border-gray-600 rounded-lg overflow-hidden">
                    <div className="bg-gray-100 border-b-2 border-gray-600 p-2 grid grid-cols-4 gap-2 text-xs">
                      <span>Nombre</span>
                      <span>Tipo</span>
                      <span>Estado</span>
                      <span>Acciones</span>
                    </div>
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="border-b border-gray-300 p-2 grid grid-cols-4 gap-2 text-xs items-center">
                        <span>Max</span>
                        <span>Perro</span>
                        <span className="text-green-600">Adoptable</span>
                        <div className="flex gap-1">
                          <div className="w-5 h-5 border border-gray-400 rounded"></div>
                          <div className="w-5 h-5 border border-gray-400 rounded"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex flex-col items-center gap-1 mt-4">
                  <ArrowRight className="w-8 h-8 text-purple-600" />
                  <span className="text-xs bg-yellow-200 px-2 py-1 rounded text-center">
                    Click<br/>&quot;+ Nueva&quot;
                  </span>
                </div>
              </div>

              {/* STEP 2: Formulario Crear Mascota - Parte 1 */}
              <div className="flex flex-col items-center gap-4">
                <div className="bg-white border-4 border-purple-600 rounded-lg p-6 w-[360px]">
                  <div className="text-center mb-4">
                    <div className="inline-block px-3 py-1 bg-purple-600 text-white rounded-full mb-3">
                      A2
                    </div>
                    <h3 className="font-bold mb-2">Crear Perfil - Datos Básicos</h3>
                  </div>
                  
                  {/* Progress indicator */}
                  <div className="flex gap-2 mb-4">
                    <div className="flex-1 h-1 bg-purple-600 rounded"></div>
                    <div className="flex-1 h-1 bg-gray-200 rounded"></div>
                    <div className="flex-1 h-1 bg-gray-200 rounded"></div>
                  </div>
                  <div className="text-xs text-center text-gray-500 mb-4">Paso 1 de 3</div>
                  
                  {/* Form fields */}
                  <div className="space-y-3 mb-4">
                    <div>
                      <div className="text-xs mb-1">Nombre de la mascota *</div>
                      <div className="border-2 border-gray-400 rounded p-2 text-xs text-gray-400">
                        Ej: Max
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <div className="text-xs mb-1">Tipo *</div>
                        <div className="border-2 border-gray-400 rounded p-2 text-xs">
                          Perro ▼
                        </div>
                      </div>
                      <div>
                        <div className="text-xs mb-1">Sexo *</div>
                        <div className="border-2 border-gray-400 rounded p-2 text-xs">
                          Macho ▼
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <div className="text-xs mb-1">Edad *</div>
                        <div className="border-2 border-gray-400 rounded p-2 text-xs text-gray-400">
                          Ej: 2 años
                        </div>
                      </div>
                      <div>
                        <div className="text-xs mb-1">Tamaño *</div>
                        <div className="border-2 border-gray-400 rounded p-2 text-xs">
                          Mediano ▼
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-xs mb-1">Raza</div>
                      <div className="border-2 border-gray-400 rounded p-2 text-xs text-gray-400">
                        Ej: Labrador Retriever
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-xs mb-1">Color</div>
                      <div className="border-2 border-gray-400 rounded p-2 text-xs text-gray-400">
                        Ej: Dorado
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-xs mb-1">Peso (kg)</div>
                      <div className="border-2 border-gray-400 rounded p-2 text-xs text-gray-400">
                        Ej: 25
                      </div>
                    </div>
                  </div>
                  
                  {/* Navigation buttons */}
                  <div className="flex gap-2">
                    <div className="flex-1 border-2 border-gray-400 rounded-lg p-3 text-center">
                      <span className="text-sm">Cancelar</span>
                    </div>
                    <div className="flex-1 bg-purple-600 text-white rounded-lg p-3 text-center">
                      <span className="text-sm">Siguiente →</span>
                    </div>
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex flex-col items-center gap-1 mt-4">
                  <ArrowRight className="w-8 h-8 text-purple-600" />
                  <span className="text-xs bg-yellow-200 px-2 py-1 rounded text-center">
                    Completar<br/>y Siguiente
                  </span>
                </div>
              </div>

              {/* STEP 3: Formulario Crear Mascota - Parte 2 */}
              <div className="flex flex-col items-center gap-4">
                <div className="bg-white border-4 border-purple-600 rounded-lg p-6 w-[360px]">
                  <div className="text-center mb-4">
                    <div className="inline-block px-3 py-1 bg-purple-600 text-white rounded-full mb-3">
                      A3
                    </div>
                    <h3 className="font-bold mb-2">Crear Perfil - Descripción</h3>
                  </div>
                  
                  {/* Progress indicator */}
                  <div className="flex gap-2 mb-4">
                    <div className="flex-1 h-1 bg-purple-600 rounded"></div>
                    <div className="flex-1 h-1 bg-purple-600 rounded"></div>
                    <div className="flex-1 h-1 bg-gray-200 rounded"></div>
                  </div>
                  <div className="text-xs text-center text-gray-500 mb-4">Paso 2 de 3</div>
                  
                  {/* Form fields */}
                  <div className="space-y-3 mb-4">
                    <div>
                      <div className="text-xs mb-1">Descripción *</div>
                      <div className="border-2 border-gray-400 rounded p-2 h-24 text-xs text-gray-400">
                        Escribe una descripción detallada de la mascota, su personalidad, comportamiento...
                      </div>
                      <div className="text-xs text-gray-400 text-right mt-1">0 / 500</div>
                    </div>
                    
                    <div>
                      <div className="text-xs mb-1">Historia</div>
                      <div className="border-2 border-gray-400 rounded p-2 h-20 text-xs text-gray-400">
                        Cómo llegó al refugio, de dónde viene...
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-xs mb-2">Características</div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-gray-400 rounded flex items-center justify-center">
                            <Check className="w-3 h-3" />
                          </div>
                          <span className="text-xs">Vacunado</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-gray-400 rounded flex items-center justify-center">
                            <Check className="w-3 h-3" />
                          </div>
                          <span className="text-xs">Esterilizado</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-gray-400 rounded"></div>
                          <span className="text-xs">Necesita cuidados especiales</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-gray-400 rounded flex items-center justify-center">
                            <Check className="w-3 h-3" />
                          </div>
                          <span className="text-xs">Sociable con otros animales</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-gray-400 rounded flex items-center justify-center">
                            <Check className="w-3 h-3" />
                          </div>
                          <span className="text-xs">Bueno con niños</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Navigation buttons */}
                  <div className="flex gap-2">
                    <div className="flex-1 border-2 border-gray-400 rounded-lg p-3 text-center">
                      <span className="text-sm">← Anterior</span>
                    </div>
                    <div className="flex-1 bg-purple-600 text-white rounded-lg p-3 text-center">
                      <span className="text-sm">Siguiente →</span>
                    </div>
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex flex-col items-center gap-1 mt-4">
                  <ArrowRight className="w-8 h-8 text-purple-600" />
                  <span className="text-xs bg-yellow-200 px-2 py-1 rounded text-center">
                    Completar<br/>y Siguiente
                  </span>
                </div>
              </div>

              {/* STEP 4: Formulario Crear Mascota - Parte 3 (Fotos) */}
              <div className="flex flex-col items-center gap-4">
                <div className="bg-white border-4 border-purple-600 rounded-lg p-6 w-[360px]">
                  <div className="text-center mb-4">
                    <div className="inline-block px-3 py-1 bg-purple-600 text-white rounded-full mb-3">
                      A4
                    </div>
                    <h3 className="font-bold mb-2">Crear Perfil - Fotos</h3>
                  </div>
                  
                  {/* Progress indicator */}
                  <div className="flex gap-2 mb-4">
                    <div className="flex-1 h-1 bg-purple-600 rounded"></div>
                    <div className="flex-1 h-1 bg-purple-600 rounded"></div>
                    <div className="flex-1 h-1 bg-purple-600 rounded"></div>
                  </div>
                  <div className="text-xs text-center text-gray-500 mb-4">Paso 3 de 3</div>
                  
                  {/* Upload area */}
                  <div className="mb-4">
                    <div className="text-xs mb-2">Foto principal *</div>
                    <div className="border-2 border-dashed border-gray-400 rounded-lg p-8 flex flex-col items-center justify-center bg-gray-50">
                      <Upload className="w-8 h-8 text-gray-400 mb-2" />
                      <span className="text-xs text-gray-500 mb-1">Arrastra o haz click para subir</span>
                      <span className="text-xs text-gray-400">JPG, PNG (máx 5MB)</span>
                    </div>
                  </div>
                  
                  {/* Gallery upload */}
                  <div className="mb-4">
                    <div className="text-xs mb-2">Galería de fotos (hasta 6)</div>
                    <div className="grid grid-cols-3 gap-2">
                      {/* First photo uploaded */}
                      <div className="relative border-2 border-purple-600 rounded-lg aspect-square bg-gray-200 flex items-center justify-center">
                        <span className="text-xs">FOTO 1</span>
                        <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs">
                          ×
                        </div>
                      </div>
                      {/* Empty slots */}
                      {[2, 3, 4, 5].map((i) => (
                        <div key={i} className="border-2 border-dashed border-gray-300 rounded-lg aspect-square flex items-center justify-center">
                          <Plus className="w-6 h-6 text-gray-300" />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Estado field */}
                  <div className="mb-4">
                    <div className="text-xs mb-2">Estado de la mascota *</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-gray-400 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                        </div>
                        <span className="text-xs">Disponible para adopción</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-gray-400 rounded-full"></div>
                        <span className="text-xs">En proceso de adopción</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-gray-400 rounded-full"></div>
                        <span className="text-xs">Adoptado</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Navigation buttons */}
                  <div className="flex gap-2">
                    <div className="flex-1 border-2 border-gray-400 rounded-lg p-3 text-center">
                      <span className="text-sm">← Anterior</span>
                    </div>
                    <div className="flex-1 bg-purple-600 text-white rounded-lg p-3 text-center flex items-center justify-center gap-2">
                      <Save className="w-4 h-4" />
                      <span className="text-sm">Guardar</span>
                    </div>
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex flex-col items-center gap-1 mt-4">
                  <ArrowRight className="w-8 h-8 text-purple-600" />
                  <span className="text-xs bg-yellow-200 px-2 py-1 rounded text-center">
                    Click<br/>&quot;Guardar&quot;
                  </span>
                </div>
              </div>

              {/* STEP 5: Confirmación de creación */}
              <div className="flex flex-col items-center gap-4">
                <div className="bg-white border-4 border-green-600 rounded-lg p-6 w-[320px]">
                  <div className="text-center mb-4">
                    <div className="inline-block px-3 py-1 bg-green-600 text-white rounded-full mb-3">
                      A5
                    </div>
                    <h3 className="font-bold mb-2">Mascota Creada</h3>
                  </div>
                  
                  {/* Success icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 bg-green-100 border-4 border-green-600 rounded-full flex items-center justify-center">
                      <Check className="w-10 h-10 text-green-600" />
                    </div>
                  </div>
                  
                  {/* Message */}
                  <div className="text-center mb-4">
                    <h4 className="text-lg mb-2">¡Perfil Creado Exitosamente!</h4>
                    <p className="text-xs text-gray-600 mb-3">
                      La mascota <span className="font-bold">Max</span> ha sido registrada en el sistema.
                    </p>
                  </div>
                  
                  {/* Preview card */}
                  <div className="border-2 border-green-600 rounded-lg p-3 mb-4">
                    <div className="bg-gray-200 rounded h-32 mb-2 flex items-center justify-center">
                      <span className="text-xs">FOTO PRINCIPAL</span>
                    </div>
                    <div className="text-sm mb-1">Max</div>
                    <div className="text-xs text-gray-500 mb-2">Perro · 2 años · Mediano</div>
                    <div className="bg-green-100 border border-green-600 rounded px-2 py-1 text-xs inline-block">
                      Disponible para adopción
                    </div>
                  </div>
                  
                  {/* Info */}
                  <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-3 mb-4 text-xs">
                    <div className="mb-1">La mascota ahora es visible en:</div>
                    <ul className="text-gray-600 space-y-1 ml-3">
                      <li>✓ Catálogo público</li>
                      <li>✓ Lista de mascotas admin</li>
                      <li>✓ Búsquedas y filtros</li>
                    </ul>
                  </div>
                  
                  {/* Actions */}
                  <div className="space-y-2">
                    <div className="bg-green-600 text-white rounded-lg p-3 text-center">
                      <span className="text-sm">Ver Perfil Público</span>
                    </div>
                    <div className="border-2 border-gray-600 rounded-lg p-3 text-center flex items-center justify-center gap-2">
                      <Plus className="w-4 h-4" />
                      <span className="text-sm">Crear Otra Mascota</span>
                    </div>
                    <div className="border-2 border-gray-600 rounded-lg p-3 text-center">
                      <span className="text-sm">Volver al Panel</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* FLUJO 3: PROCESO COMPLETO DE ADOPCIÓN */}
        <div className="mb-16">
          <div className="mb-6 bg-teal-100 border-l-4 border-teal-500 p-4">
            <h2 className="text-2xl mb-2">Flujo 3: Proceso Completo de Adopción</h2>
            <p className="text-sm text-gray-700">Recorrido completo del usuario desde el inicio hasta completar una solicitud de adopción</p>
          </div>
          
          <div className="overflow-x-auto pb-8">
            <div className="flex gap-8 min-w-max items-start">
              
              {/* STEP 1: Pantalla de Inicio */}
              <div className="flex flex-col items-center gap-4">
                <div className="bg-white border-4 border-gray-800 rounded-lg p-6 w-[280px]">
                  <div className="text-center mb-4">
                    <div className="inline-block px-3 py-1 bg-gray-800 text-white rounded-full mb-3">
                      01
                    </div>
                    <h3 className="font-bold mb-2">Página de Inicio</h3>
                  </div>
                  
                  {/* Header placeholder */}
                  <div className="border-2 border-gray-400 rounded h-12 mb-4 flex items-center justify-center">
                    <span className="text-xs text-gray-500">LOGO + NAV</span>
                  </div>
                  
                  {/* Hero section */}
                  <div className="border-2 border-gray-400 rounded h-32 mb-4 flex items-center justify-center">
                    <span className="text-xs text-gray-500">HERO IMAGE</span>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="bg-gray-800 text-white rounded-lg p-3 text-center mb-4">
                    <span className="text-sm">Adopta Ahora</span>
                  </div>
                  
                  {/* Categories */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="border-2 border-gray-400 rounded p-2 text-center">
                      <div className="w-6 h-6 border-2 border-gray-400 rounded-full mx-auto mb-1"></div>
                      <span className="text-xs">Perros</span>
                    </div>
                    <div className="border-2 border-gray-400 rounded p-2 text-center">
                      <div className="w-6 h-6 border-2 border-gray-400 rounded-full mx-auto mb-1"></div>
                      <span className="text-xs">Gatos</span>
                    </div>
                    <div className="border-2 border-gray-400 rounded p-2 text-center">
                      <div className="w-6 h-6 border-2 border-gray-400 rounded-full mx-auto mb-1"></div>
                      <span className="text-xs">Otros</span>
                    </div>
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex flex-col items-center gap-1 mt-4">
                  <ArrowRight className="w-8 h-8 text-gray-800" />
                  <span className="text-xs bg-yellow-200 px-2 py-1 rounded">
                    Click &quot;Adopta<br/>Ahora&quot;
                  </span>
                </div>
              </div>

              {/* STEP 2: Catálogo con Filtros */}
              <div className="flex flex-col items-center gap-4">
                <div className="bg-white border-4 border-gray-800 rounded-lg p-6 w-[320px]">
                  <div className="text-center mb-4">
                    <div className="inline-block px-3 py-1 bg-gray-800 text-white rounded-full mb-3">
                      02
                    </div>
                    <h3 className="font-bold mb-2">Catálogo de Mascotas</h3>
                  </div>
                  
                  {/* Breadcrumb */}
                  <div className="border border-gray-300 rounded p-2 mb-4 text-xs">
                    Inicio &gt; Catálogo
                  </div>
                  
                  {/* Search + Sort */}
                  <div className="flex gap-2 mb-4">
                    <div className="flex-1 border-2 border-gray-400 rounded p-2 flex items-center gap-1">
                      <Search className="w-3 h-3" />
                      <span className="text-xs">Buscar</span>
                    </div>
                    <div className="border-2 border-gray-400 rounded p-2 text-xs">
                      Ordenar ▼
                    </div>
                  </div>
                  
                  {/* Filters */}
                  <div className="border-2 border-gray-600 rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Filter className="w-4 h-4" />
                      <span className="text-xs">Filtros</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="border border-gray-300 rounded p-1">□ Perros</div>
                      <div className="border border-gray-300 rounded p-1">□ Gatos</div>
                      <div className="border border-gray-300 rounded p-1">□ Cachorro</div>
                      <div className="border border-gray-300 rounded p-1">□ Adulto</div>
                    </div>
                  </div>
                  
                  {/* Results count */}
                  <div className="text-xs text-gray-500 mb-3">
                    Mostrando 24 mascotas
                  </div>
                  
                  {/* Grid of cards */}
                  <div className="grid grid-cols-2 gap-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="border-2 border-gray-600 rounded-lg p-2">
                        <div className="bg-gray-200 rounded h-20 mb-2 flex items-center justify-center">
                          <span className="text-xs">FOTO</span>
                        </div>
                        <div className="text-xs mb-1">Max</div>
                        <div className="text-xs text-gray-500">2 años · Mediano</div>
                        <div className="bg-green-100 border border-green-600 rounded px-1 py-0.5 text-xs inline-block mt-1">
                          Adoptable
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex flex-col items-center gap-1 mt-4">
                  <ArrowRight className="w-8 h-8 text-gray-800" />
                  <span className="text-xs bg-yellow-200 px-2 py-1 rounded text-center">
                    Seleccionar<br/>Mascota
                  </span>
                </div>
              </div>

              {/* STEP 3: Detalle de Mascota */}
              <div className="flex flex-col items-center gap-4">
                <div className="bg-white border-4 border-gray-800 rounded-lg p-6 w-[320px]">
                  <div className="text-center mb-4">
                    <div className="inline-block px-3 py-1 bg-gray-800 text-white rounded-full mb-3">
                      03
                    </div>
                    <h3 className="font-bold mb-2">Detalle de Mascota</h3>
                  </div>
                  
                  {/* Breadcrumb */}
                  <div className="border border-gray-300 rounded p-2 mb-4 text-xs">
                    Inicio &gt; Catálogo &gt; Max
                  </div>
                  
                  {/* Main image */}
                  <div className="border-2 border-gray-600 rounded-lg h-40 mb-3 flex items-center justify-center bg-gray-100">
                    <span className="text-sm">IMAGEN PRINCIPAL</span>
                  </div>
                  
                  {/* Gallery thumbnails */}
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="border border-gray-400 rounded h-12 bg-gray-100"></div>
                    ))}
                  </div>
                  
                  {/* Info */}
                  <div className="mb-4">
                    <h4 className="text-lg mb-2">Max</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                      <div>Edad: <span className="font-bold">2 años</span></div>
                      <div>Tamaño: <span className="font-bold">Mediano</span></div>
                      <div>Raza: <span className="font-bold">Labrador</span></div>
                      <div>Sexo: <span className="font-bold">Macho</span></div>
                    </div>
                    <div className="bg-green-100 border-2 border-green-600 rounded p-2 text-center text-xs mb-3">
                      ✓ Disponible para Adopción
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="border border-gray-300 rounded p-3 mb-4">
                    <div className="text-xs mb-1">Descripción:</div>
                    <div className="text-xs text-gray-500 leading-tight">
                      Max es un perro cariñoso y juguetón. Le encanta correr y es muy...
                    </div>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="space-y-2">
                    <div className="bg-gray-800 text-white rounded-lg p-3 text-center">
                      <span className="text-sm">Iniciar Proceso de Adopción</span>
                    </div>
                    <div className="border-2 border-gray-600 rounded-lg p-3 text-center flex items-center justify-center gap-2">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">Guardar en Favoritos</span>
                    </div>
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex flex-col items-center gap-1 mt-4">
                  <ArrowRight className="w-8 h-8 text-gray-800" />
                  <span className="text-xs bg-yellow-200 px-2 py-1 rounded">
                    Click &quot;Iniciar<br/>Adopción&quot;
                  </span>
                </div>
              </div>

              {/* STEP 4: Modal Login/Registro */}
              <div className="flex flex-col items-center gap-4">
                <div className="bg-white border-4 border-blue-600 rounded-lg p-6 w-[300px]">
                  <div className="text-center mb-4">
                    <div className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full mb-3">
                      04
                    </div>
                    <h3 className="font-bold mb-2">Login / Registro</h3>
                    <p className="text-xs text-gray-500">Modal o pantalla</p>
                  </div>
                  
                  {/* Close button */}
                  <div className="text-right mb-3">
                    <span className="text-xl">×</span>
                  </div>
                  
                  {/* Title */}
                  <div className="text-center mb-4">
                    <h4 className="text-sm mb-1">Crear cuenta para continuar</h4>
                    <p className="text-xs text-gray-500">o inicia sesión si ya tienes cuenta</p>
                  </div>
                  
                  {/* Tabs */}
                  <div className="flex gap-2 mb-4 border-b-2 border-gray-300">
                    <div className="flex-1 text-center pb-2 border-b-4 border-gray-800">
                      <span className="text-xs">Registro</span>
                    </div>
                    <div className="flex-1 text-center pb-2">
                      <span className="text-xs text-gray-400">Login</span>
                    </div>
                  </div>
                  
                  {/* Form fields */}
                  <div className="space-y-3 mb-4">
                    <div>
                      <div className="text-xs mb-1">Nombre completo</div>
                      <div className="border-2 border-gray-400 rounded p-2 text-xs text-gray-400">
                        Tu nombre
                      </div>
                    </div>
                    <div>
                      <div className="text-xs mb-1">Email</div>
                      <div className="border-2 border-gray-400 rounded p-2 text-xs text-gray-400">
                        email@ejemplo.com
                      </div>
                    </div>
                    <div>
                      <div className="text-xs mb-1">Teléfono</div>
                      <div className="border-2 border-gray-400 rounded p-2 text-xs text-gray-400">
                        +34 600 000 000
                      </div>
                    </div>
                    <div>
                      <div className="text-xs mb-1">Contraseña</div>
                      <div className="border-2 border-gray-400 rounded p-2 text-xs text-gray-400">
                        ••••••••
                      </div>
                    </div>
                  </div>
                  
                  {/* Terms */}
                  <div className="flex items-start gap-2 mb-4">
                    <div className="w-4 h-4 border-2 border-gray-400 rounded mt-0.5">□</div>
                    <span className="text-xs text-gray-600">
                      Acepto términos y condiciones
                    </span>
                  </div>
                  
                  {/* Submit button */}
                  <div className="bg-gray-800 text-white rounded-lg p-3 text-center">
                    <span className="text-sm">Crear Cuenta y Continuar</span>
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex flex-col items-center gap-1 mt-4">
                  <ArrowRight className="w-8 h-8 text-gray-800" />
                  <span className="text-xs bg-yellow-200 px-2 py-1 rounded">
                    Enviar<br/>Formulario
                  </span>
                </div>
              </div>

              {/* STEP 5: Formulario de Adopción */}
              <div className="flex flex-col items-center gap-4">
                <div className="bg-white border-4 border-gray-800 rounded-lg p-6 w-[340px]">
                  <div className="text-center mb-4">
                    <div className="inline-block px-3 py-1 bg-gray-800 text-white rounded-full mb-3">
                      05
                    </div>
                    <h3 className="font-bold mb-2">Formulario de Adopción</h3>
                  </div>
                  
                  {/* Pet info */}
                  <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-3 mb-4">
                    <div className="text-xs mb-1">Solicitando adopción de:</div>
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-12 bg-gray-200 rounded"></div>
                      <div>
                        <div className="text-sm">Max</div>
                        <div className="text-xs text-gray-500">Perro · 2 años</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Form fields */}
                  <div className="space-y-3 mb-4">
                    <div>
                      <div className="text-xs mb-1">¿Por qué quieres adoptar a Max? *</div>
                      <div className="border-2 border-gray-400 rounded p-2 h-20 text-xs text-gray-400">
                        Escribe tu motivación...
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-xs mb-1">Tipo de vivienda *</div>
                      <div className="border-2 border-gray-400 rounded p-2 text-xs">
                        Casa con jardín ▼
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <div className="text-xs mb-1">¿Tienes otras mascotas?</div>
                        <div className="border-2 border-gray-400 rounded p-2 text-xs">
                          No ▼
                        </div>
                      </div>
                      <div>
                        <div className="text-xs mb-1">¿Niños en casa?</div>
                        <div className="border-2 border-gray-400 rounded p-2 text-xs">
                          Sí ▼
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-xs mb-1">Experiencia con mascotas</div>
                      <div className="border-2 border-gray-400 rounded p-2 h-16 text-xs text-gray-400">
                        Describe tu experiencia previa...
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-xs mb-1">¿Dispones de tiempo para cuidarlo? *</div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-gray-400 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                          </div>
                          <span className="text-xs">Sí, tiempo completo</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-gray-400 rounded-full"></div>
                          <span className="text-xs">Trabajo medio tiempo</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-gray-400 rounded-full"></div>
                          <span className="text-xs">Trabajo completo, pero tengo ayuda</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Terms */}
                  <div className="flex items-start gap-2 mb-4">
                    <div className="w-4 h-4 border-2 border-gray-400 rounded mt-0.5 flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-xs text-gray-600">
                      Acepto las condiciones de adopción y me comprometo al cuidado de la mascota
                    </span>
                  </div>
                  
                  {/* Submit button */}
                  <div className="bg-gray-800 text-white rounded-lg p-3 text-center">
                    <span className="text-sm">Enviar Solicitud de Adopción</span>
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex flex-col items-center gap-1 mt-4">
                  <ArrowRight className="w-8 h-8 text-gray-800" />
                  <span className="text-xs bg-yellow-200 px-2 py-1 rounded">
                    Enviar<br/>Solicitud
                  </span>
                </div>
              </div>

              {/* STEP 6: Confirmación */}
              <div className="flex flex-col items-center gap-4">
                <div className="bg-white border-4 border-green-600 rounded-lg p-6 w-[280px]">
                  <div className="text-center mb-4">
                    <div className="inline-block px-3 py-1 bg-green-600 text-white rounded-full mb-3">
                      06
                    </div>
                    <h3 className="font-bold mb-2">¡Solicitud Enviada!</h3>
                  </div>
                  
                  {/* Success icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 bg-green-100 border-4 border-green-600 rounded-full flex items-center justify-center">
                      <Check className="w-10 h-10 text-green-600" />
                    </div>
                  </div>
                  
                  {/* Message */}
                  <div className="text-center mb-4">
                    <h4 className="text-lg mb-2">¡Solicitud Recibida!</h4>
                    <p className="text-xs text-gray-600 mb-3">
                      Tu solicitud de adopción para <span className="font-bold">Max</span> ha sido recibida.
                    </p>
                    <p className="text-xs text-gray-600">
                      Te contactaremos pronto al email:<br/>
                      <span className="font-bold">email@ejemplo.com</span>
                    </p>
                  </div>
                  
                  {/* Info box */}
                  <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-3 mb-4">
                    <div className="text-xs mb-2">Próximos pasos:</div>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>✓ Revisión (24-48h)</li>
                      <li>✓ Entrevista telefónica</li>
                      <li>✓ Visita al refugio</li>
                      <li>✓ Adopción final</li>
                    </ul>
                  </div>
                  
                  {/* Actions */}
                  <div className="space-y-2">
                    <div className="bg-gray-800 text-white rounded-lg p-3 text-center">
                      <span className="text-sm">Ver Mis Solicitudes</span>
                    </div>
                    <div className="border-2 border-gray-600 rounded-lg p-3 text-center">
                      <span className="text-sm">Volver al Catálogo</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-12 bg-white border-2 border-gray-800 rounded-lg p-6">
          <h3 className="font-bold mb-4">Leyenda del User Flow</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 border-4 border-gray-800 rounded"></div>
              <span>Pantalla usuario</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 border-4 border-purple-600 rounded"></div>
              <span>Pantalla admin</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 border-4 border-blue-600 rounded"></div>
              <span>Modal/Popup</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 border-4 border-green-600 rounded"></div>
              <span>Confirmación/Éxito</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="w-6 h-6" />
              <span>Flujo de navegación</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-yellow-200 px-2 py-1 rounded text-xs">Etiqueta</div>
              <span>Acción del usuario</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-orange-100 border-l-4 border-orange-500 w-6 h-6"></div>
              <span>Flujo 1: Catálogo</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-purple-100 border-l-4 border-purple-500 w-6 h-6"></div>
              <span>Flujo 2: Admin</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-teal-100 border-l-4 border-teal-500 w-6 h-6"></div>
              <span>Flujo 3: Adopción</span>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="mt-8 bg-gray-100 border-l-4 border-blue-500 p-6">
          <h3 className="font-bold mb-3">Notas de diseño:</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• <strong>Flujo 1 - Catálogo y Ver Perfil:</strong> Navegación principal del usuario para buscar y explorar mascotas disponibles con filtros avanzados</li>
            <li>• <strong>Flujo 2 - Crear Perfil (Admin):</strong> Proceso administrativo dividido en 3 pasos (Datos básicos, Descripción, Fotos) para facilitar el registro de mascotas</li>
            <li>• <strong>Flujo 3 - Proceso de Adopción:</strong> Recorrido completo desde el inicio hasta enviar una solicitud de adopción, incluyendo registro de usuario y formulario detallado</li>
            <li>• <strong>Validación:</strong> Los campos marcados con * son obligatorios en todos los formularios</li>
            <li>• <strong>Progreso visual:</strong> Barras de progreso indican al usuario/admin en qué paso se encuentra</li>
            <li>• <strong>Navegación:</strong> Botones de anterior/siguiente permiten revisar y corregir información antes de enviar</li>
            <li>• <strong>Confirmación:</strong> Al finalizar cualquier proceso, se muestra un resumen y opciones para continuar</li>
            <li>• <strong>Responsive:</strong> Este wireflow representa versión desktop; móvil tendría layouts verticales adaptados</li>
            <li>• <strong>Low-fidelity:</strong> Los wireframes usan formas simples para enfocarse en estructura, flujo y funcionalidad sin distracciones visuales</li>
          </ul>
        </div>
      </div>
    </div>
  );
}