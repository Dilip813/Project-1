'use client'

import Link from 'next/link'
import { ArrowRight, Zap } from 'lucide-react'
import { Card } from '@/components/ui/card'

const modules = [
  {
    id: 'linear-algebra',
    name: 'Linear Algebra',
    description: 'Vectors, matrices, and transformations',
    icon: '∑',
    color: 'from-cyan-500 to-blue-500',
    topics: 8,
  },
  {
    id: 'analytic-geometry',
    name: 'Analytic Geometry',
    description: 'Coordinates, distances, and angles',
    icon: '◆',
    color: 'from-purple-500 to-pink-500',
    topics: 6,
  },
  {
    id: 'matrix-decomposition',
    name: 'Matrix Decompositions',
    description: 'SVD, QR, Eigenvalues',
    icon: '⊞',
    color: 'from-green-500 to-emerald-500',
    topics: 7,
  },
  {
    id: 'vector-calculus',
    name: 'Vector Calculus',
    description: 'Gradients, divergence, curl',
    icon: '∇',
    color: 'from-orange-500 to-red-500',
    topics: 9,
  },
  {
    id: 'probability',
    name: 'Probability & Distributions',
    description: 'Probability theory and statistics',
    icon: '∫',
    color: 'from-indigo-500 to-purple-500',
    topics: 10,
  },
  {
    id: 'optimization',
    name: 'Continuous Optimization',
    description: 'Gradient descent and algorithms',
    icon: '⊕',
    color: 'from-pink-500 to-rose-500',
    topics: 8,
  },
]

export default function DashboardHero() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="space-y-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium">
            <Zap size={16} />
            Visual Learning
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight">
            Mathematics for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Machine Learning</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Master the mathematical foundations of ML through interactive visualizations and intuitive explanations. From linear algebra to optimization.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-6">
          <Link
            href="/modules/linear-algebra"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Start Learning
            <ArrowRight size={18} />
          </Link>
          <button className="px-6 py-3 rounded-lg border border-border hover:bg-muted/50 transition-colors font-semibold">
            View Roadmap
          </button>
        </div>
      </section>

      {/* Module Roadmap */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Learning Roadmap</h2>
          <p className="text-muted-foreground">6 comprehensive modules with 48+ interactive lessons</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((module) => (
            <Link key={module.id} href={`/modules/${module.id}`}>
              <Card className="p-6 bg-card border border-border hover:border-accent/50 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 cursor-pointer h-full group">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${module.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                  {module.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                  {module.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{module.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-xs text-muted-foreground">{module.topics} lessons</span>
                  <ArrowRight size={16} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="grid grid-cols-3 gap-4">
        <Card className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
          <div className="text-3xl font-bold text-cyan-400">48+</div>
          <p className="text-sm text-muted-foreground mt-2">Interactive Lessons</p>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
          <div className="text-3xl font-bold text-purple-400">6</div>
          <p className="text-sm text-muted-foreground mt-2">Core Modules</p>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
          <div className="text-3xl font-bold text-green-400">100%</div>
          <p className="text-sm text-muted-foreground mt-2">Visual Learning</p>
        </Card>
      </section>
    </div>
  )
}
