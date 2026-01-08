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
    id: 'verb-tenses',
    title: 'Verb Tenses',
    description: 'Aprende y domina los tiempos verbales con teoría resumida y práctica estilo selectividad.',
    color: 'bg-red-500',
    topics: [
      {
        id: 'tense-structure',
        title: 'Verb Tenses - Use + Structure',
        description: 'Visión general de la formación y uso de los tiempos.',
        icon: 'BookOpen',
        manualTheory: `# Verb Tenses: Overview
        
Una guía rápida para no perderte con la estructura de los verbos.
        
## 1. Simple Tenses (Hechos, hábitos, completado)
* **Present Simple:** Sujeto + Verbo (+s/es). *Habits, truths.*
* **Past Simple:** Sujeto + Verbo-ed/2ª col. *Finished actions.*
* **Future Simple:** Will + Verbo. *Decisions, predictions.*

## 2. Continuous Tenses (En progreso)
Siempre llevan el verbo **TO BE** + Verbo-**ING**.
* **Present Cont:** am/is/are + doing. *Now.*
* **Past Cont:** was/were + doing. *Specific moment in past.*

## 3. Perfect Tenses (Conexión, antes de)
Siempre llevan el verbo **HAVE** + **Participio (3ª col)**.
* **Present Perf:** have/has + done. *Past connecting to now.*
* **Past Perf:** had + done. *Past before another past.*

> **Pildora Clave:**
> Si ves "Continuous", busca el **-ING**.
> Si ves "Perfect", busca el **HAVE + Participio**.
        `,
        manualQuestions: [
          { id: 'vt1', text: "By the time she arrived, I ___ (wait) for hours.", options: ["had been waiting", "have waited", "am waiting", "wait"], correctAnswer: "had been waiting", explanation: "Past Perfect Continuous: Acción duradera anterior a otra acción pasada." },
          { id: 'vt2', text: "Look at the clouds! It ___ (rain) soon.", options: ["is going to rain", "rains", "rained", "has rained"], correctAnswer: "is going to rain", explanation: "Futuro con evidencia visual (Going to)." },
          { id: 'vt3', text: "While I ___ (cook), the lights went out.", options: ["was cooking", "cooked", "am cooking", "have cooked"], correctAnswer: "was cooking", explanation: "Past Continuous: Acción larga interrumpida por una corta." },
          { id: 'vt4', text: "I ___ (know) him since we were children.", options: ["have known", "know", "am knowing", "knew"], correctAnswer: "have known", explanation: "Present Perfect: Acción que empieza en el pasado y continúa (Since). 'Know' es stative verb." },
          { id: 'vt5', text: "Next year, we ___ (live) in this house for 20 years.", options: ["will have been living", "are living", "will live", "have lived"], correctAnswer: "will have been living", explanation: "Future Perfect Continuous: Duración proyectada hacia el futuro." },
          { id: 'vt6', text: "She usually ___ (go) to the gym, but today she is resting.", options: ["goes", "is going", "went", "has gone"], correctAnswer: "goes", explanation: "Hábito/Rutina = Present Simple." },
          { id: 'vt7', text: "The train ___ (leave) at 9:00 PM tonight.", options: ["leaves", "will leave", "is leaving", "has left"], correctAnswer: "leaves", explanation: "Horarios oficiales (Timetables) = Present Simple con valor de futuro." },
          { id: 'vt8', text: "I promise I ___ (call) you later.", options: ["will call", "am calling", "call", "going to call"], correctAnswer: "will call", explanation: "Promesas = Will." },
          { id: 'vt9', text: "When we got to the station, the train ___ (already/leave).", options: ["had already left", "has already left", "already left", "was leaving"], correctAnswer: "had already left", explanation: "Past Perfect: Pasado del pasado." },
          { id: 'vt10', text: "They ___ (play) football when it started to snow.", options: ["were playing", "played", "have played", "had played"], correctAnswer: "were playing", explanation: "Past Continuous: Contexto de fondo interrumpido." }
        ]
      },
      {
        id: 'pres-simple-cont',
        title: 'Present Simple vs Continuous',
        description: '¿Rutina o ahora mismo?',
        icon: 'Clock',
        manualTheory: `# Present Simple vs Present Continuous

## 1. La Diferencia Fundamental

### Present Simple (Rutina / Permanente)
Se usa para cosas que son **verdad en general**, hábitos, rutinas o situaciones permanentes.
* **Keywords:** Always, usually, often, every day, on Mondays, rarely.
* *Example:* "I work in a bank." (Es mi profesión, es permanente).

### Present Continuous (Temporal / En progreso)
Se usa para acciones que están ocurriendo **en este momento**, tendencias actuales o situaciones temporales.
* **Keywords:** Now, at the moment, currently, look!, listen!, this week, these days.
* *Example:* "I am working at home this week." (Es una excepción temporal).

## 2. Stative Verbs (¡Cuidado!)
Hay verbos que describen **estados, pensamientos o sentimientos**, NO acciones. Estos verbos **casi nunca** van en Continuous, aunque sea "ahora mismo".

*   **Verbos:** Like, love, hate, want, need, prefer, know, realize, suppose, mean, understand, believe, remember, belong, fit, contain, consist, seem.
*   *Incorrecto:* I am wanting a pizza. ❌
*   *Correcto:* I want a pizza. ✅

### La Excepción: Cambio de Significado
Algunos verbos cambian de significado según el tiempo.
*   **Think:**
    *   *I think it's good.* (Opinión -> Simple)
    *   *I am thinking about buying a car.* (Proceso mental -> Continuous)
*   **Have:**
    *   *I have a car.* (Posesión -> Simple)
    *   *I am having lunch.* (Acción de comer -> Continuous)

---

## 3. Spot the difference 🕵️‍♂️

Fíjate en la diferencia entre el **hábito** (quién es él) y la **acción actual** (qué hace ahora).

<!-- COMIC_PLACEHOLDER -->

### The Contrast
*   **Panel 1 (Simple):** *He solves crimes.* Lo que el personaje ES o HACE habitualmente.
*   **Panel 2 (Continuous):** *He is chasing a suspect.* Lo que el personaje ESTÁ HACIENDO ahora mismo (en mitad de la acción).
`,
        manualQuestions: [
          // 🔹 Práctica 1 – Uso básico y contraste claro
          { id: 'p1_1', text: "Normally I ___ work at 5, but this week I ___ until 7.", options: ["finish / am working", "am finishing / work", "finish / work", "am finishing / am working"], correctAnswer: "finish / am working", explanation: "Normally = Rutina (Simple). This week = Situación temporal (Continuous)." },
          { id: 'p1_2', text: "She usually ___ coffee, but today she ___ tea.", options: ["drinks / is drinking", "is drinking / drinks", "drinks / drinks", "is drinking / is drinking"], correctAnswer: "drinks / is drinking", explanation: "Usually = Rutina. Today = Excepción temporal." },
          { id: 'p1_3', text: "We ___ English on Mondays, but this term we ___ extra classes.", options: ["have / are having", "are having / have", "have / have", "are having / are having"], correctAnswer: "have / are having", explanation: "On Mondays = Horario habitual. This term = Periodo temporal actual." },
          { id: 'p1_4', text: "My parents ___ in a small town, but at the moment they ___ in the city.", options: ["live / are living", "are living / live", "live / live", "are living / are living"], correctAnswer: "live / are living", explanation: "Situación permanente vs Situación temporal (at the moment)." },
          { id: 'p1_5', text: "I usually ___ up early, but today I ___ late.", options: ["get / am getting", "am getting / get", "get / get", "am getting / am getting"], correctAnswer: "get / am getting", explanation: "Hábito vs Excepción de hoy." },
          { id: 'p1_6', text: "He ___ football every Saturday.", options: ["plays", "is playing", "play", "is play"], correctAnswer: "plays", explanation: "Every Saturday indica rutina." },
          { id: 'p1_7', text: "Look! It ___.", options: ["is raining", "rains", "rain", "is rain"], correctAnswer: "is raining", explanation: "Look! indica algo ocurriendo ahora mismo." },
          { id: 'p1_8', text: "She ___ to school by bus this week.", options: ["is going", "goes", "go", "is go"], correctAnswer: "is going", explanation: "This week indica una rutina temporal." },
          { id: 'p1_9', text: "We never ___ TV during dinner.", options: ["watch", "are watching", "watches", "watching"], correctAnswer: "watch", explanation: "Never se usa con Present Simple para frecuencia." },
          { id: 'p1_10', text: "I can’t talk now. I ___ my homework.", options: ["am doing", "do", "does", "am do"], correctAnswer: "am doing", explanation: "Acción en progreso que impide hablar ahora." },

          // 🔹 Práctica 2 – Contraste semántico intermedio
          { id: 'p2_1', text: "My brother usually ___ at home, but these days he ___ with a friend.", options: ["stays / is staying", "is staying / stays", "stays / stays", "is staying / is staying"], correctAnswer: "stays / is staying", explanation: "Hábito vs 'These days' (temporal)." },
          { id: 'p2_2', text: "The train ___ at 8:15 every morning.", options: ["leaves", "is leaving", "leave", "is leave"], correctAnswer: "leaves", explanation: "Horarios de transporte (Timetables) = Present Simple." },
          { id: 'p2_3', text: "I ___ maths this year because the syllabus is harder.", options: ["am studying", "study", "studies", "am study"], correctAnswer: "am studying", explanation: "Acción en progreso durante un periodo largo (this year)." },
          { id: 'p2_4', text: "She ___ a lot of time on social media these days.", options: ["is spending", "spends", "spend", "is spend"], correctAnswer: "is spending", explanation: "Tendencia actual o hábito temporal." },
          { id: 'p2_5', text: "Water ___ at 100ºC.", options: ["boils", "is boiling", "boil", "is boil"], correctAnswer: "boils", explanation: "Verdad universal / Hecho científico." },
          { id: 'p2_6', text: "Sorry, I can’t help you. I ___.", options: ["am working", "work", "works", "am work"], correctAnswer: "am working", explanation: "Ocurriendo ahora mismo." },
          { id: 'p2_7', text: "My school ___ an exchange programme every year.", options: ["organises", "is organising", "organise", "is organise"], correctAnswer: "organises", explanation: "Evento recurrente anual." },
          { id: 'p2_8', text: "This app ___ better with every update.", options: ["is working", "works", "work", "is work"], correctAnswer: "is working", explanation: "Cambio progresivo o estado actual de funcionamiento." },
          { id: 'p2_9', text: "We usually ___ lunch at 2, but today we ___ earlier.", options: ["have / are having", "are having / have", "have / have", "are having / are having"], correctAnswer: "have / are having", explanation: "Costumbre vs Excepción." },
          { id: 'p2_10', text: "I ___ what you mean, but I ___ with you.", options: ["understand / don’t agree", "am understanding / am not agreeing", "understand / am not agreeing", "am understanding / don’t agree"], correctAnswer: "understand / don’t agree", explanation: "Understand y Agree son verbos de estado (Stative Verbs)." },

          // 🔹 Práctica 3 – Uso avanzado / errores típicos de examen
          { id: 'p3_1', text: "He ___ always ___ my things without asking.", options: ["is / taking", "does / take", "is / take", "does / taking"], correctAnswer: "is / taking", explanation: "Always + Continuous expresa molestia por un hábito repetitivo." },
          { id: 'p3_2', text: "She ___ a new job next month.", options: ["is starting", "starts", "start", "is start"], correctAnswer: "is starting", explanation: "Futuro planificado/confirmado (Arrangement)." },
          { id: 'p3_3', text: "I ___ you, but I ___ this plan is a mistake.", options: ["see / think", "am seeing / am thinking", "see / am thinking", "am seeing / think"], correctAnswer: "see / think", explanation: "See (entender) y Think (opinar) son estativos aquí." },
          { id: 'p3_4', text: "My brother ___ (have) a shower right now.", options: ["is having", "has", "having", "is have"], correctAnswer: "is having", explanation: "Acción en progreso. 'Have' aquí es acción (ducharse), no posesión." }
        ],
        examQuestions: [
          { id: 'e1', text: "She usually works from home, but this week she works from the office. (Rewrite using Present Continuous for the second verb)", options: [], correctAnswer: "She usually works from home, but this week she is working from the office.", explanation: "Contrast habit (Simple) vs temporary (Continuous)." },
          { id: 'e2', text: "I don’t normally complain, but at the moment I complain because the service is terrible. (Rewrite using the correct tense)", options: [], correctAnswer: "I don't normally complain, but at the moment I am complaining because the service is terrible.", explanation: "'At the moment' requires Present Continuous." },
          { id: 'e3', text: "He lives in London, but he lives with his grandparents this month. (Rewrite the second clause)", options: [], correctAnswer: "but he is living with his grandparents this month.", explanation: "Temporary situation = Continuous." },
          { id: 'e4', text: "They play football on Fridays, but today they play basketball instead. (Rewrite using Present Continuous where necessary)", options: [], correctAnswer: "They play football on Fridays, but today they are playing basketball instead.", explanation: "Exception to the routine." },
          { id: 'e5', text: "My sister doesn’t drive to school, but this week she drives because of the rain. (Rewrite the sentence correctly)", options: [], correctAnswer: "My sister doesn't drive to school, but this week she is driving because of the rain.", explanation: "Temporary habit." },
          { id: 'e6', text: "It is unusual for her to be late, but today she is late. (Rewrite using: usually / today)", options: [], correctAnswer: "She usually isn't late, but today she is arriving late.", explanation: "Or 'She usually arrives on time...'. The key is contrasting habit with today." },
          { id: 'e7', text: "At the moment, I stay with my aunt because my parents are abroad. (Rewrite without changing the meaning)", options: [], correctAnswer: "At the moment, I am staying with my aunt because my parents are abroad.", explanation: "Current temporary state." },
          { id: 'e8', text: "My teacher corrects exams this afternoon. (Rewrite using the appropriate present tense)", options: [], correctAnswer: "My teacher is correcting exams this afternoon.", explanation: "Future arrangement or action in near future." },
          { id: 'e9', text: "I don’t normally have problems with maths, but this week I have difficulties. (Complete the sentence so that it means the same)", options: [], correctAnswer: "I don't normally have problems with maths, but this week I am having difficulties.", explanation: "'Having' in this context implies experiencing difficulties temporarily." },
          { id: 'e10', text: "My brother takes my charger without asking. (Rewrite using always to express annoyance)", options: [], correctAnswer: "My brother is always taking my charger without asking.", explanation: "Always + Continuous = Annoying habit." }
        ]
      },
      {
        id: 'past-simple-cont',
        title: 'Past Simple vs Past Continuous',
        description: 'Interrupciones, descripciones y narración en pasado.',
        icon: 'History',
        manualTheory: `# Past Simple vs Past Continuous

## 1. La Regla de Oro: Interrupción ⚡
La estructura más común en exámenes es una acción larga (fondo) interrumpida por una acción corta (evento principal).

*   **Past Continuous (Acción Larga):** Estaba ocurriendo. *Background.*
*   **Past Simple (Acción Corta):** Ocurrió de repente. *Interruption.*

> "I **was sleeping** (larga) when the phone **rang** (corta)."

## 2. Pistas: When vs While 🕵️‍♀️

### When + Past Simple
Suele introducir la interrupción o el evento secuencial.
*   *I was cooking **when** he arrived.*

### While / As + Past Continuous
Suele introducir la acción en progreso.
*   ***While** I was cooking, he arrived.*

## 3. Usos Específicos

### Acciones Paralelas (Dos largas)
Si dos cosas ocurren a la vez y ninguna interrumpe a la otra, usamos **Past Continuous** en ambas.
*   *I **was studying** while my brother **was playing** video games.*

### Narración (Secuencia vs Contexto)
*   **Contexto (Atmósfera):** *The sun was shining, birds were singing...* (Continuous)
*   **Historia (Avance):** *He woke up, put on his coat, and left.* (Simple)

### ⚠️ Stative Verbs (Verbos de Estado)
Recuerda: Los verbos de "cabeza y corazón" (know, want, believe, like) **NO** suelen ir en continuo, incluso si era "en ese momento".
*   ❌ *I was knowing the answer.*
*   ✅ *I **knew** the answer.*

---

## 4. Spot the difference 🕵️‍♂️

Fíjate en la diferencia entre el **contexto** (lo que estaba pasando) y el **evento** (lo que ocurrió de repente).

<!-- COMIC_PLACEHOLDER -->

### The Contrast
*   **Panel 1 (Past Continuous):** *The detective was investigating.* La acción larga que establece la escena.
*   **Panel 2 (Past Simple):** *He found a clue.* La acción corta que interrumpe o hace avanzar la historia.
`,
        manualQuestions: [
          // 🔹 Práctica 1 – Uso básico (interrupción / when / while)
          { id: 'psp1_1', text: "I ___ TV when my mother ___.", options: ["watched / arrived", "was watching / arrived", "watched / was arriving", "was watching / was arriving"], correctAnswer: "was watching / arrived", explanation: "Acción en progreso (Continuous) interrumpida por acción corta (Simple)." },
          { id: 'psp1_2', text: "They ___ football when it ___.", options: ["played / rained", "were playing / rained", "played / was raining", "were playing / was raining"], correctAnswer: "were playing / rained", explanation: "Estaban jugando (fondo) cuando llovió (interrupción)." },
          { id: 'psp1_3', text: "She ___ a shower when the phone ___.", options: ["had / rang", "was having / rang", "had / was ringing", "was having / was ringing"], correctAnswer: "was having / rang", explanation: "Acción larga (ducharse) interrumpida por el teléfono." },
          { id: 'psp1_4', text: "We ___ dinner when the lights ___.", options: ["ate / went out", "were eating / went out", "ate / were going out", "were eating / were going out"], correctAnswer: "were eating / went out", explanation: "Cenábamos (Continuous) cuando se fueron las luces (Simple)." },
          { id: 'psp1_5', text: "He ___ home when he ___ the accident.", options: ["walked / saw", "was walking / saw", "walked / was seeing", "was walking / was seeing"], correctAnswer: "was walking / saw", explanation: "Caminaba (fondo) cuando vio (evento puntual)." },
          { id: 'psp1_6', text: "I ___ asleep while I ___.", options: ["fell / was reading", "was falling / read", "fell / read", "was falling / was reading"], correctAnswer: "fell / was reading", explanation: "Caer dormido (Simple, cambio de estado) mientras leía (Continuous)." },
          { id: 'psp1_7', text: "The children ___ when the teacher ___.", options: ["talked / entered", "were talking / entered", "talked / was entering", "were talking / was entering"], correctAnswer: "were talking / entered", explanation: "La clase hablaba (fondo) hasta que el profesor entró (Simple)." },
          { id: 'psp1_8', text: "She ___ music when I ___.", options: ["listened / arrived", "was listening / arrived", "listened / was arriving", "was listening / was arriving"], correctAnswer: "was listening / arrived", explanation: "Escuchaba música (fondo) cuando llegué." },
          { id: 'psp1_9', text: "We ___ attention when the teacher ___.", options: ["didn’t pay / explained", "weren’t paying / explained", "didn’t pay / was explaining", "weren’t paying / was explaining"], correctAnswer: "weren’t paying / explained", explanation: "Estado negativo continuo (no prestar atención) cuando ocurrió algo." },
          { id: 'psp1_10', text: "He ___ his keys while he ___.", options: ["lost / ran", "was losing / ran", "lost / was running", "was losing / was running"], correctAnswer: "lost / was running", explanation: "Perdió las llaves (punto concreto) mientras corría (acción larga)." },

          // 🔹 Práctica 2 – Contraste semántico intermedio
          { id: 'psp2_1', text: "While I ___ to school, I ___ an old friend.", options: ["walked / met", "was walking / met", "walked / was meeting", "was walking / was meeting"], correctAnswer: "was walking / met", explanation: "While introduce la acción larga (Continuous)." },
          { id: 'psp2_2', text: "They ___ quietly when suddenly someone ___.", options: ["talked / shouted", "were talking / shouted", "talked / was shouting", "were talking / was shouting"], correctAnswer: "were talking / shouted", explanation: "Suddenly introduce el evento interruptor (Simple)." },
          { id: 'psp2_3', text: "She ___ a book when she ___ a strange noise.", options: ["read / heard", "was reading / heard", "read / was hearing", "was reading / was hearing"], correctAnswer: "was reading / heard", explanation: "Leer (largo) vs Oír (corto/sentido)." },
          { id: 'psp2_4', text: "At 8 p.m. yesterday, we ___.", options: ["watched a film", "were watching a film", "watch a film", "are watching a film"], correctAnswer: "were watching a film", explanation: "A una hora específica del pasado, la acción estaba 'en progreso'." },
          { id: 'psp2_5', text: "He ___ attention because he ___.", options: ["didn’t pay / was thinking", "wasn’t paying / thought", "didn’t pay / thought", "wasn’t paying / was thinking"], correctAnswer: "wasn’t paying / was thinking", explanation: "Descripción de una situación de fondo: No atendía porque estaba pensando." },
          { id: 'psp2_6', text: "The students ___ notes while the teacher ___.", options: ["took / spoke", "were taking / spoke", "took / was speaking", "were taking / was speaking"], correctAnswer: "were taking / was speaking", explanation: "Acciones paralelas: ambas ocurren a la vez sin interrumpirse (While)." },
          { id: 'psp2_7', text: "I ___ my phone when it ___.", options: ["checked / vibrated", "was checking / vibrated", "checked / was vibrating", "was checking / was vibrating"], correctAnswer: "was checking / vibrated", explanation: "Miraba el móvil (acción) cuando vibró (evento)." },
          { id: 'psp2_8', text: "She ___ TV all afternoon.", options: ["watched", "was watching", "watch", "was watched"], correctAnswer: "was watching", explanation: "'All afternoon' enfatiza la duración continua." },
          { id: 'psp2_9', text: "We ___ about the exam when the teacher ___.", options: ["talked / arrived", "were talking / arrived", "talked / was arriving", "were talking / was arriving"], correctAnswer: "were talking / arrived", explanation: "Hablábamos (fondo) cuando llegó." },
          { id: 'psp2_10', text: "He ___ a jacket because it ___.", options: ["wore / snowed", "was wearing / snowed", "wore / was snowing", "was wearing / was snowing"], correctAnswer: "was wearing / was snowing", explanation: "Descripción de escena: Llevaba chaqueta porque nevaba." },

          // 🔹 Práctica 3 – Nivel examen / errores frecuentes
          { id: 'psp3_1', text: "I ___ my homework when you ___.", options: ["did / called", "was doing / called", "did / were calling", "was doing / were calling"], correctAnswer: "was doing / called", explanation: "Hacía los deberes (largo) cuando llamaste." },
          { id: 'psp3_2', text: "She ___ a lot of time online that evening.", options: ["spent", "was spending", "spend", "was spent"], correctAnswer: "was spending", explanation: "Énfasis narrativo en el transcurso del tiempo esa tarde." },
          { id: 'psp3_3', text: "While they ___, the alarm ___.", options: ["slept / sounded", "were sleeping / sounded", "slept / was sounding", "were sleeping / was sounding"], correctAnswer: "were sleeping / sounded", explanation: "While + Continuous, Interrupción + Simple." },
          { id: 'psp3_4', text: "He ___ attention, so he ___ the instructions.", options: ["didn’t pay / missed", "wasn’t paying / missed", "didn’t pay / was missing", "wasn’t paying / was missing"], correctAnswer: "wasn’t paying / missed", explanation: "Causa (fondo): No prestaba atención. Resultado (hecho): Se perdió las instrucciones." },
          { id: 'psp3_5', text: "At that moment, I ___ what to do.", options: ["didn’t know", "wasn’t knowing", "didn’t knowing", "wasn’t knew"], correctAnswer: "didn’t know", explanation: "Know es un Stative Verb, no se usa en continuo." },
          { id: 'psp3_6', text: "We ___ a great time at the party last night.", options: ["were having", "had", "have", "were had"], correctAnswer: "had", explanation: "Resumen de la fiesta entera ('Last night' como evento completo)." },
          { id: 'psp3_7', text: "The doorbell ___ while I ___.", options: ["rang / slept", "was ringing / slept", "rang / was sleeping", "was ringing / was sleeping"], correctAnswer: "rang / was sleeping", explanation: "Evento puntual (Timbre) durante acción larga (Dormir)." },
          { id: 'psp3_8', text: "She ___ when she ___ the bad news.", options: ["cried / heard", "was crying / heard", "cried / was hearing", "was crying / was hearing"], correctAnswer: "cried / heard", explanation: "Reacción secuencial: Oyó la noticia y lloró (Simple)." },
          { id: 'psp3_9', text: "They ___ dinner when the guests ___.", options: ["prepared / arrived", "were preparing / arrived", "prepared / were arriving", "were preparing / were arriving"], correctAnswer: "were preparing / arrived", explanation: "Preparaban la cena (en proceso) cuando llegaron." },
          { id: 'psp3_10', text: "I ___ attention because I ___.", options: ["didn’t pay / was texting", "wasn’t paying / texted", "didn’t pay / texted", "wasn’t paying / was texting"], correctAnswer: "wasn’t paying / was texting", explanation: "Causa continua: No atendía porque estaba escribiendo." }
        ],
        examQuestions: [
          // Bloque A
          { id: 'e_psp1', text: "I watched TV when my mother arrived. (Rewrite using Past Continuous for the first action)", options: [], correctAnswer: "I was watching TV when my mother arrived.", explanation: "Action in progress interrupted." },
          { id: 'e_psp2', text: "She had a shower when the phone rang. (Rewrite using Past Continuous for the first action)", options: [], correctAnswer: "She was having a shower when the phone rang.", explanation: "Action in progress interrupted." },
          { id: 'e_psp3', text: "We ate dinner when the lights went out. (Rewrite using Past Continuous for the first action)", options: [], correctAnswer: "We were eating dinner when the lights went out.", explanation: "Action in progress interrupted." },
          { id: 'e_psp4', text: "He walked home when he saw the accident. (Rewrite using Past Continuous for the first action)", options: [], correctAnswer: "He was walking home when he saw the accident.", explanation: "Action in progress interrupted." },
          { id: 'e_psp5', text: "The children talked when the teacher entered. (Rewrite using Past Continuous for the first action)", options: [], correctAnswer: "The children were talking when the teacher entered.", explanation: "Action in progress interrupted." },
          { id: 'e_psp6', text: "I checked my phone when it vibrated. (Rewrite using Past Continuous for the first action)", options: [], correctAnswer: "I was checking my phone when it vibrated.", explanation: "Action in progress interrupted." },
          { id: 'e_psp7', text: "They slept when the alarm sounded. (Rewrite using Past Continuous for the first action)", options: [], correctAnswer: "They were sleeping when the alarm sounded.", explanation: "Action in progress interrupted." },
          { id: 'e_psp8', text: "She cried when she heard the bad news. (Rewrite using Past Continuous for the first action)", options: [], correctAnswer: "She was crying when she heard the bad news.", explanation: "Changes meaning to: she was already crying before hearing it." },
          
          // Bloque B
          { id: 'e_psp9', text: "I was walking to school when I met an old friend. (Rewrite using while)", options: [], correctAnswer: "While I was walking to school, I met an old friend.", explanation: "While introduces the continuous action." },
          { id: 'e_psp10', text: "While we were having dinner, the lights went out. (Rewrite using when)", options: [], correctAnswer: "We were having dinner when the lights went out.", explanation: "When usually introduces the interruption." },
          { id: 'e_psp11', text: "At 8 p.m. yesterday, we watched a film. (Rewrite to mean 'in progress at 8 p.m.')", options: [], correctAnswer: "At 8 p.m. yesterday, we were watching a film.", explanation: "Specific time + Continuous = Action in progress." },
          { id: 'e_psp12', text: "I was reading. Then I fell asleep. (Complete: While I was __________, I fell asleep.)", options: [], correctAnswer: "While I was reading, I fell asleep.", explanation: "Combining sentences with While." },
          { id: 'e_psp13', text: "They were sleeping. The alarm sounded. (Rewrite so that 'the alarm' is the interrupting event)", options: [], correctAnswer: "They were sleeping when the alarm sounded.", explanation: "Using 'when' for the interrupter." },
          { id: 'e_psp14', text: "The teacher was speaking. The students were taking notes. (Rewrite as a single sentence beginning with While)", options: [], correctAnswer: "While the teacher was speaking, the students were taking notes.", explanation: "Parallel actions." },
          { id: 'e_psp15', text: "He didn’t pay attention because he thought about something else. (Rewrite: Make 'thinking' the background action)", options: [], correctAnswer: "He didn't pay attention because he was thinking about something else.", explanation: "Background cause." },
          { id: 'e_psp16', text: "I did my homework. You called me. (Rewrite to show homework was in progress)", options: [], correctAnswer: "I was doing my homework when you called me.", explanation: "Past Continuous + Past Simple." },

          // Bloque C
          { id: 'e_psp17', text: "I was knowing what to do. (Correct the sentence)", options: [], correctAnswer: "I knew what to do.", explanation: "Stative verb correction." },
          { id: 'e_psp18', text: "While they slept, the alarm was sounding. (Correct the sentence)", options: [], correctAnswer: "While they were sleeping, the alarm sounded.", explanation: "While + Continuous, then Simple interruption." },
          { id: 'e_psp19', text: "She was reading a book when she was hearing a strange noise. (Correct the sentence)", options: [], correctAnswer: "She was reading a book when she heard a strange noise.", explanation: "Hear is stative/instant, 'reading' is continuous." },
          { id: 'e_psp20', text: "She spent a lot of time online that evening. (Rewrite using Past Continuous for narrative emphasis)", options: [], correctAnswer: "She was spending a lot of time online that evening.", explanation: "Narrative emphasis on duration." }
        ]
      },
      {
        id: 'past-perfect-simple',
        title: 'Past Simple vs Present Perfect vs Past Perfect',
        description: 'Secuencias temporales, experiencias y pasado anterior.',
        icon: 'GitBranch',
        manualTheory: `# Tiempos Pasados: El Choque Final ⏳

Entender la línea temporal es la clave para dominar estos tres tiempos.

## 1. Past Simple (El punto final 🛑)
Acciones terminadas en un tiempo terminado. No hay conexión con el presente.
*   **Uso:** Narrar historias, hechos concretos en el pasado.
*   **Keywords:** Yesterday, last week, in 2010, ago, when I was young.
*   *Ejemplo:* I **went** to Paris in 2010. (Ya pasó, la fecha acabó).

## 2. Present Perfect (El puente 🌉)
Acciones pasadas que conectan con el presente (experiencias de vida, resultados recientes, tiempo no terminado).
*   **Uso:** Experiencias (sin fecha), cambios recientes, acciones en periodos no acabados (today, this week).
*   **Keywords:** Just, already, yet, ever, never, so far, since, for, lately.
*   *Ejemplo:* I **have been** to Paris twice. (En mi vida, hasta hoy).

## 3. Past Perfect (El pasado del pasado 🔙)
Acciones que ocurrieron **antes** de otra acción pasada. Es esencial para ordenar la historia.
*   **Estructura:** Had + Participio.
*   **Uso:** Dejar claro qué pasó primero.
*   **Keywords:** By the time, before, after, already, just (en contexto pasado).
*   *Ejemplo:* When I arrived at the station, the train **had left**.
    1.  El tren se fue (Past Perfect).
    2.  Yo llegué (Past Simple).

---

## 4. Spot the difference 🕵️‍♂️

Fíjate en la **secuencia temporal** de los eventos.

<!-- COMIC_PLACEHOLDER -->

### The Contrast
*   **Panel 1 (Past Perfect):** *The train had left.* Esto ocurrió **primero**. El tren ya se ha ido.
*   **Panel 2 (Past Simple):** *We arrived late.* Esto ocurrió **después**. Llegamos a una plataforma vacía.
`,
        manualQuestions: [
          // 🔹 Práctica 1 – Past Simple vs Present Perfect (uso básico)
          { id: 'pp1_1', text: "I ___ my homework already.", options: ["did", "have done", "had done", "do"], correctAnswer: "have done", explanation: "'Already' suele ir con Present Perfect para indicar que algo ya está hecho." },
          { id: 'pp1_2', text: "We ___ to Paris last year.", options: ["have been", "were", "went", "had gone"], correctAnswer: "went", explanation: "'Last year' es un tiempo acabado -> Past Simple." },
          { id: 'pp1_3', text: "She ___ never ___ sushi before.", options: ["did / eat", "has / eaten", "had / eaten", "was / eating"], correctAnswer: "has / eaten", explanation: "Experiencia de vida hasta el presente (Present Perfect)." },
          { id: 'pp1_4', text: "They ___ the film yesterday evening.", options: ["have watched", "watched", "had watched", "watch"], correctAnswer: "watched", explanation: "Tiempo específico terminado en el pasado -> Past Simple." },
          { id: 'pp1_5', text: "I ___ my keys. I can’t find them.", options: ["lost", "have lost", "had lost", "lose"], correctAnswer: "have lost", explanation: "Consecuencia presente (no las encuentro ahora) -> Present Perfect." },
          { id: 'pp1_6', text: "He ___ this book three times so far.", options: ["read", "has read", "had read", "reads"], correctAnswer: "has read", explanation: "'So far' (hasta ahora) indica un periodo no terminado." },
          { id: 'pp1_7', text: "We ___ our grandparents last weekend.", options: ["have visited", "visited", "had visited", "visit"], correctAnswer: "visited", explanation: "'Last weekend' -> Past Simple." },
          { id: 'pp1_8', text: "She ___ in this company since 2021.", options: ["worked", "has worked", "had worked", "works"], correctAnswer: "has worked", explanation: "'Since' indica una acción que empezó en el pasado y continúa -> Present Perfect." },
          { id: 'pp1_9', text: "I ___ never ___ such a difficult exam.", options: ["did / have", "have / had", "had / had", "was / having"], correctAnswer: "have / had", explanation: "Experiencia hasta el momento." },
          { id: 'pp1_10', text: "They ___ the match an hour ago.", options: ["have finished", "finished", "had finished", "finish"], correctAnswer: "finished", explanation: "'Ago' siempre marca Past Simple." },

          // 🔹 Práctica 2 – Introducción al Past Perfect (secuencia de pasado)
          { id: 'pp2_1', text: "When we arrived, the film ___.", options: ["started", "has started", "had started", "starts"], correctAnswer: "had started", explanation: "La película empezó antes de que llegáramos." },
          { id: 'pp2_2', text: "She was nervous because she ___ a mistake.", options: ["made", "has made", "had made", "makes"], correctAnswer: "had made", explanation: "El error ocurrió antes de sentirse nerviosa." },
          { id: 'pp2_3', text: "They didn’t eat because they ___ already ___.", options: ["ate", "have eaten", "had eaten", "were eating"], correctAnswer: "had eaten", explanation: "Habían comido antes de ese momento pasado." },
          { id: 'pp2_4', text: "By the time I got home, my parents ___.", options: ["slept", "have slept", "had gone to bed", "went to bed"], correctAnswer: "had gone to bed", explanation: "'By the time' + Past Simple suele requerir Past Perfect para la otra acción." },
          { id: 'pp2_5', text: "He ___ the test before he realised one answer was wrong.", options: ["finished", "has finished", "had finished", "finishes"], correctAnswer: "had finished", explanation: "Terminó antes de darse cuenta (secuencia)." },
          { id: 'pp2_6', text: "We ___ never ___ that place before last summer.", options: ["have / visited", "had / visited", "did / visit", "were / visiting"], correctAnswer: "had / visited", explanation: "Experiencia anterior a un momento pasado (last summer)." },
          { id: 'pp2_7', text: "She was angry because he ___ her.", options: ["forgot", "has forgotten", "had forgotten", "forgets"], correctAnswer: "had forgotten", explanation: "Causa anterior a la emoción pasada." },
          { id: 'pp2_8', text: "After they ___ dinner, they went out.", options: ["had had", "have had", "had", "were having"], correctAnswer: "had had", explanation: "'After' marca la primera acción de la secuencia (Past Perfect)." },
          { id: 'pp2_9', text: "I recognised him immediately because I ___ him before.", options: ["saw", "have seen", "had seen", "see"], correctAnswer: "had seen", explanation: "Lo había visto antes de reconocerlo." },
          { id: 'pp2_10', text: "The train ___ when we got to the station.", options: ["left", "has left", "had left", "leaves"], correctAnswer: "had left", explanation: "El tren ya se había ido (acción previa)." },

          // 🔹 Práctica 3 – Nivel examen / confusiones típicas
          { id: 'pp3_1', text: "I ___ never ___ such a boring film before.", options: ["did / see", "have / seen", "had / seen", "was / seeing"], correctAnswer: "have / seen", explanation: "Si la frase está en presente o aislada, es Present Perfect. Si dijera 'before that night', sería Past Perfect." },
          { id: 'pp3_2', text: "She ___ her homework, so she could relax.", options: ["finished", "has finished", "had finished", "finishes"], correctAnswer: "had finished", explanation: "Terminó (antes) para poder relajarse (pasado)." },
          { id: 'pp3_3', text: "We ___ to that restaurant many times, so we knew the menu.", options: ["went", "have been", "had been", "were going"], correctAnswer: "had been", explanation: "Experiencia acumulada antes de un momento pasado (we knew)." },
          { id: 'pp3_4', text: "He ___ his wallet, but he found it later.", options: ["lost", "has lost", "had lost", "loses"], correctAnswer: "lost", explanation: "Secuencia simple de hechos en Past Simple." },
          { id: 'pp3_5', text: "By the time the teacher arrived, the students ___.", options: ["started", "have started", "had started", "start"], correctAnswer: "had started", explanation: "Acción completada antes de la llegada del profesor." },
          { id: 'pp3_6', text: "I ___ already ___ when you called me.", options: ["slept", "have slept", "had slept", "was sleeping"], correctAnswer: "was sleeping", explanation: "¡Cuidado! Aquí 'already' con 'when you called' sugiere interrupción, pero gramaticalmente 'had slept' (ya había dormido) o 'was sleeping' (estaba durmiendo) son posibles. En contexto de interrupción: 'was sleeping'." },
          { id: 'pp3_7', text: "She ___ abroad twice so far.", options: ["lived", "has lived", "had lived", "lives"], correctAnswer: "has lived", explanation: "'So far' indica Present Perfect." },
          { id: 'pp3_8', text: "They were tired because they ___ all day.", options: ["worked", "have worked", "had worked", "work"], correctAnswer: "had worked", explanation: "Causa (trabajar) anterior al resultado pasado (estar cansado). Nota: 'had been working' también valdría, pero 'had worked' es la opción correcta aquí." },
          { id: 'pp3_9', text: "We ___ the tickets before we realised the date was wrong.", options: ["bought", "have bought", "had bought", "buy"], correctAnswer: "had bought", explanation: "Compramos antes de darnos cuenta." },
          { id: 'pp3_10', text: "He ___ never ___ English before he moved to London.", options: ["studied", "has studied", "had studied", "studies"], correctAnswer: "had studied", explanation: "Antes de una acción pasada (moved)." }
        ],
        examQuestions: [
          // EXAMEN – BLOQUE A (Past Simple vs Present Perfect)
          { id: 'e_pp1', text: "I finished my homework yesterday. (Rewrite using Present Perfect with already)", options: [], correctAnswer: "I have already finished my homework.", explanation: "Change time reference from yesterday to result-focused." },
          { id: 'e_pp2', text: "She went to Italy in 2019. (Rewrite so that the time reference is not finished)", options: [], correctAnswer: "She has been to Italy.", explanation: "Removes specific date to focus on experience." },
          { id: 'e_pp3', text: "We didn’t see that film before. (Rewrite using Present Perfect)", options: [], correctAnswer: "We haven't seen that film before.", explanation: "Basic transformation." },
          { id: 'e_pp4', text: "He lost his phone, so now he can’t call anyone. (Rewrite using Present Perfect)", options: [], correctAnswer: "He has lost his phone.", explanation: "Implies current consequence." },
          { id: 'e_pp5', text: "They lived here for ten years. (Rewrite so that they still live here)", options: [], correctAnswer: "They have lived here for ten years.", explanation: "Present Perfect with 'for' implies continuation." },
          { id: 'e_pp6', text: "I never ate sushi before. (Rewrite correctly)", options: [], correctAnswer: "I have never eaten sushi before.", explanation: "Experience up to now requires Present Perfect." },

          // EXAMEN – BLOQUE B (Past Perfect: orden de acciones pasadas)
          { id: 'e_pp7', text: "The film started. Then we arrived. (Rewrite using Past Perfect)", options: [], correctAnswer: "The film had started when we arrived.", explanation: "First action takes Past Perfect." },
          { id: 'e_pp8', text: "She made a mistake. That’s why she was nervous. (Rewrite using Past Perfect)", options: [], correctAnswer: "She was nervous because she had made a mistake.", explanation: "Cause (earlier) takes Past Perfect." },
          { id: 'e_pp9', text: "They ate dinner. Then they went out. (Rewrite using after and Past Perfect)", options: [], correctAnswer: "After they had eaten dinner, they went out.", explanation: "After introduces the first action." },
          { id: 'e_pp10', text: "I recognised him because I saw him before. (Rewrite correctly)", options: [], correctAnswer: "I recognised him because I had seen him before.", explanation: "Seeing happened before recognising." },
          { id: 'e_pp11', text: "The train left. We got to the station too late. (Rewrite using Past Perfect)", options: [], correctAnswer: "The train had left when we got to the station.", explanation: "Train left first." },
          { id: 'e_pp12', text: "He finished the exam. Then he realised an answer was wrong. (Rewrite using Past Perfect)", options: [], correctAnswer: "He had finished the exam when he realised an answer was wrong.", explanation: "Finishing happened before realising." },

          // EXAMEN – BLOQUE C (Rephrasing tipo Selectividad CLM)
          { id: 'e_pp13', text: "This is the first time I see such a difficult exam. (Rewrite using never and Present Perfect)", options: [], correctAnswer: "I have never seen such a difficult exam before.", explanation: "Classic transformation: First time -> Never before." },
          { id: 'e_pp14', text: "She had already done her homework when her friends arrived. (Rewrite without changing the meaning)", options: [], correctAnswer: "By the time her friends arrived, she had already done her homework.", explanation: "Equivalent structure." },
          { id: 'e_pp15', text: "My parents went to bed. I got home. (Rewrite as one sentence using by the time)", options: [], correctAnswer: "By the time I got home, my parents had gone to bed.", explanation: "By the time triggers Past Perfect for the earlier action." },
          { id: 'e_pp16', text: "We bought the tickets and then we realised the date was wrong. (Rewrite so that the first action happened earlier)", options: [], correctAnswer: "We had bought the tickets before we realised the date was wrong.", explanation: "Past Perfect emphasizes precedence." },
          { id: 'e_pp17', text: "I have seen him yesterday. (Correct the sentence)", options: [], correctAnswer: "I saw him yesterday.", explanation: "Specific past time (yesterday) requires Past Simple." },
          { id: 'e_pp18', text: "When we arrived, the concert has already started. (Correct the sentence)", options: [], correctAnswer: "When we arrived, the concert had already started.", explanation: "Sequence of past events requires Past Perfect, not Present Perfect." },
          { id: 'e_pp19', text: "She didn’t never travel abroad before. (Correct the sentence)", options: [], correctAnswer: "She had never travelled abroad before.", explanation: "Double negative correction + Past Perfect context (implied by 'before' in narrative)." },
          { id: 'e_pp20', text: "I went to London three times. (Rewrite to emphasise experience up to now)", options: [], correctAnswer: "I have been to London three times.", explanation: "Experience requires Present Perfect." }
        ]
      },
      {
        id: 'perf-continuous',
        title: 'Present Perfect Continuous vs Past Perfect Continuous',
        description: 'Duración, causas y consecuencias en presente y pasado.',
        icon: 'Repeat',
        manualTheory: `# Perfect Continuous Tenses 🔄

La clave aquí no es solo "qué pasó", sino **cuánto tiempo** estuvo pasando y **cuándo** se notan los efectos.

## 1. Present Perfect Continuous (Efecto AHORA)
Acciones que empezaron en el pasado y:
1.  Continúan en el presente.
2.  Acaban de terminar, pero tienen un resultado visible *ahora*.

*   **Estructura:** Have/Has + BEEN + Verbo-ing.
*   **Keywords:** For, since, lately, recently, all day/morning.
*   *Ejemplo 1 (Continúa):* I **have been studying** English for 5 years. (Sigo estudiando).
*   *Ejemplo 2 (Resultado visible):* Look! It **has been raining**. (El suelo está mojado *ahora*).

## 2. Past Perfect Continuous (Efecto ANTES)
Es el "pasado del pasado" en versión extendida. Una acción que estaba ocurriendo antes de *otro* momento en el pasado.
*   **Estructura:** Had + BEEN + Verbo-ing.
*   **Uso:** Explicar la causa de un estado en el pasado.
*   *Ejemplo:* She **was** tired (pasado) because she **had been working** all day.

## 3. La Diferencia Clave: The Anchor ⚓

| Tiempo | Referencia (Ancla) | Ejemplo |
| :--- | :--- | :--- |
| **Pres. Perf. Cont.** | **NOW** (Ahora) | I am sweating because I **have been running**. |
| **Past Perf. Cont.** | **THEN** (Entonces) | I was sweating because I **had been running**. |

> **Truco:** Busca el verbo principal de la frase.
> Si dice "is/are/am" -> Probablemente **Present** Perfect.
> Si dice "was/were" -> Probablemente **Past** Perfect.

---

## 4. Spot the difference 🕵️‍♂️

La clave está en el **ancla temporal**: ¿Cuándo se nota el efecto?

<!-- COMIC_PLACEHOLDER -->

### The Contrast
*   **Panel 1 (Present Perf. Cont.):** *He is sweating.* (Ahora). Porque *he has been running.* El resultado conecta con el **presente**.
*   **Panel 2 (Past Perf. Cont.):** *He was sweating.* (Ayer). Porque *he had been running.* El resultado conectaba con un momento del **pasado**.
`,
        manualQuestions: [
          // 🔹 Práctica 1 – Present Perfect Continuous (uso básico)
          { id: 'ppc1_1', text: "I ___ English for five years.", options: ["study", "am studying", "have been studying", "had been studying"], correctAnswer: "have been studying", explanation: "Acción que empezó en el pasado y continúa ahora (for five years)." },
          { id: 'ppc1_2', text: "She ___ all morning, so she’s tired.", options: ["worked", "has worked", "has been working", "had been working"], correctAnswer: "has been working", explanation: "She IS tired (presente) -> Causa reciente en Present Perfect Continuous." },
          { id: 'ppc1_3', text: "We ___ here since 2021.", options: ["live", "are living", "have been living", "had been living"], correctAnswer: "have been living", explanation: "Since + Presente = Present Perfect Continuous." },
          { id: 'ppc1_4', text: "He ___ a lot of stress lately.", options: ["has", "is having", "has been having", "had been having"], correctAnswer: "has been having", explanation: "'Lately' es un marcador clave de Present Perfect Continuous." },
          { id: 'ppc1_5', text: "They ___ for the exam all week.", options: ["studied", "have studied", "have been studying", "had been studying"], correctAnswer: "have been studying", explanation: "Énfasis en la duración ('all week') con conexión presente." },
          { id: 'ppc1_6', text: "I ___ for you for over an hour.", options: ["wait", "am waiting", "have been waiting", "had been waiting"], correctAnswer: "have been waiting", explanation: "Acción incompleta o recién terminada con duración enfatizada." },
          { id: 'ppc1_7', text: "She ___ better recently.", options: ["feels", "has felt", "has been feeling", "had been feeling"], correctAnswer: "has been feeling", explanation: "Cambio progresivo reciente." },
          { id: 'ppc1_8', text: "How long ___ you ___ here?", options: ["do / work", "are / working", "have / worked", "have / been working"], correctAnswer: "have / been working", explanation: "Pregunta estándar por la duración de una acción actual." },
          { id: 'ppc1_9', text: "My parents ___ about moving house.", options: ["talk", "are talking", "have been talking", "had been talking"], correctAnswer: "have been talking", explanation: "Implica que han estado discutiéndolo últimamente." },
          { id: 'ppc1_10', text: "It ___ all day.", options: ["rains", "has rained", "has been raining", "had been raining"], correctAnswer: "has been raining", explanation: "Duración continua hasta el presente." },

          // 🔹 Práctica 2 – Past Perfect Continuous (acción anterior a otra pasada)
          { id: 'ppc2_1', text: "She was exhausted because she ___ all night.", options: ["studied", "has studied", "had been studying", "was studying"], correctAnswer: "had been studying", explanation: "Was exhausted (Pasado) -> Causa anterior continua (Past Perf Cont)." },
          { id: 'ppc2_2', text: "They were angry because we ___ too long.", options: ["waited", "have waited", "had been waiting", "were waiting"], correctAnswer: "had been waiting", explanation: "Were angry (Pasado) -> La espera ocurrió antes." },
          { id: 'ppc2_3', text: "His clothes were dirty because he ___.", options: ["worked", "has worked", "had been working", "was working"], correctAnswer: "had been working", explanation: "Evidencia pasada de una acción previa." },
          { id: 'ppc2_4', text: "We knew the answer because we ___ attention.", options: ["paid", "have paid", "had been paying", "were paying"], correctAnswer: "had been paying", explanation: "Habíamos estado prestando atención antes de la pregunta." },
          { id: 'ppc2_5', text: "She felt ill because she ___ enough.", options: ["didn’t sleep", "hasn’t slept", "hadn’t been sleeping", "wasn’t sleeping"], correctAnswer: "hadn’t been sleeping", explanation: "Falta de sueño acumulada antes de sentirse mal." },
          { id: 'ppc2_6', text: "They were tired because they ___ all day.", options: ["walked", "have walked", "had been walking", "were walking"], correctAnswer: "had been walking", explanation: "Causa duradera anterior al cansancio pasado." },
          { id: 'ppc2_7', text: "I understood the problem because I ___ about it.", options: ["thought", "have thought", "had been thinking", "was thinking"], correctAnswer: "had been thinking", explanation: "Reflexión previa al momento de entender." },
          { id: 'ppc2_8', text: "He failed the test because he ___.", options: ["didn’t study", "hasn’t studied", "hadn’t been studying", "wasn’t studying"], correctAnswer: "hadn’t been studying", explanation: "La falta de estudio ocurrió antes del examen pasado." },
          { id: 'ppc2_9', text: "The ground was wet because it ___.", options: ["rained", "has rained", "had been raining", "was raining"], correctAnswer: "had been raining", explanation: "Llovió antes de que viéramos el suelo mojado." },
          { id: 'ppc2_10', text: "She was nervous because she ___ too much.", options: ["worried", "has worried", "had been worrying", "was worrying"], correctAnswer: "had been worrying", explanation: "Preocupación continua previa al estado de nervios." },

          // 🔹 Práctica 3 – Nivel examen / confusiones típicas
          { id: 'ppc3_1', text: "I ___ all morning, so I need a break.", options: ["studied", "have studied", "have been studying", "had been studying"], correctAnswer: "have been studying", explanation: "Need (Presente) -> Present Perfect Continuous." },
          { id: 'ppc3_2', text: "He was late because he ___.", options: ["drove", "has driven", "had been driving", "was driving"], correctAnswer: "had been driving", explanation: "Was late (Pasado) -> Acción previa duradera." },
          { id: 'ppc3_3', text: "We ___ about that problem for weeks.", options: ["talked", "have talked", "have been talking", "had been talking"], correctAnswer: "have been talking", explanation: "Sin contexto pasado explícito, asumimos conexión con el presente ('for weeks')." },
          { id: 'ppc3_4', text: "She looked tired because she ___.", options: ["worked", "has worked", "had been working", "was working"], correctAnswer: "had been working", explanation: "Looked (Pasado) -> Past Perfect Continuous." },
          { id: 'ppc3_5', text: "How long ___ you ___ before you moved here?", options: ["did / live", "were / living", "have / been living", "had / been living"], correctAnswer: "had / been living", explanation: "'Before you moved' establece un punto pasado -> Past Perfect Continuous." },
          { id: 'ppc3_6', text: "They ___ too much noise, so the neighbours complained.", options: ["made", "have made", "had been making", "were making"], correctAnswer: "had been making", explanation: "Complained (Pasado) -> La acción de hacer ruido fue anterior y continua." },
          { id: 'ppc3_7', text: "I ___ this project since January.", options: ["worked on", "am working on", "have been working on", "had been working on"], correctAnswer: "have been working on", explanation: "Since + Presente implícito = Present Perfect Cont." },
          { id: 'ppc3_8', text: "She felt better because she ___.", options: ["rested", "has rested", "had been resting", "was resting"], correctAnswer: "had been resting", explanation: "Felt (Pasado) -> Descanso previo." },
          { id: 'ppc3_9', text: "We ___ about moving abroad recently.", options: ["thought", "have thought", "have been thinking", "had been thinking"], correctAnswer: "have been thinking", explanation: "'Recently' conecta con el ahora." },
          { id: 'ppc3_10', text: "He was stressed because he ___.", options: ["studied", "has studied", "had been studying", "was studying"], correctAnswer: "had been studying", explanation: "Causa pasada de un estado pasado." }
        ],
        examQuestions: [
          // EXAMEN – BLOQUE A (Present Perfect Continuous)
          { id: 'e_ppc1', text: "I started studying English five years ago and I still study it. (Rewrite using Present Perfect Continuous)", options: [], correctAnswer: "I have been studying English for five years.", explanation: "Action started in past continuing now." },
          { id: 'e_ppc2', text: "She is tired because she studied all morning. (Rewrite using Present Perfect Continuous)", options: [], correctAnswer: "She is tired because she has been studying all morning.", explanation: "Present result of recent continuous action." },
          { id: 'e_ppc3', text: "They started living here in 2021 and they still live here. (Rewrite using Present Perfect Continuous)", options: [], correctAnswer: "They have been living here since 2021.", explanation: "Duration with 'since'." },
          { id: 'e_ppc4', text: "It started raining this morning and it hasn’t stopped. (Rewrite using Present Perfect Continuous)", options: [], correctAnswer: "It has been raining since this morning.", explanation: "Unfinished continuous action." },
          { id: 'e_ppc5', text: "I’m waiting for you. I started an hour ago. (Rewrite using Present Perfect Continuous)", options: [], correctAnswer: "I have been waiting for you for an hour.", explanation: "Combines current action with duration." },
          { id: 'e_ppc6', text: "How long do you study at this school? (Rewrite using Present Perfect Continuous)", options: [], correctAnswer: "How long have you been studying at this school?", explanation: "Standard duration question format." },

          // EXAMEN – BLOQUE B (Past Perfect Continuous)
          { id: 'e_ppc7', text: "She was exhausted. She studied all night. (Rewrite using Past Perfect Continuous)", options: [], correctAnswer: "She was exhausted because she had been studying all night.", explanation: "Past result (exhausted) due to previous duration." },
          { id: 'e_ppc8', text: "They were angry. We waited for a long time. (Rewrite using Past Perfect Continuous)", options: [], correctAnswer: "They were angry because we had been waiting for a long time.", explanation: "Past cause of past emotion." },
          { id: 'e_ppc9', text: "He failed the exam because he didn’t study enough. (Rewrite using Past Perfect Continuous)", options: [], correctAnswer: "He failed the exam because he hadn't been studying enough.", explanation: "Focus on the lack of continuous effort before the exam." },
          { id: 'e_ppc10', text: "The ground was wet. It rained for hours. (Rewrite using Past Perfect Continuous)", options: [], correctAnswer: "The ground was wet because it had been raining for hours.", explanation: "Visible result in the past." },
          { id: 'e_ppc11', text: "She felt ill because she didn’t sleep well. (Rewrite using Past Perfect Continuous)", options: [], correctAnswer: "She felt ill because she hadn't been sleeping well.", explanation: "Past continuous cause." },
          { id: 'e_ppc12', text: "He was stressed. He worked too much. (Rewrite using Past Perfect Continuous)", options: [], correctAnswer: "He was stressed because he had been working too much.", explanation: "Previous continuous activity causing past state." },

          // EXAMEN – BLOQUE C (Rephrasing tipo Selectividad CLM)
          { id: 'e_ppc13', text: "I have been studying English. I started five years ago. (Rewrite using for)", options: [], correctAnswer: "I have been studying English for five years.", explanation: "Duration calculation." },
          { id: 'e_ppc14', text: "She has been living here. She moved here in 2021. (Rewrite using since)", options: [], correctAnswer: "She has been living here since 2021.", explanation: "Starting point reference." },
          { id: 'e_ppc15', text: "They were tired. They had been walking all day. (Rewrite as one sentence using because)", options: [], correctAnswer: "They were tired because they had been walking all day.", explanation: "Linking cause and effect." },
          { id: 'e_ppc16', text: "He drove for hours. Then he arrived home. (Rewrite so that the action happened before another past action)", options: [], correctAnswer: "He had been driving for hours when he arrived home.", explanation: "Or 'before he arrived home'. Past Perf Cont for the long action before a point." },
          { id: 'e_ppc17', text: "I have been study all morning. (Correct the sentence)", options: [], correctAnswer: "I have been studying all morning.", explanation: "Grammar correction: been + -ing." },
          { id: 'e_ppc18', text: "She was tired because she has been working all night. (Correct the sentence)", options: [], correctAnswer: "She was tired because she had been working all night.", explanation: "Tense agreement: Was (past) -> Had been (past perf)." },
          { id: 'e_ppc19', text: "They had been waited for hours when the bus arrived. (Correct the sentence)", options: [], correctAnswer: "They had been waiting for hours when the bus arrived.", explanation: "Grammar correction: been + -ing (active)." },
          { id: 'e_ppc20', text: "She worked on the project for months before she finished it. (Rewrite to emphasise duration before a past moment)", options: [], correctAnswer: "She had been working on the project for months before she finished it.", explanation: "Past Simple -> Past Perfect Continuous for emphasis." }
        ]
      }
    ]
  }
];