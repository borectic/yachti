import Link from 'next/link'
import { Anchor } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Anchor className="h-6 w-6 text-white" />
            <span className="text-xl font-semibold text-white">Yachti</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/yachts" className="text-sm font-medium text-white hover:text-white/80">
              Find Yachts
            </Link>
            <Link href="/explore" className="text-sm font-medium text-white hover:text-white/80">
              Explore
            </Link>
            <Link href="/information" className="text-sm font-medium text-white hover:text-white/80">
              Information
            </Link>
            <Link href="/for-owners" className="text-sm font-medium text-white hover:text-white/80">
              For Owners
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-white hover:text-white/80">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-white/80">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </Button>
            <Button
              size="sm"
              className="bg-white text-gray-900 hover:bg-white/90"
            >
              List your yacht
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}