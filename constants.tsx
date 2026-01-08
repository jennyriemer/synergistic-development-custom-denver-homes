
import { Project, ProcessStep } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Modern Scandi-Infill',
    category: 'New Build',
    location: 'Hilltop',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    description: 'Clean lines and expansive glass define this modern family residence in the heart of Hilltop.',
    longDescription: 'Clean lines, warm materials, and expansive glazing define this Scandi-inspired infill designed for everyday living. The layout prioritizes natural light, indoor-outdoor flow, and a calm, minimal interior palette. Thoughtful detailing and efficient planning helped the home sit comfortably within the neighborhood while still feeling distinctly modern.',
    facts: [
      { label: 'Scope', value: 'Architectural Design & Build' },
      { label: 'Timeline', value: '14 Months' },
      { label: 'Square Footage', value: '4,200 sq. ft.' },
      { label: 'Style', value: 'Modern Scandinavian' },
      { label: 'Key Feature', value: 'Floor-to-Ceiling Glass' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68',
      'https://images.unsplash.com/photo-1560448204-61dc36dc98c8',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858',
      'https://images.unsplash.com/photo-1505691938895-1758d7eaa511',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd'
    ]
  },
  {
    id: '2',
    title: 'Historic Bungalow Revival',
    category: 'Remodel',
    location: 'Washington Park',
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&q=80&w=1200',
    description: 'A thoughtful restoration that respects original character while adding contemporary luxury.',
    longDescription: 'This project focused on the delicate balance of preserving a 1920s Bungalow facade while completely reimagining the interior for modern living. We retained original brickwork and molding profiles while introducing an open-concept living area and a master suite addition.',
    facts: [
      { label: 'Scope', value: 'Full Interior Remodel & Addition' },
      { label: 'Timeline', value: '11 Months' },
      { label: 'Square Footage', value: '2,800 sq. ft.' },
      { label: 'Style', value: 'Craftsman Restoration' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f',
      'https://images.unsplash.com/photo-1505691938895-1758d7eaa511',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f'
    ]
  },
  {
    id: '3',
    title: 'Contemporary Dual-Level',
    category: 'Pop-Top',
    location: 'Crestmoor',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200',
    description: 'Transforming a single-story home into a modern architectural statement for a growing family.'
  },
  {
    id: '4',
    title: 'Urban Courtyard Residence',
    category: 'Multi-Unit',
    location: 'Highlands',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=1200',
    description: 'An innovative multi-family concept that prioritizes privacy and natural light in an urban setting.'
  },
  {
    id: '5',
    title: 'Mountain Modern Retreat',
    category: 'New Build',
    location: 'Bow Mar',
    image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80&w=1200',
    description: 'Blurring the lines between interior comfort and the rugged Colorado landscape.'
  },
  {
    id: '6',
    title: 'Sophisticated Kitchen Suite',
    category: 'Remodel',
    location: 'Cherry Creek',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200',
    description: 'High-performance chef’s kitchen integrated into a refined living space with bespoke cabinetry and integrated lighting.'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We begin with an in-depth discussion about your vision, site potential, and lifestyle needs. This phase determines if our high-touch approach aligns with your goals.'
  },
  {
    number: '02',
    title: 'Design & Planning',
    description: 'Collaborating with premier local architects, we refine every detail. We prioritize material selection and spatial flow before a single shovel hits the ground.'
  },
  {
    number: '03',
    title: 'Pre-Construction',
    description: 'Transparency is key. We finalize budgets, obtain permits, and assemble our specialized trade partners to ensure a seamless transition into the build.'
  },
  {
    number: '04',
    title: 'Build Phase',
    description: 'Our site supervisors manage every variable with precision. You’ll receive regular, honest communication and structured site walkthroughs at key milestones.'
  },
  {
    number: '05',
    title: 'Completion & Follow-Up',
    description: 'Building a home is the start of a relationship. After handover, we provide detailed documentation and a structured follow-up schedule to ensure lasting quality.'
  }
];
