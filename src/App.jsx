import Hero from './components/Hero';
import ProblemGoal from './components/ProblemGoal';
import Features from './components/Features';
import ResultsShowcase from './components/ResultsShowcase';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-sky-50 to-emerald-50 text-slate-800 antialiased">
      <Hero />
      <ProblemGoal />
      <Features />
      <ResultsShowcase />
      <footer className="py-12 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Flow — Mindfulness-based habit tracking for a calmer, consistent you.</p>
      </footer>
    </div>
  );
}

export default App;
