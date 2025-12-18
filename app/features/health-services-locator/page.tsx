'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import Link from 'next/link';
import { MapPinIcon } from '@/components/Icons';

export default function HealthServicesLocatorPage() {
  return (
    <div className="bg-gradient-to-b from-highlight-50 to-white min-h-screen">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-secondary-600 to-secondary-700 py-20 text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <MapPinIcon className="w-16 h-16 mr-4" />
            <h1 className="text-5xl font-bold">Health Services Locator</h1>
          </div>
          <p className="text-xl text-secondary-100">
            Find nearby clinics, hospitals, and emergency services instantly when you need healthcare.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Health Services Locator?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Finding healthcare services during emergencies or routine check-ups can be stressful, especially for new mothers unfamiliar with their area. Our Health Services Locator helps you instantly find nearby clinics, hospitals, pediatricians, and emergency services with detailed information, ratings, and directions.
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-highlight-50 p-6 rounded-lg border-l-4 border-secondary-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Find Nearby Services</h3>
                  <p className="text-gray-700">
                    Search for clinics, hospitals, pediatricians, and emergency rooms within your location radius.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-highlight-50 p-6 rounded-lg border-l-4 border-secondary-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Emergency Access</h3>
                  <p className="text-gray-700">
                    Quick access to emergency services with one-tap calling and directions when minutes matter.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="bg-highlight-50 p-6 rounded-lg border-l-4 border-secondary-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Service Details</h3>
                  <p className="text-gray-700">
                    View addresses, phone numbers, hours, specializations, and community ratings for each facility.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="bg-highlight-50 p-6 rounded-lg border-l-4 border-secondary-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Directions & Navigation</h3>
                  <p className="text-gray-700">
                    Get turn-by-turn directions and estimated travel time to reach healthcare facilities.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Health Services Locator Matters</h2>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-4"
              >
                <span className="text-3xl">🏥</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Reduces Healthcare Anxiety</h3>
                  <p className="text-gray-700">Know exactly where to go and what to expect, reducing stress during health emergencies.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start gap-4"
              >
                <span className="text-3xl">⏱️</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Saves Critical Time</h3>
                  <p className="text-gray-700">In emergencies, instant access to nearby services can be life-saving for both mother and baby.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <span className="text-3xl">👥</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Community Trust</h3>
                  <p className="text-gray-700">Read reviews from other mothers and make informed decisions about which services to use.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <span className="text-3xl">📍</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Always Available</h3>
                  <p className="text-gray-700">Access healthcare information anytime, anywhere - whether it's 3am or during a crisis.</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-secondary-50 to-accent-50 rounded-2xl p-8 text-center border-2 border-secondary-200"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Find Healthcare Services?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Join Matritwa and get instant access to healthcare services near you.
            </p>
            <Link href="/early-access">
              <Button size="lg">Join Matritwa</Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
