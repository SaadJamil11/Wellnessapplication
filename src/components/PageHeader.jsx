import { useNavigate, useLocation } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'

export default function PageHeader({ title, showBack = false }) {
  const navigate = useNavigate()
  const location = useLocation()

  // Auto-show back button if not on root and showBack isn't explicitly false
  const shouldShowBack = showBack || location.pathname !== '/'

  return (
    <div className="sticky top-0 z-10 bg-ocean-50/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 px-4 py-3 flex items-center">
      {shouldShowBack && (
        <button
          onClick={() => navigate(-1)}
          className="mr-3 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          aria-label="Go back"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}
      <h1 className="text-xl font-semibold">{title}</h1>
    </div>
  )
}
