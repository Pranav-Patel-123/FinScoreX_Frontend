import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white py-12">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-4">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"></div>
            <span className="text-xl font-bold">CreditAI</span>
          </Link>
          <p className="text-sm text-gray-500">
            AI-powered credit assessment for macro finance businesses. Get real-time CIBIL scores and comprehensive risk
            analysis.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-500 hover:text-blue-600">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-blue-600">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-blue-600">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-blue-600">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Features</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/features/cibil-score" className="text-gray-500 hover:text-blue-600">
                CIBIL Score Analysis
              </Link>
            </li>
            <li>
              <Link href="/features/risk-assessment" className="text-gray-500 hover:text-blue-600">
                Risk Assessment
              </Link>
            </li>
            <li>
              <Link href="/features/api-integration" className="text-gray-500 hover:text-blue-600">
                API Integration
              </Link>
            </li>
            <li>
              <Link href="/features/dashboard" className="text-gray-500 hover:text-blue-600">
                Business Dashboard
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="text-gray-500 hover:text-blue-600">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/careers" className="text-gray-500 hover:text-blue-600">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-500 hover:text-blue-600">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/press" className="text-gray-500 hover:text-blue-600">
                Press
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/contact" className="text-gray-500 hover:text-blue-600">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/help" className="text-gray-500 hover:text-blue-600">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-gray-500 hover:text-blue-600">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-gray-500 hover:text-blue-600">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-8 border-t pt-8 px-4 md:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} CreditAI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-blue-600">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-blue-600">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-xs text-gray-500 hover:text-blue-600">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

