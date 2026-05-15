import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const pass = formData.get('password') as string;
    const confirmPass = formData.get('confirm-password') as string;

    if (pass !== confirmPass) {
      setError('Şifreler eşleşmiyor.');
      return;
    }
    
    setError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => navigate('/egitim'), 1500);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.1),transparent_50%)]"></div>
      
      <Link to="/" className="absolute top-8 left-8 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
        &larr; Ana Sayfaya Dön
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-card border border-primary/20 shadow-[0_0_40px_rgba(34,197,94,0.05)] rounded-2xl p-8 relative z-10"
      >
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
            <span className="text-white font-bold text-2xl">⚛</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground">Kayıt Ol</h1>
          <p className="text-muted-foreground mt-2">Yeni bir hesap oluşturun</p>
        </div>

        {success ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-500/10 border border-green-500/30 text-green-500 p-4 rounded-lg flex items-center gap-3 justify-center"
          >
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-medium">Kayıt başarılı! Yönlendiriliyorsunuz...</span>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Ad Soyad</label>
              <input 
                name="name"
                type="text" 
                required
                className="w-full bg-input/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground"
                placeholder="Adınız Soyadınız"
                data-testid="input-name"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">E-posta</label>
              <input 
                name="email"
                type="email" 
                required
                className="w-full bg-input/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground"
                placeholder="ornek@email.com"
                data-testid="input-email"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Şifre</label>
              <input 
                name="password"
                type="password" 
                required
                className="w-full bg-input/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground"
                placeholder="••••••••"
                data-testid="input-password"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Şifre Tekrar</label>
              <input 
                name="confirm-password"
                type="password" 
                required
                className="w-full bg-input/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground"
                placeholder="••••••••"
                data-testid="input-confirm-password"
              />
            </div>

            {error && <p className="text-sm text-destructive">{error}</p>}

            <motion.button 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit" 
              disabled={loading}
              className="w-full py-3 bg-primary text-primary-foreground font-bold rounded-lg mt-6 hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(34,197,94,0.2)] disabled:opacity-70"
              data-testid="button-register"
            >
              {loading ? "Kayıt Yapılıyor..." : "Kayıt Ol"}
            </motion.button>
          </form>
        )}

        <div className="mt-6 text-center text-sm text-muted-foreground">
          Zaten hesabınız var mı? <Link to="/giris" className="text-primary hover:underline font-medium">Giriş Yapın</Link>
        </div>
      </motion.div>
    </div>
  );
}