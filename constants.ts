import { Category, LeagueTier, Mission } from './types';

// URL de la imagen del cómic por defecto (fallback).
const COMIC_IMAGE_URL = "https://img.freepik.com/free-vector/pixel-art-detective-investigation-scene_23-2148064371.jpg?w=1380&t=st=1708960000~exp=1708960600~hmac=e7c8e7b8e7b8e7b8";

export const LEAGUES: Record<LeagueTier, { color: string; icon: string; minXP: number }> = {
  Bronze: { color: 'text-amber-700 bg-amber-100 border-amber-200', icon: 'Shield', minXP: 0 },
  Silver: { color: 'text-slate-600 bg-slate-100 border-slate-200', icon: 'Shield', minXP: 500 },
  Gold: { color: 'text-yellow-600 bg-yellow-100 border-yellow-200', icon: 'Shield', minXP: 1500 },
  Platinum: { color: 'text-cyan-600 bg-cyan-100 border-cyan-200', icon: 'Shield', minXP: 3000 },
  Diamond: { color: 'text-indigo-600 bg-indigo-100 border-indigo-200', icon: 'Crown', minXP: 5000 },
};

export const INITIAL_MISSIONS: Mission[] = [
  { id: 'm1', title: 'Daily Grinder', description: 'Complete 3 practice exercises today.', xpReward: 50, type: 'daily', goal: 3, progress: 0, completed: false, icon: 'Zap' },
  { id: 'm2', title: 'Perfect Score', description: 'Get 100% in any Exam mode.', xpReward: 100, type: 'weekly', goal: 1, progress: 0, completed: false, icon: 'Target' },
  { id: 'm3', title: 'Consistency King', description: 'Login 5 days in a row.', xpReward: 200, type: 'weekly', goal: 5, progress: 0, completed: false, icon: 'Calendar' },
];

export const CATEGORIES: Category[] = [
  {
    id: 'grammar',
    title: 'Grammar',
    description: 'Domina la gramática inglesa: Tiempos verbales, relativas y más.',
    color: 'bg-red-500',
    topics: [
      {
        id: 'relative-clauses',
        title: 'Relative Clauses',
        description: 'Defining vs Non-defining clauses y pronombres relativos.',
        icon: 'Link2',
        // Sin grupo -> Aparece en la raíz de Grammar
        manualTheory: `# Relative Clauses: The Complete Guide 🔗

## 1. Tipos de Relative Clauses

### Defining Relative Clauses (Esenciales)
Dan información **imprescindible** para identificar a la persona o cosa. Sin esta información, la frase no tiene sentido completo.
*   **NO llevan comas.**
*   *Ejemplo:* The book **which is on the table** is mine. (Solo ese libro, no otros).

### Non-Defining Relative Clauses (Extra)
Dan información **adicional**. Si la quitas, la frase sigue teniendo sentido y sabemos de quién hablamos.
*   **SIEMPRE llevan comas.**
*   *Ejemplo:* My brother, **who lives in London**, is coming tomorrow. (Ya sé quién es mi hermano, esto es un dato extra).

## 2. Relative Pronouns (Los Pronombres) 📝

| Pronombre | Uso | Ejemplo |
| :--- | :--- | :--- |
| **Who** | Personas | The man **who** called you. |
| **Which** | Cosas / Animales | The car **which** I bought. |
| **That** | Personas / Cosas | *Solo en Defining clauses*. Puede sustituir a Who/Which. |
| **Whose** | Posesión (Cuyo) | The girl **whose** cat is lost. |
| **Where** | Lugares | The city **where** I live. |
| **When** | Tiempo | The day **when** we met. |
| **Whom** | Personas (Formal, objeto) | The person **whom** I spoke to. |

## 3. Omission of the Pronoun (¿Cuándo se quita?) 👻
En las **Defining Clauses**, puedes quitar el pronombre (Who/Which/That) **SI NO es el sujeto** del verbo que sigue.
*   ✅ *The book (that) I bought is good.* ('I' es el sujeto).
*   ❌ *The man (who) lives here.* ('Who' es el sujeto de 'lives').

> **Regla de Oro:** En las **Non-Defining** (con comas), **NUNCA** se puede usar **THAT** ni omitir el pronombre.

---

## 4. Spot the difference 🕵️‍♂️

**Commas save lives!**

<!-- COMIC_PLACEHOLDER -->

*   **Panel 1 (Defining):** *The athletes who took drugs were banned.* (Solo los tramposos fueron expulsados).
*   **Panel 2 (Non-Defining):** *The athletes, who took drugs, were banned.* (Todos los atletas se drogaron y todos fueron expulsados).
`,
        manualQuestions: [
          { id: 'rc1_1', text: "The girl ___ lives next door is my cousin.", options: ["which", "who", "whose", "whom"], correctAnswer: "who", explanation: "Personas (sujeto) -> Who." },
          { id: 'rc1_2', text: "This is the book ___ I told you about.", options: ["who", "which", "where", "whose"], correctAnswer: "which", explanation: "Cosas -> Which." },
          { id: 'rc2_1', text: "My brother, ___ lives in London, is visiting us.", options: ["that", "who", "which", "whose"], correctAnswer: "who", explanation: "Non-defining (comas) + Persona -> Who (nunca That)." },
          { id: 'rc2_2', text: "This book, ___ I bought yesterday, is very interesting.", options: ["that", "who", "which", "whose"], correctAnswer: "which", explanation: "Non-defining + Cosa -> Which (nunca That)." },
          { id: 'e_rc13', text: "She is the only person. She understands me. (Join the sentences using a relative clause)", options: [], correctAnswer: "She is the only person who understands me.", explanation: "Or 'that'." }
        ]
      },
      {
        id: 'pres-simple-cont',
        title: 'Present Simple vs Continuous',
        description: '¿Rutina o ahora mismo?',
        icon: 'Clock',
        group: 'Verb Tenses', // Dentro de carpeta
        manualTheory: `# Present Simple vs Present Continuous...`, 
        manualQuestions: [
          { id: 'p1_1', text: "Normally I ___ work at 5, but this week I ___ until 7.", options: ["finish / am working", "am finishing / work", "finish / work", "am finishing / am working"], correctAnswer: "finish / am working", explanation: "Normally = Rutina (Simple). This week = Situación temporal (Continuous)." },
        ]
      },
      {
        id: 'past-simple-cont',
        title: 'Past Simple vs Past Continuous',
        description: 'Interrupciones, descripciones y narración en pasado.',
        icon: 'History',
        group: 'Verb Tenses', // Dentro de carpeta
        manualTheory: `# Past Simple vs Past Continuous...`,
        manualQuestions: [
           { id: 'psp1_1', text: "I ___ TV when my mother ___.", options: ["watched / arrived", "was watching / arrived", "watched / was arriving", "was watching / was arriving"], correctAnswer: "was watching / arrived", explanation: "Acción en progreso (Continuous) interrumpida por acción corta (Simple)." },
        ]
      },
      {
        id: 'past-perfect-simple',
        title: 'Past Simple vs Present Perfect vs Past Perfect',
        description: 'Secuencias temporales, experiencias y pasado anterior.',
        icon: 'GitBranch',
        group: 'Verb Tenses', // Dentro de carpeta
        manualTheory: `# Tiempos Pasados...`,
        manualQuestions: [
           { id: 'pp1_1', text: "I ___ my homework already.", options: ["did", "have done", "had done", "do"], correctAnswer: "have done", explanation: "'Already' suele ir con Present Perfect para indicar que algo ya está hecho." },
        ]
      },
      {
        id: 'perf-continuous',
        title: 'Present Perfect Continuous vs Past Perfect Continuous',
        description: 'Duración, causas y consecuencias en presente y pasado.',
        icon: 'Repeat',
        group: 'Verb Tenses', // Dentro de carpeta
        manualTheory: `# Perfect Continuous Tenses...`,
        manualQuestions: [
           { id: 'ppc1_1', text: "I ___ English for five years.", options: ["study", "am studying", "have been studying", "had been studying"], correctAnswer: "have been studying", explanation: "Acción que empezó en el pasado y continúa ahora (for five years)." },
        ]
      },
      {
        id: 'future-forms',
        title: 'Future forms: Will / Going to / Pres. Cont.',
        description: 'Decisiones, planes y predicciones en futuro.',
        icon: 'Plane',
        group: 'Verb Tenses', // Dentro de carpeta
        manualTheory: `# Future Forms...`,
        manualQuestions: [
           { id: 'ff1_1', text: "I’m tired. I think I ___ go to bed now.", options: ["am going to", "will", "am going", "go"], correctAnswer: "will", explanation: "Decisión inmediata / Opinión (I think)." },
        ]
      },
      {
        id: 'future-perfect',
        title: 'Future Perfect Simple vs Continuous',
        description: '¿Acción terminada o duración en el futuro?',
        icon: 'Target',
        group: 'Verb Tenses', // Dentro de carpeta
        manualTheory: `# Future Perfect...`,
        manualQuestions: [
           { id: 'fp1_1', text: "By this time tomorrow, I ___ the exam.", options: ["will finish", "will have finished", "will be finishing", "have finished"], correctAnswer: "will have finished", explanation: "Acción completada en un punto futuro." },
        ]
      },
      {
        id: 'mixed-tenses',
        title: 'Mixed Verb Tenses Review',
        description: 'Repaso general de todos los tiempos verbales.',
        icon: 'Layers',
        group: 'Verb Tenses', // Dentro de carpeta
        manualTheory: `# Mixed Tenses...`,
        manualQuestions: [
           { id: 'mt1_1', text: "I usually ___ up early, but today I ___.", options: ["get / am sleeping", "am getting / sleep", "get / sleep", "got / slept"], correctAnswer: "get / am sleeping", explanation: "Rutina (Present Simple) vs Excepción actual (Present Continuous)." },
        ]
      }
    ]
  }
];