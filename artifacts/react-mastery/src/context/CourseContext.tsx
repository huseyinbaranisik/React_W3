import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Lesson, CourseContextType } from '../types';
import { lessons as initialLessons } from '../data/lessons';
import { useLocalStorage } from '../hooks/useLocalStorage';

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export function CourseProvider({ children }: { children: ReactNode }) {
  const [lessons] = useState<Lesson[]>(initialLessons);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [completedLessons, setCompletedLessons] = useLocalStorage<string[]>('rm-completed-lessons', []);
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userName, setUserName] = useLocalStorage<string>('rm-username', 'Geliştirici');

  const markComplete = (id: string) => {
    setCompletedLessons((prev) => 
      prev.includes(id) ? prev : [...prev, id]
    );
  };

  return (
    <CourseContext.Provider value={{
      lessons,
      activeLesson,
      setActiveLesson,
      completedLessons,
      markComplete,
      searchQuery,
      setSearchQuery,
      sidebarOpen,
      setSidebarOpen,
      userName,
      setUserName
    }}>
      {children}
    </CourseContext.Provider>
  );
}

export function useCourseContext() {
  const context = useContext(CourseContext);
  if (context === undefined) {
    throw new Error('useCourseContext must be used within a CourseProvider');
  }
  return context;
}