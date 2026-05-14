import React from 'react';
import { useRoute, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { useLessonContext } from '../context/LessonContext';
import { CodeBlock } from '../components/UI/CodeBlock';
import { QuizCard } from '../components/UI/QuizCard';
import { LivePlayground } from '../components/UI/LivePlayground';

export function LessonPage() {
  const [, params] = useRoute('/lesson/:slug');
  const [, setLocation] = useLocation();
  const { lessons, completedLessons, toggleComplete } = useLessonContext();
  
  const slug = params?.slug;
  const currentLessonIndex = lessons.findIndex(l => l.slug === slug);
  const lesson = lessons[currentLessonIndex];
  
  if (!lesson) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Lesson not found</h2>
        <p className="text-muted-foreground mb-6">The lesson you're looking for doesn't exist.</p>
        <button 
          onClick={() => setLocation('/')}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-lg"
          data-testid="button-back-home"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const isCompleted = completedLessons.includes(lesson.id);
  const prevLesson = currentLessonIndex > 0 ? lessons[currentLessonIndex - 1] : null;
  const nextLesson = currentLessonIndex < lessons.length - 1 ? lessons[currentLessonIndex + 1] : null;

  return (
    <motion.div
      key={lesson.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto px-4 py-8 md:py-12"
      data-testid={`lesson-page-${lesson.slug}`}
    >
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/20">
          <BookOpen className="w-3.5 h-3.5" />
          {lesson.category}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">{lesson.title}</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">{lesson.description}</p>
      </div>

      <div className="prose prose-invert max-w-none mb-12">
        {lesson.content.map((paragraph, idx) => (
          <p key={idx} className="text-foreground/90 text-lg leading-relaxed mb-6">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-mono text-sm">{'</>'}</span>
          Example Code
        </h3>
        <CodeBlock code={lesson.codeExample} />
      </div>

      {lesson.slug === 'use-state-hook' && (
        <LivePlayground />
      )}

      <QuizCard quiz={lesson.quiz} />

      <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
          <button
            onClick={() => toggleComplete(lesson.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              isCompleted 
                ? 'bg-green-500/10 text-green-400 border border-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.15)]' 
                : 'bg-card text-foreground border border-border hover:border-primary/50'
            }`}
            data-testid="button-mark-complete"
          >
            <CheckCircle2 className={`w-5 h-5 ${isCompleted ? 'text-green-500' : 'text-muted-foreground'}`} />
            {isCompleted ? 'Completed' : 'Mark as Complete'}
          </button>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          {prevLesson && (
            <button
              onClick={() => setLocation(`/lesson/${prevLesson.slug}`)}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-card border border-border text-foreground hover:bg-accent transition-colors"
              data-testid="button-prev-lesson"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Previous</span>
            </button>
          )}
          {nextLesson && (
            <button
              onClick={() => setLocation(`/lesson/${nextLesson.slug}`)}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(168,85,247,0.4)]"
              data-testid="button-next-lesson"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
