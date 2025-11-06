import { motion } from 'framer-motion';

export default function ProblemGoal() {
  const Item = ({ title, text }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl bg-white/70 p-6 shadow-lg shadow-sky-200/30 ring-1 ring-slate-100 backdrop-blur"
    >
      <h3 className="font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{text}</p>
    </motion.div>
  );

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10">
        <h2 className="font-[Manrope] text-3xl tracking-tight text-slate-900 md:text-4xl">Why Flow</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          We replace guilt and grind with mindful consistency. Designed with therapists and coaches,
          Flow blends gentle prompts, reflection, and habit science in a humane way.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Item
          title="Problem"
          text="Most trackers chase streaks without addressing how you feel. That pressure leads to drop‑offs and burnout."
        />
        <Item
          title="Goal"
          text="Create sustainable routines by pairing small actions with mindful check‑ins that meet you where you are."
        />
      </div>
    </section>
  );
}
