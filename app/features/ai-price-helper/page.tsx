'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import Link from 'next/link';
import { SparklesIcon } from '@/components/Icons';

export default function AIPriceHelperPage() {
  return (
    <div className="bg-gradient-to-b from-primary-50 to-white min-h-screen">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-secondary-600 to-secondary-700 py-20 text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <SparklesIcon className="w-16 h-16 mr-4" />
            <h1 className="text-5xl font-bold">AI Price Helper</h1>
          </div>
          <p className="text-xl text-primary-100">
            Get instant, fair price recommendations based on item condition and market data.
          </p>
        </div>
      </motion.section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Overview */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What is AI Price Helper?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Pricing secondhand items can be challenging. Our AI-powered pricing tool analyzes market data, item condition, brand, age, and local demand to suggest fair prices. Whether you're buying or selling, get confidence that you're making the right financial decision.
            </p>
          </div>

          {/* Key Benefits */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-secondary-600 mb-3">🎯 Fair Pricing</h3>
                <p className="text-gray-700">
                  Never overpay or undersell. Get AI-recommended prices based on real market conditions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-secondary-600 mb-3">⚡ Instant Results</h3>
                <p className="text-gray-700">
                  Get price suggestions instantly. No waiting for manual appraisals or expert opinions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-secondary-600 mb-3">📊 Data-Driven</h3>
                <p className="text-gray-700">
                  Our AI considers hundreds of factors including brand reputation, item age, and local market trends.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-secondary-600 mb-3">🏘️ Local Market</h3>
                <p className="text-gray-700">
                  Prices adjust based on your location and local demand patterns.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-secondary-50 to-accent-50 p-8 rounded-lg"
            >
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-4 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Input Item Details</h4>
                    <p className="text-gray-700">Tell us about the item: brand, model, age, condition, and location</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-4 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Upload Photos</h4>
                    <p className="text-gray-700">Add clear images to help our AI assess condition accurately</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-4 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Get Instant Price Range</h4>
                    <p className="text-gray-700">Receive a recommended price range with reasoning</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-4 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Market Insights</h4>
                    <p className="text-gray-700">See what similar items are selling for and how demand is trending</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-4 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">List with Confidence</h4>
                    <p className="text-gray-700">Use the recommended price or adjust based on your preferences</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Use Cases */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Real-World Examples</h2>
            <div className="space-y-4">
              {[
                { item: 'Baby Stroller', original: '$400', resale: '$180-220', savings: '45-55%' },
                { item: 'Crib', original: '$350', resale: '$140-180', savings: '49-60%' },
                { item: 'High Chair', original: '$250', resale: '$80-120', savings: '52-68%' },
                { item: 'Baby Clothes Bundle', original: '$100', resale: '$20-35', savings: '65-80%' },
              ].map((example, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md grid grid-cols-4 gap-4 items-center"
                >
                  <div>
                    <p className="font-bold text-gray-900">{example.item}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Original</p>
                    <p className="font-bold text-gray-900">{example.original}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Resale Range</p>
                    <p className="font-bold text-secondary-600">{example.resale}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">You Save</p>
                    <p className="font-bold text-green-600">{example.savings}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-secondary-600 to-secondary-700 text-white p-12 rounded-xl text-center"
          >
            <h3 className="text-3xl font-bold mb-4">Get Fair Prices Today</h3>
            <p className="text-lg mb-8 text-primary-100">
              Our AI pricing tool takes the guesswork out of buying and selling secondhand items.
            </p>
            <Link href="/early-access">
              <Button variant="secondary" size="lg">
                Start Using AI Price Helper
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
