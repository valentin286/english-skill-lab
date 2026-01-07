import React, { useState, useEffect, useRef } from 'react';
import { CATEGORIES as INITIAL_CATEGORIES, LEAGUES, INITIAL_MISSIONS } from './constants';
import { Category, Topic, AppView, Question, ExamResult, User, Role, StudySession, UserProgress, LeagueTier, Mission } from './types';
import { GoogleGenAI } from "@google/genai";
import { Button } from './components/Button';
import { LoadingSpinner } from './components/LoadingSpinner';
import { 
  BookOpen, 
  Brain, 
  CheckCircle, 
  ChevronLeft, 
  ChevronRight, 
  GraduationCap, 
  Home, 
  Layout, 
  Menu, 
  XCircle, 
  Clock, 
  Briefcase, 
  Plane, 
  Puzzle, 
  Utensils, 
  Newspaper, 
  History, 
  GitBranch, 
  Repeat, 
  FileText, 
  Mail, 
  Link, 
  LogOut, 
  Users, 
  Settings, 
  Plus, 
  Trash2, 
  FolderPlus, 
  Edit3, 
  Save, 
  FileEdit, 
  Eye, 
  Code, 
  Info, 
  Moon, 
  Sun, 
  X, 
  ArrowUp, 
  ArrowDown, 
  BarChart, 
  Calendar, 
  AlertCircle, 
  Lightbulb, 
  Bookmark, 
  Check, 
  Award, 
  MoreVertical, 
  Layers, 
  FileQuestion, 
  Search, 
  Lock, 
  Star, 
  Zap, 
  Image as ImageIcon, 
  Trophy, 
  Medal, 
  Crown, 
  Sparkles, 
  Shield, 
  Target, 
  Flame, 
  FlaskConical, 
  MessageCircle,
  Link2,
  FolderOpen,
  GripVertical,
  Folder,
  CornerDownRight
} from 'lucide-react';

// Initialize AI for Image Generation
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// --- GAMIFICATION HELPERS ---
const calculateLevel = (xp: number) => Math.floor(Math.sqrt(xp / 100)) + 1;
const getLevelProgress = (xp: number) => {
  const level = calculateLevel(xp);
  const currentLevelBaseXP = 100 * Math.pow(level - 1, 2);
  const nextLevelBaseXP = 100 * Math.pow(level, 2);
  return Math.min(100, Math.max(0, ((xp - currentLevelBaseXP) / (nextLevelBaseXP - currentLevelBaseXP)) * 100));
};

const getRank = (percentage: number) => {
  if (percentage === 100) return { name: "LEGEND", emoji: "👑", color: "text-yellow-600 bg-yellow-100 border-yellow-200 dark:bg-yellow-900/40 dark:border-yellow-700 dark:text-yellow-400", icon: Crown };
  if (percentage >= 90) return { name: "ELITE", emoji: "💎", color: "text-cyan-600 bg-cyan-100 border-cyan-200 dark:bg-cyan-900/40 dark:border-cyan-700 dark:text-cyan-400", icon: Award };
  if (percentage >= 70) return { name: "VETERAN", emoji: "⚔️", color: "text-indigo-600 bg-indigo-100 border-indigo-200 dark:bg-indigo-900/40 dark:border-indigo-700 dark:text-indigo-400", icon: Medal };
  if (percentage >= 50) return { name: "SCOUT", emoji: "🧭", color: "text-emerald-600 bg-emerald-100 border-emerald-200 dark:bg-emerald-900/40 dark:border-emerald-700 dark:text-emerald-400", icon: Brain };
  return { name: "ROOKIE", emoji: "🥚", color: "text-slate-500 bg-slate-100 border-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400", icon: BookOpen };
};

// Title based on Level (XP Purpose)
const getUserTitle = (level: number) => {
  if (level >= 50) return "Grandmaster of English";
  if (level >= 20) return "Language Archmage";
  if (level >= 10) return "Grammar Knight";
  if (level >= 5) return "Sentence Builder";
  return "Novice Learner";
};

// Icon mapping helper
const getIcon = (iconName: string) => {
  const icons: Record<string, React.ReactNode> = {
    Clock: <Clock className="w-5 h-5" />,
    History: <History className="w-5 h-5" />,
    GitBranch: <GitBranch className="w-5 h-5" />,
    Repeat: <Repeat className="w-5 h-5" />,
    Plane: <Plane className="w-5 h-5" />,
    Briefcase: <Briefcase className="w-5 h-5" />,
    Puzzle: <Puzzle className="w-5 h-5" />,
    Utensils: <Utensils className="w-5 h-5" />,
    Newspaper: <Newspaper className="w-5 h-5" />,
    BookOpen: <BookOpen className="w-5 h-5" />,
    FileText: <FileText className="w-5 h-5" />,
    Mail: <Mail className="w-5 h-5" />,
    Link: <Link className="w-5 h-5" />,
    Shield: <Shield className="w-5 h-5" />,
    Crown: <Crown className="w-5 h-5" />,
    Zap: <Zap className="w-5 h-5" />,
    Target: <Target className="w-5 h-5" />,
    Calendar: <Calendar className="w-5 h-5" />,
    Layers: <Layers className="w-5 h-5" />,
    Link2: <Link2 className="w-5 h-5" />,
    FolderOpen: <FolderOpen className="w-5 h-5" />
  };
  return icons[iconName] || <BookOpen className="w-5 h-5" />;
};

const INITIAL_USERS: User[] = [
  { id: '1', name: 'Profesor Admin', username: 'admin', role: 'admin', xp: 500, league: 'Gold', impactScore: 100, streakDays: 10, lastActivityDate: '2023-10-27' },
  { id: '2', name: 'Estudiante Demo', username: 'student', role: 'student', xp: 120, league: 'Bronze', impactScore: 10, streakDays: 2, lastActivityDate: '2023-10-27' },
];

// Helper: Normalize Text for flexible matching
const normalizeAnswer = (text: string) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/’/g, "'") // Normalize apostrophes
    .replace(/won't/g, 'will not')
    .replace(/can't/g, 'can not')
    .replace(/shan't/g, 'shall not')
    .replace(/n't/g, ' not')
    .replace(/'re/g, ' are')
    .replace(/'m/g, ' am')
    .replace(/'ll/g, ' will')
    .replace(/'ve/g, ' have')
    .replace(/'d/g, ' would') 
    .replace(/[.,!?;]/g, '') 
    .replace(/\s+/g, ' '); 
};

// --- ADVANCED MARKDOWN RENDERER ---
const renderInlineText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 px-1 rounded">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return <em key={i} className="italic text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/50 px-1 rounded">{part.slice(1, -1)}</em>;
    }
    return part;
  });
};

const renderMarkdown = (text: string, comicConfig?: { onGenerate: () => void, isGenerating: boolean, imageUrl: string | null }) => {
  if (!text) return null;
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];
  let currentCardBuffer: React.ReactNode[] = [];
  let cardTitle = "";

  const flushCard = () => {
    if (currentCardBuffer.length > 0 || cardTitle) {
      elements.push(
        <div key={`card-${elements.length}`} className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border-l-4 border-blue-500 p-6 mb-6 transition-transform hover:scale-[1.01] duration-300">
          {cardTitle && <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><Bookmark className="w-5 h-5 text-blue-500"/> {cardTitle}</h3>}
          <div className="space-y-3">{currentCardBuffer}</div>
        </div>
      );
      currentCardBuffer = [];
      cardTitle = "";
    }
  };

  lines.forEach((line, i) => {
    const trimmed = line.trim();
    if (trimmed === '') return;

    if (line.includes('<!-- COMIC_PLACEHOLDER -->')) {
      if (comicConfig) {
        flushCard();
        elements.push(
          <div key={`comic-${i}`} className="my-8 bg-slate-50 dark:bg-slate-900 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-8 text-center transition-all">
            {comicConfig.imageUrl ? (
               <div className="rounded-lg overflow-hidden shadow-xl animate-in fade-in zoom-in">
                  <img src={comicConfig.imageUrl} alt="AI Generated Comic" className="w-full h-auto" />
               </div>
            ) : (
               <div className="flex flex-col items-center">
                  <ImageIcon className="w-12 h-12 text-slate-400 mb-3" />
                  <p className="text-slate-500 mb-4">Visualiza el concepto con una viñeta generada por IA</p>
                  <Button onClick={comicConfig.onGenerate} disabled={comicConfig.isGenerating} className="flex gap-2">
                    {comicConfig.isGenerating ? <LoadingSpinner message="Creando..." /> : <><Sparkles className="w-4 h-4"/> Generar Comic IA</>}
                  </Button>
               </div>
            )}
          </div>
        );
      }
      return;
    }

    if (line.startsWith('# ')) {
      flushCard();
      elements.push(<h1 key={i} className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">{line.replace('# ', '')}</h1>);
    } 
    else if (line.startsWith('## ')) {
      flushCard();
      cardTitle = line.replace('## ', '');
    }
    else if (line.startsWith('### ')) {
      currentCardBuffer.push(<h4 key={i} className="text-lg font-bold mt-4 text-slate-700 dark:text-slate-200">{line.replace('### ', '')}</h4>);
    }
    else if (line.startsWith('- ') || line.startsWith('* ')) {
      currentCardBuffer.push(
        <li key={i} className="ml-4 list-none relative pl-6 text-slate-700 dark:text-slate-300 py-1">
          <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-teal-500"></span>
          {renderInlineText(line.replace(/^[-*] /, ''))}
        </li>
      );
    }
    else {
      currentCardBuffer.push(<p key={i} className="text-slate-600 dark:text-slate-300 leading-relaxed">{renderInlineText(line)}</p>);
    }
  });

  flushCard(); 
  return <div className="space-y-2">{elements}</div>;
};

// ... LOGIN VIEW & CONTENT EDITOR (unchanged) ...
const LoginView: React.FC<{ onLogin: (username: string) => void }> = ({ onLogin }) => {
  const [input, setInput] = useState('');
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-900 p-4 transition-colors">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg max-w-md w-full border border-slate-200 dark:border-slate-700">
        <h1 className="text-2xl font-bold text-center text-slate-800 dark:text-white mb-8">Valen's English Lab</h1>
        <form onSubmit={(e) => { e.preventDefault(); onLogin(input); }} className="space-y-4">
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Usuario (ej: admin)' className="w-full px-4 py-2 border rounded-lg dark:bg-slate-900 dark:text-white" />
          <Button type="submit" fullWidth>Entrar</Button>
        </form>
      </div>
    </div>
  );
};

const ContentEditor: React.FC<{ topic: Topic; onSave: (updatedTopic: Topic) => void; onCancel: () => void }> = ({ topic, onSave, onCancel }) => {
  const [theory, setTheory] = useState(topic.manualTheory || '');
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between mb-4"><h2 className="text-2xl font-bold dark:text-white">Editor: {topic.title}</h2><div className="flex gap-2"><Button onClick={onCancel} variant="outline">Cancelar</Button><Button onClick={() => onSave({...topic, manualTheory: theory})}>Guardar</Button></div></div>
      <textarea className="w-full h-96 p-4 border rounded-lg font-mono bg-white dark:bg-slate-900 dark:text-white" value={theory} onChange={(e) => setTheory(e.target.value)} placeholder="# Markdown Theory..." />
    </div>
  );
};

export default function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>(() => JSON.parse(localStorage.getItem('app_users') || JSON.stringify(INITIAL_USERS)));
  const [categories, setCategories] = useState<Category[]>(() => JSON.parse(localStorage.getItem('app_categories') || JSON.stringify(INITIAL_CATEGORIES)));
  const [progressHistory, setProgressHistory] = useState<UserProgress[]>(() => JSON.parse(localStorage.getItem('app_progress') || '[]'));
  const [studySessions, setStudySessions] = useState<StudySession[]>(() => JSON.parse(localStorage.getItem('app_sessions') || '[]'));
  const [completedExercises, setCompletedExercises] = useState<Record<string, Record<string, number[]>>>(() => JSON.parse(localStorage.getItem('app_completed_exercises') || '{}'));
  const [missions, setMissions] = useState<Mission[]>(() => JSON.parse(localStorage.getItem('app_missions') || JSON.stringify(INITIAL_MISSIONS)));

  const sessionStartTimeRef = useRef<number | null>(null);
  const [currentView, setCurrentView] = useState<AppView | 'practice-select'>('login');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isTheoryPanelOpen, setIsTheoryPanelOpen] = useState(false);
  const [currentExerciseSet, setCurrentExerciseSet] = useState<number | null>(null);
  const [topicToEdit, setTopicToEdit] = useState<{catId: string, topic: Topic} | null>(null);
  const [editingCatMeta, setEditingCatMeta] = useState<{id: string, title: string, description: string} | null>(null);
  const [theoryContent, setTheoryContent] = useState<string>('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [comicUrl, setComicUrl] = useState<string | null>(null);
  const [isGeneratingComic, setIsGeneratingComic] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [examResult, setExamResult] = useState<ExamResult | null>(null);
  const [adminTab, setAdminTab] = useState<'users' | 'resources' | 'analytics'>('users');
  const [newUserName, setNewUserName] = useState('');
  const [newUserRole, setNewUserRole] = useState<Role>('student');
  const [newCatTitle, setNewCatTitle] = useState('');
  const [newTopicTitle, setNewTopicTitle] = useState('');
  const [editingCategoryId, setEditingCategoryId] = useState<string | null>(null);
  const [analyticsStudentId, setAnalyticsStudentId] = useState<string | null>(null);

  // --- DRAG AND DROP STATE ---
  const [draggedTopic, setDraggedTopic] = useState<{ topicId: string, sourceCatId: string } | null>(null);
  const [activeDropZone, setActiveDropZone] = useState<string | null>(null); // To highlight drop areas
  const [creatingFolderIn, setCreatingFolderIn] = useState<string | null>(null); // CatID where we are typing a new folder name
  const [newFolderName, setNewFolderName] = useState("");

  useEffect(() => {
    if (darkMode) { document.documentElement.classList.add('dark'); localStorage.setItem('theme', 'dark'); } 
    else { document.documentElement.classList.remove('dark'); localStorage.setItem('theme', 'light'); }
  }, [darkMode]);

  useEffect(() => { localStorage.setItem('app_users', JSON.stringify(users)); }, [users]);
  useEffect(() => { localStorage.setItem('app_categories', JSON.stringify(categories)); }, [categories]);
  useEffect(() => { localStorage.setItem('app_progress', JSON.stringify(progressHistory)); }, [progressHistory]);
  useEffect(() => { localStorage.setItem('app_sessions', JSON.stringify(studySessions)); }, [studySessions]);
  useEffect(() => { localStorage.setItem('app_completed_exercises', JSON.stringify(completedExercises)); }, [completedExercises]);
  useEffect(() => { localStorage.setItem('app_missions', JSON.stringify(missions)); }, [missions]);

  // ... (Session Logic, Login, Logout, etc. same as before)
  const startSessionTracking = () => { sessionStartTimeRef.current = Date.now(); };
  const endSessionTracking = (activityType: 'study' | 'practice' | 'exam') => { 
    if (!sessionStartTimeRef.current || !currentUser || !selectedTopic) return;
    const duration = Math.round((Date.now() - sessionStartTimeRef.current) / 1000); 
    setStudySessions(prev => [...prev, { id: Date.now().toString(), userId: currentUser.id, userName: currentUser.name, startTime: sessionStartTimeRef.current!, durationSeconds: duration, activityType, topicId: selectedTopic.id, timestamp: Date.now() }]);
    sessionStartTimeRef.current = null; 
  };

  const handleLogin = (username: string) => {
    const user = users.find(u => u.username.toLowerCase() === username.toLowerCase());
    if (user) { setCurrentUser(user); setCurrentView(user.role === 'admin' ? 'admin-dashboard' : 'dashboard'); } 
    else alert('Usuario no encontrado.');
  };

  const handleLogout = () => { setCurrentUser(null); setCurrentView('login'); setSidebarOpen(false); resetSession(); };
  const goHome = () => { setCurrentView(currentUser?.role === 'admin' ? 'admin-dashboard' : 'dashboard'); resetSession(); };
  const selectCategory = (category: Category) => { setSelectedCategory(category); setCurrentView('topic-detail'); };
  const resetSession = () => { setTheoryContent(''); setQuestions([]); setCurrentQuestionIndex(0); setUserAnswers({}); setShowFeedback(false); setExamResult(null); setComicUrl(null); };

  const generateComic = async () => {
    if (!selectedTopic) return;
    setIsGeneratingComic(true);
    try {
      const prompt = `Create a 2-panel educational comic strip pixel art style about ${selectedTopic.title}.`;
      const response = await ai.models.generateContent({ model: 'gemini-2.5-flash-image', contents: { parts: [{ text: prompt }] } });
      let imgUrl = null;
      for (const part of response.candidates?.[0]?.content?.parts || []) { if (part.inlineData) { imgUrl = `data:image/png;base64,${part.inlineData.data}`; break; } }
      if (imgUrl) setComicUrl(imgUrl);
    } catch (error) { alert("Error generating image."); } finally { setIsGeneratingComic(false); }
  };

  const openContentEditor = (catId: string, topic: Topic) => { setTopicToEdit({ catId, topic }); setCurrentView('content-editor'); };
  const saveContentChanges = (updatedTopic: Topic) => {
    if (!topicToEdit) return;
    setCategories(categories.map(c => c.id === topicToEdit.catId ? { ...c, topics: c.topics.map(t => t.id === updatedTopic.id ? updatedTopic : t) } : c));
    setTopicToEdit(null); setCurrentView('admin-dashboard');
  };
  
  const addUser = () => { if (!newUserName.trim()) return; setUsers([...users, { id: Date.now().toString(), name: newUserName, username: newUserName.toLowerCase().replace(/\s/g, ''), role: newUserRole, xp: 0, league: 'Bronze', impactScore: 0, streakDays: 0, lastActivityDate: new Date().toISOString() }]); setNewUserName(''); };
  const deleteUser = (id: string) => { if (confirm('Confirmar eliminación?')) setUsers(users.filter(u => u.id !== id)); };
  const addCategory = () => { if (!newCatTitle.trim()) return; setCategories([...categories, { id: `cat-${Date.now()}`, title: newCatTitle, description: 'Nueva carpeta', topics: [], color: 'bg-slate-500' }]); setNewCatTitle(''); };
  const deleteCategory = (id: string) => { if (confirm('Confirmar eliminación?')) setCategories(categories.filter(c => c.id !== id)); };
  const updateCategoryMeta = () => { if (!editingCatMeta) return; setCategories(categories.map(c => c.id === editingCatMeta.id ? { ...c, title: editingCatMeta.title, description: editingCatMeta.description } : c)); setEditingCatMeta(null); };
  
  // --- DRAG AND DROP HANDLERS ---
  const handleDragStart = (e: React.DragEvent, topicId: string, sourceCatId: string) => {
    setDraggedTopic({ topicId, sourceCatId });
    e.dataTransfer.setData("text/plain", topicId); // Required for Firefox
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent, zoneId: string) => {
    e.preventDefault(); 
    e.stopPropagation();
    if (activeDropZone !== zoneId) {
        setActiveDropZone(zoneId);
    }
  };

  const handleDrop = (e: React.DragEvent, targetCatId: string, targetGroup?: string) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropZone(null);
    if (!draggedTopic) return;

    setCategories(prevCats => {
        // Deep clone to properly mutate
        const newCats = prevCats.map(c => ({
            ...c,
            topics: c.topics.map(t => ({...t}))
        }));

        const sourceCat = newCats.find(c => c.id === draggedTopic.sourceCatId);
        const targetCat = newCats.find(c => c.id === targetCatId);

        if (!sourceCat || !targetCat) return prevCats;

        const topicIndex = sourceCat.topics.findIndex(t => t.id === draggedTopic.topicId);
        if (topicIndex === -1) return prevCats;

        const [topic] = sourceCat.topics.splice(topicIndex, 1);
        
        // Update group logic
        if (targetGroup === 'ROOT') {
            topic.group = undefined;
        } else if (targetGroup) {
            topic.group = targetGroup;
        } 
        // If targetGroup is undefined, we assume it's a category level drop (which we treat as ROOT usually, or we need precise zoning)
        // In my render, I pass 'ROOT' explicitly for the root zone. 
        // For dynamic "New Folder", I will pass the input value.

        targetCat.topics.push(topic);
        
        return newCats;
    });
    
    setDraggedTopic(null);
    // Reset new folder logic if used
    if (creatingFolderIn === targetCatId && targetGroup === newFolderName) {
        setNewFolderName("");
        setCreatingFolderIn(null);
    }
  };

  const addTopic = (categoryId: string, groupName?: string) => { 
    if (!newTopicTitle.trim()) return; 
    const newTopic: Topic = { id: `topic-${Date.now()}`, title: newTopicTitle, description: 'Pendiente', icon: 'BookOpen', group: groupName }; 
    setCategories(categories.map(c => c.id === categoryId ? { ...c, topics: [...c.topics, newTopic] } : c)); 
    setNewTopicTitle(''); setEditingCategoryId(null); 
  };
  const deleteTopic = (categoryId: string, topicId: string) => { if (confirm('Eliminar tema?')) setCategories(categories.map(c => c.id === categoryId ? { ...c, topics: c.topics.filter(t => t.id !== topicId) } : c)); };

  // ... (Content Functions: prepareContent, startStudy, etc. - Kept Same)
  const prepareContent = (topic: Topic) => { setTheoryContent(topic.manualTheory || "# Sin contenido\n\nEl profesor no ha añadido teoría."); };
  const startStudy = (topic: Topic) => { setSelectedTopic(topic); setCurrentView('study'); startSessionTracking(); prepareContent(topic); };
  const preparePractice = (topic: Topic) => { setSelectedTopic(topic); setCurrentView('practice-select'); };
  const startPractice = (topic: Topic, idx?: number) => { setSelectedTopic(topic); setCurrentView('practice'); startSessionTracking(); setQuestions(topic.manualQuestions || []); };
  const startExam = (topic: Topic) => { setSelectedTopic(topic); setCurrentView('exam'); startSessionTracking(); setQuestions(topic.manualQuestions || []); };
  const handleAnswer = (ans: string) => { setUserAnswers({...userAnswers, [questions[currentQuestionIndex].id]: ans}); setShowFeedback(true); };
  const finishExam = () => { endSessionTracking('practice'); setCurrentView('results'); setExamResult({ score: 5, total: 5, answers: [], xpEarned: 50, type: 'practice', timestamp: Date.now() }); };

  // ... RENDERERS ...
  const renderHeader = () => (
    <header className="sticky top-0 z-40 w-full backdrop-blur-lg bg-white/75 dark:bg-slate-900/75 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {currentUser && <button onClick={() => setSidebarOpen(true)} className="p-2 -ml-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"><Menu className="w-6 h-6" /></button>}
          <div onClick={goHome} className="flex items-center gap-2 cursor-pointer font-bold text-xl tracking-tight text-slate-800 dark:text-white">Valen's <span className="text-blue-600 dark:text-blue-400">English Lab</span></div>
        </div>
        {currentUser && (
          <div className="flex items-center gap-3">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400">{darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}</button>
          </div>
        )}
      </div>
    </header>
  );

  const renderSidebar = () => (
    <>
      {isSidebarOpen && <div className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white dark:bg-slate-900 shadow-2xl transform transition-transform duration-300 z-50 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center"><h2 className="font-bold text-xl dark:text-white">Menu</h2><button onClick={() => setSidebarOpen(false)}><X className="w-5 h-5 text-slate-500" /></button></div>
        <div className="p-4 space-y-2">
           <button onClick={() => { goHome(); setSidebarOpen(false); }} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"><Home className="w-5 h-5"/> Home</button>
           <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 text-red-600"><LogOut className="w-5 h-5"/> Logout</button>
        </div>
      </div>
    </>
  );

  const renderAdminDashboard = () => (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold dark:text-white">Panel de Profesor</h1>
        <div className="flex gap-2">
           <Button variant="outline" onClick={() => setCurrentView('dashboard')}>Ver como Alumno</Button>
           <button onClick={() => setAdminTab('resources')} className={`px-4 py-2 rounded-md font-medium ${adminTab === 'resources' ? 'bg-blue-100 text-blue-700' : 'text-slate-600'}`}>Contenido</button>
        </div>
      </div>

      {adminTab === 'resources' && (
        <div className="space-y-8">
           <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
             <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-lg dark:text-white">Estructura del Curso (Drag & Drop)</h3>
                <div className="flex gap-2">
                   <input placeholder="Nueva Categoría..." className="px-3 py-1 border rounded text-sm dark:bg-slate-900 dark:text-white" value={newCatTitle} onChange={e => setNewCatTitle(e.target.value)} />
                   <Button onClick={addCategory} size="sm"><FolderPlus className="w-4 h-4 mr-2 inline"/> Crear</Button>
                </div>
             </div>
             
             <div className="space-y-6">
                {categories.map(cat => {
                  const groups: Record<string, Topic[]> = {};
                  const rootTopics: Topic[] = [];
                  cat.topics.forEach(t => { if (t.group) { if (!groups[t.group]) groups[t.group] = []; groups[t.group].push(t); } else { rootTopics.push(t); } });

                  return (
                    <div key={cat.id} className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                       <div 
                          className={`bg-slate-50 dark:bg-slate-700/50 p-4 flex justify-between items-center`}
                       >
                          <h4 className="font-bold dark:text-white flex gap-2"><Layout className="w-4 h-4"/> {cat.title}</h4>
                          <button onClick={() => deleteCategory(cat.id)} className="text-red-400 hover:text-red-600"><Trash2 className="w-4 h-4"/></button>
                       </div>

                       <div className="p-4 bg-white dark:bg-slate-800 space-y-4">
                          {/* Folder Creation Zone */}
                          {creatingFolderIn === cat.id ? (
                             <div className="flex items-center gap-2 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800 animate-in fade-in">
                                <Folder className="w-5 h-5 text-amber-500"/>
                                <input autoFocus placeholder="Nombre de carpeta..." className="flex-1 bg-transparent text-sm outline-none dark:text-white" value={newFolderName} onChange={e => setNewFolderName(e.target.value)} />
                                <div 
                                  className={`text-xs text-amber-600 dark:text-amber-400 px-2 py-1 bg-amber-100 dark:bg-amber-900/40 rounded border border-dashed border-amber-300 ${activeDropZone === `new-folder-${cat.id}` ? 'ring-2 ring-amber-500' : ''}`}
                                  onDragOver={(e) => handleDragOver(e, `new-folder-${cat.id}`)}
                                  onDrop={(e) => handleDrop(e, cat.id, newFolderName)}
                                >
                                  Arrastra aquí un tema para crear
                                </div>
                                <button onClick={() => setCreatingFolderIn(null)}><X className="w-4 h-4"/></button>
                             </div>
                          ) : (
                             <button onClick={() => { setCreatingFolderIn(cat.id); setNewFolderName(''); }} className="text-xs flex items-center gap-1 text-slate-500 hover:text-blue-500 font-medium">
                                <FolderPlus className="w-3 h-3"/> Nueva Carpeta
                             </button>
                          )}

                          {/* Existing Folders */}
                          {Object.keys(groups).map(groupName => (
                             <div 
                                key={groupName} 
                                className={`border rounded-lg p-3 transition-colors ${activeDropZone === `${cat.id}-${groupName}` ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50'}`}
                                onDragOver={(e) => handleDragOver(e, `${cat.id}-${groupName}`)}
                                onDrop={(e) => handleDrop(e, cat.id, groupName)}
                             >
                                <h5 className="text-xs font-bold text-slate-500 uppercase mb-2 flex items-center gap-2"><FolderOpen className="w-4 h-4"/> {groupName}</h5>
                                <div className="space-y-2 pl-2 border-l-2 border-slate-200 dark:border-slate-700">
                                   {groups[groupName].map(topic => (
                                      <div key={topic.id} draggable onDragStart={(e) => handleDragStart(e, topic.id, cat.id)} className="flex justify-between items-center p-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded shadow-sm cursor-grab active:cursor-grabbing hover:border-blue-400">
                                         <div className="flex items-center gap-2"><GripVertical className="w-4 h-4 text-slate-300"/><span className="text-sm font-medium dark:text-white">{topic.title}</span></div>
                                         <div className="flex gap-1"><button onClick={() => openContentEditor(cat.id, topic)} className="text-blue-400 hover:text-blue-600"><FileEdit className="w-3 h-3"/></button><button onClick={() => deleteTopic(cat.id, topic.id)} className="text-red-400 hover:text-red-600"><Trash2 className="w-3 h-3"/></button></div>
                                      </div>
                                   ))}
                                </div>
                             </div>
                          ))}

                          {/* Root Topics Zone */}
                          <div 
                             className={`space-y-2 min-h-[3rem] p-2 rounded-lg border-2 border-dashed transition-colors ${activeDropZone === `${cat.id}-ROOT` ? 'border-blue-400 bg-blue-50 dark:bg-blue-900/10' : 'border-transparent'}`}
                             onDragOver={(e) => handleDragOver(e, `${cat.id}-ROOT`)}
                             onDrop={(e) => handleDrop(e, cat.id, 'ROOT')}
                          >
                             {rootTopics.map(topic => (
                                <div key={topic.id} draggable onDragStart={(e) => handleDragStart(e, topic.id, cat.id)} className="flex justify-between items-center p-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded shadow-sm cursor-grab active:cursor-grabbing hover:border-blue-400">
                                   <div className="flex items-center gap-2"><GripVertical className="w-4 h-4 text-slate-300"/><span className="text-sm font-medium dark:text-white">{topic.title}</span></div>
                                   <div className="flex gap-1"><button onClick={() => openContentEditor(cat.id, topic)} className="text-blue-400 hover:text-blue-600"><FileEdit className="w-3 h-3"/></button><button onClick={() => deleteTopic(cat.id, topic.id)} className="text-red-400 hover:text-red-600"><Trash2 className="w-3 h-3"/></button></div>
                                </div>
                             ))}
                             {rootTopics.length === 0 && Object.keys(groups).length === 0 && <div className="text-xs text-slate-400 italic text-center">Arrastra temas aquí</div>}
                          </div>

                          {/* Add Topic */}
                          {editingCategoryId === cat.id ? (
                             <div className="mt-4 p-3 bg-slate-100 dark:bg-slate-900 rounded-lg">
                               <p className="text-xs font-bold text-slate-500 mb-2">Nuevo Tema</p>
                               <div className="flex gap-2 items-center">
                                 <input autoFocus placeholder="Título..." className="flex-1 px-3 py-2 border rounded text-sm dark:bg-slate-800 dark:text-white" value={newTopicTitle} onChange={e => setNewTopicTitle(e.target.value)} onKeyDown={e => e.key === 'Enter' && addTopic(cat.id, creatingFolderIn === cat.id ? newFolderName : undefined)} />
                                 <Button size="sm" onClick={() => addTopic(cat.id, creatingFolderIn === cat.id ? newFolderName : undefined)}>Guardar</Button>
                                 <button onClick={() => { setEditingCategoryId(null); setNewFolderName(''); }}><X className="w-5 h-5 text-slate-400"/></button>
                               </div>
                             </div>
                          ) : (
                             <div className="flex gap-4 mt-2">
                                <button onClick={() => { setEditingCategoryId(cat.id); setNewFolderName(''); }} className="text-sm text-blue-600 font-medium hover:underline flex items-center gap-1"><Plus className="w-4 h-4"/> Añadir Tema</button>
                             </div>
                          )}
                       </div>
                    </div>
                  );
                })}
             </div>
           </div>
        </div>
      )}
    </div>
  );

  const renderDashboard = () => (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-slate-800 dark:text-white mb-4">Hello, {currentUser?.name} 👋</h1>
        <p className="text-slate-600 dark:text-slate-400">Ready to grind? Select a category.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category.id} onClick={() => selectCategory(category)} className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all cursor-pointer border border-slate-200 dark:border-slate-700">
            <div className={`${category.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white`}><Layout className="w-8 h-8" /></div>
            <h3 className="text-2xl font-bold dark:text-white mb-2">{category.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-6">{category.description}</p>
            <div className="flex justify-between items-center"><span className="text-xs font-bold uppercase text-slate-400">{category.topics.length} Topics</span><ChevronRight className="w-5 h-5 text-slate-400"/></div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTopicDetail = () => {
    if (!selectedCategory) return null;
    const groups: Record<string, Topic[]> = {};
    const rootTopics: Topic[] = [];
    selectedCategory.topics.forEach(t => { if(t.group) { if(!groups[t.group]) groups[t.group] = []; groups[t.group].push(t); } else { rootTopics.push(t); }});

    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button onClick={() => setCurrentView('dashboard')} className="flex items-center text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white mb-6"><ChevronLeft className="w-5 h-5 mr-1" /> Volver</button>
        <h1 className="text-3xl font-bold dark:text-white mb-8">{selectedCategory.title}</h1>
        
        {Object.keys(groups).map(groupName => (
           <div key={groupName} className="mb-8">
              <h3 className="flex items-center gap-2 text-xl font-bold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 pb-2 mb-4"><FolderOpen className="w-5 h-5 text-blue-500"/> {groupName}</h3>
              <div className="grid gap-4">
                 {groups[groupName].map(topic => (
                    <div key={topic.id} className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 flex justify-between items-center">
                       <div><h3 className="font-bold dark:text-white">{topic.title}</h3><p className="text-sm text-slate-500">{topic.description}</p></div>
                       <div className="flex gap-2"><Button size="sm" onClick={() => startStudy(topic)}>Estudiar</Button><Button size="sm" variant="outline" onClick={() => preparePractice(topic)}>Practicar</Button></div>
                    </div>
                 ))}
              </div>
           </div>
        ))}

        <div className="grid gap-4">
           {rootTopics.map(topic => (
              <div key={topic.id} className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 flex justify-between items-center">
                 <div><h3 className="font-bold dark:text-white">{topic.title}</h3><p className="text-sm text-slate-500">{topic.description}</p></div>
                 <div className="flex gap-2"><Button size="sm" onClick={() => startStudy(topic)}>Estudiar</Button><Button size="sm" variant="outline" onClick={() => preparePractice(topic)}>Practicar</Button></div>
              </div>
           ))}
        </div>
      </div>
    );
  };

  const renderPracticeSelection = () => {
    if (!selectedTopic) return null;
    const totalQuestions = selectedTopic.manualQuestions?.length || 0;
    const exercisesCount = Math.ceil(totalQuestions / 10);
    const userCompleted = (currentUser && completedExercises[currentUser.id]?.[selectedTopic.id]) || [];
    const isBossUnlocked = exercisesCount > 0 && userCompleted.length === exercisesCount;

    return (
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <button onClick={() => setCurrentView('topic-detail')} className="flex items-center text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors"><ChevronLeft className="w-5 h-5 mr-1" /> Volver</button>
          <div className="text-right"><h2 className="text-2xl font-bold text-slate-800 dark:text-white">{selectedTopic.title}</h2><p className="text-slate-500 dark:text-slate-400 text-sm">Selecciona un nivel</p></div>
        </div>
        {exercisesCount > 0 ? (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: exercisesCount }).map((_, idx) => {
                const isCompleted = userCompleted.includes(idx);
                return (
                  <div key={idx} onClick={() => startPractice(selectedTopic, idx)} className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] cursor-pointer group ${isCompleted ? 'bg-white dark:bg-slate-800 ring-2 ring-emerald-500/50' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'}`}>
                    <div className="flex justify-between items-start mb-6"><div className={`p-4 rounded-xl ${isCompleted ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-500'}`}><Brain className="w-8 h-8"/></div></div>
                    <div><h3 className="text-xl font-bold dark:text-white mb-1">Práctica {idx + 1}</h3><p className="text-slate-500 dark:text-slate-400 text-sm">10 Preguntas</p></div>
                  </div>
                );
              })}
            </div>
            {isBossUnlocked && <div className="p-8 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl text-white flex justify-between items-center cursor-pointer hover:scale-[1.01] transition-transform" onClick={() => startExam(selectedTopic)}><div><h3 className="text-2xl font-bold mb-1">EXAMEN FINAL</h3><p className="text-indigo-200">Demuestra tu maestría.</p></div><Button className="bg-white text-indigo-900">Comenzar</Button></div>}
          </div>
        ) : (
          <div className="text-center py-16"><p className="text-slate-500">No hay ejercicios aún.</p></div>
        )}
      </div>
    );
  };

  const renderQuestionCard = (isExam: boolean) => {
    if (questions.length === 0) return <div>Error cargando preguntas.</div>;
    const question = questions[currentQuestionIndex];
    return (
      <div className="flex flex-col h-[calc(100vh-64px)] overflow-hidden">
        <div className="px-6 py-4 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between shrink-0 z-50 relative">
          <div className="flex items-center gap-4">
             <button onClick={() => { endSessionTracking(isExam ? 'exam' : 'practice'); setCurrentView(isExam ? 'topic-detail' : 'practice-select'); }} className="text-slate-500 hover:text-red-500 transition-colors p-1"><XCircle className="w-7 h-7" /></button>
              <div className="flex flex-col"><span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{isExam ? `EXAMEN` : 'Práctica'}</span><span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Pregunta {currentQuestionIndex + 1} / {questions.length}</span></div>
          </div>
        </div>
        <div className="flex flex-1 overflow-hidden relative">
           <div className="flex-1 overflow-y-auto p-4 md:p-8 flex justify-center">
              <div className="max-w-2xl w-full">
                 <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full mb-8"><div className="bg-blue-600 dark:bg-blue-500 h-1.5 rounded-full transition-all duration-300" style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}></div></div>
                 <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 md:p-10">
                    <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-8 leading-snug">{question.text}</h3>
                    {isExam ? (
                       <div className="mb-8"><input autoFocus type="text" autoComplete="off" className="w-full p-4 text-lg rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white" placeholder="Respuesta..." value={userAnswers[question.id] || ''} onChange={(e) => handleAnswer(e.target.value)} /></div>
                    ) : (
                      <div className="space-y-3 mb-8">
                        {question.options.map((option, idx) => {
                          const isSelected = userAnswers[question.id] === option;
                          const isCorrect = option === question.correctAnswer;
                          let btnClass = "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 relative ";
                          if (showFeedback) {
                             if (isCorrect) btnClass += "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200";
                             else if (isSelected) btnClass += "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200";
                             else btnClass += "border-slate-100 dark:border-slate-700 opacity-50";
                          } else { btnClass += "border-slate-100 dark:border-slate-700 hover:border-blue-400 hover:bg-slate-50 dark:hover:bg-slate-700/50"; }
                          return (
                            <button key={idx} onClick={() => !showFeedback && !userAnswers[question.id] && handleAnswer(option)} disabled={showFeedback} className={btnClass}>
                              <div className="flex items-center justify-between"><span className="font-medium text-lg">{option}</span>{showFeedback && isCorrect && <CheckCircle className="w-6 h-6 text-green-500" />}{showFeedback && isSelected && !isCorrect && <XCircle className="w-6 h-6 text-red-500" />}</div>
                            </button>
                          );
                        })}
                      </div>
                    )}
                    {!isExam && showFeedback && <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-lg mb-8"><h4 className="font-bold text-blue-900 dark:text-blue-200 mb-1">Explicación:</h4><p className="text-blue-800 dark:text-blue-100">{question.explanation}</p></div>}
                    <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-700">
                       <Button variant="ghost" onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))} disabled={currentQuestionIndex === 0} className={currentQuestionIndex === 0 ? 'invisible' : ''}><ChevronLeft className="w-4 h-4 mr-1 inline"/> Anterior</Button>
                       {currentQuestionIndex === questions.length - 1 ? <Button onClick={finishExam} className="bg-green-600">Finalizar <CheckCircle className="w-5 h-5 ml-2 inline"/></Button> : <Button onClick={() => setCurrentQuestionIndex(prev => prev + 1)} disabled={!isExam && !userAnswers[question.id]} className="px-6 py-2">Siguiente <ChevronRight className="w-4 h-4 ml-1 inline"/></Button>}
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    );
  };

  const renderResults = () => {
    if (!examResult) return null;
    const percentage = Math.round((examResult.score / examResult.total) * 100);
    const isPass = percentage >= 50;
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 animate-in fade-in zoom-in duration-300">
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
          <div className={`p-12 text-center ${isPass ? 'bg-gradient-to-b from-green-50 to-white dark:from-green-900/20 dark:to-slate-800' : 'bg-gradient-to-b from-red-50 to-white dark:from-red-900/20 dark:to-slate-800'}`}>
            <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 shadow-xl ${isPass ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>{isPass ? <Trophy className="w-12 h-12" /> : <XCircle className="w-12 h-12" />}</div>
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">{isPass ? 'GG Well Played!' : 'Nice Try!'}</h2>
            <div className="flex justify-center gap-8 mb-8"><div className="text-center"><span className="block text-5xl font-black text-slate-800 dark:text-white mb-1">{percentage}%</span><span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Score</span></div></div>
            <div className="mt-8 flex gap-4"><Button onClick={() => setCurrentView('topic-detail')} variant="outline" fullWidth>Back to Topic</Button><Button onClick={() => setCurrentView('dashboard')} fullWidth>Continue</Button></div>
          </div>
        </div>
      </div>
    );
  };

  const renderStudyMode = () => (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => { endSessionTracking('study'); setCurrentView('topic-detail'); }} className="flex items-center text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors">
          <ChevronLeft className="w-5 h-5 mr-1" /> Volver
        </button>
        <span className="text-sm font-bold uppercase tracking-wider px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">Modo Estudio</span>
      </div>

      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
        {renderMarkdown(theoryContent, {
           onGenerate: generateComic,
           isGenerating: isGeneratingComic,
           imageUrl: comicUrl
        })}
      </div>

      <div className="fixed bottom-0 left-0 w-full p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-700 flex justify-center z-10">
          <Button onClick={() => { endSessionTracking('study'); startPractice(selectedTopic!, 0); }} variant="primary" className="shadow-lg shadow-blue-500/20">
            Ir a Práctica <ChevronRight className="w-4 h-4 ml-2 inline" />
          </Button>
      </div>
      <div className="h-20"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans pb-12 transition-colors duration-200">
      {renderHeader()}
      {renderSidebar()}
      <main className="transition-all duration-300">
        {currentView === 'login' && <LoginView onLogin={handleLogin} />}
        {currentView === 'admin-dashboard' && renderAdminDashboard()}
        {currentView === 'content-editor' && topicToEdit && <ContentEditor topic={topicToEdit.topic} onSave={saveContentChanges} onCancel={() => { setTopicToEdit(null); setCurrentView('admin-dashboard'); }} />}
        {currentView === 'dashboard' && renderDashboard()}
        {currentView === 'topic-detail' && renderTopicDetail()}
        {currentView === 'practice-select' && renderPracticeSelection()}
        {(currentView === 'study' || currentView === 'practice' || currentView === 'exam') && isLoading && <LoadingSpinner />}
        {!isLoading && currentView === 'study' && renderStudyMode()}
        {!isLoading && currentView === 'practice' && renderQuestionCard(false)}
        {!isLoading && currentView === 'exam' && renderQuestionCard(true)}
        {currentView === 'results' && renderResults()}
      </main>
    </div>
  );
}