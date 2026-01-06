import React, { useState, useEffect } from 'react';
import { CATEGORIES as INITIAL_CATEGORIES } from './constants';
import { Category, Topic, AppView, Question, ExamResult, User, Role } from './types';
import { generateTheory, generateQuestions } from './services/geminiService';
import { Button } from './components/Button';
import { LoadingSpinner } from './components/LoadingSpinner';
import { 
  BookOpen, 
  Brain, 
  CheckCircle, 
  ChevronLeft, 
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
  FileEdit
} from 'lucide-react';

// Icon mapping helper
const getIcon = (iconName: string) => {
  const icons: Record<string, React.ReactNode> = {
    Clock: <Clock className="w-6 h-6" />,
    History: <History className="w-6 h-6" />,
    GitBranch: <GitBranch className="w-6 h-6" />,
    Repeat: <Repeat className="w-6 h-6" />,
    Plane: <Plane className="w-6 h-6" />,
    Briefcase: <Briefcase className="w-6 h-6" />,
    Puzzle: <Puzzle className="w-6 h-6" />,
    Utensils: <Utensils className="w-6 h-6" />,
    Newspaper: <Newspaper className="w-6 h-6" />,
    BookOpen: <BookOpen className="w-6 h-6" />,
    FileText: <FileText className="w-6 h-6" />,
    Mail: <Mail className="w-6 h-6" />,
    Link: <Link className="w-6 h-6" />,
  };
  return icons[iconName] || <BookOpen className="w-6 h-6" />;
};

const INITIAL_USERS: User[] = [
  { id: '1', name: 'Profesor Admin', username: 'admin', role: 'admin' },
  { id: '2', name: 'Estudiante Demo', username: 'student', role: 'student' },
];

// Extracted LoginView to prevent conditional hook execution error
const LoginView: React.FC<{ onLogin: (username: string) => void }> = ({ onLogin }) => {
  const [input, setInput] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-600 p-3 rounded-xl">
            <GraduationCap className="text-white w-10 h-10" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-center text-slate-800 mb-2">English Master AI</h1>
        <p className="text-slate-500 text-center mb-8">Accede para continuar aprendiendo</p>
        
        <form onSubmit={(e) => { e.preventDefault(); onLogin(input); }} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Usuario</label>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Ej: admin, student'
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <Button type="submit" fullWidth>Entrar</Button>
        </form>
        <div className="mt-4 text-xs text-center text-slate-400">
          <p>Admin: admin</p>
          <p>User: student</p>
        </div>
      </div>
    </div>
  );
};

// Extracted Content Editor Component
const ContentEditor: React.FC<{ 
  topic: Topic; 
  onSave: (updatedTopic: Topic) => void; 
  onCancel: () => void 
}> = ({ topic, onSave, onCancel }) => {
  const [activeTab, setActiveTab] = useState<'theory' | 'questions'>('theory');
  const [theory, setTheory] = useState(topic.manualTheory || '');
  const [questions, setQuestions] = useState<Question[]>(topic.manualQuestions || []);
  
  // New Question Form State
  const [qText, setQText] = useState('');
  const [qOptions, setQOptions] = useState(['', '', '', '']);
  const [qCorrect, setQCorrect] = useState(0); // Index of correct option
  const [qExplanation, setQExplanation] = useState('');

  const handleSave = () => {
    onSave({
      ...topic,
      manualTheory: theory.trim() !== '' ? theory : undefined,
      manualQuestions: questions.length > 0 ? questions : undefined
    });
  };

  const addQuestion = () => {
    if (!qText || qOptions.some(o => !o)) return alert("Completa todos los campos");
    const newQ: Question = {
      id: Date.now().toString(),
      text: qText,
      options: [...qOptions],
      correctAnswer: qOptions[qCorrect],
      explanation: qExplanation || 'Respuesta correcta.'
    };
    setQuestions([...questions, newQ]);
    // Reset form
    setQText('');
    setQOptions(['', '', '', '']);
    setQCorrect(0);
    setQExplanation('');
  };

  const deleteQuestion = (idx: number) => {
    setQuestions(questions.filter((_, i) => i !== idx));
  };

  const updateOption = (idx: number, val: string) => {
    const newOpts = [...qOptions];
    newOpts[idx] = val;
    setQOptions(newOpts);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Editando: {topic.title}</h2>
        <div className="flex gap-2">
          <Button variant="outline" onClick={onCancel}>Cancelar</Button>
          <Button onClick={handleSave}><Save className="w-4 h-4 mr-2 inline" /> Guardar Cambios</Button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="flex border-b border-slate-200">
          <button 
            onClick={() => setActiveTab('theory')}
            className={`flex-1 py-3 text-sm font-medium ${activeTab === 'theory' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:bg-slate-50'}`}
          >
            Teoría (Markdown)
          </button>
          <button 
            onClick={() => setActiveTab('questions')}
            className={`flex-1 py-3 text-sm font-medium ${activeTab === 'questions' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:bg-slate-50'}`}
          >
            Preguntas ({questions.length})
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'theory' ? (
            <div>
              <p className="text-sm text-slate-500 mb-2">Escribe la teoría en formato Markdown. Si se deja vacío, se usará la IA.</p>
              <textarea 
                className="w-full h-96 p-4 border border-slate-200 rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                value={theory}
                onChange={(e) => setTheory(e.target.value)}
                placeholder="# Título del Tema&#10;&#10;Explicación aquí..."
              />
            </div>
          ) : (
            <div className="space-y-8">
              {/* Existing Questions List */}
              <div className="space-y-4">
                {questions.map((q, idx) => (
                  <div key={q.id} className="p-4 border border-slate-200 rounded-lg bg-slate-50 flex justify-between items-start">
                    <div>
                      <p className="font-medium text-slate-800">{idx + 1}. {q.text}</p>
                      <p className="text-sm text-green-600 mt-1">Correcta: {q.correctAnswer}</p>
                    </div>
                    <button onClick={() => deleteQuestion(idx)} className="text-red-500 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                {questions.length === 0 && <p className="text-slate-400 italic">No hay preguntas manuales. Se usará la IA.</p>}
              </div>

              {/* Add Question Form */}
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h4 className="font-bold text-blue-800 mb-4">Añadir Nueva Pregunta</h4>
                <div className="space-y-3">
                  <input 
                    className="w-full p-2 border rounded" 
                    placeholder="Enunciado de la pregunta"
                    value={qText}
                    onChange={e => setQText(e.target.value)}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {qOptions.map((opt, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <input 
                          type="radio" 
                          name="correctOpt" 
                          checked={qCorrect === i}
                          onChange={() => setQCorrect(i)}
                          className="w-4 h-4 text-blue-600"
                        />
                        <input 
                          className="flex-1 p-2 border rounded text-sm"
                          placeholder={`Opción ${i + 1}`}
                          value={opt}
                          onChange={e => updateOption(i, e.target.value)}
                        />
                      </div>
                    ))}
                  </div>
                  <textarea 
                    className="w-full p-2 border rounded text-sm h-20"
                    placeholder="Explicación de la respuesta correcta..."
                    value={qExplanation}
                    onChange={e => setQExplanation(e.target.value)}
                  />
                  <Button onClick={addQuestion} size="sm" fullWidth>Añadir Pregunta</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  // --- AUTH & DATA STATE ---
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>(() => {
    const saved = localStorage.getItem('app_users');
    return saved ? JSON.parse(saved) : INITIAL_USERS;
  });
  const [categories, setCategories] = useState<Category[]>(() => {
    const saved = localStorage.getItem('app_categories');
    return saved ? JSON.parse(saved) : INITIAL_CATEGORIES;
  });

  // --- APP VIEW STATE ---
  const [currentView, setCurrentView] = useState<AppView>('login');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  
  // Editor State
  const [topicToEdit, setTopicToEdit] = useState<{catId: string, topic: Topic} | null>(null);

  // Content State
  const [theoryContent, setTheoryContent] = useState<string>('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Practice/Exam State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [examResult, setExamResult] = useState<ExamResult | null>(null);

  // Admin UI State
  const [adminTab, setAdminTab] = useState<'users' | 'resources'>('users');
  const [newUserName, setNewUserName] = useState('');
  const [newUserRole, setNewUserRole] = useState<Role>('student');
  const [newCatTitle, setNewCatTitle] = useState('');
  const [newTopicTitle, setNewTopicTitle] = useState('');
  const [editingCategoryId, setEditingCategoryId] = useState<string | null>(null);

  // --- PERSISTENCE ---
  useEffect(() => {
    localStorage.setItem('app_users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem('app_categories', JSON.stringify(categories));
  }, [categories]);

  // --- NAVIGATION & AUTH ACTIONS ---
  const handleLogin = (username: string) => {
    const user = users.find(u => u.username.toLowerCase() === username.toLowerCase());
    if (user) {
      setCurrentUser(user);
      if (user.role === 'admin') {
        setCurrentView('admin-dashboard');
      } else {
        setCurrentView('dashboard');
      }
    } else {
      alert('Usuario no encontrado. Prueba "admin" o "student"');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentView('login');
    resetSession();
    setSelectedCategory(null);
    setSelectedTopic(null);
  };

  const goHome = () => {
    if (currentUser?.role === 'admin') {
      setCurrentView('admin-dashboard');
    } else {
      setCurrentView('dashboard');
    }
    setSelectedCategory(null);
    setSelectedTopic(null);
    resetSession();
  };

  const selectCategory = (category: Category) => {
    setSelectedCategory(category);
    setCurrentView('topic-detail');
  };

  const resetSession = () => {
    setTheoryContent('');
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setShowFeedback(false);
    setExamResult(null);
  };

  // --- CONTENT EDITOR ACTIONS ---
  const openContentEditor = (catId: string, topic: Topic) => {
    setTopicToEdit({ catId, topic });
    setCurrentView('content-editor');
  };

  const saveContentChanges = (updatedTopic: Topic) => {
    if (!topicToEdit) return;
    
    setCategories(categories.map(c => {
      if (c.id === topicToEdit.catId) {
        return {
          ...c,
          topics: c.topics.map(t => t.id === updatedTopic.id ? updatedTopic : t)
        };
      }
      return c;
    }));
    
    setTopicToEdit(null);
    setCurrentView('admin-dashboard');
  };

  // --- ADMIN ACTIONS ---
  const addUser = () => {
    if (!newUserName.trim()) return;
    const newUser: User = {
      id: Date.now().toString(),
      name: newUserName,
      username: newUserName.toLowerCase().replace(/\s/g, ''),
      role: newUserRole
    };
    setUsers([...users, newUser]);
    setNewUserName('');
  };

  const deleteUser = (id: string) => {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      setUsers(users.filter(u => u.id !== id));
    }
  };

  const addCategory = () => {
    if (!newCatTitle.trim()) return;
    const newCat: Category = {
      id: `cat-${Date.now()}`,
      title: newCatTitle,
      description: 'Nueva carpeta de recursos',
      topics: [],
      color: 'bg-slate-500'
    };
    setCategories([...categories, newCat]);
    setNewCatTitle('');
  };

  const deleteCategory = (id: string) => {
    if (confirm('Se eliminarán todos los temas dentro de esta carpeta. ¿Continuar?')) {
      setCategories(categories.filter(c => c.id !== id));
    }
  };

  const addTopic = (categoryId: string) => {
    if (!newTopicTitle.trim()) return;
    const newTopic: Topic = {
      id: `topic-${Date.now()}`,
      title: newTopicTitle,
      description: 'Contenido generado por IA',
      icon: 'BookOpen'
    };
    
    setCategories(categories.map(c => {
      if (c.id === categoryId) {
        return { ...c, topics: [...c.topics, newTopic] };
      }
      return c;
    }));
    setNewTopicTitle('');
    setEditingCategoryId(null);
  };

  const deleteTopic = (categoryId: string, topicId: string) => {
    if (confirm('¿Eliminar este tema?')) {
      setCategories(categories.map(c => {
        if (c.id === categoryId) {
          return { ...c, topics: c.topics.filter(t => t.id !== topicId) };
        }
        return c;
      }));
    }
  };

  // --- CONTENT LOADERS ---
  const startStudy = async (topic: Topic) => {
    setSelectedTopic(topic);
    setIsLoading(true);
    setCurrentView('study');
    
    // Check for manual content first
    if (topic.manualTheory && topic.manualTheory.trim().length > 0) {
      setTheoryContent(topic.manualTheory);
      setIsLoading(false);
      return;
    }

    const content = await generateTheory(topic.title);
    setTheoryContent(content);
    setIsLoading(false);
  };

  const startPractice = async (topic: Topic) => {
    setSelectedTopic(topic);
    setIsLoading(true);
    resetSession();
    setCurrentView('practice');

    // Check for manual questions first
    if (topic.manualQuestions && topic.manualQuestions.length > 0) {
       // Simple shuffle
       const shuffled = [...topic.manualQuestions].sort(() => 0.5 - Math.random()).slice(0, 10);
       setQuestions(shuffled);
       setIsLoading(false);
       return;
    }
    
    const qs = await generateQuestions(topic.title, 5, 'medium');
    setQuestions(qs);
    setIsLoading(false);
  };

  const startExam = async (topic: Topic) => {
    setSelectedTopic(topic);
    setIsLoading(true);
    resetSession();
    setCurrentView('exam');

    // Check for manual questions first
    if (topic.manualQuestions && topic.manualQuestions.length > 0) {
       // Take all available questions for exam, shuffled
       const shuffled = [...topic.manualQuestions].sort(() => 0.5 - Math.random());
       setQuestions(shuffled);
       setIsLoading(false);
       return;
    }
    
    const qs = await generateQuestions(topic.title, 10, 'hard');
    setQuestions(qs);
    setIsLoading(false);
  };

  // --- GAMEPLAY LOGIC ---
  const handleAnswer = (option: string) => {
    const currentQ = questions[currentQuestionIndex];
    setUserAnswers(prev => ({ ...prev, [currentQ.id]: option }));
    if (currentView === 'practice') {
      setShowFeedback(true);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setShowFeedback(false);
    } else {
      finishExam();
    }
  };

  const finishExam = () => {
    let score = 0;
    const results = questions.map(q => {
      const selected = userAnswers[q.id];
      const isCorrect = selected === q.correctAnswer;
      if (isCorrect) score++;
      return { questionId: q.id, selected, correct: q.correctAnswer, isCorrect };
    });
    setExamResult({ score, total: questions.length, answers: results });
    setCurrentView('results');
  };

  // --- VIEWS RENDERERS ---

  const renderAdminDashboard = () => (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Panel de Profesor</h2>
          <p className="text-slate-600">Gestiona tus alumnos y el material del curso.</p>
        </div>
        <div className="flex gap-2">
           <Button onClick={() => setCurrentView('dashboard')} variant="outline">Ver como Alumno</Button>
        </div>
      </div>

      <div className="flex gap-4 mb-6 border-b border-slate-200">
        <button 
          onClick={() => setAdminTab('users')}
          className={`pb-3 px-4 font-medium transition-colors ${adminTab === 'users' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
        >
          <Users className="w-4 h-4 inline mr-2" /> Usuarios
        </button>
        <button 
          onClick={() => setAdminTab('resources')}
          className={`pb-3 px-4 font-medium transition-colors ${adminTab === 'resources' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
        >
          <Settings className="w-4 h-4 inline mr-2" /> Recursos
        </button>
      </div>

      {adminTab === 'users' ? (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex gap-4 mb-6 items-end border-b border-slate-100 pb-6">
            <div className="flex-1">
              <label className="block text-sm font-medium text-slate-700 mb-1">Nombre</label>
              <input 
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Nombre del alumno"
              />
            </div>
            <div className="w-40">
              <label className="block text-sm font-medium text-slate-700 mb-1">Rol</label>
              <select 
                value={newUserRole} 
                onChange={(e) => setNewUserRole(e.target.value as Role)}
                className="w-full px-3 py-2 border rounded-lg bg-white"
              >
                <option value="student">Alumno</option>
                <option value="admin">Profesor</option>
              </select>
            </div>
            <Button onClick={addUser}><Plus className="w-4 h-4 inline mr-1" /> Añadir</Button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-slate-600 text-sm">
                  <th className="p-3 rounded-l-lg">Nombre</th>
                  <th className="p-3">Usuario (Login)</th>
                  <th className="p-3">Rol</th>
                  <th className="p-3 rounded-r-lg text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {users.map(u => (
                  <tr key={u.id} className="hover:bg-slate-50">
                    <td className="p-3 font-medium text-slate-800">{u.name}</td>
                    <td className="p-3 text-slate-500">{u.username}</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${u.role === 'admin' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                        {u.role === 'admin' ? 'Profesor' : 'Alumno'}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      {u.username !== 'admin' && (
                        <button onClick={() => deleteUser(u.id)} className="text-red-500 hover:bg-red-50 p-2 rounded-lg">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-xl border border-slate-200 flex gap-4 items-center">
             <div className="bg-slate-100 p-2 rounded-lg"><FolderPlus className="w-5 h-5 text-slate-600" /></div>
             <input 
                value={newCatTitle} 
                onChange={e => setNewCatTitle(e.target.value)}
                placeholder="Nombre de nueva carpeta..."
                className="flex-1 border-none bg-transparent outline-none font-medium"
             />
             <Button onClick={addCategory} variant="secondary" className="text-sm">Crear Carpeta</Button>
          </div>

          <div className="grid gap-6">
            {categories.map(cat => (
              <div key={cat.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className={`p-4 flex items-center justify-between ${cat.color} bg-opacity-10 border-b border-slate-100`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg ${cat.color} flex items-center justify-center text-white`}>
                      <Layout className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-800">{cat.title}</h3>
                  </div>
                  <button onClick={() => deleteCategory(cat.id)} className="text-red-500 hover:text-red-700 p-1">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="p-4 bg-slate-50 space-y-2">
                  {cat.topics.map(topic => (
                    <div key={topic.id} className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-200">
                      <div className="flex items-center gap-3">
                        <div className="text-slate-400">{getIcon(topic.icon)}</div>
                        <div>
                          <span className="font-medium text-slate-700 block">{topic.title}</span>
                          {(topic.manualTheory || (topic.manualQuestions?.length || 0) > 0) && (
                            <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full flex items-center gap-1 w-fit mt-1">
                              <FileEdit className="w-3 h-3" /> Contenido Manual
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => openContentEditor(cat.id, topic)} 
                          className="text-blue-500 hover:bg-blue-50 p-2 rounded-lg transition-colors"
                          title="Editar Contenido (Teoría y Preguntas)"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => deleteTopic(cat.id, topic.id)} 
                          className="text-slate-400 hover:bg-red-50 hover:text-red-500 p-2 rounded-lg transition-colors"
                        >
                          <XCircle className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                  
                  {editingCategoryId === cat.id ? (
                    <div className="flex gap-2 mt-2 animate-fade-in">
                       <input 
                         autoFocus
                         value={newTopicTitle}
                         onChange={e => setNewTopicTitle(e.target.value)}
                         placeholder="Nombre del tema..."
                         className="flex-1 px-3 py-2 text-sm border rounded-lg"
                         onKeyDown={e => e.key === 'Enter' && addTopic(cat.id)}
                       />
                       <Button onClick={() => addTopic(cat.id)} size="sm" className="px-3 py-1 text-sm">Guardar</Button>
                       <button onClick={() => setEditingCategoryId(null)} className="text-slate-400 hover:text-slate-600 px-2"><XCircle className="w-4 h-4"/></button>
                    </div>
                  ) : (
                    <button 
                      onClick={() => setEditingCategoryId(cat.id)}
                      className="w-full py-2 border-2 border-dashed border-slate-300 rounded-lg text-slate-500 text-sm hover:border-blue-400 hover:text-blue-500 flex items-center justify-center gap-2 transition-colors"
                    >
                      <Plus className="w-4 h-4" /> Añadir Tema
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderHeader = () => {
    if (currentView === 'login') return null;
    return (
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={goHome}>
            <div className="bg-blue-600 p-2 rounded-lg">
              <GraduationCap className="text-white w-6 h-6" />
            </div>
            <h1 className="font-bold text-xl text-slate-800 hidden sm:block">English Master AI</h1>
          </div>
          
          <div className="flex items-center gap-4">
             {currentUser && (
               <div className="flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full">
                 <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs font-bold">
                   {currentUser.name.charAt(0)}
                 </div>
                 <span className="text-sm font-medium text-slate-700 hidden sm:block">{currentUser.name}</span>
               </div>
             )}
             
             {currentUser?.role === 'admin' && currentView !== 'admin-dashboard' && (
                <button onClick={() => setCurrentView('admin-dashboard')} className="text-sm font-medium text-blue-600 hover:text-blue-800">
                  Panel Admin
                </button>
             )}

             <button onClick={handleLogout} className="p-2 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-full" title="Cerrar Sesión">
               <LogOut className="w-5 h-5" />
             </button>
          </div>
        </div>
      </header>
    );
  };

  const renderDashboard = () => (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Recursos de Aprendizaje</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(category => (
          <div 
            key={category.id} 
            onClick={() => selectCategory(category)}
            className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow cursor-pointer group"
          >
            <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
              <Layout className="text-white w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">{category.title}</h3>
            <p className="text-slate-600 text-sm mb-4">{category.description}</p>
            <div className="flex items-center text-blue-600 font-medium text-sm">
              Explorar carpeta <ChevronLeft className="w-4 h-4 rotate-180 ml-1" />
            </div>
          </div>
        ))}
        {categories.length === 0 && (
          <div className="col-span-full text-center py-12 text-slate-500">
             No hay recursos disponibles. Contacta a tu profesor.
          </div>
        )}
      </div>
    </div>
  );

  const renderTopicDetail = () => {
    if (!selectedCategory) return null;
    return (
      <div className="max-w-5xl mx-auto px-4 py-8">
        <button onClick={() => setCurrentView('dashboard')} className="flex items-center text-slate-500 hover:text-blue-600 mb-6">
          <ChevronLeft className="w-5 h-5 mr-1" /> Volver
        </button>
        
        <div className="bg-white rounded-xl p-8 mb-8 border border-slate-200">
           <h2 className="text-3xl font-bold text-slate-800 mb-2">{selectedCategory.title}</h2>
           <p className="text-slate-600">{selectedCategory.description}</p>
        </div>

        <h3 className="text-xl font-bold text-slate-800 mb-4">Temas Disponibles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {selectedCategory.topics.map(topic => (
            <div key={topic.id} className="bg-white rounded-lg border border-slate-200 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 rounded-full text-blue-600">
                  {getIcon(topic.icon)}
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-800">{topic.title}</h4>
                  <p className="text-sm text-slate-500">{topic.description}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full sm:w-auto">
                 <Button variant="outline" onClick={() => startStudy(topic)} className="text-sm">
                    <BookOpen className="w-4 h-4 inline mr-2" /> Estudiar
                 </Button>
                 <Button variant="primary" onClick={() => startPractice(topic)} className="text-sm">
                    <Brain className="w-4 h-4 inline mr-2" /> Practicar
                 </Button>
                 <Button variant="secondary" onClick={() => startExam(topic)} className="text-sm">
                    <CheckCircle className="w-4 h-4 inline mr-2" /> Examen
                 </Button>
              </div>
            </div>
          ))}
          {selectedCategory.topics.length === 0 && (
             <div className="col-span-full p-8 text-center bg-slate-50 rounded-lg text-slate-500">
               No hay temas en esta carpeta aún.
             </div>
          )}
        </div>
      </div>
    );
  };

  const renderStudyMode = () => (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => setCurrentView('topic-detail')} className="flex items-center text-slate-500 hover:text-blue-600">
          <ChevronLeft className="w-5 h-5 mr-1" /> Volver
        </button>
        <span className="text-sm font-medium px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Modo Estudio</span>
      </div>

      {isLoading ? <LoadingSpinner message="Generando explicación detallada con IA..." /> : (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-blue-600 p-6 text-white">
            <h2 className="text-2xl font-bold">{selectedTopic?.title}</h2>
            <p className="opacity-90">Lee atentamente la teoría antes de practicar.</p>
          </div>
          <div className="p-8 prose prose-slate max-w-none">
             {/* Simple markdown rendering replacement */}
             {theoryContent.split('\n').map((line, i) => {
               if (line.startsWith('# ')) return <h1 key={i} className="text-3xl font-bold mb-4">{line.replace('# ', '')}</h1>;
               if (line.startsWith('## ')) return <h2 key={i} className="text-2xl font-bold mt-6 mb-3">{line.replace('## ', '')}</h2>;
               if (line.startsWith('### ')) return <h3 key={i} className="text-xl font-bold mt-4 mb-2">{line.replace('### ', '')}</h3>;
               if (line.startsWith('- ')) return <li key={i} className="ml-4 mb-1">{line.replace('- ', '')}</li>;
               if (line.trim() === '') return <br key={i} />;
               return <p key={i} className="mb-2 text-slate-700 leading-relaxed">{line}</p>;
             })}
          </div>
          <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end">
             <Button onClick={() => startPractice(selectedTopic!)} variant="primary">
               Ir a Práctica <ChevronLeft className="w-4 h-4 rotate-180 ml-2 inline" />
             </Button>
          </div>
        </div>
      )}
    </div>
  );

  const renderQuestionCard = (isExam: boolean) => {
    if (questions.length === 0) return <div>Error cargando preguntas.</div>;
    
    const question = questions[currentQuestionIndex];
    const hasAnswered = !!userAnswers[question.id];

    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => setCurrentView('topic-detail')} className="text-slate-500 hover:text-slate-800">
             Salir
          </button>
          <div className="text-sm font-medium text-slate-500">
            Pregunta {currentQuestionIndex + 1} de {questions.length}
          </div>
        </div>

        <div className="w-full bg-slate-200 h-2 rounded-full mb-8">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
            style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
          ></div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-6 md:p-8">
          <h3 className="text-xl font-semibold text-slate-800 mb-6">{question.text}</h3>
          
          <div className="space-y-3">
            {question.options.map((option, idx) => {
              let btnClass = "w-full text-left p-4 rounded-lg border-2 transition-all ";
              const isSelected = userAnswers[question.id] === option;
              
              if (isExam) {
                // Exam Mode: Just highlight selection
                btnClass += isSelected 
                  ? "border-blue-500 bg-blue-50 text-blue-700" 
                  : "border-slate-200 hover:border-blue-300 text-slate-700";
              } else {
                // Practice Mode: Show immediate Green/Red
                if (showFeedback) {
                   if (option === question.correctAnswer) {
                     btnClass += "border-green-500 bg-green-50 text-green-700";
                   } else if (isSelected) {
                     btnClass += "border-red-500 bg-red-50 text-red-700";
                   } else {
                     btnClass += "border-slate-200 opacity-50";
                   }
                } else {
                   btnClass += "border-slate-200 hover:border-blue-300 text-slate-700";
                }
              }

              return (
                <button 
                  key={idx}
                  onClick={() => !showFeedback && !hasAnswered && handleAnswer(option)}
                  disabled={showFeedback || (isExam && hasAnswered)} 
                  className={btnClass}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {!isExam && showFeedback && option === question.correctAnswer && <CheckCircle className="w-5 h-5 text-green-600" />}
                    {!isExam && showFeedback && isSelected && option !== question.correctAnswer && <XCircle className="w-5 h-5 text-red-600" />}
                  </div>
                </button>
              );
            })}
          </div>

          {!isExam && showFeedback && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg text-blue-800 text-sm animate-fade-in">
              <span className="font-bold block mb-1">Explicación:</span>
              {question.explanation}
            </div>
          )}

          <div className="mt-8 flex justify-end">
            {(showFeedback || (isExam && hasAnswered)) && (
               <Button onClick={nextQuestion}>
                 {currentQuestionIndex < questions.length - 1 ? 'Siguiente Pregunta' : 'Finalizar'}
               </Button>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderResults = () => {
    if (!examResult) return null;
    const percentage = Math.round((examResult.score / examResult.total) * 100);
    let message = "";
    let color = "";
    
    if (percentage >= 90) { message = "¡Excelente!"; color = "text-green-600"; }
    else if (percentage >= 70) { message = "¡Buen trabajo!"; color = "text-blue-600"; }
    else { message = "Sigue practicando"; color = "text-orange-600"; }

    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
           <div className="mb-6">
             <div className={`text-6xl font-bold mb-2 ${color}`}>{percentage}%</div>
             <h2 className="text-2xl font-bold text-slate-800">{message}</h2>
             <p className="text-slate-500 mt-2">Has acertado {examResult.score} de {examResult.total} preguntas.</p>
           </div>

           <div className="space-y-4 mb-8 text-left max-h-96 overflow-y-auto">
             {examResult.answers.map((ans, i) => (
               <div key={i} className={`p-4 rounded-lg border ${ans.isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                 <p className="font-medium text-slate-800 mb-1">Pregunta {i + 1}</p>
                 <p className="text-sm text-slate-600 mb-2">{questions.find(q => q.id === ans.questionId)?.text}</p>
                 <div className="flex flex-col sm:flex-row gap-2 text-sm">
                   <span className={ans.isCorrect ? "text-green-700 font-bold" : "text-red-700"}>
                     Tu respuesta: {ans.selected}
                   </span>
                   {!ans.isCorrect && (
                     <span className="text-green-700 font-bold sm:ml-auto">Correcta: {ans.correct}</span>
                   )}
                 </div>
               </div>
             ))}
           </div>

           <div className="flex justify-center gap-4">
             <Button variant="outline" onClick={() => setCurrentView('topic-detail')}>Volver al Tema</Button>
             <Button onClick={() => startPractice(selectedTopic!)}>Practicar Fallos</Button>
           </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-12">
      {renderHeader()}
      
      <main>
        {currentView === 'login' && <LoginView onLogin={handleLogin} />}
        {currentView === 'admin-dashboard' && renderAdminDashboard()}
        
        {/* Render Content Editor if active */}
        {currentView === 'content-editor' && topicToEdit && (
          <ContentEditor 
            topic={topicToEdit.topic}
            onSave={saveContentChanges}
            onCancel={() => { setTopicToEdit(null); setCurrentView('admin-dashboard'); }}
          />
        )}
        
        {currentView === 'dashboard' && renderDashboard()}
        {currentView === 'topic-detail' && renderTopicDetail()}
        
        {(currentView === 'study' || currentView === 'practice' || currentView === 'exam') && isLoading && (
           <LoadingSpinner message={currentView === 'study' ? "Escribiendo teoría..." : "Preparando examen..."} />
        )}

        {!isLoading && currentView === 'study' && renderStudyMode()}
        {!isLoading && currentView === 'practice' && renderQuestionCard(false)}
        {!isLoading && currentView === 'exam' && renderQuestionCard(true)}
        
        {currentView === 'results' && renderResults()}
      </main>
    </div>
  );
}

export default App;
