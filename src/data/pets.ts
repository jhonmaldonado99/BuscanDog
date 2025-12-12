export interface Pet {
  id: string;
  name: string;
  type: 'dog' | 'cat';
  age: number;
  size: 'small' | 'medium' | 'large';
  sex: 'male' | 'female';
  breed: string;
  status: 'available' | 'in-treatment' | 'adopted' | 'sponsored';
  story: string;
  images: string[];
  video?: string;
  vaccinated: boolean;
  vaccines: string[];
  temperament: string[];
  canSponsor: boolean;
  featured?: boolean;
}

export const mockPets: Pet[] = [
  {
    id: '1',
    name: 'Max',
    type: 'dog',
    age: 3,
    size: 'large',
    sex: 'male',
    breed: 'Golden Retriever',
    status: 'available',
    story: 'Max fue rescatado de la calle hace 6 meses. Es un perro muy cariñoso y le encanta jugar con niños. Necesita una familia activa que pueda darle el ejercicio que necesita.',
    images: [
      'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXJ8ZW58MXx8fHwxNzYzMjA2ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1641760884883-4e3daa581442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMHNoZWx0ZXJ8ZW58MXx8fHwxNzYzMjY1MzA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBhbmQlMjBjYXQlMjB0b2dldGhlcnxlbnwxfHx8fDE3NjMyNjUzMDh8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    vaccinated: true,
    vaccines: ['Rabia', 'Parvovirus', 'Moquillo'],
    temperament: ['Juguetón', 'Cariñoso', 'Activo'],
    canSponsor: false,
    featured: true
  },
  {
    id: '2',
    name: 'Luna',
    type: 'cat',
    age: 2,
    size: 'small',
    sex: 'female',
    breed: 'Gato Naranja',
    status: 'available',
    story: 'Luna es una gatita muy tranquila y cariñosa. Fue abandonada cuando era cachorra y ahora busca un hogar donde pueda sentirse segura y amada.',
    images: [
      'https://images.unsplash.com/photo-1593483316242-efb5420596ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjBjYXR8ZW58MXx8fHwxNzYzMTUwNjY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1759568572636-4440ea8f2521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY2F0JTIwYWRvcHRpb258ZW58MXx8fHwxNzYzMTgzNjMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1621854065840-8a83d8a97009?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXR0ZW4lMjBwbGF5ZnVsfGVufDF8fHx8MTc2MzI2NTMxMHww&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    vaccinated: true,
    vaccines: ['Triple Felina', 'Rabia'],
    temperament: ['Tranquila', 'Independiente', 'Cariñosa'],
    canSponsor: false,
    featured: true
  },
  {
    id: '3',
    name: 'Rocky',
    type: 'dog',
    age: 5,
    size: 'medium',
    sex: 'male',
    breed: 'Mestizo',
    status: 'in-treatment',
    story: 'Rocky está recuperándose de una lesión en su pata. Es muy valiente y necesita apadrinamiento para cubrir sus gastos médicos.',
    images: [
      'https://images.unsplash.com/photo-1562464980-6f182d4730aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGRvZyUyMGN1dGV8ZW58MXx8fHwxNzYzMTk5MDg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1641760884883-4e3daa581442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMHNoZWx0ZXJ8ZW58MXx8fHwxNzYzMjY1MzA3fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    vaccinated: true,
    vaccines: ['Rabia', 'Parvovirus'],
    temperament: ['Valiente', 'Leal', 'Protector'],
    canSponsor: true,
    featured: false
  },
  {
    id: '4',
    name: 'Bella',
    type: 'dog',
    age: 1,
    size: 'small',
    sex: 'female',
    breed: 'Chihuahua Mix',
    status: 'available',
    story: 'Bella es una cachorra llena de energía. Le encanta jugar y necesita una familia que le dedique tiempo para entrenarla y socializar.',
    images: [
      'https://images.unsplash.com/photo-1676484606502-3f1837111e64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXBweSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzI2NTMwOHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1562464980-6f182d4730aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGRvZyUyMGN1dGV8ZW58MXx8fHwxNzYzMTk5MDg2fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    vaccinated: false,
    vaccines: [],
    temperament: ['Enérgica', 'Juguetona', 'Curiosa'],
    canSponsor: false,
    featured: true
  },
  {
    id: '5',
    name: 'Mimi',
    type: 'cat',
    age: 4,
    size: 'small',
    sex: 'female',
    breed: 'Siamés',
    status: 'available',
    story: 'Mimi es una gata elegante y muy limpia. Prefiere un hogar tranquilo sin niños pequeños.',
    images: [
      'https://images.unsplash.com/photo-1621854065840-8a83d8a97009?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXR0ZW4lMjBwbGF5ZnVsfGVufDF8fHx8MTc2MzI2NTMxMHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1759568572636-4440ea8f2521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY2F0JTIwYWRvcHRpb258ZW58MXx8fHwxNzYzMTgzNjMxfDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    vaccinated: true,
    vaccines: ['Triple Felina', 'Rabia', 'Leucemia Felina'],
    temperament: ['Tranquila', 'Elegante', 'Selectiva'],
    canSponsor: false,
    featured: false
  },
  {
    id: '6',
    name: 'Toby',
    type: 'dog',
    age: 7,
    size: 'medium',
    sex: 'male',
    breed: 'Labrador',
    status: 'available',
    story: 'Toby es un perro senior muy cariñoso. Su familia anterior ya no pudo cuidarlo por mudanza. Es el compañero perfecto para personas tranquilas.',
    images: [
      'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXJ8ZW58MXx8fHwxNzYzMjA2ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1641760884883-4e3daa581442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMHNoZWx0ZXJ8ZW58MXx8fHwxNzYzMjY1MzA3fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    vaccinated: true,
    vaccines: ['Rabia', 'Parvovirus', 'Moquillo'],
    temperament: ['Cariñoso', 'Tranquilo', 'Leal'],
    canSponsor: true,
    featured: false
  }
];

export interface AdoptionRequest {
  id: string;
  petId: string;
  petName: string;
  applicantName: string;
  applicantEmail: string;
  phone: string;
  address: string;
  hasOtherPets: boolean;
  otherPetsDetails?: string;
  hasExperience: boolean;
  timeAvailability: string;
  livingSpace: string;
  reason: string;
  status: 'received' | 'in-review' | 'approved' | 'rejected';
  date: string;
}

export interface Donation {
  id: string;
  amount: number;
  donorName: string;
  donorEmail: string;
  method: string;
  date: string;
}

export interface SuccessStory {
  id: string;
  petName: string;
  petImage: string;
  adoptionDate: string;
  familyName: string;
  story: string;
  beforeImage: string;
  afterImage: string;
}

export const mockSuccessStories: SuccessStory[] = [
  {
    id: '1',
    petName: 'Charlie',
    petImage: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXJ8ZW58MXx8fHwxNzYzMjA2ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    adoptionDate: '2024-10-15',
    familyName: 'Familia García',
    story: 'Charlie llegó a nosotros muy asustado y desconfiado. Después de meses de cuidado y amor, encontró su hogar perfecto con la familia García. Ahora es el compañero de juegos favorito de los niños.',
    beforeImage: 'https://images.unsplash.com/photo-1641760884883-4e3daa581442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMHNoZWx0ZXJ8ZW58MXx8fHwxNzYzMjY1MzA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    afterImage: 'https://images.unsplash.com/photo-1655761167947-cb93277c192c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMGRvZ3xlbnwxfHx8fDE3NjMyNjUzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: '2',
    petName: 'Nala',
    petImage: 'https://images.unsplash.com/photo-1593483316242-efb5420596ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjBjYXR8ZW58MXx8fHwxNzYzMTUwNjY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    adoptionDate: '2024-11-01',
    familyName: 'Familia Mendoza',
    story: 'Nala fue rescatada de la calle siendo apenas una cachorra. Su nueva familia la adora y le ha dado todo el amor que merece.',
    beforeImage: 'https://images.unsplash.com/photo-1621854065840-8a83d8a97009?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXR0ZW4lMjBwbGF5ZnVsfGVufDF8fHx8MTc2MzI2NTMxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    afterImage: 'https://images.unsplash.com/photo-1759568572636-4440ea8f2521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY2F0JTIwYWRvcHRpb258ZW58MXx8fHwxNzYzMTgzNjMxfDA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];
