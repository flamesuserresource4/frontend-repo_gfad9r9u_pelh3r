import { motion } from 'framer-motion';

const pastels = {
  pill: 'bg-white/60 backdrop-blur shadow-lg shadow-rose-200/40 ring-1 ring-white/50',
  button: 'bg-rose-200 text-rose-900 hover:bg-rose-300 focus-visible:ring-2 focus-visible:ring-rose-400',
};

function StatPill({ icon, label, value }) {
  return (
    <div className={`flex items-center gap-3 px-4 py-2 rounded-full ${pastels.pill}`}>
      <span className="text-rose-400">{icon}</span>
      <span className="text-slate-600">{label}</span>
      <span className="ml-auto font-semibold text-slate-800">{value}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft gradient aura */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-12 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-rose-200/40 blur-3xl" />
        <div className="absolute top-24 left-10 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm text-slate-600 shadow-sm ring-1 ring-slate-200/60 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Mindfulness-first habit tracking
            </div>

            <h1 className="font-[Manrope] text-4xl leading-tight tracking-tight text-slate-900 md:text-6xl">
              Flow — build gentle, consistent habits you actually enjoy
            </h1>
            <p className="max-w-xl text-lg text-slate-600">
              A calm space to track, reflect, and grow. Soft visuals, real-life inspiration,
              and science-backed routines that fit your rhythm.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button className={`rounded-full px-6 py-3 text-sm font-semibold shadow-md ${pastels.button}`}>
                Start your 7‑day reset
              </button>
              <button className="rounded-full px-6 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 hover:bg-white/70 backdrop-blur">
                Explore the demo
              </button>
            </div>

            <div className="mt-6 grid max-w-md grid-cols-2 gap-3">
              <StatPill icon={'🧘‍♀️'} label="Mindful minutes" value="42 today" />
              <StatPill icon={'🔥'} label="Current streak" value="18 days" />
              <StatPill icon={'🗓️'} label="Weekly sessions" value="5 / 7" />
              <StatPill icon={'🌿'} label="Stress trend" value="-12%" />
            </div>
          </motion.div>

          {/* Human lifestyle photo with soft shadows and rounded corners */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-white shadow-xl shadow-rose-200/40 ring-1 ring-slate-100">
              <img
                src="https://images.unsplash.com/photo-1516542076529-1ea3854896e1?q=80&w=1600&auto=format&fit=crop"
                alt="Calm person journaling with tea and soft light"
                className="h-full w-full object-cover"
                loading="eager"
              />
              {/* overlay subtle gradient for depth */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/40" />

              {/* floating UI mockup card */}
              <div className="absolute -bottom-6 left-1/2 w-[88%] -translate-x-1/2">
                <div className="rounded-2xl bg-white/90 p-4 shadow-2xl shadow-emerald-200/40 ring-1 ring-slate-200 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500">Daily Meditation</p>
                      <p className="font-semibold text-slate-800">12 min breath focus</p>
                    </div>
                    <div className="flex items-center gap-4">
                      {/* circular progress */}
                      <div className="relative h-12 w-12">
                        <svg className="h-12 w-12" viewBox="0 0 36 36">
                          <path
                            className="text-slate-200"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                            d="M18 2a16 16 0 1 1 0 32 16 16 0 0 1 0-32z"
                          />
                          <path
                            className="text-emerald-400"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeLinecap="round"
                            fill="none"
                            strokeDasharray="75 100"
                            d="M18 2a16 16 0 1 1 0 32 16 16 0 0 1 0-32z"
                          />
                        </svg>
                        <div className="pointer-events-none absolute inset-0 grid place-items-center text-xs font-semibold text-slate-700">
                          75%
                        </div>
                      </div>
                      <div className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 ring-1 ring-emerald-200">
                        Streak 18
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
