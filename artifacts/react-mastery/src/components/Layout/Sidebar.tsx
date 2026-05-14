import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, X, User } from 'lucide-react';
import { useCourseContext } from '../../context/CourseContext';

const COLLAPSED_W = 48;
const EXPANDED_W = 288;

export function Sidebar() {
  const {
    lessons, completedLessons, searchQuery, sidebarOpen, setSidebarOpen,
    setSearchQuery, sidebarCollapsed, setSidebarCollapsed
  } = useCourseContext();
  const location = useLocation();

  const categories = ['Temel Kavramlar', "Hook'lar", 'İleri Seviye'] as const;

  const filteredLessons = lessons.filter(lesson =>
    lesson.baslik.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lesson.kategori.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalCompleted = completedLessons.length;
  const progressPercent = Math.round((totalCompleted / lessons.length) * 100) || 0;

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile sidebar */}
      <aside
        className={`fixed top-0 left-0 h-[100dvh] w-72 bg-sidebar border-r border-sidebar-border z-50 flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        data-testid="sidebar-mobile"
      >
        <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            React Mastery
          </span>
          <button onClick={() => setSidebarOpen(false)} className="text-muted-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-4">
          <input
            type="text"
            placeholder="Ders Ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 px-4 rounded-lg bg-input/50 border border-sidebar-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm text-foreground"
          />
        </div>
        <SidebarContent
          categories={categories}
          filteredLessons={filteredLessons}
          completedLessons={completedLessons}
          location={location}
          setSidebarOpen={setSidebarOpen}
          progressPercent={progressPercent}
        />
      </aside>

      {/* Desktop collapsible sidebar */}
      <motion.div
        animate={{ width: sidebarCollapsed ? COLLAPSED_W : EXPANDED_W }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="hidden md:block relative shrink-0 h-[calc(100vh-4rem)] sticky top-16 self-start overflow-visible"
        data-testid="sidebar"
      >
        {/* Expanded panel */}
        <div
          className={`absolute inset-0 bg-sidebar border-r border-sidebar-border flex flex-col overflow-hidden transition-opacity duration-200 ${
            sidebarCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <SidebarContent
            categories={categories}
            filteredLessons={filteredLessons}
            completedLessons={completedLessons}
            location={location}
            setSidebarOpen={setSidebarOpen}
            progressPercent={progressPercent}
          />
        </div>

        {/* Collapsed icon strip */}
        <AnimatePresence>
          {sidebarCollapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-sidebar border-r border-sidebar-border flex flex-col items-center py-3 gap-1.5 overflow-y-auto overflow-x-visible custom-scrollbar"
            >
              {lessons.map((lesson) => {
                const isActive = location.pathname === `/egitim/${lesson.slug}`;
                const isCompleted = completedLessons.includes(lesson.id);

                return (
                  <LessonDot
                    key={lesson.id}
                    lesson={lesson}
                    isActive={isActive}
                    isCompleted={isCompleted}
                  />
                );
              })}

              {/* Profile dot */}
              <div className="mt-auto pt-2 border-t border-sidebar-border w-full flex justify-center pb-2">
                <Link
                  to="/profil"
                  title="Profil"
                  className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                >
                  <User className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle button — always on the right edge */}
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-10 rounded-full bg-sidebar border border-sidebar-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all shadow-md hover:shadow-[0_0_10px_rgba(34,197,94,0.3)]"
          title={sidebarCollapsed ? 'Menüyü Aç' : 'Menüyü Kapat'}
        >
          <motion.div
            animate={{ rotate: sidebarCollapsed ? 0 : 180 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </motion.div>
        </button>
      </motion.div>
    </>
  );
}

/* ─── Single lesson dot for collapsed strip ─── */
function LessonDot({
  lesson, isActive, isCompleted
}: {
  lesson: { id: string; slug: string; baslik: string };
  isActive: boolean;
  isCompleted: boolean;
}) {
  const [hover, setHover] = useState(false);

  return (
    <div className="relative flex items-center" style={{ zIndex: hover ? 50 : 'auto' }}>
      <Link
        to={`/egitim/${lesson.slug}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 shrink-0
          ${isActive
            ? 'ring-2 ring-primary ring-offset-1 ring-offset-sidebar bg-primary/20'
            : 'hover:bg-sidebar-accent/60'
          }`}
        data-testid={`link-sidebar-dot-${lesson.slug}`}
      >
        {isCompleted ? (
          <div className={`w-3 h-3 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.7)] ${isActive ? 'scale-125' : ''}`} />
        ) : (
          <div className={`w-3 h-3 rounded-full border-2 transition-colors ${
            isActive ? 'border-primary bg-primary/30' : 'border-sidebar-border bg-sidebar-border/30'
          }`} />
        )}
      </Link>

      {/* Tooltip */}
      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-popover text-popover-foreground text-xs font-medium px-2.5 py-1.5 rounded-lg border border-border shadow-lg pointer-events-none"
            style={{ zIndex: 9999 }}
          >
            <span className={`mr-1.5 ${isCompleted ? 'text-green-500' : 'text-muted-foreground'}`}>
              {isCompleted ? '✓' : '○'}
            </span>
            {lesson.baslik}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Full sidebar content (expanded state) ─── */
interface SidebarContentProps {
  categories: readonly string[];
  filteredLessons: any[];
  completedLessons: string[];
  location: ReturnType<typeof useLocation>;
  setSidebarOpen: (v: boolean) => void;
  progressPercent: number;
}

function SidebarContent({
  categories, filteredLessons, completedLessons, location, setSidebarOpen, progressPercent
}: SidebarContentProps) {
  return (
    <>
      <div className="flex-1 overflow-y-auto py-4 custom-scrollbar">
        {categories.map((category, catIndex) => {
          const categoryLessons = filteredLessons.filter((l: any) => l.kategori === category);
          if (categoryLessons.length === 0) return null;

          return (
            <div key={category} className="mb-6">
              <h4 className="px-6 text-xs font-bold uppercase tracking-wider text-sidebar-foreground/50 mb-2">
                {category}
              </h4>
              <ul className="space-y-1 px-3">
                {categoryLessons.map((lesson: any, index: number) => {
                  const isActive = location.pathname === `/egitim/${lesson.slug}`;
                  const isCompleted = completedLessons.includes(lesson.id);

                  return (
                    <motion.li
                      key={lesson.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (catIndex * 0.1) + (index * 0.05) }}
                    >
                      <Link
                        to={`/egitim/${lesson.slug}`}
                        onClick={() => setSidebarOpen(false)}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-all ${
                          isActive
                            ? 'bg-sidebar-accent text-sidebar-accent-foreground border-l-2 border-primary shadow-[inset_4px_0_0_0_hsl(var(--primary)),0_0_10px_rgba(34,197,94,0.1)]'
                            : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground'
                        }`}
                        data-testid={`link-sidebar-lesson-${lesson.slug}`}
                      >
                        <div className="flex items-center gap-3 truncate">
                          {isCompleted ? (
                            <CheckCircle2 className={`w-4 h-4 shrink-0 ${isActive ? 'text-primary' : 'text-green-500'}`} />
                          ) : (
                            <div className="w-4 h-4 rounded-full border border-sidebar-border shrink-0 flex items-center justify-center">
                              <div className="w-1.5 h-1.5 rounded-full bg-sidebar-border" />
                            </div>
                          )}
                          <span className="text-sm font-medium truncate">{lesson.baslik}</span>
                        </div>
                        {isActive && <ChevronRight className="w-4 h-4 text-primary shrink-0" />}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          );
        })}
        {filteredLessons.length === 0 && (
          <div className="px-6 text-sm text-muted-foreground">Ders bulunamadı.</div>
        )}
      </div>

      <Link
        to="/profil"
        onClick={() => setSidebarOpen(false)}
        className="flex items-center gap-3 px-6 py-4 border-t border-sidebar-border text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground transition-all"
      >
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <User className="w-4 h-4" />
        </div>
        <span className="text-sm font-medium">Profil</span>
      </Link>

      <div className="p-4 border-t border-sidebar-border bg-sidebar/50">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="text-sidebar-foreground/70 font-medium">Kurs İlerlemesi</span>
          <span className="text-primary font-bold">{progressPercent}%</span>
        </div>
        <div className="h-2 w-full bg-sidebar-border rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-secondary"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </div>
      </div>
    </>
  );
}
