import { useMobile } from '../hooks/useMobile'
import { ChevronDown } from 'lucide-react'

// A placeholder for MobileSelect
// In a full implementation, this would render a Radix Select on desktop
// and a custom Drawer on mobile.
export default function MobileSelect({ value, onChange, options, placeholder }) {
  const isMobile = useMobile()

  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-ocean-500"
      >
        <option value="" disabled>{placeholder || "Select an option..."}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
        <ChevronDown className="w-5 h-5" />
      </div>
    </div>
  )
}
