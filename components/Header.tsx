"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src="/logos/matritwa.png" 
              alt="Matritwa" 
              width={56} 
              height={56}
              className="w-14 h-14"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              Matritwa
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <motion.div 
              whileHover={{ y: -2 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" className="text-gray-700 hover:text-primary-600 hover:bg-primary-50 px-4 py-2 rounded-lg transition">
                Home
              </Link>
            </motion.div>
            <motion.div 
              whileHover={{ y: -2 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/features" className="text-gray-700 hover:text-primary-600 hover:bg-primary-50 px-4 py-2 rounded-lg transition">
                Features
              </Link>
            </motion.div>
            <motion.div 
              whileHover={{ y: -2 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/team" className="text-white px-6 py-2 rounded-full transition shadow-md hover:shadow-lg bg-gradient-to-r from-secondary-600 to-highlight-600 hover:from-secondary-700 hover:to-highlight-700">
                Team
              </Link>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href="/survey" className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition shadow-md hover:shadow-lg">
                Survey Results
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pb-4 space-y-2 overflow-hidden"
            >
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/"
                  className="block py-2 px-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.15 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/features"
                  className="block py-2 px-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.18 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/team"
                  className="block py-2 px-4 text-white font-semibold rounded-lg transition bg-gradient-to-r from-secondary-600 to-highlight-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Team
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/survey"
                  className="block py-2 px-4 bg-primary-600 text-white font-semibold hover:bg-primary-700 rounded-lg transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Survey Results
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
