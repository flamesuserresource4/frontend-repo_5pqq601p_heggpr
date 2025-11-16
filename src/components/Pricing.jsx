import { motion } from 'framer-motion'
import { Check, Zap, Crown, Rocket } from 'lucide-react'
import { useState } from 'react'

const tiers = {
  minecraft: [
    {
      name: 'Grass',
      price: 4,
      period: 'mo',
      highlights: ['2 GB RAM', '1 vCPU', '20 GB NVMe', 'Unlimited Slots', 'DDoS Protection'],
      badge: 'Starter',
      cta: 'Start Minecraft',
    },
    {
      name: 'Redstone',
      price: 10,
      period: 'mo',
      highlights: ['6 GB RAM', '2 vCPU', '40 GB NVMe', 'Backups', 'Priority Support'],
      badge: 'Popular',
      cta: 'Choose Redstone',
      featured: true,
    },
    {
      name: 'Netherite',
      price: 24,
      period: 'mo',
      highlights: ['12 GB RAM', '4 vCPU', '80 GB NVMe', 'Advanced DDoS', 'Free Migration'],
      badge: 'Pro',
      cta: 'Go Netherite',
    },
  ],
  vps: [
    {
      name: 'Nano',
      price: 6,
      period: 'mo',
      highlights: ['1 vCPU', '1 GB RAM', '25 GB NVMe', '1 Tb transfer', '1 Gbps network'],
      badge: 'Starter',
      cta: 'Deploy VPS',
    },
    {
      name: 'Burst',
      price: 14,
      period: 'mo',
      highlights: ['2 vCPU', '4 GB RAM', '60 GB NVMe', '3 Tb transfer', 'Snapshots'],
      badge: 'Popular',
      cta: 'Choose Burst',
      featured: true,
    },
    {
      name: 'Titan',
      price: 32,
      period: 'mo',
      highlights: ['4 vCPU', '8 GB RAM', '120 GB NVMe', '5 Tb transfer', 'Premium bandwidth'],
      badge: 'Pro',
      cta: 'Scale with Titan',
    },
  ],
}

function PlanCard({ plan }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className={`relative rounded-2xl border p-6 bg-white/70 dark:bg-white/5 backdrop-blur shadow-sm ${
        plan.featured ? 'border-violet-500/40 shadow-violet-500/20' : 'border-white/50 dark:border-white/10'
      }`}
    >
      {plan.featured && (
        <span className="absolute -top-3 left-6 text-xs px-2 py-1 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow">
          Best Value
        </span>
      )}
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 text-white grid place-content-center shadow-lg shadow-violet-500/30">
          {plan.badge === 'Pro' ? <Crown className="h-5 w-5" /> : plan.badge === 'Popular' ? <Zap className="h-5 w-5" /> : <Rocket className="h-5 w-5" />}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{plan.name}</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">{plan.badge}</p>
        </div>
      </div>

      <div className="mt-5 flex items-end gap-1">
        <div className="text-4xl font-extrabold text-slate-900 dark:text-white">${plan.price}</div>
        <div className="pb-2 text-slate-500 dark:text-slate-400">/{plan.period}</div>
      </div>

      <ul className="mt-5 space-y-2 text-sm">
        {plan.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-slate-700 dark:text-slate-200">
            <Check className="h-4 w-4 text-violet-600 mt-0.5" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium shadow-lg shadow-violet-500/30"
      >
        {plan.cta}
      </a>
    </motion.div>
  )
}

export default function Pricing() {
  const [mode, setMode] = useState('minecraft')

  const tabs = [
    { key: 'minecraft', label: 'Minecraft Hosting' },
    { key: 'vps', label: 'VPS Hosting' },
  ]

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Transparent pricing, no surprises</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Flexible plans for creators, communities, and businesses of every size.</p>

          <div className="mt-6 inline-flex rounded-lg p-1 bg-white/70 dark:bg-white/5 ring-1 ring-black/10 backdrop-blur">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setMode(t.key)}
                className={`px-4 py-2 text-sm rounded-md transition ${
                  mode === t.key ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow' : 'text-slate-700 dark:text-slate-200'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="mt-12 grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          {tiers[mode].map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </motion.div>

        <div className="mt-10 text-center text-sm text-slate-500 dark:text-slate-400">
          All plans include DDoS protection, 24/7 support, and a 3-day refund policy.
        </div>
      </div>
    </section>
  )
}
