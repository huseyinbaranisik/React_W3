import React, { useState } from 'react';
import { QuizQuestion } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, ChevronRight, Trophy } from 'lucide-react';

interface QuizCardProps {
  questions: QuizQuestion[];
  onAllCorrect: () => void;
}

export function QuizCard({ questions, onAllCorrect }: QuizCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [completed, setCompleted] = useState(false);

  const current = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;

  const handleSelect = (optionIndex: number) => {
    if (selectedAnswer !== null) return;
    const correct = optionIndex === current.dogruCevap;
    setSelectedAnswer(optionIndex);
    setIsCorrect(correct);
  };

  const handleNext = () => {
    if (isLast) {
      setCompleted(true);
      onAllCorrect();
    } else {
      setCurrentIndex(i => i + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    }
  };

  const handleRetry = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  if (completed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mt-8 p-8 rounded-xl border border-primary/40 bg-primary/10 flex flex-col items-center text-center gap-4"
        data-testid="quiz-completed"
      >
        <Trophy className="w-12 h-12 text-primary" />
        <h3 className="text-xl font-bold text-foreground">Tüm Sorular Tamamlandı!</h3>
        <p className="text-muted-foreground text-sm">Harika iş çıkardın. Dersi tamamlamak için aşağıdaki butona bas.</p>
      </motion.div>
    );
  }

  return (
    <div className="mt-8" data-testid={`quiz-card-${currentIndex}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">
            {currentIndex + 1}
          </span>
          Bilgi Kontrolü
        </h3>
        <div className="flex items-center gap-1.5">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i < currentIndex
                  ? 'w-6 bg-primary'
                  : i === currentIndex
                  ? 'w-6 bg-primary/60'
                  : 'w-4 bg-border'
              }`}
            />
          ))}
        </div>
        <span className="text-xs text-muted-foreground font-medium">
          {currentIndex + 1} / {questions.length}
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.25 }}
          className="p-6 rounded-xl border border-border bg-card shadow-sm"
        >
          <p className="text-foreground text-base font-medium mb-6" data-testid={`text-quiz-question-${currentIndex}`}>
            {current.soru}
          </p>

          <div className="space-y-3">
            {current.secenekler.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isThisCorrect = index === current.dogruCevap;
              const answered = selectedAnswer !== null;

              let cls = 'border-border hover:border-primary/50 hover:bg-primary/5 cursor-pointer';
              if (answered) {
                if (isThisCorrect) cls = 'border-green-500/60 bg-green-500/10 text-green-400';
                else if (isSelected) cls = 'border-destructive/60 bg-destructive/10 text-destructive';
                else cls = 'border-border opacity-40 cursor-default';
              }

              return (
                <motion.button
                  key={index}
                  whileHover={!answered ? { scale: 1.01 } : {}}
                  whileTap={!answered ? { scale: 0.99 } : {}}
                  onClick={() => handleSelect(index)}
                  disabled={answered}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-200 flex items-center justify-between ${cls}`}
                  data-testid={`button-quiz-option-${currentIndex}-${index}`}
                >
                  <span className="text-sm">
                    <span className="font-mono font-bold mr-2 opacity-60">{String.fromCharCode(65 + index)}.</span>
                    {option}
                  </span>
                  {answered && isThisCorrect && <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />}
                  {answered && isSelected && !isThisCorrect && <XCircle className="w-5 h-5 text-destructive shrink-0" />}
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence>
            {selectedAnswer !== null && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-5 pt-4 border-t border-border flex items-center justify-between"
              >
                <span className={`text-sm font-semibold ${isCorrect ? 'text-green-500' : 'text-destructive'}`}>
                  {isCorrect
                    ? '✓ Doğru cevap!'
                    : `✗ Yanlış. Doğru cevap: ${String.fromCharCode(65 + current.dogruCevap)}`}
                </span>
                <div>
                  {isCorrect ? (
                    <button
                      onClick={handleNext}
                      className="flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors shadow-[0_0_12px_rgba(34,197,94,0.3)]"
                      data-testid="button-quiz-next"
                    >
                      {isLast ? 'Tamamla' : 'Sonraki Soru'}
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={handleRetry}
                      className="px-5 py-2 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-accent transition-colors"
                      data-testid="button-quiz-retry"
                    >
                      Tekrar Dene
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
