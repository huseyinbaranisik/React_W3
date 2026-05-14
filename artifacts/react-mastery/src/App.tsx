import React from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { AnimatePresence } from "framer-motion";
import { LessonProvider } from "./context/LessonContext";
import { Navbar } from "./components/Layout/Navbar";
import { Sidebar } from "./components/Layout/Sidebar";
import { Home } from "./pages/Home";
import { LessonPage } from "./pages/LessonPage";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/lesson/:slug" component={LessonPage} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <LessonProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
          <Navbar />
          <div className="flex flex-1 overflow-hidden relative">
            <Sidebar />
            <main className="flex-1 overflow-y-auto custom-scrollbar relative z-0">
              <Router />
            </main>
          </div>
        </div>
      </WouterRouter>
    </LessonProvider>
  );
}

export default App;
