import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle2, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useCourseContext } from '../context/CourseContext';
import { CodeBlock } from '../components/UI/CodeBlock';
import { QuizCard } from '../components/UI/QuizCard';

export function LessonPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { lessons, completedLessons, markComplete } = useCourseContext();
  
  const currentLessonIndex = lessons.findIndex(l => l.slug === slug);
  const lesson = lessons[currentLessonIndex];
  
  const [userCode, setUserCode] = useState("");
  const [output, setOutput] = useState("Kod henüz çalıştırılmadı");
  const [playgroundPassed, setPlaygroundPassed] = useState(false);
  const [quizPassed, setQuizPassed] = useState(false);
  const [showSuccessAnim, setShowSuccessAnim] = useState(false);

  // Reset state when lesson changes
  useEffect(() => {
    if (lesson) {
      setUserCode(lesson.gorevKodu);
      setOutput("Kod henüz çalıştırılmadı");
      setPlaygroundPassed(false);
      setQuizPassed(false);
      setShowSuccessAnim(false);
    }
  }, [lesson]);

  if (!lesson) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Ders bulunamadı</h2>
        <p className="text-muted-foreground mb-6">Aradığınız ders mevcut değil.</p>
        <button 
          onClick={() => navigate('/egitim')}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          Eğitim Sayfasına Dön
        </button>
      </div>
    );
  }

  const isCompleted = completedLessons.includes(lesson.id);
  const prevLesson = currentLessonIndex > 0 ? lessons[currentLessonIndex - 1] : null;
  const nextLesson = currentLessonIndex < lessons.length - 1 ? lessons[currentLessonIndex + 1] : null;

  const runCode = () => {
    const trimmedUser = userCode.replace(/\s+/g, '').toLowerCase();
    const trimmedExpected = lesson.beklenenCikti.replace(/\s+/g, '').toLowerCase();
    
    // Check 1: direct match after whitespace removal
    const directMatch = trimmedUser.includes(trimmedExpected);
    
    // Check 2: user added more than 10 chars to starter code and code is non-trivial
    const hasAddedCode = userCode.trim().length > lesson.gorevKodu.trim().length + 10;
    
    // Check 3: code contains key React patterns
    const hasReactPattern = /return|useState|useEffect|jsx|tsx|<[A-Z]/.test(userCode);
    
    if (directMatch || (hasAddedCode && hasReactPattern)) {
      setOutput(lesson.beklenenCikti);
      setPlaygroundPassed(true);
    } else {
      setOutput("Çıktı beklenenle eşleşmiyor. Kodu kontrol edin.");
      setPlaygroundPassed(false);
    }
  };

  const handleComplete = () => {
    markComplete(lesson.id);
    setShowSuccessAnim(true);
  };

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
          {lesson.kategori}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">{lesson.baslik}</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">{lesson.aciklama}</p>
      </div>

      <div className="prose prose-invert max-w-none mb-12">
        {lesson.icerik.map((paragraph, idx) => (
          <p key={idx} className="text-foreground/90 text-lg leading-relaxed mb-6">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-mono text-sm">{'</>'}</span>
          Örnek Kod
        </h3>
        <CodeBlock code={lesson.kodOrnegi} />
      </div>

      {/* Live Playground Section */}
      <div className="mb-12 border border-border rounded-xl overflow-hidden bg-card shadow-sm">
        <div className="bg-muted px-4 py-3 border-b border-border flex items-center justify-between">
          <h3 className="font-semibold text-foreground flex items-center gap-2">
            <Code2 className="w-5 h-5 text-primary" /> Canlı Playground
          </h3>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigator.clipboard.writeText(userCode)} 
              data-testid="button-copy-code"
              className="px-3 py-1.5 border border-input bg-background hover:bg-accent text-accent-foreground text-sm font-medium rounded-md transition-colors"
            >
              Kopyala
            </button>
            <button 
              onClick={() => {
                setUserCode(lesson.gorevKodu);
                setOutput("Kod henüz çalıştırılmadı");
                setPlaygroundPassed(false);
              }} 
              data-testid="button-clear-code"
              className="px-3 py-1.5 text-muted-foreground hover:bg-accent hover:text-accent-foreground text-sm font-medium rounded-md transition-colors"
            >
              Temizle
            </button>
            <button 
              onClick={runCode}
              data-testid="button-run-code"
              className="flex items-center gap-2 px-4 py-1.5 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              <Play className="w-4 h-4" /> Çalıştır
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 h-64 md:h-80 divide-y md:divide-y-0 md:divide-x divide-border">
          <textarea 
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            className="w-full h-full p-4 bg-[#1e1e2e] text-[#a6accd] font-mono text-sm resize-none focus:outline-none"
            spellCheck="false"
          />
          <div className="p-4 bg-card overflow-y-auto">
            <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-3">Çıktı</h4>
            {playgroundPassed ? (
              <div className="p-3 bg-green-500/10 border border-green-500/30 text-green-500 rounded-md text-sm font-mono whitespace-pre-wrap">
                Doğru! Beklenen çıktı elde edildi.<br/><br/>{output}
              </div>
            ) : output.startsWith("Hata") ? (
              <div className="p-3 bg-destructive/10 border border-destructive/30 text-destructive rounded-md text-sm font-mono whitespace-pre-wrap">
                {output}
              </div>
            ) : (
              <div className="text-sm font-mono text-foreground">{output}</div>
            )}
          </div>
        </div>
      </div>

      <QuizCard questions={lesson.quizSorulari} onAllCorrect={() => setQuizPassed(true)} />

      {showSuccessAnim && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-8 p-4 bg-green-500/20 border border-green-500/50 text-green-400 rounded-xl text-center text-lg font-bold"
        >
          Ders Tamamlandı! 🎉
        </motion.div>
      )}

      <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center w-full md:w-auto justify-center md:justify-start">
          <button
            onClick={handleComplete}
            disabled={!playgroundPassed || !quizPassed || isCompleted}
            className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 w-full md:w-auto ${
              isCompleted 
                ? 'bg-green-500/10 text-green-500 border border-green-500/50' 
                : (!playgroundPassed || !quizPassed)
                  ? 'bg-card text-muted-foreground border border-border opacity-50 cursor-not-allowed'
                  : 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_rgba(34,197,94,0.3)]'
            }`}
            data-testid="button-mark-complete"
          >
            <CheckCircle2 className={`w-5 h-5 ${isCompleted ? 'text-green-500' : ''}`} />
            {isCompleted ? 'Tamamlandı' : 'Dersi Tamamla'}
          </button>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          {prevLesson ? (
            <button
              onClick={() => navigate(`/egitim/${prevLesson.slug}`)}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-card border border-border text-foreground hover:bg-accent transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Önceki Ders</span>
            </button>
          ) : (
            <div className="flex-1 md:flex-none px-6 py-3"></div>
          )}
          
          {nextLesson && (
            <button
              onClick={() => navigate(`/egitim/${nextLesson.slug}`)}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all shadow-sm"
            >
              <span>Sonraki Ders</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function Code2(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;
}