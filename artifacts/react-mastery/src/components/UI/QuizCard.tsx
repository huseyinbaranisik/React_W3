import React, { useState, useEffect } from 'react';
import { QuizQuestion } from '../../types';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

interface QuizCardProps {
  questions: QuizQuestion[];
  onAllCorrect: () => void;
}

export function QuizCard({ questions, onAllCorrect }: QuizCardProps) {
  const [answers, setAnswers] = useState<Record<number, number | null>>({});

  const handleSelect = (qIndex: number, optionIndex: number) => {
    if (answers[qIndex] !== undefined && answers[qIndex] !== null) return;
    setAnswers(prev => ({ ...prev, [qIndex]: optionIndex }));
  };

  useEffect(() => {
    if (Object.keys(answers).length === questions.length) {
      const allCorrect = questions.every((q, i) => answers[i] === q.dogruCevap);
      if (allCorrect) {
        onAllCorrect();
      }
    }
  }, [answers, questions, onAllCorrect]);

  return (
    <div className="space-y-8 mt-8">
      {questions.map((quiz, qIndex) => {
        const selectedAnswer = answers[qIndex];
        const isAnswered = selectedAnswer !== undefined && selectedAnswer !== null;
        const isCorrect = selectedAnswer === quiz.dogruCevap;

        return (
          <div key={qIndex} className="p-6 rounded-xl border border-border bg-card shadow-sm" data-testid={`quiz-card-${qIndex}`}>
            <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">{qIndex + 1}</span>
              Bilgi Kontrolü
            </h3>
            <p className="text-muted-foreground mb-6" data-testid={`text-quiz-question-${qIndex}`}>{quiz.soru}</p>

            <div className="space-y-3">
              {quiz.secenekler.map((option, index) => {
                const isThisSelected = selectedAnswer === index;
                const isThisCorrect = index === quiz.dogruCevap;
                
                let optionClass = "border-border hover:border-primary/50 hover:bg-primary/5";
                
                if (isAnswered) {
                  if (isThisCorrect) {
                    optionClass = "border-green-500/50 bg-green-500/10 text-green-500";
                  } else if (isThisSelected && !isThisCorrect) {
                    optionClass = "border-destructive/50 bg-destructive/10 text-destructive";
                  } else {
                    optionClass = "border-border opacity-50";
                  }
                }

                return (
                  <motion.button
                    key={index}
                    whileHover={!isAnswered ? { scale: 1.01 } : {}}
                    whileTap={!isAnswered ? { scale: 0.99 } : {}}
                    onClick={() => handleSelect(qIndex, index)}
                    disabled={isAnswered}
                    className={`w-full text-left p-4 rounded-lg border transition-all duration-200 flex items-center justify-between ${optionClass}`}
                    data-testid={`button-quiz-option-${qIndex}-${index}`}
                  >
                    <span>{String.fromCharCode(65 + index)}. {option}</span>
                    {isAnswered && isThisCorrect && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                    {isAnswered && isThisSelected && !isThisCorrect && <XCircle className="w-5 h-5 text-destructive" />}
                  </motion.button>
                );
              })}
            </div>

            {isAnswered && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 pt-4 border-t border-border flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  {isCorrect ? (
                    <span className="text-green-500 font-medium text-sm">Doğru cevap!</span>
                  ) : (
                    <span className="text-destructive font-medium text-sm">Yanlış. Doğru cevap {String.fromCharCode(65 + quiz.dogruCevap)} olmalıydı.</span>
                  )}
                </div>
                {!isCorrect && (
                  <button 
                    onClick={() => setAnswers(prev => ({ ...prev, [qIndex]: null }))}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Tekrar Dene
                  </button>
                )}
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
}