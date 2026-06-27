export interface Unit {
  id: string
  name: string
  address: string
  city: string
  zip: string
  phone: string
  lat: number
  lon: number
  featured: boolean
  hours: { days: string; time: string }[]
  photos: string[]
}

export const UNITS: Unit[] = [
  {
    id: 'paulista',
    name: 'Paulista',
    address: 'Av. Paulista, 1374 — Bela Vista',
    city: 'São Paulo, SP — 01310-100',
    zip: '01310-100',
    phone: '+55 11 99000-1374',
    lat: -23.5615, lon: -46.6566,
    featured: true,
    hours: [
      { days: 'Seg a Sex', time: '5h – 23h' },
      { days: 'Sáb/Feriados', time: '7h – 15h' },
      { days: 'Dom', time: '8h – 13h' },
    ],
    photos: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=900&q=80&fit=crop',
    ],
  },
  {
    id: 'vila-madalena',
    name: 'Vila Madalena',
    address: 'R. Harmonia, 485 — Vila Madalena',
    city: 'São Paulo, SP — 05435-000',
    zip: '05435-000',
    phone: '+55 11 99000-0485',
    lat: -23.5534, lon: -46.6942,
    featured: false,
    hours: [
      { days: 'Seg a Sex', time: '6h – 22h' },
      { days: 'Sáb', time: '8h – 14h' },
    ],
    photos: [
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=900&q=80&fit=crop',
    ],
  },
  {
    id: 'moema',
    name: 'Moema',
    address: 'Av. Ibirapuera, 2907 — Moema',
    city: 'São Paulo, SP — 04029-902',
    zip: '04029-902',
    phone: '+55 11 99000-2907',
    lat: -23.6005, lon: -46.6654,
    featured: false,
    hours: [
      { days: 'Seg a Sex', time: '5h – 23h' },
      { days: 'Sáb/Feriados', time: '7h – 15h' },
      { days: 'Dom', time: '8h – 13h' },
    ],
    photos: [
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&q=80&fit=crop',
    ],
  },
  {
    id: 'pinheiros',
    name: 'Pinheiros',
    address: 'R. dos Pinheiros, 750 — Pinheiros',
    city: 'São Paulo, SP — 05422-001',
    zip: '05422-001',
    phone: '+55 11 99000-0750',
    lat: -23.5648, lon: -46.6876,
    featured: false,
    hours: [
      { days: 'Seg a Sex', time: '6h – 22h' },
      { days: 'Sáb', time: '8h – 14h' },
      { days: 'Dom', time: '9h – 13h' },
    ],
    photos: [
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=900&q=80&fit=crop',
    ],
  },
  {
    id: 'jardins',
    name: 'Jardins',
    address: 'R. Oscar Freire, 900 — Jardins',
    city: 'São Paulo, SP — 01426-001',
    zip: '01426-001',
    phone: '+55 11 99000-0900',
    lat: -23.5705, lon: -46.6718,
    featured: false,
    hours: [
      { days: 'Seg a Sex', time: '5h – 23h' },
      { days: 'Sáb', time: '7h – 15h' },
    ],
    photos: [
      'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&q=80&fit=crop',
    ],
  },
  {
    id: 'itaim-bibi',
    name: 'Itaim Bibi',
    address: 'R. Joaquim Floriano, 413 — Itaim Bibi',
    city: 'São Paulo, SP — 04534-002',
    zip: '04534-002',
    phone: '+55 11 99000-0413',
    lat: -23.5867, lon: -46.6793,
    featured: false,
    hours: [
      { days: 'Seg a Sex', time: '5h – 23h' },
      { days: 'Sáb/Feriados', time: '7h – 15h' },
      { days: 'Dom', time: '8h – 13h' },
    ],
    photos: [
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80&fit=crop',
    ],
  },
]
