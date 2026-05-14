import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Layout from './components/Layout'

// Pages
import Dashboard from './pages/Dashboard'
import Classes from './pages/Classes'
import Kids from './pages/Kids'
import Progress from './pages/Progress'
import Membership from './pages/Membership'

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.2 }}
        className="h-full w-full"
      >
        <Routes location={location}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="classes" element={<Classes />} />
            <Route path="kids" element={<Kids />} />
            <Route path="progress" element={<Progress />} />
            <Route path="membership" element={<Membership />} />
          </Route>
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

function App() {
  // Dark mode sync
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = () => {
      if (mediaQuery.matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }

    handleChange() // Initial check
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App
