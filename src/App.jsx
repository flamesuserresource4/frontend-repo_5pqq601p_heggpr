import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import Pricing from './components/Pricing'
import CTAContact from './components/CTAContact'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <Pricing />
        <CTAContact />
      </main>
      <footer className="py-10 border-t border-white/40 dark:border-white/10 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-600 dark:text-slate-300">
          <div>© {new Date().getFullYear()} BlueHost Nodes. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#pricing" className="hover:text-slate-900 dark:hover:text-white">Terms</a>
            <a href="#pricing" className="hover:text-slate-900 dark:hover:text-white">Privacy</a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-white">Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
