import PageHeader from '../components/PageHeader'

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-full">
      {/* We don't show the back button on the main dashboard */}
      <PageHeader title="Dashboard" showBack={false} />

      <div className="p-4 md:p-6 space-y-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-ocean-500 to-teal-400 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center gap-2 mb-2 text-white/80">
            <span className="text-xl">✨</span>
            <span className="text-sm font-semibold uppercase tracking-wider">Welcome Back!</span>
          </div>
          <h2 className="text-3xl font-bold mb-2">Little Waves Wellness</h2>
          <p className="text-ocean-50 text-sm md:text-base">
            Riding the wave of healthy, happy kids 🌊
          </p>
          <button className="mt-6 bg-white text-ocean-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-ocean-50 transition-colors">
            Browse Classes →
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
            <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-3">
              👶
            </div>
            <div className="text-2xl font-bold">2</div>
            <div className="text-sm text-gray-500">My Kids</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
            <div className="w-10 h-10 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center mb-3">
              📅
            </div>
            <div className="text-2xl font-bold">1</div>
            <div className="text-sm text-gray-500">Upcoming Classes</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
            <div className="w-10 h-10 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mb-3">
              ⭐
            </div>
            <div className="text-2xl font-bold">1</div>
            <div className="text-sm text-gray-500">Total Bookings</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
            <div className="w-10 h-10 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center mb-3">
              💳
            </div>
            <div className="text-2xl font-bold">None</div>
            <div className="text-sm text-gray-500">Membership</div>
          </div>
        </div>
      </div>
    </div>
  )
}
