import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CourseProvider } from "./context/CourseContext";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/Layout/Navbar";
import { Sidebar } from "./components/Layout/Sidebar";

import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { EgitimPage } from "./pages/EgitimPage";
import { LessonPage } from "./pages/LessonPage";
import NotFound from "./pages/not-found";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />
      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar />
        <main className="flex-1 overflow-y-auto custom-scrollbar relative z-0">
          {children}
        </main>
      </div>
    </div>
  );
}

function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <ThemeProvider>
      <CourseProvider>
        <BrowserRouter basename={basename}>
          <AnimatePresence mode="wait">
            <Routes>
              {/* Standalone pages */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/giris" element={<LoginPage />} />
              <Route path="/kayit" element={<RegisterPage />} />
              
              {/* Dashboard pages */}
              <Route path="/egitim" element={
                <DashboardLayout>
                  <EgitimPage />
                </DashboardLayout>
              } />
              <Route path="/egitim/:slug" element={
                <DashboardLayout>
                  <LessonPage />
                </DashboardLayout>
              } />
              
              {/* Fallback */}
              <Route path="*" element={
                <DashboardLayout>
                  <NotFound />
                </DashboardLayout>
              } />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </CourseProvider>
    </ThemeProvider>
  );
}

export default App;