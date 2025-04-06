import Link from 'next/link'
import { Anchor, Search, Ship } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Your Luxury Maritime Experience Awaits
          </h1>
          <p className="text-xl md:text-2xl text-center mb-8 max-w-3xl">
            Discover premium yacht charters, connect with experienced captains, and manage your fleet - all in one place.
          </p>
          
          {/* Search Bar */}
          <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-lg p-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-300" />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full pl-10 pr-4 py-2 bg-white/20 rounded-md placeholder-gray-300 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div className="relative">
                <Ship className="absolute left-3 top-3 h-5 w-5 text-gray-300" />
                <select className="w-full pl-10 pr-4 py-2 bg-white/20 rounded-md text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none">
                  <option value="">Yacht Type</option>
                  <option value="motor">Motor Yacht</option>
                  <option value="sail">Sailing Yacht</option>
                  <option value="catamaran">Catamaran</option>
                </select>
              </div>
              <div className="relative">
                <Anchor className="absolute left-3 top-3 h-5 w-5 text-gray-300" />
                <select className="w-full pl-10 pr-4 py-2 bg-white/20 rounded-md text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none">
                  <option value="">Service Type</option>
                  <option value="charter">Full Charter</option>
                  <option value="captain">Captain Only</option>
                  <option value="bareboat">Bareboat</option>
                </select>
              </div>
            </div>
            <button className="w-full md:w-auto px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition-colors">
              Search Available Yachts
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white">
            Why Choose Yachti?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow"
              >
                <feature.icon className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    icon: Ship,
    title: 'Premium Fleet',
    description: 'Access to a curated selection of luxury yachts, maintained to the highest standards.',
  },
  {
    icon: Anchor,
    title: 'Expert Captains',
    description: 'Connect with experienced, licensed captains for a safe and enjoyable journey.',
  },
  {
    icon: Search,
    title: 'Easy Management',
    description: 'Powerful tools for yacht owners and charter companies to manage their fleet efficiently.',
  },
]