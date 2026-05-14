export interface QuizQuestion {
  soru: string;
  secenekler: string[];
  dogruCevap: number; // index
}

export interface Lesson {
  id: string;
  kategori: 'Temel Kavramlar' | "Hook'lar" | 'İleri Seviye';
  baslik: string;
  slug: string;
  aciklama: string;
  icerik: string[]; // paragraph strings in Turkish
  kodOrnegi: string; // TSX code string
  beklenenCikti: string; // expected output string for playground validation
  gorevKodu: string; // starter code for the playground task
  quizSorulari: QuizQuestion[]; // exactly 3 questions
}

export interface CourseContextType {
  lessons: Lesson[];
  activeLesson: Lesson | null;
  setActiveLesson: (lesson: Lesson) => void;
  completedLessons: string[]; // lesson ids
  markComplete: (id: string) => void;
  markAllComplete: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  userName: string;
  setUserName: (name: string) => void;
}

export interface ThemeContextType {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}