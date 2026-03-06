import { useCallback, useEffect, useRef, useState } from 'react';
import { ThemeProvider } from '@/hooks/useTheme';
import { Navbar } from '@/components/Navbar';
import { PipesBackground } from '@/components/PipesBackground';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';
import Footer from '@/components/Footer';
import { Home } from '@/pages/Home';
import { Projects } from '@/pages/Projects';
import { About } from '@/pages/About';
import { Media } from '@/pages/Media';
import './App.css';

type Page = 'home' | 'projects' | 'about' | 'media';

const routes: Page[] = ['home', 'projects', 'about', 'media'];
const EXIT_DURATION = 140;
const ENTER_DURATION = 320;

function resolvePage(pathname: string): Page {
  const path = pathname.slice(1) as Page;
  return routes.includes(path) ? path : 'home';
}

function AppContent() {
  const initialPage = resolvePage(window.location.pathname);
  const [currentPage, setCurrentPage] = useState<Page>(initialPage);
  const [displayedPage, setDisplayedPage] = useState<Page>(initialPage);
  const [transitionStage, setTransitionStage] = useState<'idle' | 'exit' | 'enter'>('enter');
  const exitTimerRef = useRef<number | null>(null);
  const enterTimerRef = useRef<number | null>(null);

  const clearTransitionTimers = () => {
    if (exitTimerRef.current !== null) {
      window.clearTimeout(exitTimerRef.current);
      exitTimerRef.current = null;
    }

    if (enterTimerRef.current !== null) {
      window.clearTimeout(enterTimerRef.current);
      enterTimerRef.current = null;
    }
  };

  const navigateTo = useCallback((nextPage: Page, smoothScroll = true) => {
    if (nextPage === currentPage && nextPage === displayedPage) {
      if (smoothScroll) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    clearTransitionTimers();
    setCurrentPage(nextPage);
    setTransitionStage('exit');

    if (smoothScroll) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    exitTimerRef.current = window.setTimeout(() => {
      setDisplayedPage(nextPage);
      setTransitionStage('enter');

      enterTimerRef.current = window.setTimeout(() => {
        setTransitionStage('idle');
      }, ENTER_DURATION);
    }, EXIT_DURATION);
  }, [currentPage, displayedPage]);

  useEffect(() => {
    enterTimerRef.current = window.setTimeout(() => {
      setTransitionStage('idle');
    }, ENTER_DURATION);

    return () => clearTransitionTimers();
  }, []);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest('a');

      if (!anchor || !anchor.href || anchor.target === '_blank' || anchor.hasAttribute('download')) {
        return;
      }

      const url = new URL(anchor.href, window.location.href);

      if (url.origin !== window.location.origin) {
        return;
      }

      const path = url.pathname.slice(1) as Page;

      if (['', 'projects', 'about', 'media'].includes(path)) {
        event.preventDefault();
        navigateTo(path || 'home');
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [navigateTo]);

  useEffect(() => {
    const handlePopState = () => {
      navigateTo(resolvePage(window.location.pathname), false);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [navigateTo]);

  useEffect(() => {
    const path = currentPage === 'home' ? '/' : `/${currentPage}`;

    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
  }, [currentPage]);

  const renderPage = (page: Page) => {
    switch (page) {
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
    <div className="relative flex min-h-screen flex-col">
      <PipesBackground />
      <Navbar currentPage={currentPage} />
      <main className="relative z-10 flex-1 overflow-x-hidden">
        <div
          key={displayedPage}
          className={`route-shell ${
            transitionStage === 'exit'
              ? 'route-shell--exit'
              : transitionStage === 'enter'
                ? 'route-shell--enter'
                : ''
          }`}
        >
          {renderPage(displayedPage)}
        </div>
      </main>
      <ScrollToTopButton />
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
