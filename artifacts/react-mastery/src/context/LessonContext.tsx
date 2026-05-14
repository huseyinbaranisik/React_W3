import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Lesson, LessonContextType } from '../types';
import { lessons as initialLessons } from '../data/lessons';
import { useLocalStorage } from '../hooks/useLocalStorage';

const LessonContext = createContext<LessonContextType | undefined>(undefined);

export function LessonProvider({ children }: { children: ReactNode }) {
  const [lessons] = useState<Lesson[]>(initialLessons);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [completedLessons, setCompletedLessons] = useLocalStorage<string[]>('react-mastery-completed', []);
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleComplete = (id: string) => {
    setCompletedLessons((prev) => 
      prev.includes(id) 
        ? prev.filter((lessonId) => lessonId !== id)
        : [...prev, id]
    );
  };

  return (
    <LessonContext.Provider value={{
      lessons,
      activeLesson,
      setActiveLesson,
      completedLessons,
      toggleComplete,
      searchQuery,
      setSearchQuery,
      sidebarOpen,
      setSidebarOpen
    }}>
      {children}
    </LessonContext.Provider>
  );
}

export function useLessonContext() {
  const context = useContext(LessonContext);
  if (context === undefined) {
    throw new Error('useLessonContext must be used within a LessonProvider');
  }
  return context;
}
