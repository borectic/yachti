import Link from 'next/link'
import { Ship } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Ship className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold">Yachti</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Your premier destination for luxury maritime experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/yachts" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600">
                  Find Yachts
                </Link>
              </li>
              <li>
                <Link href="/captains" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600">
                  Find Captains
                </Link>
              </li>
              <li>
                <Link href="/list-yacht" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600">
                  List Your Yacht
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8">
          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Yachti. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}