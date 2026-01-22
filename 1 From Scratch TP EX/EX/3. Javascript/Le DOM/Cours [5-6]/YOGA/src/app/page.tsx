import Hero from '@/components/home/Hero'
import QuickAccess from '@/components/home/QuickAccess'
import SessionList from '@/components/home/SessionList'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <QuickAccess />
      <SessionList />
    </div>
  )
}
