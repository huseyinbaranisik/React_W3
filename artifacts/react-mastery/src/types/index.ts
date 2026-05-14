export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number; // index
}

export interface Lesson {
  id: string;
  category: 'Fundamentals' | 'Hooks' | 'Advanced';
  title: string;
  slug: string;
  description: string;
  content: string[]; // array of paragraph strings
  codeExample: string; // TSX code string
  quiz: QuizQuestion;
}

export interface LessonContextType {
  lessons: Lesson[];
  activeLesson: Lesson | null;
  setActiveLesson: (lesson: Lesson) => void;
  completedLessons: string[]; // lesson ids
  toggleComplete: (id: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}
