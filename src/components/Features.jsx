import { motion } from 'framer-motion';
import { Check, Sparkles, Activity } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="h-5 w-5 text-rose-500" />,
    title: 'Mindful prompts',
    text: 'Gentle check-ins guide you to notice breath, posture, and emotions while you log habits.'
  },
  {
    icon: <Activity className="h-5 w-5 text-sky-500" />,
    title: 'Smart streaks',
    text: 'Flexible streaks with grace days keep momentum without the all-or-nothing stress.'
  },
  {
    icon: <Check className="h-5 w-5 text-emerald-500" />,
    title: 'Ritual builder',
    text: 'Bundle small actions into soothing routines: hydrate, stretch, breathe, reflect.'
  }
];

export default function Features() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10">
        <h2 className="font-[Manrope] text-3xl tracking-tight text-slate-900 md:text-4xl">Features</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Designed to be calm and clear. Subtle gradients, natural shadows, and rounded typography
          make your progress feel human and attainable.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="rounded-3xl bg-white/70 p-6 shadow-lg shadow-emerald-200/30 ring-1 ring-slate-100 backdrop-blur"
          >
            <div className="mb-3 flex items-center gap-3">
              {f.icon}
              <h3 className="font-semibold text-slate-900">{f.title}</h3>
            </div>
            <p className="text-slate-600">{f.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
