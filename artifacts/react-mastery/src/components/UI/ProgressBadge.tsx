import React from 'react';
import { useCourseContext } from '../../context/CourseContext';

export function ProgressBadge() {
  const { completedLessons, lessons } = useCourseContext();
  
  const total = lessons.length;
  const completed = completedLessons.length;
  const percentage = Math.round((completed / total) * 100) || 0;

  return (
    <div className="flex items-center gap-3" data-testid="progress-badge">
      <div className="hidden sm:flex flex-col items-end">
        <span className="text-xs font-medium text-foreground">{completed}/{total} Tamamlandı</span>
        <span className="text-[10px] text-muted-foreground">Harika gidiyorsun!</span>
      </div>
      <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center relative overflow-hidden group">
        <div 
          className="absolute bottom-0 left-0 right-0 bg-primary/30 transition-all duration-500" 
          style={{ height: `${percentage}%` }}
        />
        <span className="relative z-10 text-xs font-bold text-primary">{percentage}%</span>
      </div>
    </div>
  );
}