import Spline from '@splinetool/react-spline'
import { ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80 dark:from-black/40 dark:via-black/30 dark:to-black/80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium bg-white/80 dark:bg-white/10 text-slate-700 dark:text-slate-200 ring-1 ring-black/10 backdrop-blur">
            New • Premium Minecraft & VPS Hosting
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Blazing performance for Minecraft servers and VPS
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Deploy instantly on global NVMe nodes. DDoS protected, panel-ready, and backed by 24/7 support.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold shadow-lg shadow-violet-500/30">
              View Plans
              <ChevronRight className="h-4 w-4" />
            </a>
            <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white/80 dark:bg-white/10 text-slate-800 dark:text-slate-100 ring-1 ring-black/10">
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
