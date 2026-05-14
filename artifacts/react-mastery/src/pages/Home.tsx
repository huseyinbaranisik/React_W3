import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { useLessonContext } from '../context/LessonContext';
import { Code2, Layers, Cpu, ArrowRight } from 'lucide-react';

export function Home() {
  const { lessons, completedLessons } = useLessonContext();
  
  const categories = [
    {
      name: 'Fundamentals',
      icon: <Layers className="w-6 h-6" />,
      description: 'Core concepts, JSX, and components.',
      color: 'from-blue-500/20 to-cyan-500/20',
      textColor: 'text-cyan-400'
    },
    {
      name: 'Hooks',
      icon: <Code2 className="w-6 h-6" />,
      description: 'Managing state and side effects.',
      color: 'from-purple-500/20 to-fuchsia-500/20',
      textColor: 'text-fuchsia-400'
    },
    {
      name: 'Advanced',
      icon: <Cpu className="w-6 h-6" />,
      description: 'Patterns, performance, and best practices.',
      color: 'from-orange-500/20 to-red-500/20',
      textColor: 'text-orange-400'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto px-4 py-12 md:py-20"
      data-testid="home-page"
    >
      <div className="text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-foreground relative z-10">
          Master <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">React</span>
          <br />One Lesson at a Time
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto relative z-10 leading-relaxed">
          A premium, dark-themed learning environment focused on React and TypeScript engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 relative z-10">
        <div className="bg-card border border-border p-6 rounded-2xl flex flex-col items-center justify-center text-center">
          <span className="text-4xl font-bold text-foreground mb-2">{lessons.length}</span>
          <span className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Bite-sized Lessons</span>
        </div>
        <div className="bg-card border border-border p-6 rounded-2xl flex flex-col items-center justify-center text-center">
          <span className="text-4xl font-bold text-foreground mb-2">3</span>
          <span className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Core Categories</span>
        </div>
        <div className="bg-card border border-border p-6 rounded-2xl flex flex-col items-center justify-center text-center">
          <span className="text-4xl font-bold text-primary mb-2">{completedLessons.length}</span>
          <span className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Completed by You</span>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground mb-8">Course Curriculum</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const firstLesson = lessons.find(l => l.category === cat.name);
            const catLessons = lessons.filter(l => l.category === cat.name);
            const catCompleted = catLessons.filter(l => completedLessons.includes(l.id)).length;

            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
              >
                <Link 
                  href={firstLesson ? `/lesson/${firstLesson.slug}` : '#'}
                  className="block h-full bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group"
                  data-testid={`link-category-${cat.name.toLowerCase()}`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-6 ${cat.textColor}`}>
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{cat.name}</h3>
                  <p className="text-muted-foreground mb-6 text-sm">
                    {cat.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs font-medium text-muted-foreground bg-background px-3 py-1 rounded-full border border-border">
                      {catCompleted} / {catLessons.length} done
                    </span>
                    <span className="text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
