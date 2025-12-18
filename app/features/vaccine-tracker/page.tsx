'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import Link from 'next/link';
import { ShieldIcon } from '@/components/Icons';

export default function VaccineTrackerPage() {
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
            <ShieldIcon className="w-16 h-16 mr-4" />
            <h1 className="text-5xl font-bold">Vaccine & Doctor Tracker</h1>
          </div>
          <p className="text-xl text-primary-100">
            Never miss a vaccine or appointment with smart reminders and tracking.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Vaccine & Doctor Tracker?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Keeping track of vaccinations and doctor visits is critical for your baby's health, but it's easy to lose records or miss appointments. Our integrated tracker maintains a complete digital health record, sends timely reminders, and helps you stay on top of Nepal's immunization schedule.
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
                <h3 className="text-xl font-bold text-primary-600 mb-3">✅ Never Miss Again</h3>
                <p className="text-gray-700">
                  Smart reminders alert you before each appointment so you never miss important vaccinations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-primary-600 mb-3">📋 Complete Records</h3>
                <p className="text-gray-700">
                  Digital vaccination certificates and health records always accessible in one place.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-primary-600 mb-3">🇳🇵 Nepal-Specific Schedule</h3>
                <p className="text-gray-700">
                  Pre-loaded with Nepal's national immunization program schedule.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-primary-600 mb-3">🔒 Secure & Shareable</h3>
                <p className="text-gray-700">
                  Easily share records with healthcare providers when needed.
                </p>
              </motion.div>
            </div>
          </div>

          {/* What's Tracked */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Gets Tracked</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { category: 'Vaccinations', items: ['BCG', 'DPT', 'OPV/IPV', 'Hepatitis B', 'Measles', 'Rotavirus', 'Pneumococcal'] },
                { category: 'Doctor Visits', items: ['Routine checkups', 'Growth monitoring', 'Developmental screening', 'Sick visits'] },
                { category: 'Milestones', items: ['Physical growth', 'Developmental progress', 'Vision & hearing', 'Dental care'] },
                { category: 'Medications', items: ['Prescriptions', 'Dosage history', 'Allergies', 'Side effects'] },
              ].map((section, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-lg"
                >
                  <h3 className="font-bold text-gray-900 mb-4">{section.category}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <span className="text-primary-600 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
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
                    <h4 className="font-bold text-gray-900 mb-2">Automated Reminders</h4>
                    <p className="text-gray-700">Receive SMS and app notifications before scheduled vaccinations and visits</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-4 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Pre-filled Schedule</h4>
                    <p className="text-gray-700">Nepal's immunization schedule built in—just mark as completed</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-4 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Growth Charts</h4>
                    <p className="text-gray-700">Track height, weight, and developmental milestones over time</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-4 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Provider Integration</h4>
                    <p className="text-gray-700">Share records with your doctor or health facility with one click</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-12 rounded-xl text-center"
          >
            <h3 className="text-3xl font-bold mb-4">Never Miss Another Appointment</h3>
            <p className="text-lg mb-8 text-primary-100">
              Keep your baby's health on track with smart tracking and reminders.
            </p>
            <Link href="/early-access">
              <Button variant="secondary" size="lg">
                Start Tracking Today
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
