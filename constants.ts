import { Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'grammar',
    title: 'Gramática (Grammar)',
    description: 'Domina las estructuras del inglés desde lo básico hasta lo avanzado.',
    color: 'bg-blue-500',
    topics: [
      { 
        id: 'present-contrast', 
        title: 'Verb Tenses: Present', 
        description: 'Simple vs Continuous.', 
        icon: 'Clock' 
      },
      { 
        id: 'past-contrast', 
        title: 'Verb Tenses: Past', 
        description: 'Simple vs Continuous.', 
        icon: 'History' 
      },
      { 
        id: 'conditionals', 
        title: 'Conditionals', 
        description: 'Zero, First, Second y Third conditionals.', 
        icon: 'GitBranch' 
      },
      { 
        id: 'passive-voice', 
        title: 'Passive Voice', 
        description: 'Active vs Passive voice usage.', 
        icon: 'Repeat' 
      },
    ]
  },
  {
    id: 'vocabulary',
    title: 'Vocabulario (Vocabulary)',
    description: 'Expande tu léxico con palabras y frases útiles.',
    color: 'bg-green-500',
    topics: [
      { id: 'travel', title: 'Travel & Transport', description: 'Aeropuertos, hoteles y direcciones.', icon: 'Plane' },
      { id: 'business', title: 'Business English', description: 'Reuniones, correos y negociaciones.', icon: 'Briefcase' },
      { id: 'phrasal-verbs', title: 'Phrasal Verbs', description: 'Verbos compuestos esenciales.', icon: 'Puzzle' },
      { id: 'food', title: 'Food & Dining', description: 'Restaurantes, ingredientes y cocina.', icon: 'Utensils' },
    ]
  },
  {
    id: 'reading',
    title: 'Comprensión Lectora (Reading)',
    description: 'Mejora tu capacidad de entender textos complejos.',
    color: 'bg-purple-500',
    topics: [
      { id: 'news', title: 'News Articles', description: 'Noticias actuales y reportajes.', icon: 'Newspaper' },
      { id: 'stories', title: 'Short Stories', description: 'Narrativa y ficción corta.', icon: 'BookOpen' },
    ]
  },
  {
    id: 'writing',
    title: 'Escritura (Writing)',
    description: 'Mejora tu expresión escrita.',
    color: 'bg-orange-500',
    topics: [
      { id: 'essay', title: 'Essay Writing', description: 'Estructura y desarrollo de ensayos.', icon: 'FileText' },
      { id: 'email', title: 'Formal Emails', description: 'Correos profesionales y cartas.', icon: 'Mail' },
      { id: 'connectors', title: 'Linking Words', description: 'Conectores para unir ideas.', icon: 'Link' },
    ]
  }
];
