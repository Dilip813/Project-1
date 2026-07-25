'use client'

import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface LessonTemplateProps {
  title: string
  moduleId: string
  sections: {
    intuition: string
    latex: string
    context: string
    code: string
  }
}

export default function LessonTemplate({ title, moduleId, sections }: LessonTemplateProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="text-sm text-accent font-semibold uppercase tracking-wider">{moduleId}</div>
        <h1 className="text-4xl font-bold text-balance">{title}</h1>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="intuition" className="w-full">
        <TabsList className="grid w-full grid-cols-5 bg-muted/30 border border-border">
          <TabsTrigger value="intuition" className="text-xs">
            Intuition
          </TabsTrigger>
          <TabsTrigger value="formula" className="text-xs">
            Formula
          </TabsTrigger>
          <TabsTrigger value="canvas" className="text-xs">
            Visualize
          </TabsTrigger>
          <TabsTrigger value="context" className="text-xs">
            ML Context
          </TabsTrigger>
          <TabsTrigger value="code" className="text-xs">
            Code
          </TabsTrigger>
        </TabsList>

        {/* Intuition Tab */}
        <TabsContent value="intuition" className="mt-6">
          <Card className="p-8 bg-card border border-border">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-foreground leading-relaxed">{sections.intuition}</p>
            </div>
          </Card>
        </TabsContent>

        {/* Formula Tab */}
        <TabsContent value="formula" className="mt-6">
          <Card className="p-12 bg-card border border-border flex items-center justify-center min-h-80">
            <div className="text-center">
              <div className="text-6xl font-bold text-accent/40 mb-4">{sections.latex}</div>
              <p className="text-muted-foreground">LaTeX formula placeholder</p>
            </div>
          </Card>
        </TabsContent>

        {/* Canvas Tab */}
        <TabsContent value="canvas" className="mt-6">
          <Card className="p-12 bg-card border border-border flex items-center justify-center min-h-96">
            <div className="text-center">
              <div className="text-6xl mb-4">📊</div>
              <p className="text-muted-foreground">Interactive canvas placeholder</p>
              <p className="text-sm text-muted-foreground mt-2">Three.js / Canvas visualization will render here</p>
            </div>
          </Card>
        </TabsContent>

        {/* ML Context Tab */}
        <TabsContent value="context" className="mt-6">
          <Card className="p-8 bg-card border border-border">
            <div className="prose prose-invert max-w-none">
              <p className="text-base text-foreground leading-relaxed">{sections.context}</p>
              <div className="mt-6 p-4 bg-accent/5 border border-accent/20 rounded-lg">
                <p className="text-sm text-foreground">
                  <strong>Why this matters in ML:</strong> This concept is fundamental to understanding how modern machine learning algorithms work under the hood.
                </p>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Code Tab */}
        <TabsContent value="code" className="mt-6">
          <Card className="p-6 bg-card border border-border">
            <pre className="bg-background/50 rounded-lg p-4 overflow-x-auto text-sm text-foreground font-mono">
              <code>{sections.code}</code>
            </pre>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
