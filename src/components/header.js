"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"></div>
              <span className="ml-2 text-xl font-bold">FinScore</span>
            </div>
          </motion.div>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className="text-sm font-medium hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <div className="relative">
            <button
              onClick={() => toggleDropdown("features")}
              className="flex items-center text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Features
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <AnimatePresence>
              {activeDropdown === "features" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full mt-2 w-48 rounded-md bg-white p-2 shadow-lg"
                >
                  <Link
                    href="/features/cibil-score"
                    className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100"
                  >
                    CIBIL Score Analysis
                  </Link>
                  <Link
                    href="/features/risk-assessment"
                    className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100"
                  >
                    Risk Assessment
                  </Link>
                  <Link
                    href="/features/api-integration"
                    className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100"
                  >
                    API Integration
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link
            href="/pricing"
            className="text-sm font-medium hover:text-blue-600 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-blue-600 transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-blue-600 transition-colors"
          >
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex gap-4">
          <Link href="/login">
            <Button variant="outline" className="h-9">
              Log In
            </Button>
          </Link>
          <Link href="/onboarding">
            <Button className="h-9 bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </Link>
        </div>
        <button
          className="flex items-center justify-center rounded-md p-2 md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="container md:hidden"
          >
            <nav className="flex flex-col gap-4 p-4">
              <Link
                href="/"
                className="text-sm font-medium"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <button
                onClick={() => toggleDropdown("mobileFeatures")}
                className="flex items-center justify-between text-sm font-medium"
              >
                Features
                <ChevronDown className="h-4 w-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === "mobileFeatures" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="ml-4 flex flex-col gap-2"
                  >
                    <Link
                      href="/features/cibil-score"
                      className="text-sm"
                      onClick={toggleMenu}
                    >
                      CIBIL Score Analysis
                    </Link>
                    <Link
                      href="/features/risk-assessment"
                      className="text-sm"
                      onClick={toggleMenu}
                    >
                      Risk Assessment
                    </Link>
                    <Link
                      href="/features/api-integration"
                      className="text-sm"
                      onClick={toggleMenu}
                    >
                      API Integration
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
              <Link
                href="/pricing"
                className="text-sm font-medium"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-2">
                <Link href="/login" onClick={toggleMenu}>
                  <Button variant="outline" className="w-full">
                    Log In
                  </Button>
                </Link>
                <Link href="/onboarding" onClick={toggleMenu}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Get Started
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
