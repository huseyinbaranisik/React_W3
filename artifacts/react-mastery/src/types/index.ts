export interface QuizQuestion {
  soru: string;
  secenekler: string[];
  dogruCevap: number;
}

export interface Lesson {
  id: string;
  kategori: 'Temel Kavramlar' | "Hook'lar" | 'İleri Seviye';
  baslik: string;
  slug: string;
  aciklama: string;
  icerik: string[];
  kodOrnegi: string;
  beklenenCikti: string;
  gorevKodu: string;
  quizSorulari: QuizQuestion[];
}

export interface CourseContextType {
  lessons: Lesson[];
  activeLesson: Lesson | null;
  setActiveLesson: (lesson: Lesson) => void;
  completedLessons: string[];
  markComplete: (id: string) => void;
  markAllComplete: () => void;
  resetAllProgress: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (c: boolean) => void;
  userName: string;
  setUserName: (name: string) => void;
}

export interface ThemeContextType {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}
