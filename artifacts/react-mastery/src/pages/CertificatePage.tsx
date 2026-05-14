import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useCourseContext } from '../context/CourseContext';
import { ArrowLeft, Printer, ShieldCheck } from 'lucide-react';

function ReactWatermark() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="50" cy="50" rx="45" ry="18" fill="none" stroke="#22C55E" strokeWidth="3.5" />
      <ellipse cx="50" cy="50" rx="45" ry="18" fill="none" stroke="#22C55E" strokeWidth="3.5" transform="rotate(60 50 50)" />
      <ellipse cx="50" cy="50" rx="45" ry="18" fill="none" stroke="#22C55E" strokeWidth="3.5" transform="rotate(120 50 50)" />
      <circle cx="50" cy="50" r="5" fill="#22C55E" />
    </svg>
  );
}

function CornerFrame({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) {
  const size = 48;
  const thickness = 2.5;
  const color = '#22C55E';

  const transforms: Record<string, string> = {
    tl: '',
    tr: 'rotate(90)',
    br: 'rotate(180)',
    bl: 'rotate(270)',
  };

  const posClass: Record<string, string> = {
    tl: 'top-0 left-0',
    tr: 'top-0 right-0',
    br: 'bottom-0 right-0',
    bl: 'bottom-0 left-0',
  };

  return (
    <div className={`absolute ${posClass[position]}`} style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} xmlns="http://www.w3.org/2000/svg">
        <g transform={`rotate(${transforms[position] ? parseInt(transforms[position].replace('rotate(', '')) : 0}, ${size / 2}, ${size / 2})`}>
          <line x1={thickness / 2} y1={size} x2={thickness / 2} y2={thickness / 2} stroke={color} strokeWidth={thickness} />
          <line x1={0} y1={thickness / 2} x2={size} y2={thickness / 2} stroke={color} strokeWidth={thickness} />
          <line x1={size / 4} y1={size - 10} x2={size / 4} y2={size / 4} stroke={color} strokeWidth={0.8} strokeOpacity="0.4" />
          <line x1={0} y1={size / 4} x2={size - 10} y2={size / 4} stroke={color} strokeWidth={0.8} strokeOpacity="0.4" />
        </g>
      </svg>
    </div>
  );
}

export function CertificatePage() {
  const { userName, completedLessons } = useCourseContext();
  const isEligible = completedLessons.length >= 20;

  const certNumber = useMemo(() => {
    const seed = userName.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
    return `RM-${new Date().getFullYear()}-${String(seed * 137 % 90000 + 10000).padStart(5, '0')}`;
  }, [userName]);

  const today = new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });

  if (!isEligible) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-destructive mb-4">Sertifika henüz kazanılmadı.</h1>
        <p className="text-muted-foreground mb-8">Tüm 20 dersi tamamlayın.</p>
        <Link to="/profil" className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Geri Dön
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050a05] text-white flex flex-col items-center justify-center py-12 px-4">
      {/* Controls */}
      <div className="flex items-center gap-4 mb-10 print:hidden">
        <Link to="/profil" className="flex items-center gap-2 px-5 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors border border-white/10">
          <ArrowLeft className="w-4 h-4" /> Geri Dön
        </Link>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-5 py-2 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(34,197,94,0.4)]"
        >
          <Printer className="w-4 h-4" /> Yazdır / PDF
        </button>
      </div>

      {/* Certificate */}
      <div className="w-full max-w-4xl relative print:shadow-none print:max-w-none">
        {/* Outer glow border */}
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary via-green-700 to-primary opacity-60 blur-sm"></div>

        <div className="relative bg-[#050a05] rounded-2xl border border-primary/30 overflow-hidden print:rounded-none print:border-none"
          style={{ aspectRatio: '1.414' }}>

          {/* Subtle grid background */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'linear-gradient(rgba(34,197,94,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.04) 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }} />

          {/* React logo watermark */}
          <ReactWatermark />

          {/* Corner frames */}
          <CornerFrame position="tl" />
          <CornerFrame position="tr" />
          <CornerFrame position="br" />
          <CornerFrame position="bl" />

          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-80" />
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-80" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-between h-full p-10 md:p-14">

            {/* Header */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="text-primary text-4xl">⚛</span>
                <span className="text-2xl font-extrabold tracking-[0.25em] text-white uppercase">
                  React Mastery
                </span>
                <span className="text-primary text-4xl">⚛</span>
              </div>
              <p className="text-primary/60 text-xs tracking-[0.3em] uppercase font-mono">
                Turkish React Learning Platform
              </p>
            </div>

            {/* Main content */}
            <div className="text-center flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
                <p className="text-xs text-primary/70 uppercase tracking-[0.3em] font-mono">Bu sertifika aşağıdaki kişiye verilmiştir</p>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
              </div>

              <h2 className="text-5xl md:text-6xl font-serif font-bold tracking-wide text-white drop-shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                {userName}
              </h2>

              <div className="flex items-center gap-3">
                <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary/40" />
                <span className="text-primary/40 text-lg">◆</span>
                <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary/40" />
              </div>

              <h3 className="text-lg md:text-xl font-bold text-primary/90 tracking-wider uppercase">
                React TSX Geliştirici Uzmanlık Programı
              </h3>

              <p className="text-sm text-white/50 max-w-lg leading-relaxed">
                20 ders, her derse ait quiz ve canlı kod playground görevlerini başarıyla tamamlayarak React ekosisteminde uzmanlığını kanıtlamıştır.
              </p>
            </div>

            {/* Footer: signatures + verify */}
            <div className="w-full flex items-end justify-between gap-4">

              {/* Signature 1 */}
              <div className="text-center min-w-[140px]">
                <div className="mb-2 font-serif italic text-primary/80 text-xl leading-none" style={{ fontFamily: 'Georgia, serif' }}>
                  Ahmet Yılmaz
                </div>
                <div className="h-px w-full bg-primary/30 mb-1" />
                <p className="text-[10px] text-white/40 uppercase tracking-widest font-mono">Eğitim Direktörü</p>
              </div>

              {/* Verify badge */}
              <div className="flex flex-col items-center gap-2 border border-primary/30 rounded-xl px-5 py-3 bg-primary/5">
                <ShieldCheck className="w-6 h-6 text-primary/70" />
                <p className="text-[10px] text-primary/70 uppercase tracking-widest font-mono">Sertifika No</p>
                <p className="text-sm font-mono font-bold text-primary">{certNumber}</p>
                <p className="text-[10px] text-white/40 font-mono">{today}</p>
              </div>

              {/* Signature 2 */}
              <div className="text-center min-w-[140px]">
                <div className="mb-2 font-serif italic text-primary/80 text-xl leading-none" style={{ fontFamily: 'Georgia, serif' }}>
                  Elif Kaya
                </div>
                <div className="h-px w-full bg-primary/30 mb-1" />
                <p className="text-[10px] text-white/40 uppercase tracking-widest font-mono">Teknoloji Mimarı</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
