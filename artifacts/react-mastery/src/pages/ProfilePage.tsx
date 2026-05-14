import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCourseContext } from '../context/CourseContext';
import { Award, Star, Zap, Target, Trophy, Edit2, Check, Lock } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const TOTAL_LESSONS = 20;

const BADGES = [
  { id: 'first', title: 'İlk Adım', desc: 'İlk dersi tamamla', required: 1, icon: <Star className="w-8 h-8" /> },
  { id: 'consistent', title: 'İstikrar', desc: '5 ders tamamla', required: 5, icon: <Zap className="w-8 h-8" /> },
  { id: 'halfway', title: 'Yolun Yarısı', desc: '10 ders tamamla (%50)', required: 10, icon: <Target className="w-8 h-8" /> },
  { id: 'master', title: 'React Master', desc: '20 dersin tamamını bitir', required: 20, icon: <Trophy className="w-8 h-8" /> },
];

export function ProfilePage() {
  const { userName, setUserName, completedLessons } = useCourseContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(userName);

  const completedCount = completedLessons.length;
  const progressPercent = Math.round((completedCount / TOTAL_LESSONS) * 100);

  const handleSaveName = () => {
    if (editName.trim()) setUserName(editName.trim());
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSaveName();
    if (e.key === 'Escape') setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">

      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card border border-border rounded-2xl p-8 shadow-sm flex flex-col md:flex-row items-center gap-8 mb-10"
      >
        <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-4xl font-bold shadow-[0_0_20px_rgba(34,197,94,0.4)] shrink-0">
          {userName.charAt(0).toUpperCase()}
        </div>

        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-1">
            {isEditing ? (
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="bg-input border border-border rounded-md px-3 py-1 text-xl font-bold focus:outline-none focus:border-primary w-48 text-foreground"
                  autoFocus
                  data-testid="input-edit-name"
                />
                <button
                  onClick={handleSaveName}
                  className="p-1.5 bg-primary/20 text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
                  data-testid="button-save-name"
                >
                  <Check className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <>
                <h1 className="text-3xl font-bold text-foreground">{userName}</h1>
                <button
                  onClick={() => { setEditName(userName); setIsEditing(true); }}
                  className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="button-edit-name"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
          <p className="text-muted-foreground mb-4">React Mastery Öğrencisi</p>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="text-2xl font-bold text-primary">{progressPercent}%</div>
            <div className="h-2 flex-1 max-w-xs bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
            </div>
            <div className="text-sm font-medium text-muted-foreground whitespace-nowrap">{completedCount}/{TOTAL_LESSONS} Ders</div>
          </div>
        </div>
      </motion.div>

      {/* Achievement Badges */}
      <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
        <Award className="w-6 h-6 text-primary" /> Başarım Rozetleri
      </h2>

      <TooltipProvider>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {BADGES.map((badge, index) => {
            const earned = completedCount >= badge.required;
            return (
              <Tooltip key={badge.id}>
                <TooltipTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                    className={[
                      'relative bg-card border rounded-2xl p-6 text-center cursor-default select-none transition-all duration-500',
                      earned
                        ? 'border-primary/50 shadow-[0_0_15px_rgba(34,197,94,0.15)]'
                        : 'border-border opacity-50 grayscale',
                    ].join(' ')}
                    data-testid={`badge-${badge.id}`}
                  >
                    <div className={[
                      'w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4',
                      earned
                        ? 'bg-gradient-to-br from-primary/20 to-secondary/20 text-primary'
                        : 'bg-muted text-muted-foreground',
                    ].join(' ')}>
                      {earned ? badge.icon : <Lock className="w-8 h-8" />}
                    </div>
                    <h3 className="font-bold text-foreground text-sm">{badge.title}</h3>
                    {earned && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center"
                      >
                        <Check className="w-3.5 h-3.5 text-primary-foreground" />
                      </motion.div>
                    )}
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p className="font-medium">{badge.desc}</p>
                  {!earned && (
                    <p className="text-xs text-muted-foreground mt-1">
                      Kazanmak için: {badge.required} ders tamamla ({completedCount}/{badge.required})
                    </p>
                  )}
                  {earned && <p className="text-xs text-green-400 mt-1">Kazanıldı!</p>}
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </TooltipProvider>

      {/* Certificate Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-card border border-border rounded-2xl p-8 text-center"
      >
        <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
          <Award className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-foreground">Uzmanlık Sertifikası</h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Tüm 20 dersi ve quizleri başarıyla tamamlayarak React TSX Geliştirici Uzmanlık Programı sertifikanızı alın.
        </p>

        {/* Progress bar */}
        <div className="max-w-xs mx-auto mb-8">
          <div className="flex justify-between text-xs text-muted-foreground mb-2">
            <span>İlerleme</span>
            <span>{completedCount}/20 ders</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
            />
          </div>
        </div>

        {completedCount >= TOTAL_LESSONS ? (
          <Link
            to="/sertifika"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
            data-testid="link-view-certificate"
          >
            Sertifikayı Görüntüle
          </Link>
        ) : (
          <div>
            <button
              disabled
              className="px-8 py-4 bg-muted text-muted-foreground font-bold rounded-xl cursor-not-allowed border border-border"
              data-testid="button-certificate-locked"
            >
              Sertifikayı Görüntüle
            </button>
            <p className="text-sm text-muted-foreground mt-4">
              Sertifika için tüm 20 dersi tamamlamanız gerekiyor ({completedCount}/20)
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
