import { Shield, Cpu, Gauge, Cloud, Globe, HardDrive, Cable, Timer } from 'lucide-react'

const features = [
  { icon: Shield, title: 'DDoS Protection', desc: 'Enterprise-grade mitigation keeps your servers online.' },
  { icon: Cpu, title: 'NVMe + AMD/Intel', desc: 'Latest-gen CPUs with pure NVMe storage for speed.' },
  { icon: Gauge, title: 'Low Latency', desc: 'Global PoPs and peering for consistently low ping.' },
  { icon: Cloud, title: 'Instant Deploy', desc: 'Spin up instances in seconds with automated setup.' },
  { icon: Globe, title: 'Global Locations', desc: 'Choose from multiple regions close to your players.' },
  { icon: HardDrive, title: 'Backups', desc: 'Automated snapshots and easy one-click restores.' },
  { icon: Cable, title: '1 Gbps+ Network', desc: 'High-throughput links with premium bandwidth.' },
  { icon: Timer, title: '99.9% Uptime SLA', desc: 'Reliability you can count on for serious projects.' },
]

export default function FeatureGrid() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-black dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Built for performance</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Everything you need to host worlds, plugins, and production workloads.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-xl border border-white/50 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6 shadow-sm hover:shadow-xl transition overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-violet-600/0 group-hover:from-blue-500/10 group-hover:to-violet-600/10 transition" />
              <div className="relative">
                <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 text-white grid place-content-center shadow-lg shadow-violet-500/30">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
