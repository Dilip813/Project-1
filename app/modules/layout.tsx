import LayoutWrapper from '@/components/layout-wrapper'

export default function ModuleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <LayoutWrapper>{children}</LayoutWrapper>
}
