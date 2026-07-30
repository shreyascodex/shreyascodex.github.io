import React, { Suspense } from 'react';
import { ThemeProvider } from 'next-themes';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/layout/Hero';

const LazyAbout       = React.lazy(() => import('@/components/sections/About').then(m => ({ default: m.About })));
const LazySkills      = React.lazy(() => import('@/components/sections/Skills').then(m => ({ default: m.Skills })));
const LazyExperience  = React.lazy(() => import('@/components/sections/Experience').then(m => ({ default: m.Experience })));
const LazyProjects    = React.lazy(() => import('@/components/sections/Projects').then(m => ({ default: m.Projects })));
const LazyServices    = React.lazy(() => import('@/components/sections/Services').then(m => ({ default: m.Services })));
const LazyContact     = React.lazy(() => import('@/components/sections/Contact').then(m => ({ default: m.Contact })));

function SectionFallback() {
  return (
    <div className="w-full h-96 flex items-center justify-center bg-background">
      <div className="w-8 h-8 rounded-full border-2 border-accent border-t-transparent animate-spin" />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-accent/20 selection:text-accent">
        <Navbar />

        <main className="flex-1">
          <Hero />

          <Suspense fallback={<SectionFallback />}>
            <LazyAbout />
            <LazySkills />
            <LazyExperience />
            <LazyProjects />
            <LazyServices />
            <LazyContact />
          </Suspense>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
