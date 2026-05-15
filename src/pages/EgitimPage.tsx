import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle2, Award, ChevronRight } from 'lucide-react';
import { useCourseContext } from '../context/CourseContext';

export function EgitimPage() {
  const { lessons, completedLessons } = useCourseContext();

  const categories = [
    { title: 'Temel Kavramlar', icon: <BookOpen className="w-6 h-6" /> },
    { title: 'Hook\'lar', icon: <CheckCircle2 className="w-6 h-6" /> },
    { title: 'İleri Seviye', icon: <Award className="w-6 h-6" /> }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12 relative">
      <div className="absolute top-4 right-4 md:top-8 md:right-8">
        <Link to="/profil" className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full hover:bg-primary hover:text-primary-foreground transition-all shadow-sm">
          <span className="font-semibold text-sm">Profilim</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          React'ı Öğren, Bir Ders Bir Adım
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Eğitim platformuna hoş geldin. Kendi hızında öğren, öğrendiklerini hemen uygula ve modern React geliştiricisi ol.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-border p-6 rounded-2xl shadow-sm"
        >
          <div className="text-3xl font-bold text-foreground mb-1">{lessons.length}</div>
          <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Toplam Ders</div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-border p-6 rounded-2xl shadow-sm"
        >
          <div className="text-3xl font-bold text-foreground mb-1">{Object.keys(lessons.reduce((acc, l) => ({...acc, [l.kategori]: true}), {})).length}</div>
          <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Kategori</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-primary/10 border border-primary/20 p-6 rounded-2xl shadow-sm"
        >
          <div className="text-3xl font-bold text-primary mb-1">{completedLessons.length}</div>
          <div className="text-sm font-medium text-primary/80 uppercase tracking-wider">Tamamlanan</div>
        </motion.div>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-foreground">Öğrenim Yolculuğu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, index) => {
          const catLessons = lessons.filter(l => l.kategori === cat.title);
          const firstLesson = catLessons[0];
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (index * 0.1) }}
            >
              <Link 
                to={firstLesson ? `/egitim/${firstLesson.slug}` : '#'}
                className="group block bg-card border border-border hover:border-primary/50 p-6 rounded-2xl transition-all hover:shadow-[0_0_20px_rgba(34,197,94,0.1)]"
              >
                <div className="w-12 h-12 rounded-xl bg-accent text-foreground flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{cat.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm">
                  {catLessons.length} dersten oluşuyor.
                </p>
                <div className="flex items-center text-primary font-medium text-sm group-hover:underline">
                  Başla <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}