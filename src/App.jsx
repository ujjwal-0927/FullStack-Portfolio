
import { lazy, Suspense } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AIChatbot from './components/AIChatbot.jsx';
import Hero from './components/Hero.jsx';
const About = lazy(() => import('./components/About.jsx'));
const Experience = lazy(() => import('./components/Experience.jsx'));
const Skills = lazy(() => import('./components/Skills.jsx'));
const Projects = lazy(() => import('./components/Projects.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));

const SectionLoader = () => (
  <div className="flex h-32 w-full items-center justify-center">
    <div className="h-6 w-6 animate-spin rounded-full border-2 border-indigo-500 border-t-transparent" />
  </div>
);

function App() {
  return (
    <div className="App bg-slate-950 text-slate-100 min-h-screen selection:bg-indigo-500 selection:text-white">
      <Header />
      <main className="pt-20">
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
}

export default App;