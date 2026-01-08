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
        id: 'future-forms',
        title: 'Future Forms: Will / Going to / Pres. Cont.',
        description: 'Predicciones, planes, decisiones espontáneas y arreglos fijos.',
        icon: 'Plane',
        manualTheory: `# Future Forms 🚀

En inglés no existe un solo "futuro". Usamos diferentes formas según la **intención** o la **certeza**.

## 1. Will (El futuro incierto o espontáneo) 🎲
Se usa para cosas que **no** estaban planeadas antes de hablar.
*   **Decisiones espontáneas:** "The phone is ringing. I **will answer** it." (Decidido ahora mismo).
*   **Predicciones (opinión):** "I think Brazil **will win**." (Sin evidencia física).
*   **Promesas:** "I **will love** you forever."

## 2. Going To (La intención) 🎯
Se usa para cosas que ya habías pensado o decidido **antes** de hablar.
*   **Planes:** "I **am going to buy** a new car next month." (Ya lo tengo pensado).
*   **Predicciones (evidencia):** "Look at those black clouds! It **is going to rain**." (Veo la evidencia).

## 3. Present Continuous (La agenda) 📅
Se usa para **futuro confirmado** (Arrangements). Implica que ya has quedado con alguien o has comprado tickets. Es el futuro más seguro.
*   **Keywords:** Tonight, tomorrow at 8, next Friday.
*   *Example:* "I **am meeting** Sarah at 8:00 tonight." (Está en mi agenda, ella lo sabe).

> **Resumen Rápido:**
> *   **Will:** ¡Decisión ahora! / Creo que...
> *   **Going to:** Tengo la intención / ¡Mira, va a pasar!
> *   **Present Cont:** Tengo cita / Está cerrado.

---

## 4. Spot the difference 🕵️‍♂️

<!-- COMIC_PLACEHOLDER -->

### The Contrast
*   **Panel 1 (Will - Spontaneous):** *Person A:* "It's hot." *Person B:* "I **will open** the window." (Reacción inmediata).
*   **Panel 2 (Going to - Plan):** *Person looking at a brochure:* "I **am going to travel** to Japan next year." (Intención previa).
`,
        manualQuestions: [
          // 🔹 PRÁCTICA 1 – Uso básico (decisión, intención, evidencia)
          { id: 'ff1_1', text: "I’m tired. I think I ___ go to bed now.", options: ["am going to", "will", "am going", "go"], correctAnswer: "will", explanation: "Decisión espontánea tomada en el momento ('now') + opinión ('think')." },
          { id: 'ff1_2', text: "Look at those clouds! It ___.", options: ["will rain", "rains", "is raining", "is going to rain"], correctAnswer: "is going to rain", explanation: "Predicción basada en evidencia visual presente." },
          { id: 'ff1_3', text: "Don’t worry, I ___ help you with your homework.", options: ["am going to", "am helping", "will", "help"], correctAnswer: "will", explanation: "Ofrecimiento espontáneo / Promesa." },
          { id: 'ff1_4', text: "She ___ study medicine. She has already decided.", options: ["will", "is studying", "is going to", "studies"], correctAnswer: "is going to", explanation: "Intención previa decidida con antelación." },
          { id: 'ff1_5', text: "I didn’t know about the exam. I ___ fail it.", options: ["am going to", "will", "am failing", "fail"], correctAnswer: "will", explanation: "Predicción basada en opinión/miedo, sin evidencia física inmediata." },
          { id: 'ff1_6', text: "They ___ a party next Saturday. Everything is organised.", options: ["will have", "have", "are having", "are going to have"], correctAnswer: "are having", explanation: "Evento organizado (Arrangement) -> Present Continuous." },
          { id: 'ff1_7', text: "Be careful! You ___ fall.", options: ["will", "are falling", "are going to", "fall"], correctAnswer: "are going to", explanation: "Predicción inmediata por evidencia (situación peligrosa)." },
          { id: 'ff1_8', text: "I promise I ___ tell anyone.", options: ["am going to", "will", "am telling", "tell"], correctAnswer: "will", explanation: "Las promesas siempre van con 'will'." },
          { id: 'ff1_9', text: "He thinks Barça ___ win the match.", options: ["is going to", "wins", "will", "is winning"], correctAnswer: "will", explanation: "Predicción basada en opinión ('thinks')." },
          { id: 'ff1_10', text: "We ___ visit our grandparents this weekend. We decided yesterday.", options: ["will", "visit", "are visiting", "are going to"], correctAnswer: "are going to", explanation: "Plan decidido previamente (Intención)." },

          // 🔹 PRÁCTICA 2 – Contraste semántico intermedio (planes vs arreglos)
          { id: 'ff2_1', text: "I ___ meet Laura at 6 p.m. We’ve already agreed.", options: ["will meet", "am going to meet", "meet", "am meeting"], correctAnswer: "am meeting", explanation: "Cita concertada con otra persona (Arrangement) -> Present Continuous." },
          { id: 'ff2_2', text: "She hasn’t studied. She ___ fail the exam.", options: ["will", "is failing", "is going to", "fails"], correctAnswer: "is going to", explanation: "Predicción con evidencia clara (no haber estudiado)." },
          { id: 'ff2_3', text: "This suitcase is too heavy. I ___ help you.", options: ["am going to", "am helping", "will", "help"], correctAnswer: "will", explanation: "Decisión espontánea al ver el problema." },
          { id: 'ff2_4', text: "My parents ___ travel to Italy next summer. They’re saving money.", options: ["will", "are travelling", "travel", "are going to"], correctAnswer: "are going to", explanation: "Intención/Plan, pero quizás aún no hay billetes comprados (Arrangement sería posible, pero Going to es la intención base)." },
          { id: 'ff2_5', text: "According to the forecast, temperatures ___ rise tomorrow.", options: ["are going to", "are rising", "will", "rise"], correctAnswer: "will", explanation: "Predicciones del tiempo formales o lejanas suelen usar Will (o to be going to, pero will es muy común en forecast)." },
          { id: 'ff2_6', text: "We ___ dinner with friends tonight at 9.", options: ["will have", "have", "are having", "are going to have"], correctAnswer: "are having", explanation: "Cita con hora y personas confirmadas (Arrangement)." },
          { id: 'ff2_7', text: "I think people ___ live longer in the future.", options: ["are going to", "are living", "will", "live"], correctAnswer: "will", explanation: "Predicción general sobre el futuro lejano." },
          { id: 'ff2_8', text: "She ___ buy a new phone. She’s already chosen one.", options: ["will", "buys", "is buying", "is going to"], correctAnswer: "is going to", explanation: "Intención clara y planificada." },
          { id: 'ff2_9', text: "Hurry up! The film ___.", options: ["will start", "starts", "is starting", "is going to start"], correctAnswer: "starts", explanation: "Horarios fijos (Timetables) usan Present Simple." },
          { id: 'ff2_10', text: "Don’t call him now. He ___ an exam.", options: ["will take", "takes", "is taking", "is going to take"], correctAnswer: "is taking", explanation: "Futuro inmediato o acción en progreso (Present Continuous)." },

          // 🔹 PRÁCTICA 3 – Nivel examen / errores típicos
          { id: 'ff3_1', text: "I didn’t plan it, but I ___ stay at home tonight.", options: ["am going to", "will", "am staying", "stay"], correctAnswer: "will", explanation: "Decisión espontánea ('didn't plan it')." },
          { id: 'ff3_2', text: "She ___ visit her cousins this weekend. It’s already arranged.", options: ["will", "is going to", "visits", "is visiting"], correctAnswer: "is visiting", explanation: "'Already arranged' pide Present Continuous." },
          { id: 'ff3_3', text: "Look at the score! We ___ lose.", options: ["will", "are losing", "are going to", "lose"], correctAnswer: "are going to", explanation: "Evidencia visual irrefutable en el presente." },
          { id: 'ff3_4', text: "I think robots ___ replace many jobs.", options: ["are going to", "are replacing", "will", "replace"], correctAnswer: "will", explanation: "Opinión sobre el futuro." },
          { id: 'ff3_5', text: "He ___ call you later. He promised.", options: ["is going to", "is calling", "will", "calls"], correctAnswer: "will", explanation: "Promesa." },
          { id: 'ff3_6', text: "We ___ a test tomorrow morning at 8.", options: ["will have", "have", "are having", "are going to have"], correctAnswer: "are having", explanation: "Plan fijo/Agenda académica." },
          { id: 'ff3_7', text: "She ___ study tonight. She hasn’t decided yet.", options: ["will", "is studying", "studies", "is going to"], correctAnswer: "will", explanation: "Falta de plan firme, probablemente una decisión en el aire." },
          { id: 'ff3_8', text: "According to these results, sales ___.", options: ["will increase", "are increasing", "are going to increase", "increase"], correctAnswer: "are going to increase", explanation: "Predicción basada en evidencia actual (los resultados)." },
          { id: 'ff3_9', text: "Sorry, I forgot. I ___ do it now.", options: ["am going to", "am doing", "will", "do"], correctAnswer: "will", explanation: "Reacción y decisión inmediata al olvido." },
          { id: 'ff3_10', text: "They ___ get married in June. The invitations are ready.", options: ["will", "get", "are getting", "are going to"], correctAnswer: "are going to", explanation: "Gran intención planificada. Nota: 'Are getting married' (Present Cont) también sería correcto, pero 'going to' marca la intención fuerte del plan." }
        ],
        examQuestions: [
          // EXAMEN – BLOQUE A (will vs going to)
          { id: 'e_ff1', text: "I decided a moment ago. I’ll help you. (Rewrite using will)", options: [], correctAnswer: "I will help you.", explanation: "Spontaneous decision." },
          { id: 'e_ff2', text: "She decided yesterday to study medicine. (Rewrite using going to)", options: [], correctAnswer: "She is going to study medicine.", explanation: "Planned intention." },
          { id: 'e_ff3', text: "Look at those clouds. It will rain. (Rewrite using going to)", options: [], correctAnswer: "Look at those clouds. It is going to rain.", explanation: "Prediction with evidence." },
          { id: 'e_ff4', text: "I promise I tell you the truth. (Rewrite correctly)", options: [], correctAnswer: "I promise I will tell you the truth.", explanation: "Promises use 'will'." },
          { id: 'e_ff5', text: "He hasn’t studied. He will fail the exam. (Rewrite using going to)", options: [], correctAnswer: "He hasn't studied. He is going to fail the exam.", explanation: "Prediction based on present evidence (not studying)." },
          { id: 'e_ff6', text: "I think this problem is difficult. (Make a prediction using will)", options: [], correctAnswer: "I think this problem will be difficult.", explanation: "Opinion prediction." },

          // EXAMEN – BLOQUE B (Present Continuous for future arrangements)
          { id: 'e_ff7', text: "We arranged to meet at 6 p.m. (Rewrite using Present Continuous)", options: [], correctAnswer: "We are meeting at 6 p.m.", explanation: "Arrangement." },
          { id: 'e_ff8', text: "She plans to travel to London next Friday. (Rewrite using Present Continuous)", options: [], correctAnswer: "She is travelling to London next Friday.", explanation: "Fixed plan." },
          { id: 'e_ff9', text: "I have an appointment with the dentist tomorrow. (Rewrite using Present Continuous)", options: [], correctAnswer: "I am seeing the dentist tomorrow.", explanation: "Or 'I am going to the dentist'. Appointment." },
          { id: 'e_ff10', text: "They have organised a party for Saturday night. (Rewrite using Present Continuous)", options: [], correctAnswer: "They are having a party Saturday night.", explanation: "Organised event." },
          { id: 'e_ff11', text: "I see my grandparents this afternoon. (Correct the sentence using Present Continuous)", options: [], correctAnswer: "I am seeing my grandparents this afternoon.", explanation: "Future arrangement requires continuous." },
          { id: 'e_ff12', text: "He has planned a meeting at 10 a.m. (Rewrite using Present Continuous)", options: [], correctAnswer: "He is having a meeting at 10 a.m.", explanation: "Scheduled event." },

          // EXAMEN – BLOQUE C (Rephrasing tipo Selectividad CLM)
          { id: 'e_ff13', text: "Rewrite using going to: She has already decided to buy a new phone.", options: [], correctAnswer: "She is going to buy a new phone.", explanation: "Intention." },
          { id: 'e_ff14', text: "Rewrite using will (decision at the moment): I didn’t plan to stay, but now I’ll stay.", options: [], correctAnswer: "I will stay.", explanation: "Spontaneous decision." },
          { id: 'e_ff15', text: "Rewrite without changing the meaning: We have arranged dinner with friends tonight.", options: [], correctAnswer: "We are having dinner with friends tonight.", explanation: "Arrangement -> Present Continuous." },
          { id: 'e_ff16', text: "Rewrite using because and future meaning: She hasn’t studied. She will fail the exam.", options: [], correctAnswer: "She is going to fail the exam because she hasn't studied.", explanation: "Prediction from evidence." },
          { id: 'e_ff17', text: "Correct the sentence: I will going to call you later.", options: [], correctAnswer: "I will call you later.", explanation: "Or 'I am going to call'. Cannot mix will + going to." },
          { id: 'e_ff18', text: "Correct the sentence: Look! It will going to rain.", options: [], correctAnswer: "Look! It is going to rain.", explanation: "Evidence requires 'be going to', grammar correction." },
          { id: 'e_ff19', text: "Correct the sentence: We are going to meet them yesterday.", options: [], correctAnswer: "We were going to meet them yesterday.", explanation: "Past intention (was/were going to) or change 'yesterday' to 'tomorrow'." },
          { id: 'e_ff20', text: "Rewrite to show a fixed arrangement: They will get married in June.", options: [], correctAnswer: "They are getting married in June.", explanation: "Fixed arrangement uses Present Continuous." }
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
          { id: 'psp3_1', text: "I ___ my homework when you ___.", options: ["did / called", "was doing / called", "did / were calling", "was doing / called"], correctAnswer: "was doing / called", explanation: "Hacía los deberes (largo) cuando llamaste." },
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
      },
      {
        id: 'future-perfect',
        title: 'Future Perfect Simple vs Continuous',
        description: '¿Acción terminada o duración hasta el futuro?',
        icon: 'Target',
        manualTheory: `# Future Perfect: The Deadline 🏁

Estos tiempos verbales miran hacia atrás desde un punto en el futuro. Es como viajar mentalmente al futuro y mirar lo que ya ha pasado o estado pasando.

## 1. Future Perfect Simple (La Misión Cumplida) ✅
Se usa para decir que una acción estará **completada** antes de un momento específico del futuro.
*   **Estructura:** Will + HAVE + Participio.
*   **Enfoque:** El resultado final.
*   **Keywords:** By (para), by the time, before.
*   *Ejemplo:* "By 10 p.m., I **will have finished** my homework." (A las 10 ya estará hecho).

## 2. Future Perfect Continuous (El Maratón) 🏃‍♂️
Se usa para enfatizar **cuánto tiempo** habrá durado una acción hasta un momento del futuro.
*   **Estructura:** Will + HAVE + BEEN + Verbo-ing.
*   **Enfoque:** La duración (tiempo transcurrido).
*   **Keywords:** For, by... for...
*   *Ejemplo:* "By 2025, I **will have been living** here for 10 years." (En 2025 se cumplirán 10 años de duración).

## 3. The Golden Rule: "By" vs "For" 💡

| Pista | Tiempo Probable | Por qué |
| :--- | :--- | :--- |
| **Solo "By..."** | **Simple** | Marca el límite final. (By Friday). |
| **"By..." + "For..."** | **Continuous** | Marca el límite Y la duración. (By Friday... for 2 days). |

> **Ojo:** Los *Stative Verbs* (be, know, have, like) no suelen ir en continuo.
> *   ✅ *By next year, we will have known each other for 10 years.* (No "will have been knowing").

---

## 4. Spot the difference 🕵️‍♂️

<!-- COMIC_PLACEHOLDER -->

### The Contrast
*   **Panel 1 (Simple):** *The bridge is built.* "By 2030, we **will have built** the bridge." (Ya estará listo).
*   **Panel 2 (Continuous):** *Workers sweating.* "By 5 p.m., we **will have been working** for 8 hours." (Resalta el esfuerzo y el tiempo).
`,
        manualQuestions: [
          // 🔹 PRÁCTICA 1 – Future Perfect Simple (acción completada)
          { id: 'fp1_1', text: "By this time tomorrow, I ___ the exam.", options: ["will finish", "will have finished", "will be finishing", "have finished"], correctAnswer: "will have finished", explanation: "Acción completada antes de un momento futuro." },
          { id: 'fp1_2', text: "She ___ her homework before dinner.", options: ["will do", "will be doing", "will have done", "does"], correctAnswer: "will have done", explanation: "Completado antes de otro evento (la cena)." },
          { id: 'fp1_3', text: "By 2026, they ___ the new hospital.", options: ["will build", "will be building", "will have built", "build"], correctAnswer: "will have built", explanation: "Logro completado para una fecha límite." },
          { id: 'fp1_4', text: "We ___ all the topics by the end of the course.", options: ["will cover", "will have covered", "will be covering", "have covered"], correctAnswer: "will have covered", explanation: "Acción terminada antes del final del periodo." },
          { id: 'fp1_5', text: "He ___ the report by Monday.", options: ["will write", "will be writing", "will have written", "writes"], correctAnswer: "will have written", explanation: "Deadline (fecha límite) específica." },
          { id: 'fp1_6', text: "By the time you arrive, I ___ dinner.", options: ["will cook", "will be cooking", "will have cooked", "cook"], correctAnswer: "will have cooked", explanation: "La acción estará terminada cuando llegues." },
          { id: 'fp1_7', text: "She ___ the book before the exam.", options: ["will read", "will have read", "will be reading", "reads"], correctAnswer: "will have read", explanation: "Lectura completada antes del evento." },
          { id: 'fp1_8', text: "By next week, we ___ the results.", options: ["will get", "will be getting", "will have got", "get"], correctAnswer: "will have got", explanation: "Obtención completada para la fecha." },
          { id: 'fp1_9', text: "They ___ the problem before the meeting starts.", options: ["will solve", "will be solving", "will have solved", "solve"], correctAnswer: "will have solved", explanation: "Solución alcanzada antes del inicio de la reunión." },
          { id: 'fp1_10', text: "I ___ my driving test by the end of the year.", options: ["will pass", "will be passing", "will have passed", "pass"], correctAnswer: "will have passed", explanation: "Meta cumplida antes de fin de año." },

          // 🔹 PRÁCTICA 2 – Future Perfect Continuous (duración hasta un momento futuro)
          { id: 'fp2_1', text: "By next month, I ___ English for ten years.", options: ["will study", "will have studied", "will have been studying", "study"], correctAnswer: "will have been studying", explanation: "Enfasis en la duración acumulada ('for ten years')." },
          { id: 'fp2_2', text: "At 6 p.m., she ___ for over three hours.", options: ["will work", "will have worked", "will have been working", "works"], correctAnswer: "will have been working", explanation: "Duración en progreso hasta un punto horario." },
          { id: 'fp2_3', text: "By the time he retires, he ___ for the company for 40 years.", options: ["will work", "will have worked", "will have been working", "works"], correctAnswer: "will have been working", explanation: "Larga duración acumulada hasta un evento futuro." },
          { id: 'fp2_4', text: "Next July, we ___ here for five years.", options: ["will live", "will have lived", "will have been living", "live"], correctAnswer: "will have been living", explanation: "Aniversario de una acción continua." },
          { id: 'fp2_5', text: "By midnight, they ___ all day.", options: ["will drive", "will have driven", "will have been driving", "drive"], correctAnswer: "will have been driving", explanation: "'All day' enfatiza la continuidad de la acción." },
          { id: 'fp2_6', text: "In two hours, I ___ for six hours straight.", options: ["will study", "will have studied", "will have been studying", "study"], correctAnswer: "will have been studying", explanation: "Acumulación de tiempo continuo." },
          { id: 'fp2_7', text: "By the end of the match, he ___ non-stop.", options: ["will run", "will have run", "will have been running", "runs"], correctAnswer: "will have been running", explanation: "Acción física continua hasta el final." },
          { id: 'fp2_8', text: "At that moment, she ___ about the problem for weeks.", options: ["will think", "will have thought", "will have been thinking", "thinks"], correctAnswer: "will have been thinking", explanation: "Proceso mental duradero." },
          { id: 'fp2_9', text: "By tomorrow morning, it ___ all night.", options: ["will rain", "will have rained", "will have been raining", "rains"], correctAnswer: "will have been raining", explanation: "Fenómeno continuo durante un periodo." },
          { id: 'fp2_10', text: "By 8 p.m., we ___ since early morning.", options: ["will work", "will have worked", "will have been working", "work"], correctAnswer: "will have been working", explanation: "Desde la mañana hasta la noche (duración)." },

          // 🔹 PRÁCTICA 3 – Nivel examen / contraste Simple vs Continuous
          { id: 'fp3_1', text: "By the end of the day, I ___ the project.", options: ["will complete", "will have completed", "will have been completing", "complete"], correctAnswer: "will have completed", explanation: "El proyecto estará terminado (resultado)." },
          { id: 'fp3_2', text: "By the end of the day, I ___ on the project for 10 hours.", options: ["will work", "will have worked", "will have been working", "work"], correctAnswer: "will have been working", explanation: "Enfasis en las 10 horas de trabajo (duración)." },
          { id: 'fp3_3', text: "She ___ the course before she applies for the job.", options: ["will finish", "will have finished", "will have been finishing", "finishes"], correctAnswer: "will have finished", explanation: "Completar el curso es requisito previo (acción terminada)." },
          { id: 'fp3_4', text: "By next week, they ___ the issue for months.", options: ["will discuss", "will have discussed", "will have been discussing", "discuss"], correctAnswer: "will have been discussing", explanation: "'For months' pide continuo." },
          { id: 'fp3_5', text: "At 9 p.m., he ___ for three hours.", options: ["will study", "will have studied", "will have been studying", "studies"], correctAnswer: "will have been studying", explanation: "Duración hasta las 9." },
          { id: 'fp3_6', text: "By the time we arrive, they ___.", options: ["will leave", "will be leaving", "will have left", "leave"], correctAnswer: "will have left", explanation: "Ya se habrán ido (acción completada antes de llegar)." },
          { id: 'fp3_7', text: "Next year, she ___ as a teacher for 15 years.", options: ["will work", "will have worked", "will have been working", "works"], correctAnswer: "will have been working", explanation: "Carrera profesional continua." },
          { id: 'fp3_8', text: "By Friday, we ___ all the arrangements.", options: ["will make", "will be making", "will have made", "make"], correctAnswer: "will have made", explanation: "Los arreglos estarán listos (resultado)." },
          { id: 'fp3_9', text: "By the time the exam starts, I ___ all the units.", options: ["will revise", "will have revised", "will have been revising", "revise"], correctAnswer: "will have revised", explanation: "Revisión completada (todas las unidades)." },
          { id: 'fp3_10', text: "By midnight, he ___ without a break.", options: ["will work", "will have worked", "will have been working", "works"], correctAnswer: "will have been working", explanation: "Acción ininterrumpida." }
        ],
        examQuestions: [
          // EXAMEN – BLOQUE A (Future Perfect Simple: acción completada)
          { id: 'e_fp1', text: "I will finish the report before Monday. (Rewrite using Future Perfect Simple)", options: [], correctAnswer: "I will have finished the report before Monday.", explanation: "Completed action by a deadline." },
          { id: 'e_fp2', text: "She will complete the course before she applies for the job. (Rewrite using Future Perfect Simple)", options: [], correctAnswer: "She will have completed the course before she applies for the job.", explanation: "Action finished before another future event." },
          { id: 'e_fp3', text: "By this time tomorrow, we will receive the results. (Rewrite using Future Perfect Simple)", options: [], correctAnswer: "By this time tomorrow, we will have received the results.", explanation: "Future deadline." },
          { id: 'e_fp4', text: "They will solve the problem before the meeting starts. (Rewrite using Future Perfect Simple)", options: [], correctAnswer: "They will have solved the problem before the meeting starts.", explanation: "Solution completed prior to meeting." },
          { id: 'e_fp5', text: "I will pass all my exams by the end of the year. (Rewrite using Future Perfect Simple)", options: [], correctAnswer: "I will have passed all my exams by the end of the year.", explanation: "Achievement by a deadline." },
          { id: 'e_fp6', text: "He will write the essay before the deadline. (Rewrite using Future Perfect Simple)", options: [], correctAnswer: "He will have written the essay before the deadline.", explanation: "Task completion." },

          // EXAMEN – BLOQUE B (Future Perfect Continuous: duración hasta un punto futuro)
          { id: 'e_fp7', text: "Next month, I will have studied English for ten years. (Rewrite using Future Perfect Continuous)", options: [], correctAnswer: "Next month, I will have been studying English for ten years.", explanation: "Emphasis on the 10-year duration." },
          { id: 'e_fp8', text: "At 6 p.m., she will have worked for three hours. (Rewrite using Future Perfect Continuous)", options: [], correctAnswer: "At 6 p.m., she will have been working for three hours.", explanation: "Continuous action measurement." },
          { id: 'e_fp9', text: "By the time he retires, he will have worked for the company for 40 years. (Rewrite using Future Perfect Continuous)", options: [], correctAnswer: "By the time he retires, he will have been working for the company for 40 years.", explanation: "Long-term duration." },
          { id: 'e_fp10', text: "By midnight, they will have driven all day. (Rewrite using Future Perfect Continuous)", options: [], correctAnswer: "By midnight, they will have been driving all day.", explanation: "Continuous activity emphasis." },
          { id: 'e_fp11', text: "Next July, we will have lived here for five years. (Rewrite using Future Perfect Continuous)", options: [], correctAnswer: "Next July, we will have been living here for five years.", explanation: "Duration of residence." },
          { id: 'e_fp12', text: "By tomorrow morning, it will have rained all night. (Rewrite using Future Perfect Continuous)", options: [], correctAnswer: "By tomorrow morning, it will have been raining all night.", explanation: "Duration of weather event." },

          // EXAMEN – BLOQUE C (Rephrasing tipo Selectividad CLM)
          { id: 'e_fp13', text: "Rewrite using by the time: I will finish the exam. Then you will arrive.", options: [], correctAnswer: "By the time you arrive, I will have finished the exam.", explanation: "Linking future events." },
          { id: 'e_fp14', text: "Rewrite to emphasise duration: By Friday, I will complete the project.", options: [], correctAnswer: "By Friday, I will have been working on the project.", explanation: "Changing focus from completion to process (context dependent, usually implies adding a duration like 'for a week'). Note: 'I will have been working' is the structure." },
          { id: 'e_fp15', text: "Rewrite without changing the meaning: At 9 p.m., he will have studied for three hours.", options: [], correctAnswer: "At 9 p.m., he will have been studying for three hours.", explanation: "Studying is a continuous activity, so Continuous is preferred with 'for'." },
          { id: 'e_fp16', text: "Rewrite so that the action is ongoing before a future moment: She will finish the project next week.", options: [], correctAnswer: "She will have been working on the project until next week.", explanation: "Or 'By next week she will have been working on the project'." },
          { id: 'e_fp17', text: "Correct the sentence: By next year, I will have been finish the degree.", options: [], correctAnswer: "By next year, I will have finished the degree.", explanation: "Completion (degree) -> Simple. Or 'will have been finishing' (less likely)." },
          { id: 'e_fp18', text: "Correct the sentence: At 8 p.m., I will have work for four hours.", options: [], correctAnswer: "At 8 p.m., I will have been working for four hours.", explanation: "Duration requires 'been working'." },
          { id: 'e_fp19', text: "Correct the sentence: By tomorrow, she will has finished the report.", options: [], correctAnswer: "By tomorrow, she will have finished the report.", explanation: "Will always takes bare infinitive 'have', never 'has'." },
          { id: 'e_fp20', text: "Rewrite to show completion, not duration: By the end of the day, I will have been working on the report.", options: [], correctAnswer: "By the end of the day, I will have finished the report.", explanation: "Switching focus to the result." }
        ]
      },
      {
        id: 'mixed-tenses',
        title: 'Mixed Tenses',
        description: 'Revisión general de todos los tiempos verbales. El desafío definitivo.',
        icon: 'Layers',
        manualTheory: `# Mixed Tenses: The Ultimate Challenge 🥋

Este es el nivel final. Aquí mezclamos todos los tiempos verbales. Para dominarlo, necesitas identificar las pistas temporales ("time markers") y el contexto de la frase.

## 1. Claves para Identificar el Tiempo 🕵️

| Pista / Marcador | Tiempo Probable | Ejemplo |
| :--- | :--- | :--- |
| **Habit, Always, Usually, Every day** | Present Simple | He **plays** tennis every Sunday. |
| **Now, At the moment, Look!** | Present Continuous | Look! It **is raining**. |
| **Yesterday, Last week, In 2010, Ago** | Past Simple | I **saw** him yesterday. |
| **While, As (en pasado)** | Past Continuous | While I **was reading**, he called. |
| **Just, Already, Yet, Ever, Never, Since** | Present Perfect | I **have** just **arrived**. |
| **By the time + Pasado** | Past Perfect | The train **had left** by the time I arrived. |
| **Tomorrow, Next week** | Future (Will / Going to) | I **will call** you tomorrow. |
| **By + Futuro** | Future Perfect | By Friday, I **will have finished**. |

## 2. Decisiones Difíciles 🤔

### Present Perfect vs Past Simple
*   ¿Tiene fecha concreta finalizada? -> **Past Simple**. (*Yesterday*).
*   ¿Es una experiencia o conecta con el ahora? -> **Present Perfect**. (*I have been to Paris*).

### Past Simple vs Past Continuous
*   ¿Interrumpe? -> **Simple**. (*The phone rang*).
*   ¿Estaba en progreso (fondo)? -> **Continuous**. (*I was sleeping*).

### Will vs Going to
*   ¿Espontáneo? -> **Will**.
*   ¿Planificado/Evidencia? -> **Going to**.

---

## 3. Spot the difference 🕵️‍♂️

<!-- COMIC_PLACEHOLDER -->

### The Contrast
*   **Panel 1 (Routine):** "I usually **drink** coffee." (Present Simple - Hábito).
*   **Panel 2 (Exception):** "But today I **am drinking** tea." (Present Continuous - Ahora mismo).
`,
        manualQuestions: [
          // 🔹 PRÁCTICA 1 – Mixed Tenses (uso general)
          { id: 'mt1_1', text: "I usually ___ up early, but today I ___.", options: ["get / am sleeping", "get / am sleeping", "get / sleep", "am getting / sleep"], correctAnswer: "get / am sleeping", explanation: "Routine (Present Simple) vs Temporary exception (Present Continuous)." },
          { id: 'mt1_2', text: "When I arrived, they ___.", options: ["left", "have left", "were leaving", "had left"], correctAnswer: "had left", explanation: "The action happened *before* I arrived (Past Perfect)." },
          { id: 'mt1_3', text: "She ___ English since she was six.", options: ["learns", "learned", "has been learning", "had learned"], correctAnswer: "has been learning", explanation: "'Since' indicates an action started in the past and continuing (Present Perfect Continuous)." },
          { id: 'mt1_4', text: "We ___ that film last weekend.", options: ["have seen", "saw", "had seen", "see"], correctAnswer: "saw", explanation: "'Last weekend' is a finished time period (Past Simple)." },
          { id: 'mt1_5', text: "By the time you arrive, I ___.", options: ["finish", "will finish", "will have finished", "have finished"], correctAnswer: "will have finished", explanation: "Action completed before a future moment (Future Perfect Simple)." },
          { id: 'mt1_6', text: "He was tired because he ___ all day.", options: ["worked", "has worked", "had been working", "is working"], correctAnswer: "had been working", explanation: "Past cause (duration) of a past state (Past Perfect Continuous)." },
          { id: 'mt1_7', text: "Look at the sky! It ___.", options: ["rains", "will rain", "is raining", "is going to rain"], correctAnswer: "is going to rain", explanation: "Prediction based on present evidence (Going to)." },
          { id: 'mt1_8', text: "I didn’t recognise him because I ___ him before.", options: ["didn’t see", "haven’t seen", "hadn’t seen", "don’t see"], correctAnswer: "hadn’t seen", explanation: "Action happened before the past moment of recognition (Past Perfect)." },
          { id: 'mt1_9', text: "She can’t come now. She ___ an exam.", options: ["takes", "is taking", "took", "has taken"], correctAnswer: "is taking", explanation: "Action happening right now (Present Continuous)." },
          { id: 'mt1_10', text: "Next year, I ___ English for ten years.", options: ["study", "will study", "will have studied", "will have been studying"], correctAnswer: "will have been studying", explanation: "Future duration milestone (Future Perfect Continuous)." },

          // 🔹 PRÁCTICA 2 – Narrativa y secuencia temporal
          { id: 'mt2_1', text: "While we ___ dinner, the phone ___.", options: ["had / rang", "were having / rang", "had / was ringing", "were having / was ringing"], correctAnswer: "were having / rang", explanation: "Long action (Continuous) interrupted by short action (Simple)." },
          { id: 'mt2_2', text: "He ___ to bed when he realised he ___ the door open.", options: ["went / left", "went / had left", "had gone / left", "was going / leaves"], correctAnswer: "went / had left", explanation: "Sequence: Realised (past) something that happened before (Past Perfect)." },
          { id: 'mt2_3', text: "I ___ my homework, so I can relax now.", options: ["finished", "have finished", "had finished", "finish"], correctAnswer: "have finished", explanation: "Recent action with present result (Present Perfect)." },
          { id: 'mt2_4', text: "They were exhausted because they ___ for hours.", options: ["walked", "have walked", "had been walking", "are walking"], correctAnswer: "had been walking", explanation: "Past duration causing past state (Past Perfect Continuous)." },
          { id: 'mt2_5', text: "When she was a child, she ___ afraid of the dark.", options: ["is", "has been", "was", "had been"], correctAnswer: "was", explanation: "State in a finished past period (Past Simple)." },
          { id: 'mt2_6', text: "At 8 p.m. yesterday, we ___.", options: ["watched TV", "were watching TV", "have watched TV", "watch TV"], correctAnswer: "were watching TV", explanation: "Action in progress at a specific past time (Past Continuous)." },
          { id: 'mt2_7', text: "He ___ never ___ such a difficult exam before.", options: ["did / do", "has / done", "had / done", "was / doing"], correctAnswer: "had / done", explanation: "Context implies past narrative ('before that time' implicit or explicit in exam context, often Past Perfect is best choice for 'never before' in past stories, though Present Perfect if current experience. Here 'before' usually triggers Perfect tenses. 'Has done' if present context, 'Had done' if past context. Given lack of context, 'has done' is safest for 'in his life until now', but usually mixed tense exercises imply past narrative often. Let's assume 'has done' as default for life experience unless 'before' refers to a past event. Wait, option c is 'had / done'. If sentence stands alone, 'has done' is best. If it's a story 'He said he had never done...', it's Past Perfect. Let's assume Present Perfect for general experience: 'He has never done such a difficult exam before [now]'. Wait, options are: a,b,c,d. Let's pick 'has done' for general experience. Actually, 'had done' is also very common in 'It was the hardest exam he had ever done'. Let's stick to 'has done' as the most direct isolated sentence interpretation)." },
          { id: 'mt2_8', text: "By Friday, we ___ all the arrangements.", options: ["make", "will make", "will have made", "have made"], correctAnswer: "will have made", explanation: "Action completed by a future deadline (Future Perfect Simple)." },
          { id: 'mt2_9', text: "She ___ in this city since 2020.", options: ["lived", "lives", "has lived", "had lived"], correctAnswer: "has lived", explanation: "Started in past, continues now (Present Perfect)." },
          { id: 'mt2_10', text: "I was nervous because I ___ a mistake.", options: ["made", "have made", "had made", "make"], correctAnswer: "had made", explanation: "Mistake happened before feeling nervous (Past Perfect)." },

          // 🔹 PRÁCTICA 3 – Nivel examen / errores frecuentes
          { id: 'mt3_1', text: "I ___ English for five years when I moved to London.", options: ["studied", "have studied", "had been studying", "am studying"], correctAnswer: "had been studying", explanation: "Duration before a past event (Past Perfect Continuous)." },
          { id: 'mt3_2', text: "She ___ her homework already, so she can go out.", options: ["did", "has done", "had done", "does"], correctAnswer: "has done", explanation: "Present result of completed action (Present Perfect)." },
          { id: 'mt3_3', text: "Look! You ___ fall!", options: ["will", "are falling", "are going to", "fall"], correctAnswer: "are going to", explanation: "Prediction based on immediate evidence (Going to)." },
          { id: 'mt3_4', text: "By the end of the day, I ___.", options: ["will finish", "will be finishing", "will have finished", "finish"], correctAnswer: "will have finished", explanation: "Completion by a deadline (Future Perfect)." },
          { id: 'mt3_5', text: "He didn’t answer because he ___.", options: ["slept", "was sleeping", "has slept", "had slept"], correctAnswer: "was sleeping", explanation: "Action in progress (Continuous) explaining why he didn't answer." },
          { id: 'mt3_6', text: "We ___ about that problem for weeks now.", options: ["thought", "have thought", "have been thinking", "had been thinking"], correctAnswer: "have been thinking", explanation: "Duration up to now with 'for weeks now' (Present Perfect Continuous)." },
          { id: 'mt3_7', text: "She ___ a lot of stress lately.", options: ["has", "is having", "has been having", "had"], correctAnswer: "has been having", explanation: "'Lately' + ongoing/repeated action (Present Perfect Continuous)." },
          { id: 'mt3_8', text: "When I saw him, he ___ already ___.", options: ["has / left", "had / left", "was / leaving", "did / leave"], correctAnswer: "had / left", explanation: "Action completed before another past action (Past Perfect)." },
          { id: 'mt3_9', text: "This time tomorrow, we ___.", options: ["travel", "will travel", "will be travelling", "will have travelled"], correctAnswer: "will be travelling", explanation: "Action in progress at a specific future time (Future Continuous)." },
          { id: 'mt3_10', text: "He ___ never ___ abroad before last year.", options: ["has / travelled", "had / travelled", "did / travel", "was / travelling"], correctAnswer: "had / travelled", explanation: "'Before last year' sets a past reference point, so experience before that is Past Perfect." }
        ],
        examQuestions: [
          // EXAMEN – BLOQUE A (Elección correcta del tiempo verbal)
          { id: 'e_mt1', text: "I usually get up early, but today I’m tired. (Rewrite using Present Simple + Present Continuous to show exception)", options: [], correctAnswer: "I usually get up early, but today I am getting up late.", explanation: "Contrast habit vs today." },
          { id: 'e_mt2', text: "She didn’t recognise him because she never saw him before. (Rewrite correctly)", options: [], correctAnswer: "She didn't recognise him because she had never seen him before.", explanation: "Past Perfect for 'before' in past narrative." },
          { id: 'e_mt3', text: "We finished dinner. Then the guests arrived. (Rewrite using Past Perfect)", options: [], correctAnswer: "We had finished dinner when the guests arrived.", explanation: "Sequence of events." },
          { id: 'e_mt4', text: "He is tired because he works all day. (Rewrite using the correct tense to show recent duration)", options: [], correctAnswer: "He is tired because he has been working all day.", explanation: "Present Perfect Continuous for recent cause." },
          { id: 'e_mt5', text: "I started studying English five years ago and I still study it. (Rewrite using one tense)", options: [], correctAnswer: "I have been studying English for five years.", explanation: "Present Perfect Continuous." },
          { id: 'e_mt6', text: "At 8 p.m. yesterday, we watched TV. (Change the meaning to 'in progress at 8 p.m.')", options: [], correctAnswer: "At 8 p.m. yesterday, we were watching TV.", explanation: "Past Continuous." },

          // EXAMEN – BLOQUE B (Rephrasing y secuencia temporal)
          { id: 'e_mt7', text: "Rewrite using while: The phone rang. We were having dinner.", options: [], correctAnswer: "The phone rang while we were having dinner.", explanation: "While + Continuous." },
          { id: 'e_mt8', text: "Rewrite using by the time: I finished the exam. The teacher collected it.", options: [], correctAnswer: "By the time the teacher collected the exam, I had finished it.", explanation: "Past Perfect for the first action." },
          { id: 'e_mt9', text: "Rewrite without changing the meaning: She has already finished her homework.", options: [], correctAnswer: "She finished her homework a moment ago.", explanation: "Or similar meaningful equivalent, but usually transformation keeps tense logic. Here, just identifying structure." },
          { id: 'e_mt10', text: "Rewrite to show cause–effect: They were tired. They had been working all day.", options: [], correctAnswer: "They were tired because they had been working all day.", explanation: "Linking Past State with Past Perfect Continuous cause." },
          { id: 'e_mt11', text: "Rewrite using the correct future form: I decided yesterday to study medicine.", options: [], correctAnswer: "I am going to study medicine.", explanation: "Intention (Going to)." },
          { id: 'e_mt12', text: "Rewrite to emphasise completion before a future moment: I will finish the project before Friday.", options: [], correctAnswer: "I will have finished the project before Friday.", explanation: "Future Perfect Simple." },

          // EXAMEN – BLOQUE C (Rephrasing tipo Selectividad CLM)
          { id: 'e_mt13', text: "Rewrite using never and the correct tense: This is the first time I travel abroad.", options: [], correctAnswer: "I have never travelled abroad before.", explanation: "First time = Never before (Present Perfect)." },
          { id: 'e_mt14', text: "Rewrite so that the action happened before another past action: She left the house. Then she realised she had forgotten her phone.", options: [], correctAnswer: "She had left the house when she realised she had forgotten her phone.", explanation: "Past Perfect." },
          { id: 'e_mt15', text: "Rewrite to emphasise duration up to now: I live in this city. I moved here in 2020.", options: [], correctAnswer: "I have been living in this city since 2020.", explanation: "Present Perfect Continuous." },
          { id: 'e_mt16', text: "Rewrite using a spontaneous decision: I didn’t plan to help you, but now I decide to.", options: [], correctAnswer: "I will help you.", explanation: "Will for spontaneous decisions." },
          { id: 'e_mt17', text: "Correct the sentence: I have seen him last weekend.", options: [], correctAnswer: "I saw him last weekend.", explanation: "Specific past time -> Past Simple." },
          { id: 'e_mt18', text: "Correct the sentence: When we arrived, the concert has started.", options: [], correctAnswer: "When we arrived, the concert had started.", explanation: "Sequence in past -> Past Perfect." },
          { id: 'e_mt19', text: "Correct the sentence: By next year, I will have been finish my degree.", options: [], correctAnswer: "By next year, I will have finished my degree.", explanation: "Completion -> Future Perfect Simple." },
          { id: 'e_mt20', text: "Rewrite to emphasise an ongoing action before a future moment: By tomorrow, I will complete the report.", options: [], correctAnswer: "By tomorrow, I will have been working on the report.", explanation: "Future Perfect Continuous (context usually requires duration, e.g., 'for 2 days'). But this asks to emphasize ongoing nature." }
        ]
      }
    ]
  },
  {
    id: 'grammar-structures',
    title: 'Grammar Structures',
    description: 'Domina la construcción de oraciones complejas: Relativas, Pasivas y Condicionales.',
    color: 'bg-violet-500',
    topics: [
      {
        id: 'relative-clauses',
        title: 'Relative Clauses',
        description: 'Defining vs Non-defining. Who, which, that, whose & omission.',
        icon: 'Link',
        manualTheory: `# Relative Clauses: The Connection 🔗

Las oraciones de relativo sirven para dar información sobre una persona o cosa sin empezar una frase nueva.

## 1. Defining Relative Clauses (Esenciales) 🎯
Dan información **necesaria** para saber de quién o qué estamos hablando. Sin ella, la frase no se entiende bien.
*   **No llevan comas.**
*   Puedes usar **THAT** en lugar de Who/Which.
*   Puedes **omitir** el pronombre si NO es el sujeto (si hay otro sujeto después: *The book (that) **I** bought*).

*   *Example:* "The book **(that)** I bought is good." (Define qué libro).

## 2. Non-Defining Relative Clauses (Extra) ➕
Dan información **extra** o curiosa. Si la quitas, la frase sigue teniendo sentido completo.
*   **Siempre entre comas** (como un paréntesis).
*   ❌ NUNCA uses **THAT**.
*   ❌ NUNCA omitas el pronombre.

*   *Example:* "My brother, **who** lives in London, is visiting." (Ya sabes quién es mi hermano, lo de Londres es extra).

## 3. The Pronouns 🔑
*   **Who:** Personas.
*   **Which:** Cosas/Animales.
*   **That:** Personas/Cosas (Solo en Defining).
*   **Whose:** Posesión (Cuyo/a). *The man **whose** car is red.*
*   **Where / When / Why:** Lugares, tiempos, razones.

> **Pildora Clave:**
> Si ves **comas**, PROHIBIDO poner **THAT**.
> Si el pronombre va seguido de un verbo (*who is...*), NO se puede omitir.

---

## 4. Spot the difference 🕵️‍♂️

<!-- COMIC_PLACEHOLDER -->

### The Contrast
*   **Panel 1 (Defining):** "The runner **who is winning** is fast." (Especificamos cuál de los corredores).
*   **Panel 2 (Non-defining):** "Usain Bolt, **who is winning**, is fast." (Ya sabemos quién es, es info extra).
`,
        manualQuestions: [
          // 🔹 PRÁCTICA 1 – Defining Relative Clauses (uso básico)
          { id: 'rc_p1_1', text: "The girl ___ lives next door is my cousin.", options: ["who", "which", "whose", "whom"], correctAnswer: "who", explanation: "Person + Subject = Who." },
          { id: 'rc_p1_2', text: "This is the book ___ I told you about.", options: ["which", "who", "where", "whose"], correctAnswer: "which", explanation: "Thing + Object = Which (or That/Ø)." },
          { id: 'rc_p1_3', text: "The people ___ car was stolen called the police.", options: ["whose", "which", "who", "whom"], correctAnswer: "whose", explanation: "Possession (The people's car) = Whose." },
          { id: 'rc_p1_4', text: "That’s the restaurant ___ we had dinner last night.", options: ["where", "which", "when", "whose"], correctAnswer: "where", explanation: "Place + Action happening inside = Where." },
          { id: 'rc_p1_5', text: "I like films ___ make me think.", options: ["which", "who", "whose", "where"], correctAnswer: "which", explanation: "Thing + Subject = Which." },
          { id: 'rc_p1_6', text: "The teacher ___ explains this topic is very clear.", options: ["who", "which", "whom", "whose"], correctAnswer: "who", explanation: "Person + Subject = Who." },
          { id: 'rc_p1_7', text: "The exam ___ we did yesterday was very difficult.", options: ["which", "who", "where", "whose"], correctAnswer: "which", explanation: "Thing + Object = Which." },
          { id: 'rc_p1_8', text: "The students ___ phones were confiscated complained.", options: ["whose", "who", "which", "whom"], correctAnswer: "whose", explanation: "Possession (The students' phones)." },
          { id: 'rc_p1_9', text: "This is the moment ___ everything changed.", options: ["when", "which", "where", "whose"], correctAnswer: "when", explanation: "Time = When." },
          { id: 'rc_p1_10', text: "That’s the person ___ I spoke to earlier.", options: ["who", "which", "whose", "where"], correctAnswer: "who", explanation: "Person + Object = Who (or Whom/That/Ø)." },

          // 🔹 PRÁCTICA 2 – Non-defining clauses / omisión del pronombre
          { id: 'rc_p2_1', text: "My brother, ___ lives in London, is visiting us.", options: ["who", "that", "which", "whose"], correctAnswer: "who", explanation: "Person, Non-defining (commas) = Who. Never 'That'." },
          { id: 'rc_p2_2', text: "This book, ___ I bought yesterday, is very interesting.", options: ["which", "that", "who", "whose"], correctAnswer: "which", explanation: "Thing, Non-defining = Which. Never 'That'." },
          { id: 'rc_p2_3', text: "My school, ___ was built in 1920, is very old.", options: ["which", "that", "where", "whose"], correctAnswer: "which", explanation: "Thing, Non-defining = Which." },
          { id: 'rc_p2_4', text: "My aunt, ___ son studies abroad, is a teacher.", options: ["whose", "who", "which", "whom"], correctAnswer: "whose", explanation: "Possession (My aunt's son) + Non-defining." },
          { id: 'rc_p2_5', text: "This city, ___ I was born, has changed a lot.", options: ["where", "which", "when", "whose"], correctAnswer: "where", explanation: "Place + Action inside (born there) + Non-defining." },
          { id: 'rc_p2_6', text: "The film ___ we watched last night was boring.", options: ["Ø", "who", "whose", "where"], correctAnswer: "Ø", explanation: "Defining + Object pronoun can be omitted." },
          { id: 'rc_p2_7', text: "The people ___ I met were very friendly.", options: ["Ø", "who", "whose", "which"], correctAnswer: "Ø", explanation: "Defining + Object pronoun can be omitted." },
          { id: 'rc_p2_8', text: "My parents, ___ I admire a lot, support me.", options: ["who", "that", "Ø", "which"], correctAnswer: "who", explanation: "Non-defining: Cannot use 'that' and cannot omit pronoun (standard grammar rule, though technically object)." },
          { id: 'rc_p2_9', text: "The day ___ we met was unforgettable.", options: ["when", "which", "where", "whose"], correctAnswer: "when", explanation: "Time reference." },
          { id: 'rc_p2_10', text: "My house, ___ windows are very big, is quite cold.", options: ["whose", "which", "where", "who"], correctAnswer: "whose", explanation: "Possession in non-defining clause." },

          // 🔹 PRÁCTICA 3 – Nivel examen / errores frecuentes
          { id: 'rc_p3_1', text: "The man ___ daughter won the prize is very proud.", options: ["whose", "who", "which", "whom"], correctAnswer: "whose", explanation: "Possession is key here." },
          { id: 'rc_p3_2', text: "This is the reason ___ I didn’t call you.", options: ["why", "which", "where", "whose"], correctAnswer: "why", explanation: "Reason + Why." },
          { id: 'rc_p3_3', text: "The students ___ were talking were punished.", options: ["who", "which", "whose", "whom"], correctAnswer: "who", explanation: "Defining relative clause defining 'students'." },
          { id: 'rc_p3_4', text: "The hotel ___ we stayed was very comfortable.", options: ["where", "which", "when", "whose"], correctAnswer: "where", explanation: "Place (stayed THERE)." },
          { id: 'rc_p3_5', text: "The book ___ written by Orwell is very famous.", options: ["which was", "that was", "Ø", "written"], correctAnswer: "which was", explanation: "Full relative clause structure." },
          { id: 'rc_p3_6', text: "Anyone ___ wants to participate must sign up.", options: ["who", "which", "whose", "whom"], correctAnswer: "who", explanation: "Anyone (person) + Subject." },
          { id: 'rc_p3_7', text: "The house ___ built in the 19th century was renovated.", options: ["that was", "which was", "Ø", "being"], correctAnswer: "that was", explanation: "Passive relative clause." },
          { id: 'rc_p3_8', text: "She’s the only person ___ understands me.", options: ["who", "which", "whose", "whom"], correctAnswer: "who", explanation: "Person + Subject. 'That' is also common but not an option." },
          { id: 'rc_p3_9', text: "The film, ___ won several awards, is worth watching.", options: ["which", "that", "Ø", "whose"], correctAnswer: "which", explanation: "Non-defining + Thing." },
          { id: 'rc_p3_10', text: "The place ___ we first met has closed.", options: ["where", "which", "when", "whose"], correctAnswer: "where", explanation: "Place + Action." }
        ],
        examQuestions: [
          // EXAMEN – BLOQUE A (Defining / non-defining clauses)
          { id: 'e_rc1', text: "The girl lives next door. She is my cousin. (Join using a defining relative clause)", options: [], correctAnswer: "The girl who lives next door is my cousin.", explanation: "Defining relative clause identifying the girl." },
          { id: 'e_rc2', text: "My brother lives in London. He is visiting us. (Join using a non-defining relative clause)", options: [], correctAnswer: "My brother, who lives in London, is visiting us.", explanation: "Non-defining (commas) as it adds extra info." },
          { id: 'e_rc3', text: "This is the book. I told you about it. (Join using a relative clause. Omit the pronoun if possible)", options: [], correctAnswer: "This is the book I told you about.", explanation: "Omission of object pronoun." },
          { id: 'e_rc4', text: "My school was built in 1920. It is very old. (Join using a non-defining relative clause)", options: [], correctAnswer: "My school, which was built in 1920, is very old.", explanation: "Non-defining with 'which'." },
          { id: 'e_rc5', text: "The students were punished. They were talking. (Join using a defining relative clause)", options: [], correctAnswer: "The students who were talking were punished.", explanation: "Defining the specific group of students." },
          { id: 'e_rc6', text: "I met a woman. Her son studies abroad. (Join using whose)", options: [], correctAnswer: "I met a woman whose son studies abroad.", explanation: "Possessive relative clause." },

          // EXAMEN – BLOQUE B (Rephrasing y reducción de relativas)
          { id: 'e_rc7', text: "Rewrite using a reduced relative clause: The man who is talking to the teacher is my uncle.", options: [], correctAnswer: "The man talking to the teacher is my uncle.", explanation: "Reduce 'who is talking' to 'talking'." },
          { id: 'e_rc8', text: "Rewrite using a reduced relative clause: The book which was written by Orwell is very famous.", options: [], correctAnswer: "The book written by Orwell is very famous.", explanation: "Reduce 'which was written' to 'written'." },
          { id: 'e_rc9', text: "Rewrite without changing the meaning: This is the place where we first met.", options: [], correctAnswer: "This is the place in which we first met.", explanation: "Formal structure or omitting 'where' is sometimes possible but 'in which' is the standard formal rephrasing." },
          { id: 'e_rc10', text: "Rewrite so that the relative pronoun can be omitted: The film that we watched last night was boring.", options: [], correctAnswer: "The film we watched last night was boring.", explanation: "Just removing the pronoun." },
          { id: 'e_rc11', text: "Rewrite using when: That was the day. We met on that day.", options: [], correctAnswer: "That was the day when we met.", explanation: "Joining with 'when'." },
          { id: 'e_rc12', text: "Rewrite using why: That is the reason. I didn’t answer the phone.", options: [], correctAnswer: "That is the reason why I didn't answer the phone.", explanation: "Joining with 'why'." },

          // EXAMEN – BLOQUE C (Rephrasing tipo Selectividad CLM)
          { id: 'e_rc13', text: "Join the sentences using a relative clause: She is the only person. She understands me.", options: [], correctAnswer: "She is the only person who understands me.", explanation: "Defining clause." },
          { id: 'e_rc14', text: "Rewrite using a non-defining relative clause: My aunt has just published a book. She is a journalist.", options: [], correctAnswer: "My aunt, who is a journalist, has just published a book.", explanation: "Inserting the profession as extra info." },
          { id: 'e_rc15', text: "Rewrite without changing the meaning: I spoke to the man. He owns the shop.", options: [], correctAnswer: "I spoke to the man who owns the shop.", explanation: "Defining clause." },
          { id: 'e_rc16', text: "Rewrite using whose: They live in a house. The windows are very small.", options: [], correctAnswer: "They live in a house whose windows are very small.", explanation: "Possession." },
          { id: 'e_rc17', text: "Correct the sentence: This is the student which won the competition.", options: [], correctAnswer: "This is the student who won the competition.", explanation: "Student = Person -> Who/That." },
          { id: 'e_rc18', text: "Correct the sentence: My brother, that lives in Madrid, is an engineer.", options: [], correctAnswer: "My brother, who lives in Madrid, is an engineer.", explanation: "Non-defining cannot use 'that'." },
          { id: 'e_rc19', text: "Correct the sentence: The film Ø won an Oscar is very famous.", options: [], correctAnswer: "The film which won an Oscar is very famous.", explanation: "Cannot omit subject pronoun." },
          { id: 'e_rc20', text: "Rewrite to make the information non-essential: My teacher who lives near my house is very strict.", options: [], correctAnswer: "My teacher, who lives near my house, is very strict.", explanation: "Adding commas makes it non-defining." }
        ]
      },
      {
        id: 'modal-verbs',
        title: 'Modal Verbs and Perfect Modals',
        description: 'Obligación, permiso, consejos y deducciones en presente y pasado.',
        icon: 'Lock',
        manualTheory: `# Modal Verbs 🔓

Los verbos modales son especiales: no cambian según la persona (I can, She can) y van seguidos de infinitivo sin "to".

## 1. Modals Básicos (Presente/Futuro)

### Obligación y Prohibición 🛑
*   **Must:** Obligación interna (yo creo que es necesario).
*   **Have to:** Obligación externa (leyes, normas).
*   **Mustn't:** Prohibición total. (No lo hagas).
*   **Don't have to:** Falta de obligación. (No es necesario, pero puedes si quieres).

### Habilidad y Permiso 🤸‍♂️
*   **Can:** Habilidad presente o permiso informal.
*   **Could:** Habilidad pasada o permiso formal.
*   **Be able to:** Habilidad (se puede conjugar en todos los tiempos).
*   **May:** Permiso muy formal.

### Consejo y Probabilidad 🤔
*   **Should / Ought to:** Consejo. ("Deberías").
*   **Must:** Deducción segura (99% seguro que sí). "He looks tired, he **must** be working hard."
*   **Can't:** Deducción negativa (99% seguro que no). "It **can't** be true."
*   **May / Might / Could:** Posibilidad (50% puede que sí).

---

## 2. Perfect Modals (Pasado) 🔙

Se usan para hablar del pasado (arrepentimiento, deducciones sobre lo ocurrido).
**Estructura:** Modal + HAVE + Participio (3ª columna).

### Deducciones en Pasado 🕵️‍♀️
*   **Must have + PP:** Seguro que ocurrió.
    *   *The streets are wet. It **must have rained**.*
*   **Can't have + PP:** Seguro que NO ocurrió.
    *   *He **can't have stolen** the money, he was with me.*
*   **Might/May/Could have + PP:** Pudo haber ocurrido (quizás).

### Críticas y Arrepentimiento 🤦‍♂️
*   **Should have + PP:** Debería haber hecho (pero no lo hizo).
    *   *You **should have studied** more.* (Te estoy criticando).
*   **Needn't have + PP:** No era necesario haberlo hecho (pero se hizo).
    *   *You **needn't have brought** food.* (Trajiste comida, pero sobraba).

---

## 3. Spot the difference 🕵️‍♂️

<!-- COMIC_PLACEHOLDER -->

### The Contrast
*   **Panel 1 (Present):** *A messy room.* "You **should clean** your room." (Consejo ahora).
*   **Panel 2 (Past):** *Mom looking at a failed exam.* "You **should have studied**." (Crítica sobre el pasado).
`,
        manualQuestions: [
          // 🔹 PRÁCTICA 1 – Modals básicos (habilidad, permiso, obligación)
          { id: 'mv1_1', text: "You ___ speak during the exam.", options: ["mustn’t", "don’t have to", "couldn’t", "might not"], correctAnswer: "mustn’t", explanation: "Prohibition (Prohibido hablar)." },
          { id: 'mv1_2', text: "I ___ swim when I was five.", options: ["can", "could", "must", "may"], correctAnswer: "could", explanation: "Past ability (when I was five)." },
          { id: 'mv1_3', text: "Students ___ wear a uniform at this school. It’s compulsory.", options: ["should", "may", "must", "could"], correctAnswer: "must", explanation: "Obligation/Rule." },
          { id: 'mv1_4', text: "You ___ bring your ID. It’s optional.", options: ["must", "don’t have to", "shouldn’t", "can’t"], correctAnswer: "don’t have to", explanation: "Lack of obligation (Optional)." },
          { id: 'mv1_5', text: "___ I use your phone, please?", options: ["Must", "Should", "May", "Need"], correctAnswer: "May", explanation: "Polite request/permission." },
          { id: 'mv1_6', text: "He ___ be very good at maths. He always gets top marks.", options: ["can’t", "must", "shouldn’t", "may not"], correctAnswer: "must", explanation: "Positive deduction (Sure it's true)." },
          { id: 'mv1_7', text: "We ___ hurry or we’ll be late.", options: ["can", "may", "must", "could"], correctAnswer: "must", explanation: "Strong necessity." },
          { id: 'mv1_8', text: "You ___ park here. It’s forbidden.", options: ["don’t have to", "must", "mustn’t", "needn’t"], correctAnswer: "mustn’t", explanation: "Prohibition." },
          { id: 'mv1_9', text: "I ___ go now, but I’m not sure yet.", options: ["must", "can’t", "might", "should"], correctAnswer: "might", explanation: "Possibility/Uncertainty." },
          { id: 'mv1_10', text: "He ___ drive yet. He’s only 16.", options: ["mustn’t", "can’t", "shouldn’t", "may not"], correctAnswer: "can’t", explanation: "Inability/Impossibility (legal age)." },

          // 🔹 PRÁCTICA 2 – Modals intermedios (consejo, probabilidad, deducción)
          { id: 'mv2_1', text: "You ___ study more if you want to pass.", options: ["must", "should", "might", "can"], correctAnswer: "should", explanation: "Advice." },
          { id: 'mv2_2', text: "It’s very cloudy. It ___ rain later.", options: ["must", "can’t", "might", "should"], correctAnswer: "might", explanation: "Possibility based on evidence." },
          { id: 'mv2_3', text: "She ___ be at home. The lights are on.", options: ["can’t", "must", "shouldn’t", "needn’t"], correctAnswer: "must", explanation: "Logical deduction." },
          { id: 'mv2_4', text: "You ___ eat so much junk food.", options: ["don’t have to", "might", "shouldn’t", "can"], correctAnswer: "shouldn’t", explanation: "Negative advice." },
          { id: 'mv2_5', text: "He ___ know the answer, but I’m not sure.", options: ["must", "may", "can’t", "should"], correctAnswer: "may", explanation: "Uncertainty." },
          { id: 'mv2_6', text: "We ___ take a taxi. It’s too far to walk.", options: ["might", "could", "should", "must"], correctAnswer: "should", explanation: "Recommendation/Advice." },
          { id: 'mv2_7', text: "That ___ be the answer. It doesn’t make sense.", options: ["must", "might", "can’t", "could"], correctAnswer: "can’t", explanation: "Negative deduction (Impossible)." },
          { id: 'mv2_8', text: "You ___ tell anyone. It’s a secret.", options: ["don’t have to", "mustn’t", "shouldn’t", "can"], correctAnswer: "mustn’t", explanation: "Prohibition (Secret)." },
          { id: 'mv2_9', text: "He looks tired. He ___ work too much.", options: ["must", "can’t", "shouldn’t", "may not"], correctAnswer: "must", explanation: "Deduction." },
          { id: 'mv2_10', text: "___ you mind opening the window?", options: ["Must", "Should", "Would", "Need"], correctAnswer: "Would", explanation: "Polite request structure 'Would you mind...'." },

          // 🔹 PRÁCTICA 3 – Nivel examen / errores frecuentes
          { id: 'mv3_1', text: "You ___ have told me earlier.", options: ["must", "should", "could", "may"], correctAnswer: "should", explanation: "Criticism (You didn't do it, but it was the right thing)." },
          { id: 'mv3_2', text: "He ___ be very rich. He lives in a small flat.", options: ["must", "can’t", "may", "should"], correctAnswer: "can’t", explanation: "Negative deduction." },
          { id: 'mv3_3', text: "Students ___ use their phones during the exam.", options: ["don’t have to", "mustn’t", "shouldn’t", "can"], correctAnswer: "mustn’t", explanation: "Strong prohibition." },
          { id: 'mv3_4', text: "You ___ worry. Everything is under control.", options: ["must", "don’t have to", "can’t", "shouldn’t"], correctAnswer: "don’t have to", explanation: "Lack of necessity." },
          { id: 'mv3_5', text: "She ___ speak three languages fluently.", options: ["may", "should", "can", "mustn’t"], correctAnswer: "can", explanation: "Ability." },
          { id: 'mv3_6', text: "We ___ leave now or we’ll miss the train.", options: ["may", "can", "must", "could"], correctAnswer: "must", explanation: "Urgent necessity." },
          { id: 'mv3_7', text: "He ___ be the teacher. He looks too young.", options: ["must", "can’t", "should", "may"], correctAnswer: "can’t", explanation: "Negative deduction." },
          { id: 'mv3_8', text: "You ___ apologise. You did nothing wrong.", options: ["must", "don’t have to", "shouldn’t", "can’t"], correctAnswer: "don’t have to", explanation: "No obligation." },
          { id: 'mv3_9', text: "I ___ help you later, but I’m not sure.", options: ["must", "can", "might", "should"], correctAnswer: "might", explanation: "Possibility." },
          { id: 'mv3_10', text: "___ you like some help?", options: ["Should", "Must", "Would", "Need"], correctAnswer: "Would", explanation: "Offer." },

          // 🔹 PRÁCTICA 4 – Perfect Modals (PASADO)
          { id: 'mv4_1', text: "She’s late. She ___ the bus.", options: ["must miss", "must have missed", "should miss", "can’t miss"], correctAnswer: "must have missed", explanation: "Past deduction (Sure she missed it)." },
          { id: 'mv4_2', text: "He looks exhausted. He ___ all night.", options: ["must work", "must have worked", "should work", "could work"], correctAnswer: "must have worked", explanation: "Past deduction causing present state." },
          { id: 'mv4_3', text: "They ___ forgotten about the meeting. They didn’t show up.", options: ["must have", "can’t have", "shouldn’t have", "don’t have"], correctAnswer: "must have", explanation: "Deduction based on absence." },
          { id: 'mv4_4', text: "You ___ told her the secret. Now she’s angry.", options: ["must", "could", "shouldn’t have", "might"], correctAnswer: "shouldn’t have", explanation: "Past criticism/Regret." },
          { id: 'mv4_5', text: "He ___ been at home. Nobody answered the phone.", options: ["must have", "can’t have", "should have", "may have"], correctAnswer: "can’t have", explanation: "Negative past deduction (Impossible he was there)." },
          { id: 'mv4_6', text: "She ___ passed the exam. She studied a lot.", options: ["must have", "can’t have", "shouldn’t have", "needn’t have"], correctAnswer: "must have", explanation: "Positive past deduction." },
          { id: 'mv4_7', text: "We ___ taken a taxi. We arrived very late.", options: ["should have", "must have", "might have", "can’t have"], correctAnswer: "should have", explanation: "Regret (We didn't take one, but it was a good idea)." },
          { id: 'mv4_8', text: "He ___ known the answer. He guessed it.", options: ["must have", "can’t have", "may have", "should have"], correctAnswer: "can’t have", explanation: "Negative deduction." },
          { id: 'mv4_9', text: "You ___ worried so much. Everything was fine.", options: ["must have", "shouldn’t have", "can’t have", "may have"], correctAnswer: "shouldn’t have", explanation: "Or 'needn't have'. Criticism of unnecessary past action." },
          { id: 'mv4_10', text: "They ___ heard the news already. I’m not sure.", options: ["must have", "can’t have", "might have", "should have"], correctAnswer: "might have", explanation: "Past possibility." }
        ],
        examQuestions: [
          // EXAMEN A – MODAL VERBS (NORMALES)
          { id: 'e_mv1', text: "It’s compulsory to wear a helmet here. (Rewrite using a modal verb)", options: [], correctAnswer: "You must wear a helmet here.", explanation: "Obligation." },
          { id: 'e_mv2', text: "It’s not necessary to bring food. (Rewrite using a modal verb)", options: [], correctAnswer: "You don't have to bring food.", explanation: "Lack of obligation." },
          { id: 'e_mv3', text: "I advise you to study harder. (Rewrite using a modal verb)", options: [], correctAnswer: "You should study harder.", explanation: "Advice." },
          { id: 'e_mv4', text: "I’m sure he is at home. (Rewrite using a modal verb)", options: [], correctAnswer: "He must be at home.", explanation: "Deduction." },
          { id: 'e_mv5', text: "It’s possible that she arrives late. (Rewrite using a modal verb)", options: [], correctAnswer: "She might arrive late.", explanation: "Possibility." },
          { id: 'e_mv6', text: "It’s forbidden to park here. (Rewrite using a modal verb)", options: [], correctAnswer: "You mustn't park here.", explanation: "Prohibition." },
          { id: 'e_mv7', text: "He knows how to speak French. (Rewrite using a modal verb)", options: [], correctAnswer: "He can speak French.", explanation: "Ability." },
          { id: 'e_mv8', text: "I’m not sure if he will help us. (Rewrite using a modal verb)", options: [], correctAnswer: "He might help us.", explanation: "Uncertainty." },
          { id: 'e_mv9', text: "You are not allowed to use your phone. (Rewrite using a modal verb)", options: [], correctAnswer: "You mustn't use your phone.", explanation: "Prohibition." },
          { id: 'e_mv10', text: "I politely ask you to open the window. (Rewrite using a modal verb)", options: [], correctAnswer: "Would you open the window?", explanation: "Polite request." },
          { id: 'e_mv11', text: "I don’t think that is the correct answer. (Rewrite using a modal verb)", options: [], correctAnswer: "That can't be the correct answer.", explanation: "Negative deduction." },
          { id: 'e_mv12', text: "It’s a good idea to save some money. (Rewrite using a modal verb)", options: [], correctAnswer: "You should save some money.", explanation: "Advice." },
          { id: 'e_mv13', text: "He has the ability to solve the problem. (Rewrite using a modal verb)", options: [], correctAnswer: "He can solve the problem.", explanation: "Ability." },
          { id: 'e_mv14', text: "There is no obligation to come tomorrow. (Rewrite using a modal verb)", options: [], correctAnswer: "You don't have to come tomorrow.", explanation: "Lack of obligation." },
          { id: 'e_mv15', text: "I’m certain she understands the problem. (Rewrite using a modal verb)", options: [], correctAnswer: "She must understand the problem.", explanation: "Deduction." },

          // EXAMEN B – PERFECT MODALS (PASADO)
          { id: 'e_mv16', text: "I’m sure she forgot my message. (Rewrite using a perfect modal)", options: [], correctAnswer: "She must have forgotten my message.", explanation: "Past deduction." },
          { id: 'e_mv17', text: "It’s possible that he didn’t hear the phone. (Rewrite using a perfect modal)", options: [], correctAnswer: "He might not have heard the phone.", explanation: "Past possibility (negative)." },
          { id: 'e_mv18', text: "It was a mistake to tell him the secret. (Rewrite using a perfect modal)", options: [], correctAnswer: "You shouldn't have told him the secret.", explanation: "Regret." },
          { id: 'e_mv19', text: "I’m sure they arrived late. (Rewrite using a perfect modal)", options: [], correctAnswer: "They must have arrived late.", explanation: "Past deduction." },
          { id: 'e_mv20', text: "It wasn’t necessary to buy tickets. (Rewrite using a perfect modal)", options: [], correctAnswer: "You needn't have bought tickets.", explanation: "Unnecessary past action." },
          { id: 'e_mv21', text: "I’m sure he wasn’t at home. (Rewrite using a perfect modal)", options: [], correctAnswer: "He can't have been at home.", explanation: "Negative past deduction." },
          { id: 'e_mv22', text: "It’s possible that she passed the exam. (Rewrite using a perfect modal)", options: [], correctAnswer: "She might have passed the exam.", explanation: "Past possibility." },
          { id: 'e_mv23', text: "It was wrong to speak to her like that. (Rewrite using a perfect modal)", options: [], correctAnswer: "You shouldn't have spoken to her like that.", explanation: "Criticism." },
          { id: 'e_mv24', text: "I’m certain they didn’t understand the instructions. (Rewrite using a perfect modal)", options: [], correctAnswer: "They can't have understood the instructions.", explanation: "Negative past deduction." },
          { id: 'e_mv25', text: "It’s possible he took the wrong bus. (Rewrite using a perfect modal)", options: [], correctAnswer: "He might have took the wrong bus.", explanation: "Past possibility." },
          { id: 'e_mv26', text: "There was no need to hurry. (Rewrite using a perfect modal)", options: [], correctAnswer: "We needn't have hurried.", explanation: "Unnecessary action." },
          { id: 'e_mv27', text: "I’m sure she studied a lot. (Rewrite using a perfect modal)", options: [], correctAnswer: "She must have studied a lot.", explanation: "Past deduction." },
          { id: 'e_mv28', text: "It’s possible they misunderstood the question. (Rewrite using a perfect modal)", options: [], correctAnswer: "They might have misunderstood the question.", explanation: "Past possibility." },
          { id: 'e_mv29', text: "It was a bad idea not to apologise. (Rewrite using a perfect modal)", options: [], correctAnswer: "You should have apologised.", explanation: "Regret/Criticism." },
          { id: 'e_mv30', text: "I’m sure he knew the answer. (Rewrite using a perfect modal)", options: [], correctAnswer: "He must have known the answer.", explanation: "Past deduction." }
        ]
      }
    ]
  }
];