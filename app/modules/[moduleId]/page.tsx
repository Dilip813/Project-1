'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import LessonTemplate from '@/components/lesson-template'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const moduleContent: Record<string, any> = {
  'linear-algebra': {
    name: 'Linear Algebra',
    description: 'Foundation for understanding vectors, matrices, and linear transformations',
    lessons: [
      {
        id: 'vectors-intro',
        title: 'Vectors & Vector Spaces',
        intro: 'A vector is a mathematical object that has both magnitude and direction. In machine learning, vectors are the fundamental data structure.',
      },
      {
        id: 'matrices',
        title: 'Matrices & Operations',
        intro: 'Matrices are rectangular arrays of numbers. They represent linear transformations and are essential for representing datasets.',
      },
      {
        id: 'eigenvalues',
        title: 'Eigenvalues & Eigenvectors',
        intro: 'Eigenvalues and eigenvectors reveal the underlying structure of matrices and are crucial for dimensionality reduction.',
      },
    ],
  },
  'analytic-geometry': {
    name: 'Analytic Geometry',
    description: 'Understanding spatial relationships through coordinates and transformations',
    lessons: [
      {
        id: 'coordinates',
        title: 'Coordinate Systems',
        intro: 'Coordinate systems provide a way to represent points in space using numbers.',
      },
    ],
  },
  'matrix-decomposition': {
    name: 'Matrix Decompositions',
    description: 'Breaking matrices into simpler components',
    lessons: [
      {
        id: 'svd',
        title: 'Singular Value Decomposition',
        intro: 'SVD is one of the most important matrix decompositions in machine learning.',
      },
    ],
  },
  'vector-calculus': {
    name: 'Vector Calculus',
    description: 'Calculus in multiple dimensions',
    lessons: [
      {
        id: 'gradients',
        title: 'Gradients & Derivatives',
        intro: 'Gradients tell us the direction of steepest increase in a function.',
      },
    ],
  },
  'probability': {
    name: 'Probability & Distributions',
    description: 'Understanding uncertainty and randomness',
    lessons: [
      {
        id: 'distributions',
        title: 'Probability Distributions',
        intro: 'Distributions describe how random variables are spread across values.',
      },
    ],
  },
  'optimization': {
    name: 'Continuous Optimization',
    description: 'Finding optimal solutions to problems',
    lessons: [
      {
        id: 'gradient-descent',
        title: 'Gradient Descent',
        intro: 'Gradient descent is the fundamental algorithm for training machine learning models.',
      },
    ],
  },
}

export default function ModulePage() {
  const [moduleId, setModuleId] = useState<string | null>(null)

useEffect(() => {
  const params = useParams()
  setModuleId(params.moduleId as string)
}, [])

  const [selectedLesson, setSelectedLesson] = useState(0)
  const module = moduleContent[moduleId]

  if (!module) {
    return (
      <div className="space-y-6">
        <Link href="/" className="inline-flex items-center gap-2 text-accent hover:underline">
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>
        <div className="text-center py-12">
          <p className="text-muted-foreground">Module not found</p>
        </div>
      </div>
    )
  }

  const currentLesson = module.lessons[selectedLesson]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <Link href="/" className="inline-flex items-center gap-2 text-accent hover:underline mb-4">
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>
        <h1 className="text-4xl font-bold mb-2">{module.name}</h1>
        <p className="text-muted-foreground">{module.description}</p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Lesson Template */}
        <div className="lg:col-span-3">
          <LessonTemplate
            title={currentLesson.title}
            moduleId={moduleId}
            sections={{
              intuition: currentLesson.intro,
              latex: 'Formula',
              context: 'This concept is essential for understanding how machine learning algorithms work. It appears in model training, data representation, and optimization.',
              code: `import numpy as np

# Example visualization
def visualize_concept(data):
    # Process and display
    return result

# Apply to real ML scenario
model.train(data)`,
            }}
          />
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          {/* Lessons List */}
          <Card className="p-4 bg-card border border-border sticky top-20">
            <h3 className="font-bold mb-4">Topics</h3>
            <div className="space-y-2">
              {module.lessons.map((lesson: any, idx: number) => (
                <button
                  key={lesson.id}
                  onClick={() => setSelectedLesson(idx)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                    selectedLesson === idx
                      ? 'bg-accent/20 text-accent border border-accent/30 font-medium'
                      : 'hover:bg-muted/50 text-foreground'
                  }`}
                >
                  {lesson.title}
                </button>
              ))}
            </div>
          </Card>

          {/* Progress */}
          <Card className="p-4 bg-gradient-to-br from-accent/10 to-secondary/10 border border-accent/20 mt-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Progress</h4>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-accent h-2 rounded-full transition-all"
                  style={{ width: `${((selectedLesson + 1) / module.lessons.length) * 100}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground">
                {selectedLesson + 1} of {module.lessons.length} topics
              </p>
            </div>
          </Card>
        </aside>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-border">
        <button
          onClick={() => setSelectedLesson(Math.max(0, selectedLesson - 1))}
          disabled={selectedLesson === 0}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ArrowLeft size={18} />
          Previous
        </button>
        <div className="text-sm text-muted-foreground">
          Topic {selectedLesson + 1} of {module.lessons.length}
        </div>
        <button
          onClick={() => setSelectedLesson(Math.min(module.lessons.length - 1, selectedLesson + 1))}
          disabled={selectedLesson === module.lessons.length - 1}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  )
}
