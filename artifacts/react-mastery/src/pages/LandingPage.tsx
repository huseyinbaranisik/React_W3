import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Terminal, Code2, LineChart, ChevronRight, Sun, Moon } from 'lucide-react';
import { useThemeContext } from '../context/ThemeContext';

export function LandingPage() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden">
      {/* Terminal Grid Background Effect */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(to right, rgba(34,197,94,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(34,197,94,0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
      }}></div>

      <header className="px-6 py-6 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="text-white font-bold">⚛</span>
          </div>
          <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            React Mastery
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-accent text-muted-foreground hover:text-foreground transition-colors">
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <Link to="/giris" className="text-sm font-medium hover:text-primary transition-colors">Giriş Yap</Link>
          <Link to="/kayit" className="text-sm font-medium px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]">
            Kayıt Ol
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 relative z-10 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mt-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            v3.0 Yayında
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
            React'ı Ustaca Öğren <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-green-400 to-secondary relative">
              bir adımda
              <span className="absolute -right-6 top-0 bottom-0 w-4 bg-primary animate-pulse inline-block opacity-70"></span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Modern React ekosistemini etkileşimli dersler, canlı kod editörü ve gerçek dünya örnekleriyle sıfırdan zirveye öğrenin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/egitim" className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-full hover:bg-primary/90 transition-all shadow-[0_0_25px_rgba(34,197,94,0.4)] hover:shadow-[0_0_35px_rgba(34,197,94,0.6)]">
              Hemen Başla <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-24">
          {[
            { icon: <Terminal className="w-6 h-6 text-primary" />, title: "12 Kapsamlı Ders", desc: "Temel kavramlardan ileri seviye hook'lara kadar özenle hazırlanmış müfredat." },
            { icon: <Code2 className="w-6 h-6 text-primary" />, title: "Canlı Kod Editörü", desc: "Öğrendiklerinizi anında uygulayın, hatalarınızı görün ve anında düzeltin." },
            { icon: <LineChart className="w-6 h-6 text-primary" />, title: "İlerleme Takibi", desc: "LocalStorage tabanlı ilerleme takibi ile nerede kaldığınızı asla unutmayın." }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex items-center justify-center gap-8 text-sm font-medium text-muted-foreground"
        >
          <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span> 12 Ders</div>
          <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> 3 Kategori</div>
          <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-purple-500"></span> LocalStorage Kayıt</div>
        </motion.div>
      </main>

      <footer className="py-6 border-t border-border text-center relative z-10">
        <p className="text-sm text-muted-foreground">React Mastery © 2025. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}