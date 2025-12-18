'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import Link from 'next/link';
import {
  ShoppingBagIcon,
  SparklesIcon,
  ChatIcon,
  ShieldIcon,
  UsersIcon,
  GlobeIcon,
  MusicIcon,
} from '@/components/Icons';

export default function ResellSwapPage() {
  return (
    <div className="bg-gradient-to-b from-primary-50 to-white min-h-screen">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-primary-600 to-primary-700 py-20 text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <ShoppingBagIcon className="w-16 h-16 mr-4" />
            <h1 className="text-5xl font-bold">Circular Baby Marketplace</h1>
          </div>
          <p className="text-xl text-primary-100">
            Buy, sell, swap, and donate gently-used baby items. Save money while helping the planet.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What is the Resell & Swap Feature?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Baby items grow outdated quickly as your child grows. The Circular Baby Marketplace lets mothers buy, sell, swap, and donate gently-used baby items within their community. It's a sustainable way to save money while promoting environmental responsibility.
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
                <h3 className="text-xl font-bold text-primary-600 mb-3">💰 Save Money</h3>
                <p className="text-gray-700">
                  Get quality baby items at a fraction of retail prices. Baby items are quickly outgrown, making secondhand shopping a smart financial choice.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-primary-600 mb-3">♻️ Earn Income</h3>
                <p className="text-gray-700">
                  Convert items you no longer need into cash. Help other mothers while creating a secondary income stream.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-primary-600 mb-3">🌍 Eco-Friendly</h3>
                <p className="text-gray-700">
                  Reduce waste by extending the life of baby products. Every secondhand purchase prevents landfill waste and reduces manufacturing emissions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-primary-600 mb-3">🤝 Community</h3>
                <p className="text-gray-700">
                  Connect with other mothers in your area. Build trust through verified items and safe local exchanges.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Platform Features</h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-lg"
            >
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-4 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Browse Quality Items</h4>
                    <p className="text-gray-700">Thousands of verified baby items—from clothes to cribs, strollers to toys</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-4 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Easy Listing</h4>
                    <p className="text-gray-700">List your items in minutes with photo upload and detailed descriptions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-4 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">AI Price Recommendations</h4>
                    <p className="text-gray-700">Get fair pricing suggestions based on item condition and current market</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-4 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Safe Transactions</h4>
                    <p className="text-gray-700">Secure payment options and verified seller profiles for peace of mind</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-4 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Local Meetups</h4>
                    <p className="text-gray-700">Find items nearby and arrange safe, convenient local exchanges</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* How It Works */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
            <div className="space-y-4">
              {[
                { step: 1, title: 'Sign Up', desc: 'Create your profile and verify your account' },
                { step: 2, title: 'Browse or List', desc: 'Find items to buy or list items to sell' },
                { step: 3, title: 'Connect', desc: 'Message sellers/buyers to discuss details' },
                { step: 4, title: 'Exchange', desc: 'Meet locally and complete the transaction' },
                { step: 5, title: 'Rate & Review', desc: 'Share feedback to build community trust' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-primary-600 text-white font-bold mr-4">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-gray-700">{item.desc}</p>
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
            className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-12 rounded-xl text-center"
          >
            <h3 className="text-3xl font-bold mb-4">Ready to Join?</h3>
            <p className="text-lg mb-8 text-primary-100">
              Start saving money and helping the environment today!
            </p>
            <Link href="/early-access">
              <Button variant="secondary" size="lg">
                Get Started Now
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
