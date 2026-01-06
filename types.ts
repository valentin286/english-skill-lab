export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: string;
  manualTheory?: string; // Optional manual theory content
  manualQuestions?: Question[]; // Optional manual questions list
}

export interface Category {
  id: string;
  title: string;
  description: string;
  topics: Topic[];
  color: string;
}

export type Role = 'admin' | 'student';

export interface User {
  id: string;
  name: string;
  role: Role;
  username: string; // For simple login
}

export type AppView = 'login' | 'admin-dashboard' | 'content-editor' | 'dashboard' | 'topic-detail' | 'study' | 'practice' | 'exam' | 'results';

export interface ExamResult {
  score: number;
  total: number;
  answers: {
    questionId: string;
    selected: string;
    correct: string;
    isCorrect: boolean;
  }[];
}

export interface GeminResponseSchema {
  questions: Question[];
}
