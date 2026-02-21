import { useEffect, useState } from 'react';
import { ThemeProvider } from '@/hooks/useTheme';
import { Navbar } from '@/components/Navbar';
import { PipesBackground } from '@/components/PipesBackground';
import Footer from '@/components/Footer';
import { Home } from '@/pages/Home';
import { Projects } from '@/pages/Projects';
import { About } from '@/pages/About';
import { Media } from '@/pages/Media';
import './App.css';

type Page = 'home' | 'projects' | 'about' | 'media';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Handle navigation
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.href) {
        const url = new URL(anchor.href);
        const path = url.pathname.slice(1) as Page;
        
        if (['', 'projects', 'about', 'media'].includes(path)) {
          e.preventDefault();
          setCurrentPage(path || 'home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // Handle browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.slice(1) as Page;
      if (['', 'projects', 'about', 'media'].includes(path)) {
        setCurrentPage(path || 'home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update URL when page changes
  useEffect(() => {
    const path = currentPage === 'home' ? '/' : `/${currentPage}`;
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'projects':
        return <Projects />;
      case 'about':
        return <About />;
      case 'media':
        return <Media />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <PipesBackground />
      <Navbar />
      
      <main className="relative z-10 flex-1">
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;