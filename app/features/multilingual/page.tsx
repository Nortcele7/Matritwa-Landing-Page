'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import Link from 'next/link';
import { GlobeIcon } from '@/components/Icons';

export default function MultilingualPage() {
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
            <GlobeIcon className="w-16 h-16 mr-4" />
            <h1 className="text-5xl font-bold">Multilingual Platform</h1>
          </div>
          <p className="text-xl text-primary-100">
            Platform available in Nepali, English, and other local languages.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Multilingual Support Matters</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Not all mothers are fluent in English. Many prefer communicating in Nepali, their local language, or both. Matritwa is built to be truly accessible to all mothers in Nepal, regardless of language preference. Every feature—from the chatbot to content—is available in multiple languages.
            </p>
          </div>

          {/* Supported Languages */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Supported Languages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md border-l-4 border-secondary-600"
              >
                <h3 className="text-2xl font-bold text-secondary-600 mb-4">🇳🇵 नेपाली (Nepali)</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ Full platform interface</li>
                  <li>✓ Nurse chatbot in Nepali</li>
                  <li>✓ Health content localized for Nepal</li>
                  <li>✓ Community discussions</li>
                  <li>✓ Customer support in Nepali</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-lg shadow-md border-l-4 border-accent-600"
              >
                <h3 className="text-2xl font-bold text-accent-600 mb-4">🇬🇧 English</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ Complete English interface</li>
                  <li>✓ English language chatbot</li>
                  <li>✓ International health standards</li>
                  <li>✓ Global parenting resources</li>
                  <li>✓ English support team</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white p-8 rounded-lg shadow-md border-l-4 border-green-600"
              >
                <h3 className="text-2xl font-bold text-green-600 mb-4">🗣️ Regional Languages</h3>
                <p className="text-gray-700 mb-4">
                  Coming soon in partnership with local language specialists:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Maithili</li>
                  <li>• Bhojpuri</li>
                  <li>• Tharu</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white p-8 rounded-lg shadow-md border-l-4 border-purple-600"
              >
                <h3 className="text-2xl font-bold text-purple-600 mb-4">🔤 Easy Switching</h3>
                <p className="text-gray-700 mb-4">
                  Switch languages with one click, anytime:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Language selector in settings</li>
                  <li>✓ Remember your preference</li>
                  <li>✓ Switch back anytime</li>
                  <li>✓ No need to restart app</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Localization Details */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Localization</h2>
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
                    <h4 className="font-bold text-gray-900 mb-2">Nepal-Specific Health Content</h4>
                    <p className="text-gray-700">Health information adapted for Nepal's healthcare system and climate</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-4 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Local Measurements</h4>
                    <p className="text-gray-700">Uses both metric and local measurements familiar to Nepali mothers</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-4 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Cultural Sensitivity</h4>
                    <p className="text-gray-700">Content respects Nepali cultural values and traditions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-4 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Nepal-Based Resources</h4>
                    <p className="text-gray-700">Links to Nepali hospitals, clinics, government services</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-4 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Native Speaker Support</h4>
                    <p className="text-gray-700">Customer service and chatbot operated by native Nepali speakers</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Why It Matters */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why This Matters for You</h2>
            <div className="space-y-4">
              {[
                { icon: '💬', title: 'Better Communication', desc: 'Express yourself in your native language—no confusion or misunderstanding' },
                { icon: '📚', title: 'Clearer Content', desc: 'Health information is easier to understand in your preferred language' },
                { icon: '🎓', title: 'Cultural Context', desc: 'Advice that makes sense in your cultural and local context' },
                { icon: '🤝', title: 'Community Connection', desc: 'Chat with other mothers in the language you prefer' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md flex items-start"
                >
                  <span className="text-4xl mr-4">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
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
            className="bg-gradient-to-r from-secondary-600 to-secondary-700 text-white p-12 rounded-xl text-center"
          >
            <h3 className="text-3xl font-bold mb-4">Connect in Your Language</h3>
            <p className="text-lg mb-8 text-primary-100">
              Matritwa is built for all mothers in Nepal, in the language you prefer.
            </p>
            <Link href="/early-access">
              <Button variant="secondary" size="lg">
                Join Now
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
