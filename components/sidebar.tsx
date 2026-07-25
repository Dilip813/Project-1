'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const modules = [
  {
    id: 'linear-algebra',
    name: 'Linear Algebra',
    icon: '∑',
  },
  {
    id: 'analytic-geometry',
    name: 'Analytic Geometry',
    icon: '◆',
  },
  {
    id: 'matrix-decomposition',
    name: 'Matrix Decompositions',
    icon: '⊞',
  },
  {
    id: 'vector-calculus',
    name: 'Vector Calculus',
    icon: '∇',
  },
  {
    id: 'probability',
    name: 'Probability & Distributions',
    icon: '∫',
  },
  {
    id: 'optimization',
    name: 'Continuous Optimization',
    icon: '⊕',
  },
]

export default function Sidebar() {
  const [open, setOpen] = useState(true)
  const pathname = usePathname()

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-lg bg-card border border-border hover:bg-muted transition-colors"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 z-40 h-screen w-64 bg-card border-r border-border transition-transform duration-300 lg:translate-x-0 flex flex-col',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-sm font-bold text-foreground">
              M4
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold">Math4ML</span>
              <span className="text-xs text-muted-foreground">Visual Math</span>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold px-2 mb-4">
            Modules
          </div>
          {modules.map((module) => {
            const isActive = pathname.includes(module.id)
            return (
              <Link
                key={module.id}
                href={`/modules/${module.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group',
                  isActive
                    ? 'bg-accent/20 text-accent border border-accent/30'
                    : 'text-foreground hover:bg-muted/50 border border-transparent'
                )}
              >
                <span className="text-lg">{module.icon}</span>
                <span className="flex-1 text-sm font-medium truncate">{module.name}</span>
                {isActive && <ChevronRight size={16} />}
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border space-y-2">
          <a
            href="#"
            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors px-2"
          >
            Learn More
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors px-2"
          >
            Docs
          </a>
        </div>
      </aside>
    </>
  )
}
