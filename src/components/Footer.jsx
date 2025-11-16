export default function Footer() {
  return (
    <footer className="py-10 bg-white dark:bg-black border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600 dark:text-slate-300">© {new Date().getFullYear()} BlueHost Nodes. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Terms</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Privacy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Status</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
