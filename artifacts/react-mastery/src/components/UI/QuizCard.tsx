import React, { useState } from 'react';
import { QuizQuestion } from '../../types';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, RefreshCw } from 'lucide-react';

interface QuizCardProps {
  quiz: QuizQuestion;
}

export function QuizCard({ quiz }: QuizCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
  };

  const handleReset = () => {
    setSelectedAnswer(null);
  };

  const isAnswered = selectedAnswer !== null;
  const isCorrect = selectedAnswer === quiz.correctAnswer;

  return (
    <div className="p-6 rounded-xl border border-border bg-card mt-8" data-testid="quiz-card">
      <h3 className="text-xl font-semibold mb-4 text-foreground">Knowledge Check</h3>
      <p className="text-muted-foreground mb-6" data-testid="text-quiz-question">{quiz.question}</p>

      <div className="space-y-3">
        {quiz.options.map((option, index) => {
          const isThisSelected = selectedAnswer === index;
          const isThisCorrect = index === quiz.correctAnswer;
          
          let optionClass = "border-border hover:border-primary/50 hover:bg-primary/5";
          
          if (isAnswered) {
            if (isThisCorrect) {
              optionClass = "border-green-500/50 bg-green-500/10 text-green-400";
            } else if (isThisSelected && !isThisCorrect) {
              optionClass = "border-destructive/50 bg-destructive/10 text-destructive-foreground";
            } else {
              optionClass = "border-border opacity-50";
            }
          }

          return (
            <motion.button
              key={index}
              whileHover={!isAnswered ? { scale: 1.01 } : {}}
              whileTap={!isAnswered ? { scale: 0.99 } : {}}
              onClick={() => handleSelect(index)}
              disabled={isAnswered}
              className={`w-full text-left p-4 rounded-lg border transition-all duration-200 flex items-center justify-between ${optionClass}`}
              data-testid={`button-quiz-option-${index}`}
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
              <span className="text-green-400 font-medium" data-testid="text-quiz-result-correct">Correct! Excellent job.</span>
            ) : (
              <span className="text-destructive font-medium" data-testid="text-quiz-result-incorrect">Incorrect. The correct answer was {String.fromCharCode(65 + quiz.correctAnswer)}.</span>
            )}
          </div>
          <button 
            onClick={handleReset}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            data-testid="button-quiz-reset"
          >
            <RefreshCw className="w-4 h-4" /> Try Again
          </button>
        </motion.div>
      )}
    </div>
  );
}
