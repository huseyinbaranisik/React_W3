import React from 'react';
import { Link } from 'react-router-dom';
import { useCourseContext } from '../context/CourseContext';
import { ArrowLeft, Printer } from 'lucide-react';

export function CertificatePage() {
  const { userName, completedLessons } = useCourseContext();
  const isEligible = completedLessons.length >= 20;

  if (!isEligible) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-destructive mb-4">Sertifika henüz kazanılmadı.</h1>
        <p className="text-muted-foreground mb-8">Tüm dersleri tamamlayın.</p>
        <Link to="/profil" className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Geri Dön
        </Link>
      </div>
    );
  }

  const today = new Date().toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center py-12 px-4">
      {/* Controls (hidden when printing) */}
      <div className="flex items-center gap-4 mb-8 print:hidden">
        <Link to="/profil" className="flex items-center gap-2 px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Geri Dön
        </Link>
        <button 
          onClick={() => window.print()}
          className="flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Printer className="w-4 h-4" /> Yazdır
        </button>
      </div>

      {/* Certificate Card */}
      <div className="w-full max-w-4xl aspect-[1.414] bg-white text-black shadow-2xl rounded-xl p-12 md:p-16 relative overflow-hidden border-8 border-double border-gray-100 flex flex-col justify-between print:shadow-none print:border-none print:m-0 print:p-0">
        
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-primary via-green-400 to-secondary"></div>
        <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-primary via-green-400 to-secondary"></div>
        
        <div className="text-center space-y-6 flex-1 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-primary text-5xl">⚛</span>
            <span className="text-3xl font-extrabold tracking-widest text-gray-900 uppercase">REACT MASTERY</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 uppercase tracking-widest mb-8">
            Uzmanlık Sertifikası
          </h1>

          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8"></div>

          <p className="text-lg text-gray-500 uppercase tracking-widest mb-4">
            Bu sertifika aşağıdaki kişiye verilmiştir:
          </p>

          <h2 className="text-5xl md:text-6xl font-serif font-bold text-black mb-4">
            {userName}
          </h2>

          <div className="w-64 h-px bg-gray-300 mx-auto mb-8"></div>

          <h3 className="text-2xl font-bold text-primary mb-6">
            React TSX Geliştirici Uzmanlık Programı
          </h3>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Bu kişi, 20 ders ve her derse ait quiz ile playground görevlerini başarıyla tamamlamıştır.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-16 flex items-end justify-between px-12 relative z-10">
          <div className="text-center">
            <div className="w-48 h-px bg-gray-400 mb-2"></div>
            <p className="text-sm font-bold text-gray-600 uppercase">React Mastery Platform</p>
          </div>
          
          {/* Seal */}
          <div className="w-32 h-32 rounded-full border-4 border-primary bg-white flex flex-col items-center justify-center absolute left-1/2 -translate-x-1/2 -bottom-4 shadow-lg transform rotate-[-15deg]">
            <span className="text-primary text-3xl mb-1">⚛</span>
            <span className="text-[10px] font-bold text-primary text-center leading-tight">REACT<br/>MASTER</span>
          </div>

          <div className="text-center">
            <div className="w-48 h-px bg-gray-400 mb-2 text-center text-lg font-serif">{today}</div>
            <p className="text-sm font-bold text-gray-600 uppercase">Veriliş Tarihi</p>
          </div>
        </div>

      </div>
    </div>
  );
}