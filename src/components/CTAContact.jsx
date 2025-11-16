import { motion } from 'framer-motion'
import { Mail, MessageSquare, Headphones } from 'lucide-react'

export default function CTAContact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Need a custom setup or help migrating?</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Our team can tailor nodes, networks, and panels to your needs. Reach out and we’ll respond within minutes.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:sales@bluehostnodes.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow">
                <Mail className="h-4 w-4" /> Email Sales
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/70 dark:bg-white/5 ring-1 ring-black/10">
                <MessageSquare className="h-4 w-4" /> Live Chat
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-6 bg-gradient-to-br from-blue-600/10 to-violet-600/10 border border-violet-500/30"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 text-white grid place-content-center shadow-lg shadow-violet-500/30">
                <Headphones className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold text-slate-900 dark:text-white">24/7 Expert Support</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Fast replies by real engineers.</div>
              </div>
            </div>
            <ul className="mt-4 text-sm text-slate-700 dark:text-slate-200 list-disc pl-5 space-y-1">
              <li>Node & panel monitoring</li>
              <li>Proactive incident response</li>
              <li>Migration assistance</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
