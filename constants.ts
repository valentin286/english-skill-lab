import { Category } from './types';

// URL de la imagen del cómic por defecto (fallback).
const COMIC_IMAGE_URL = "https://img.freepik.com/free-vector/pixel-art-detective-investigation-scene_23-2148064371.jpg?w=1380&t=st=1708960000~exp=1708960600~hmac=e7c8e7b8e7b8e7b8";

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
          // ... (Questions remain the same)
          { id: 'psc_adv_1', text: "Normally I ___ (finish) work at 5, but this week I ___ (work) until 7.", options: ["finish / am working", "am finishing / work", "finish / work", "am finishing / am working"], correctAnswer: "finish / am working", explanation: "'Normally' indica rutina (Simple). 'This week' indica una situación temporal excepcional (Continuous)." },
          { id: 'psc_adv_2', text: "Look at that man! He ___ (try) to open your car door!", options: ["is trying", "tries", "does try", "has tried"], correctAnswer: "is trying", explanation: "'Look!' nos sitúa inmediatamente en el momento presente. Acción en desarrollo." },
          { id: 'psc_adv_3', text: "My sister ___ (live) in London, but currently she ___ (stay) with us in Madrid.", options: ["lives / is staying", "is living / stays", "lives / stays", "is living / is staying"], correctAnswer: "lives / is staying", explanation: "Residencia permanente (Simple) vs Alojamiento temporal (Continuous)." },
          
          { id: 'psc_stat_1', text: "I ___ (think) your idea is great, but I ___ (think) about the risks too.", options: ["think / am thinking", "am thinking / think", "think / think", "am thinking / am thinking"], correctAnswer: "think / am thinking", explanation: "Primero expresa opinión (Stative -> Simple). Segundo expresa el proceso mental de reflexionar (Action -> Continuous)." },
          { id: 'psc_stat_2', text: "Why ___ (you/smell) the milk? ___ (it/smell) bad?", options: ["are you smelling / Does it smell", "do you smell / Is it smelling", "are you smelling / Is it smelling", "do you smell / Does it smell"], correctAnswer: "are you smelling / Does it smell", explanation: "La acción voluntaria de oler es continua. La cualidad de tener olor es stative (Simple)." },
          { id: 'psc_stat_3', text: "This soup ___ (taste) delicious, implying the chef ___ (taste) it frequently while cooking.", options: ["tastes / tastes", "is tasting / is tasting", "tastes / is tasting", "is tasting / tastes"], correctAnswer: "tastes / is tasting", explanation: "Tener sabor (estado) vs Probar algo deliberadamente (acción)." },
          { id: 'psc_stat_4', text: "I ___ (see) what you mean, but I ___ (see) the dentist later so I can't stay.", options: ["see / am seeing", "am seeing / see", "see / see", "am seeing / am seeing"], correctAnswer: "see / am seeing", explanation: "'Entender' (See) es stative. 'Tener cita' (Seeing) es una acción futura planificada." },
          
          { id: 'psc_cplx_1', text: "The population of the world ___ (rise) very fast.", options: ["is rising", "rises", "does rise", "has risen"], correctAnswer: "is rising", explanation: "Tendencias y cambios graduales actuales se expresan en Present Continuous." },
          { id: 'psc_cplx_2', text: "You ___ (always/complain)! It's so annoying.", options: ["are always complaining", "always complain", "do always complain", "complain always"], correctAnswer: "are always complaining", explanation: "Present Continuous con 'always' expresa queja o irritación por un hábito repetitivo." },
          { id: 'psc_cplx_3', text: "He ___ (be) usually very polite, but today he ___ (be) incredibly rude.", options: ["is / is being", "is being / is", "is / is", "is being / is being"], correctAnswer: "is / is being", explanation: "El verbo 'to be' en continuo ('is being') significa 'comportarse de esta manera temporalmente'." },
          { id: 'psc_cplx_4', text: "I ___ (not/mind) cleaning up, but I ___ (not/want) to do it right now.", options: ["don't mind / don't want", "am not minding / am not wanting", "don't mind / am not wanting", "am not minding / don't want"], correctAnswer: "don't mind / don't want", explanation: "Tanto 'mind' como 'want' son verbos de estado (Stative Verbs), van en Simple." },
          
          { id: 'psc_hl_1', text: "Who ___ (this coat/belong) to?", options: ["does this coat belong", "is this coat belonging", "belongs this coat", "does belong this coat"], correctAnswer: "does this coat belong", explanation: "'Belong' indica posesión, es estrictamente stative." },
          { id: 'psc_hl_2', text: "Don't turn off the TV. I ___ (watch) it.", options: ["am watching", "watch", "see", "am seeing"], correctAnswer: "am watching", explanation: "Acción en progreso interrumpida por una orden negativa." },
          { id: 'psc_hl_3', text: "Air ___ (consist) mainly of nitrogen and oxygen.", options: ["consists", "is consisting", "consist", "does consist"], correctAnswer: "consists", explanation: "Hecho científico / Verdad universal = Present Simple." },
          { id: 'psc_hl_4', text: "I ___ (weigh) 70 kilos, but I ___ (weigh) my suitcase now to check the limit.", options: ["weigh / am weighing", "am weighing / weigh", "weigh / weigh", "am weighing / am weighing"], correctAnswer: "weigh / am weighing", explanation: "Estado de tener peso vs Acción de usar la báscula." },
          { id: 'psc_hl_5', text: "Can you hear that? What ___ (you/talk) about? I ___ (not/hear) anything.", options: ["are you talking / don't hear", "do you talk / am not hearing", "are you talking / am not hearing", "do you talk / don't hear"], correctAnswer: "are you talking / don't hear", explanation: "'Hear' es percepción involuntaria (Simple). La conversación es una acción en curso." },
          
          { id: 'psc_ex_1', text: "Every Monday, Sally ___ (drive) her kids to football practice.", options: ["drives", "is driving", "drive", "is drive"], correctAnswer: "drives", explanation: "Rutina semanal (Every Monday)." },
          { id: 'psc_ex_2', text: "Shh! Be quiet. The baby ___ (sleep).", options: ["is sleeping", "sleeps", "sleeping", "does sleep"], correctAnswer: "is sleeping", explanation: "Acción ocurriendo ahora mismo." },
          { id: 'psc_ex_3', text: "___ (you/believe) in ghosts?", options: ["Do you believe", "Are you believing", "Believe you", "Do you believing"], correctAnswer: "Do you believe", explanation: "Creencia/Opinión mental = Stative." },
          { id: 'psc_ex_4', text: "My father ___ (not/work) today because he has the flu.", options: ["isn't working", "doesn't work", "not works", "don't work"], correctAnswer: "isn't working", explanation: "Situación temporal (today) que rompe la rutina." },
          { id: 'psc_ex_5', text: "Generally, vegetables ___ (contain) a lot of vitamins.", options: ["contain", "are containing", "contains", "do contain"], correctAnswer: "contain", explanation: "Verdad general." },
          { id: 'psc_ex_6', text: "We ___ (look) for a new flat, but we haven't found one yet.", options: ["are looking", "look", "looking", "do look"], correctAnswer: "are looking", explanation: "Actividad temporal en curso ('estos días')." },
          { id: 'psc_ex_7', text: "She ___ (appear) to be very tired today.", options: ["appears", "is appearing", "appear", "does appear"], correctAnswer: "appears", explanation: "'Appear' en el sentido de 'parecer' es stative." },
          { id: 'psc_ex_8', text: "The band ___ (appear) at the jazz club tonight.", options: ["is appearing", "appears", "does appear", "appearing"], correctAnswer: "is appearing", explanation: "'Appear' en el sentido de 'actuar/presentarse' es una acción futura planificada." },
          { id: 'psc_ex_9', text: "Why ___ (you/look) at me like that? Is there something on my face?", options: ["are you looking", "do you look", "you look", "are you look"], correctAnswer: "are you looking", explanation: "Acción momentánea específica." },
          { id: 'psc_ex_10', text: "Water ___ (flow) downhill.", options: ["flows", "is flowing", "flow", "does flow"], correctAnswer: "flows", explanation: "Ley física inmutable." },
          { id: 'psc_ex_11', text: "You can't see Tom now; he ___ (have) a bath.", options: ["is having", "has", "have", "is hasing"], correctAnswer: "is having", explanation: "Acción en progreso. 'Have' no es posesión aquí." },
          { id: 'psc_ex_12', text: "I ___ (have) no idea what you mean.", options: ["have", "am having", "has", "do have"], correctAnswer: "have", explanation: "Posesión mental (saber) = Stative." },
          { id: 'psc_ex_13', text: "Some people still ___ (think) the earth is flat.", options: ["think", "are thinking", "thinks", "thinking"], correctAnswer: "think", explanation: "Opinión/Creencia = Stative." }
        ]
      },
      {
        id: 'past-simple-cont',
        title: 'Past Simple vs Past Continuous',
        description: 'Acciones terminadas vs Acciones en desarrollo.',
        icon: 'History',
        manualTheory: `# Past Simple vs Past Continuous

## 1. La Diferencia Fundamental

### Past Simple (Acción Terminada)
Describe acciones completas que ocurrieron en un momento específico del pasado. Se usa para narrar la secuencia principal de una historia.
* **Keywords:** Yesterday, last night, in 1999, suddenly, then.
* *Example:* "I **woke** up, **ate** breakfast, and **left**." (Secuencia: una detrás de otra).

### Past Continuous (Acción en Progreso)
Describe una acción que estaba ocurriendo (estaba "viva") en un momento específico del pasado. Establece el contexto o la atmósfera.
* **Keywords:** While, as, all day, at 5pm yesterday.
* *Example:* "At 8am, I **was sleeping**." (En ese preciso instante, la acción no había terminado).

---

## 2. La "Interrupción" Clásica
Es el uso más común en exámenes. Una acción larga (fondo) es interrumpida por una acción corta (evento).

*   **Long Action:** Past Continuous (Was/Were + -ing).
*   **Short Action:** Past Simple (-ed / Irregular).
*   **Conector:** **WHEN** (suele ir con Simple) o **WHILE** (suele ir con Continuous).

> *I **was watching** TV (larga) **when** she **called** (corta).*
> *She **called** (corta) **while** I **was watching** TV (larga).*

---

## 3. Acciones Paralelas
Dos acciones largas que ocurren al mismo tiempo. Ninguna interrumpe a la otra.
*   *I **was reading** while he **was cooking**.*
*   Ambas en Past Continuous.

---

## 4. Setting the Scene (Atmósfera)
En las historias, usamos Continuous para describir el fondo antes de que empiece la acción real.
*   *The sun **was shining**, the birds **were singing**... suddenly, the door **opened**.*

<!-- COMIC_PLACEHOLDER -->

### The Contrast
*   **Panel 1 (Past Continuous):** *He was investigating.* (El proceso largo).
*   **Panel 2 (Past Simple):** *He found a clue.* (El momento puntual del hallazgo).
`,
        manualQuestions: [
          // 1. Interruption (The Classic)
          { id: 'ppc_int_1', text: "I ___ (walk) down the street when I ___ (see) Dave.", options: ["was walking / saw", "walked / was seeing", "was walking / was seeing", "walked / saw"], correctAnswer: "was walking / saw", explanation: "Acción larga (caminar) interrumpida por evento puntual (ver)." },
          { id: 'ppc_int_2', text: "She ___ (break) her leg while she ___ (ski).", options: ["broke / was skiing", "was breaking / skied", "broke / skied", "was breaking / was skiing"], correctAnswer: "broke / was skiing", explanation: "El accidente (corta) ocurre en medio de la actividad (larga)." },
          { id: 'ppc_int_3', text: "When the phone ___ (ring), I ___ (have) a shower.", options: ["rang / was having", "was ringing / had", "rang / had", "was ringing / was having"], correctAnswer: "rang / was having", explanation: "El teléfono suena (corta) en medio de la ducha (larga)." },
          { id: 'ppc_int_4', text: "It ___ (start) to rain while we ___ (wait) for the bus.", options: ["started / were waiting", "was starting / waited", "started / waited", "was starting / were waiting"], correctAnswer: "started / were waiting", explanation: "La lluvia empieza (puntual) durante la espera (proceso)." },
          { id: 'ppc_int_5', text: "I ___ (do) my homework when the lights ___ (go) out.", options: ["was doing / went", "did / went", "was doing / were going", "did / were going"], correctAnswer: "was doing / went", explanation: "Apagón (puntual) interrumpe la tarea (larga)." },
          
          // 2. Parallel Actions
          { id: 'ppc_par_1', text: "While I ___ (study), my brother ___ (play) video games.", options: ["was studying / was playing", "studied / played", "was studying / played", "studied / was playing"], correctAnswer: "was studying / was playing", explanation: "Dos acciones largas ocurriendo simultáneamente." },
          { id: 'ppc_par_2', text: "Martha ___ (cook) dinner while Tom ___ (read) the newspaper.", options: ["was cooking / was reading", "cooked / read", "was cooking / read", "cooked / was reading"], correctAnswer: "was cooking / was reading", explanation: "Acciones paralelas, nadie interrumpe a nadie." },
          { id: 'ppc_par_3', text: "Nobody ___ (listen) while the teacher ___ (explain) the grammar.", options: ["was listening / was explaining", "listened / explained", "was listening / explained", "listened / was explaining"], correctAnswer: "was listening / was explaining", explanation: "Dos estados/acciones continuas simultáneas." },
          
          // 3. Sequence vs Continuous (Narrative)
          { id: 'ppc_nar_1', text: "He ___ (wake) up, ___ (have) breakfast and ___ (go) to work.", options: ["woke / had / went", "was waking / was having / was going", "woke / was having / went", "was waking / had / went"], correctAnswer: "woke / had / went", explanation: "Secuencia de acciones terminadas (Lista de eventos) -> Todo Simple." },
          { id: 'ppc_nar_2', text: "When I ___ (arrive) at the party, everyone ___ (dance).", options: ["arrived / was dancing", "was arriving / danced", "arrived / danced", "was arriving / was dancing"], correctAnswer: "arrived / was dancing", explanation: "Yo llegué (punto) y me encontré una escena en progreso (fondo)." },
          { id: 'ppc_nar_3', text: "She ___ (open) the letter and ___ (smile).", options: ["opened / smiled", "was opening / was smiling", "opened / was smiling", "was opening / smiled"], correctAnswer: "opened / smiled", explanation: "Acciones consecutivas rápidas." },
          { id: 'ppc_nar_4', text: "It was a beautiful day. The sun ___ (shine) and the birds ___ (sing).", options: ["was shining / were singing", "shone / sang", "was shining / sang", "shone / were singing"], correctAnswer: "was shining / were singing", explanation: "Estableciendo la atmósfera (Setting the scene)." },
          
          // 4. Specific Time
          { id: 'ppc_time_1', text: "What ___ (you/do) at 8pm last night?", options: ["were you doing", "did you do", "were you do", "did you doing"], correctAnswer: "were you doing", explanation: "Pregunta por una actividad en progreso en una hora exacta." },
          { id: 'ppc_time_2', text: "This time last year, I ___ (live) in Brazil.", options: ["was living", "lived", "am living", "did live"], correctAnswer: "was living", explanation: "'This time last year' enfatiza el punto temporal dentro de un periodo." },
          
          // 5. Stative Verbs in Past (Tricky)
          { id: 'ppc_stat_1', text: "I ___ (want) to leave early yesterday.", options: ["wanted", "was wanting", "did want", "wanting"], correctAnswer: "wanted", explanation: "'Want' es stative verb, no se usa en continuo aunque sea una sensación duradera." },
          { id: 'ppc_stat_2', text: "He ___ (seem) worried when I saw him.", options: ["seemed", "was seeming", "did seem", "seeming"], correctAnswer: "seemed", explanation: "'Seem' es stative. Describe un estado, no una acción." },
          { id: 'ppc_stat_3', text: "We ___ (not/know) the answer when the teacher asked.", options: ["didn't know", "weren't knowing", "didn't knew", "not known"], correctAnswer: "didn't know", explanation: "'Know' es stative. Conocimiento es estado, no proceso." },
          
          // 6. Advanced / Mixed
          { id: 'ppc_adv_1', text: "Rephrasing: 'During the film, I fell asleep.' -> 'While...'", options: ["I was watching the film, I fell asleep.", "I watched the film, I fell asleep.", "the film was, I fell asleep.", "I was seeing the film, I fell asleep."], correctAnswer: "I was watching the film, I fell asleep.", explanation: "During + Noun = While + Subject + Verb (Continuous)." },
          { id: 'ppc_adv_2', text: "She ___ (drive) very fast so she ___ (not/see) the red light.", options: ["was driving / didn't see", "drove / wasn't seeing", "was driving / wasn't seeing", "drove / didn't see"], correctAnswer: "was driving / didn't see", explanation: "Conducir (acción larga) causó que no viera (evento puntual, 'ver' es percepción)." },
          { id: 'ppc_adv_3', text: "The police ___ (stop) him because he ___ (not/wear) a seatbelt.", options: ["stopped / wasn't wearing", "were stopping / didn't wear", "stopped / didn't wear", "were stopping / wasn't wearing"], correctAnswer: "stopped / wasn't wearing", explanation: "La detención (punto) ocurrió porque él estaba en el estado de no llevar cinturón (proceso)." },
          { id: 'ppc_adv_4', text: "When I ___ (get) home, my parents ___ (argue).", options: ["got / were arguing", "was getting / argued", "got / argued", "was getting / were arguing"], correctAnswer: "got / were arguing", explanation: "Llegué y me encontré la discusión ya empezada." },
          { id: 'ppc_adv_5', text: "I ___ (hear) a strange noise while I ___ (turn) off the computer.", options: ["heard / was turning", "was hearing / turned", "heard / turned", "was hearing / was turning"], correctAnswer: "heard / was turning", explanation: "'Hear' (involuntario) interrumpe la acción de apagar." },
          { id: 'ppc_adv_6', text: "They ___ (camp) by the river when the flood ___ (happen).", options: ["were camping / happened", "camped / was happening", "were camping / was happening", "camped / happened"], correctAnswer: "were camping / happened", explanation: "Contexto (camping) interrumpido por evento (inundación)." },
          { id: 'ppc_adv_7', text: "As I ___ (walk) to the station, I ___ (realize) I didn't have my wallet.", options: ["was walking / realized", "walked / was realizing", "was walking / was realizing", "walked / realized"], correctAnswer: "was walking / realized", explanation: "'As' funciona igual que 'While'. 'Realize' es mental instantáneo (Simple)." },
          { id: 'ppc_adv_8', text: "The car ___ (make) strange noises all the way home.", options: ["was making", "made", "did make", "is making"], correctAnswer: "was making", explanation: "Énfasis en la duración y repetición durante el trayecto." },
          { id: 'ppc_adv_9', text: "She ___ (be) annoying! She kept interrupting me.", options: ["was being", "was", "is being", "were"], correctAnswer: "was being", explanation: "Comportamiento temporal deliberado en el pasado." },
          { id: 'ppc_adv_10', text: "I ___ (look) for my keys when I ___ (find) this old photo.", options: ["was looking / found", "looked / was finding", "was looking / was finding", "looked / found"], correctAnswer: "was looking / found", explanation: "La búsqueda (larga) llevó al hallazgo (corto)." }
        ]
      },
      {
        id: 'past-simple-perfect',
        title: 'Past Simple vs Present + Past Perfect',
        description: 'La línea del tiempo: ¿Cuándo ocurrió?',
        icon: 'GitBranch',
        manualTheory: `# Perfect Tenses vs Past Simple

## Present Perfect (Have/Has + Participle)
* **Uso:** Pasado reciente, experiencias de vida (sin fecha), acciones con resultado presente.
* **Keywords:** Just, already, yet, ever, never, for, since.
* **Diferencia:** *I lost my keys* (ayer, fecha concreta) vs *I have lost my keys* (y sigo sin tenerlas ahora).

## Past Perfect (Had + Participle)
* **Uso:** El "pasado del pasado". Una acción ocurrió antes que otra en el pasado.
* **Estructura:** Casi siempre va acompañado de un Past Simple.
* *When I arrived (Past Simple), the train **had left** (Past Perfect).*

> **Pildora Clave:**
> Dibuja una línea temporal.
> AHORA <-- Past Simple <-- **Past Perfect**.
> El Past Perfect es lo más antiguo de la historia.`,
        manualQuestions: [
          { id: 'pp1', text: "By the time we got to the cinema, the film ___ already ___.", options: ["has / started", "had / started", "started", "was / starting"], correctAnswer: "had / started", explanation: "La película empezó ANTES de que llegáramos. Pasado del pasado." },
          { id: 'pp2', text: "I ___ (never/be) to Japan.", options: ["never went", "have never been", "had never been", "was never"], correctAnswer: "have never been", explanation: "Experiencia de vida sin fecha específica = Present Perfect." },
          { id: 'pp3', text: "She ___ (live) here for 10 years.", options: ["lives", "has lived", "is living", "lived"], correctAnswer: "has lived", explanation: "'For 10 years' implica que empezó en el pasado y continúa o es relevante = Present Perfect." },
          { id: 'pp4', text: "Rephrasing: 'I last saw him in 2010.' -> 'I haven't...'", options: ["seen him since 2010.", "saw him since 2010.", "see him for 2010.", "seeing him since 2010."], correctAnswer: "seen him since 2010.", explanation: "Last saw (Simple) -> Haven't seen (Present Perfect + Since)." },
          { id: 'pp5', text: "When I opened the fridge, I realized someone ___ (eat) my cake.", options: ["ate", "has eaten", "had eaten", "was eating"], correctAnswer: "had eaten", explanation: "Se comieron la tarta ANTES de que yo abriera la nevera." },
          { id: 'pp6', text: "Rephrasing: 'The train left before we arrived.' -> 'When we arrived, the train...'", options: ["left.", "has left.", "had left.", "was leaving."], correctAnswer: "had left.", explanation: "Acción previa en el pasado = Past Perfect." },
          { id: 'pp7', text: "Use 'Yet': I haven't finished ___.", options: ["already", "just", "yet", "ever"], correctAnswer: "yet", explanation: "'Yet' se usa en negativas e interrogativas al final de la frase." },
          { id: 'pp8', text: "Did you go to the party yesterday? Yes, I ___.", options: ["did", "have", "went", "gone"], correctAnswer: "did", explanation: "Respuesta corta de Past Simple." },
          { id: 'pp9', text: "Rephrasing: 'It's the first time I eat sushi.' -> 'I have...'", options: ["never eaten sushi before.", "ever eaten sushi.", "eaten sushi before.", "ate sushi never."], correctAnswer: "never eaten sushi before.", explanation: "It's the first time = I have never done it before." },
          { id: 'pp10', text: "After he ___ (finish) his homework, he went out.", options: ["finished", "has finished", "had finished", "was finishing"], correctAnswer: "had finished", explanation: "Primero terminó (Past Perfect), luego salió (Past Simple)." }
        ]
      },
      {
        id: 'perfect-continuous',
        title: 'Present + Past Perfect Continuous',
        description: 'Énfasis en la duración y el proceso.',
        icon: 'Repeat',
        manualTheory: `# Perfect Continuous Tenses

## Present Perfect Continuous
* **Estructura:** Have/Has + been + -ing.
* **Uso:** Acciones que empezaron en el pasado y continúan ahora, enfatizando la **duración** o que acaban de terminar con un efecto visible (cansancio, sudor, charcos).
* *I have been running (estoy sudando).*

## Past Perfect Continuous
* **Estructura:** Had + been + -ing.
* **Uso:** Acción que estaba ocurriendo continuamente hasta otro punto en el pasado.
* *He had been driving for 5 hours when the car broke down.*

> **Diferencia con Simple:**
> Simple = Cuánto / Cuántas veces (Resultado).
> Continuous = Cuánto tiempo (Duración/Proceso).`,
        manualQuestions: [
          { id: 'ppc1', text: "You look tired! Yes, I ___ (run).", options: ["have run", "have been running", "had run", "run"], correctAnswer: "have been running", explanation: "Efecto visible presente (cansancio) de una actividad reciente." },
          { id: 'ppc2', text: "They ___ (wait) for the bus for 30 minutes when it finally arrived.", options: ["waited", "have been waiting", "had been waiting", "were waiting"], correctAnswer: "had been waiting", explanation: "Periodo de tiempo ANTES de un momento pasado (llegada del bus)." },
          { id: 'ppc3', text: "How long ___ you ___ (learn) English?", options: ["have / been learning", "are / learning", "do / learn", "had / learned"], correctAnswer: "have / been learning", explanation: "'How long' suele pedir Perfect Continuous para acciones vivas." },
          { id: 'ppc4', text: "Rephrasing: 'She started cooking at 10am and she is still cooking at 12pm.' -> 'She...'", options: ["is cooking for 2 hours.", "has been cooking for 2 hours.", "cooked for 2 hours.", "had cooked for 2 hours."], correctAnswer: "has been cooking for 2 hours.", explanation: "Acción que empieza en el pasado y continúa = Present Perf Cont." },
          { id: 'ppc5', text: "The ground was wet because it ___ (rain).", options: ["rained", "has rained", "had been raining", "was raining"], correctAnswer: "had been raining", explanation: "Causa en el pasado de un estado pasado. Énfasis en la actividad." },
          { id: 'ppc6', text: "I ___ (read) this book all afternoon and I haven't finished.", options: ["have been reading", "have read", "had read", "read"], correctAnswer: "have been reading", explanation: "Énfasis en la duración 'all afternoon'." },
          { id: 'ppc7', text: "She ___ (drink) three cups of coffee today.", options: ["has been drinking", "has drunk", "drank", "had drunk"], correctAnswer: "has drunk", explanation: "Cantidad (3 cups) = Simple. Duración = Continuous. Aquí indica cantidad." },
          { id: 'ppc8', text: "Rephrasing: 'We moved here 5 years ago.' -> 'We...'", options: ["are living here for 5 years.", "have been living here for 5 years.", "lived here for 5 years.", "had lived here for 5 years."], correctAnswer: "have been living here for 5 years.", explanation: "Vivir es una acción continua que conecta pasado y presente." }
        ]
      },
      {
        id: 'future-tenses',
        title: 'Future Tenses',
        description: 'Will, Going to, Present Continuous y Future Perfect.',
        icon: 'Plane',
        manualTheory: `# Future Tenses

## 1. Will (Future Simple)
* Predicciones sin evidencia (creencias).
* Decisiones espontáneas (*I'll open the door*).
* Promesas y ofertas.

## 2. Going To
* Planes o intenciones.
* Predicciones CON evidencia visual (*Look at those clouds! It's going to rain*).

## 3. Present Continuous
* Planes confirmados con fecha/hora/lugar (Agenda).
* *I'm meeting John tonight.*

## 4. Future Perfect (Will have done)
* Acción que estará terminada para un momento del futuro.
* *By 2050, we **will have discovered** aliens.*

> **Pildora Clave:**
> ¿Es un plan fijo? -> Present Continuous.
> ¿Es una intención? -> Going to.
> ¿Es "ahora mismo decido"? -> Will.`,
        manualQuestions: [
          { id: 'ft1', text: "Look at those clouds! It ___.", options: ["will rain", "is raining", "is going to rain", "rains"], correctAnswer: "is going to rain", explanation: "Predicción con evidencia visual." },
          { id: 'ft2', text: "The phone is ringing. I ___ get it.", options: ["will", "am going to", "am getting", "get"], correctAnswer: "will", explanation: "Decisión espontánea." },
          { id: 'ft3', text: "I ___ (meet) Susan at 8pm tonight.", options: ["will meet", "am meeting", "meet", "met"], correctAnswer: "am meeting", explanation: "Plan confirmado (cita)." },
          { id: 'ft4', text: "By next year, I ___ (finish) my degree.", options: ["will finish", "am finishing", "will have finished", "have finished"], correctAnswer: "will have finished", explanation: "'By [time]' suele indicar Future Perfect (acción completada para entonces)." },
          { id: 'ft5', text: "Rephrasing: 'I have an appointment with the dentist tomorrow.' -> 'I...'", options: ["will see the dentist tomorrow.", "am seeing the dentist tomorrow.", "see the dentist tomorrow.", "going to see the dentist tomorrow."], correctAnswer: "am seeing the dentist tomorrow.", explanation: "Cita confirmada = Present Continuous." },
          { id: 'ft6', text: "Don't worry, I ___ (help) you.", options: ["help", "am helping", "will help", "going to help"], correctAnswer: "will help", explanation: "Promesa / Ofrecimiento." },
          { id: 'ft7', text: "This time tomorrow, we ___ (fly) to Paris.", options: ["will fly", "will be flying", "fly", "have flown"], correctAnswer: "will be flying", explanation: "Future Continuous: Acción en progreso en un momento futuro concreto." },
          { id: 'ft8', text: "Rephrasing: 'Do you intend to buy that car?' -> 'Are you...'", options: ["going to buy that car?", "buying that car?", "will buy that car?", "buy that car?"], correctAnswer: "going to buy that car?", explanation: "Intención = Going to." },
          { id: 'ft9', text: "The train ___ (leave) at 9:00.", options: ["will leave", "is leaving", "leaves", "has left"], correctAnswer: "leaves", explanation: "Horarios de transporte = Present Simple." }
        ]
      }
    ]
  }
];