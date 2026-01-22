'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { HomeIcon, ListBulletIcon, SparklesIcon, UserIcon } from '@heroicons/react/24/outline'
import { HomeIcon as HomeIconSolid, ListBulletIcon as ListBulletIconSolid, SparklesIcon as SparklesIconSolid, UserIcon as UserIconSolid } from '@heroicons/react/24/solid'

const navItems = [
  { href: '/', label: 'Accueil', Icon: HomeIcon, IconActive: HomeIconSolid },
  { href: '/pratiquer', label: 'Pratiquer', Icon: ListBulletIcon, IconActive: ListBulletIconSolid },
  { href: '/respirer', label: 'Respirer', Icon: SparklesIcon, IconActive: SparklesIconSolid },
  { href: '/profil', label: 'Profil', Icon: UserIcon, IconActive: UserIconSolid },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-yoga-bg flex flex-col">
      {/* Main content */}
      <main className="flex-1 pb-20">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 safe-bottom z-50">
        <div className="flex items-center justify-around h-16 max-w-md mx-auto">
          {navItems.map(({ href, label, Icon, IconActive }) => {
            const isActive = pathname === href || (href !== '/' && pathname.startsWith(href))
            const CurrentIcon = isActive ? IconActive : Icon
            
            return (
              <Link
                key={href}
                href={href}
                className={`flex flex-col items-center justify-center flex-1 h-full transition-colors duration-300 ${
                  isActive 
                    ? 'text-yoga-primary' 
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <CurrentIcon className="w-6 h-6" />
                <span className="text-xs mt-1 font-medium">{label}</span>
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
