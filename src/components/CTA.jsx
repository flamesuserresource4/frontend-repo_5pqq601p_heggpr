import { Sparkles } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-violet-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white/10 border border-white/20 p-10 backdrop-blur-xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-extrabold">Ready to launch?</h3>
              <p className="mt-2 text-white/80">Create your first server in under a minute. Cancel anytime.</p>
            </div>
            <div className="flex gap-3">
              <a href="#pricing" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white text-slate-900 font-semibold">
                Get Started
                <Sparkles className="h-4 w-4"/>
              </a>
              <a href="#features" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white/10 text-white ring-1 ring-white/30">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
