import Link from 'next/link'
import { Ship } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Ship className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">Yachti</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/yachts" className="text-sm font-medium hover:text-blue-600">
              Find Yachts
            </Link>
            <Link href="/captains" className="text-sm font-medium hover:text-blue-600">
              Find Captains
            </Link>
            <Link href="/list-yacht" className="text-sm font-medium hover:text-blue-600">
              List Your Yacht
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-blue-600">
              About
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}