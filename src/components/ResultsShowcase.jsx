import { motion } from 'framer-motion';

function MockupCard({ angle = '-rotate-3', img, title, detail }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className={`relative overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-100 ${angle}`}
    >
      <img src={img} alt={title} className="h-64 w-full object-cover" />
      <div className="p-4">
        <p className="font-semibold text-slate-900">{title}</p>
        <p className="text-sm text-slate-600">{detail}</p>
      </div>
    </motion.div>
  );
}

export default function ResultsShowcase() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10">
        <h2 className="font-[Manrope] text-3xl tracking-tight text-slate-900 md:text-4xl">Results & Showcase</h2>
        <p className="mt-2 max-w-3xl text-slate-600">
          People use Flow to sleep better, reduce screen time, and move more mindfully. Here are a few
          mockups of the experience paired with authentic, everyday moments.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <MockupCard
          angle="-rotate-2"
          img="https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=1600&auto=format&fit=crop"
          title="Morning journal + circular progress"
          detail="Reflect for 5 minutes, then track with a gentle 80% ring."
        />
        <MockupCard
          angle="rotate-1"
          img="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop"
          title="Lunch break stretch with streaks"
          detail="Keep momentum with grace days so real life fits."
        />
        <MockupCard
          angle="-rotate-1"
          img="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop"
          title="Evening wind‑down"
          detail="Soft gradients, warm light, and a quick check-in for mood."
        />
      </div>

      <div className="mt-12 grid items-center gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-white/70 p-6 shadow-lg shadow-rose-200/30 ring-1 ring-slate-100 backdrop-blur">
          <h3 className="font-semibold text-slate-900">Results</h3>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li>• 27% average increase in weekly habit completion</li>
            <li>• 19% reduction in reported stress over 4 weeks</li>
            <li>• 2× improvement in sleep consistency</li>
          </ul>
        </div>

        {/* larger habit mockup */}
        <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-2xl shadow-emerald-200/40 ring-1 ring-slate-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Hydration</p>
              <p className="font-semibold text-slate-800">6 / 8 glasses</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16">
                <svg className="h-16 w-16" viewBox="0 0 36 36">
                  <path className="text-slate-200" stroke="currentColor" strokeWidth="4" fill="none" d="M18 2a16 16 0 1 1 0 32 16 16 0 0 1 0-32z" />
                  <path className="text-sky-400" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" strokeDasharray="60 100" d="M18 2a16 16 0 1 1 0 32 16 16 0 0 1 0-32z" />
                </svg>
                <div className="pointer-events-none absolute inset-0 grid place-items-center text-sm font-semibold text-slate-700">60%</div>
              </div>
              <div className="rounded-full bg-sky-50 px-3 py-1 text-sky-700 ring-1 ring-sky-200">Streak 9</div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-8 gap-2">
            {Array.from({ length: 28 }).map((_, i) => (
              <div key={i} className={`h-8 rounded-lg shadow-sm ring-1 ring-slate-100 ${i % 3 === 0 ? 'bg-emerald-100' : 'bg-slate-50'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
