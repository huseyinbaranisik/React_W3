import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, Github, Sun, Moon } from 'lucide-react';
import { ProgressBadge } from '../UI/ProgressBadge';
import { useCourseContext } from '../../context/CourseContext';
import { useThemeContext } from '../../context/ThemeContext';

export function Navbar() {
  const { searchQuery, setSearchQuery, sidebarOpen, setSidebarOpen } = useCourseContext();
  const { theme, toggleTheme } = useThemeContext();

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-card/80 border-b border-border" data-testid="navbar">
      <div className="flex items-center justify-between px-4 h-16 max-w-[1400px] mx-auto">
        <div className="flex items-center gap-4">
          <button 
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            data-testid="button-toggle-sidebar"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(34,197,94,0.5)] transition-all">
              <span className="text-white text-lg font-bold">⚛</span>
            </div>
            <span className="font-bold text-lg hidden sm:block bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              React Mastery
            </span>
          </Link>

          <div className="hidden md:flex items-center ml-4 gap-4 text-sm font-medium">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Ana Sayfa</Link>
            <Link to="/egitim" className="text-muted-foreground hover:text-foreground transition-colors">Eğitim</Link>
          </div>
        </div>

        <div className="flex-1 max-w-md px-4 hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Ders Ara..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-10 pr-4 rounded-full bg-input/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
              data-testid="input-search"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-github"
          >
            <Github className="w-5 h-5" />
          </a>
          <div className="w-px h-6 bg-border mx-1"></div>
          <ProgressBadge />
        </div>
      </div>
    </nav>
  );
}