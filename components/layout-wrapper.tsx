import Sidebar from '@/components/sidebar'
import TopNav from '@/components/top-nav'

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <TopNav />
      <main className="pt-20 lg:pt-16 lg:pl-64">
        <div className="px-6 py-8 max-w-7xl">{children}</div>
      </main>
    </div>
  )
}
