'use client'

import { Search, Moon, GitBranch } from 'lucide-react'
import { useState } from 'react'

export default function TopNav() {
  const [theme, setTheme] = useState('dark')

  return (
    <header className="fixed top-0 right-0 left-0 lg:left-64 z-30 h-16 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="h-full px-6 flex items-center justify-between gap-4">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              placeholder="Search topics, lessons..."
              className="w-full pl-10 pr-4 py-2 bg-input border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-colors"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground"
            title="Toggle theme"
          >
            <Moon size={18} />
          </button>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground"
            title="GitHub"
          >
            <GitBranch size={18} />
          </a>
        </div>
      </div>
    </header>
  )
}
