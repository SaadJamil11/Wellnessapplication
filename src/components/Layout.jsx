import { Outlet, NavLink } from 'react-router-dom'
import { Home, CalendarDays, Users, Star, CreditCard } from 'lucide-react'
import { cn } from '../lib/utils'

const NAV_ITEMS = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Classes', path: '/classes', icon: CalendarDays },
  { name: 'My Kids', path: '/kids', icon: Users },
  { name: 'Progress', path: '/progress', icon: Star },
  { name: 'Membership', path: '/membership', icon: CreditCard },
]

export default function Layout() {
  return (
    <div className="min-h-screen bg-ocean-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col md:flex-row">

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 bg-ocean-600 dark:bg-gray-800 text-white flex-col h-screen sticky top-0 shrink-0">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-xl">🌊</span>
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight">Little Waves</h1>
            <p className="text-ocean-200 text-xs">Wellness for Kids</p>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium",
                isActive
                  ? "bg-white text-ocean-600 dark:bg-gray-700 dark:text-white shadow-sm"
                  : "text-white/80 hover:bg-white/10"
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 relative pb-20 md:pb-0 h-screen overflow-y-auto">
        <Outlet />
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 pb-[env(safe-area-inset-bottom)] z-50">
        <div className="flex items-center justify-around h-16 px-2">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => cn(
                "flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors",
                isActive
                  ? "text-ocean-600 dark:text-ocean-400"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              )}
            >
              <item.icon className="w-6 h-6" />
              <span className="text-[10px] font-medium">{item.name}</span>
            </NavLink>
          ))}
        </div>
      </nav>

    </div>
  )
}
