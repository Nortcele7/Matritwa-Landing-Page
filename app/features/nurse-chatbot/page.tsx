'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import Link from 'next/link';
import { ChatIcon } from '@/components/Icons';

export default function NurseChatbotPage() {
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
            <ChatIcon className="w-16 h-16 mr-4" />
            <h1 className="text-5xl font-bold">24/7 Nurse Chatbot</h1>
          </div>
          <p className="text-xl text-primary-100">
            24/7 health guidance from AI trained on pediatric care and motherhood support.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What is the Nurse Chatbot?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Health concerns don't wait for office hours. Our AI nurse chatbot is available 24/7 to answer your questions about baby health, motherhood wellness, and common concerns. Trained on Nepal-specific health guidelines and pediatric best practices, the chatbot provides personalized guidance while knowing when to recommend professional medical care.
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
                <h3 className="text-xl font-bold text-primary-600 mb-3">🕐 Always Available</h3>
                <p className="text-gray-700">
                  Get answers at 2 AM or 2 PM. No waiting for clinics to open or worrying about bothering your doctor.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-primary-600 mb-3">🇳🇵 Nepal-Specific</h3>
                <p className="text-gray-700">
                  Advice tailored to Nepal's healthcare system, climate, and local health conditions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-primary-600 mb-3">🏥 Clinically Informed</h3>
                <p className="text-gray-700">
                  Trained on evidence-based pediatric care and developed with health professionals.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-primary-600 mb-3">💬 Personalized</h3>
                <p className="text-gray-700">
                  Chatbot learns about your baby and gives advice specific to their age and needs.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Topics Covered */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Topics the Chatbot Helps With</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Baby feeding and nutrition',
                'Sleep and sleep training',
                'Common illnesses and fever',
                'Diaper rash and skin issues',
                'Vaccination schedules',
                'Newborn care basics',
                'Postpartum recovery',
                'Mental health and mood',
                'Baby development milestones',
                'When to see a doctor',
                'Medication safety',
                'Allergies and sensitivities',
              ].map((topic, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center bg-primary-50 p-4 rounded-lg"
                >
                  <span className="text-primary-600 mr-3 text-xl">•</span>
                  <span className="text-gray-800 font-medium">{topic}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-lg"
            >
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-4 text-2xl">1</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Start a Conversation</h4>
                    <p className="text-gray-700">Describe your concern or question in your own words</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-4 text-2xl">2</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Provide Context</h4>
                    <p className="text-gray-700">Answer clarifying questions about your baby's age, symptoms, or situation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-4 text-2xl">3</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Get Guidance</h4>
                    <p className="text-gray-700">Receive personalized advice and recommendations</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-4 text-2xl">4</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Know When to Escalate</h4>
                    <p className="text-gray-700">Chatbot recommends when to see a doctor or visit a hospital</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-4 text-2xl">5</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Access History</h4>
                    <p className="text-gray-700">Keep a record of conversations for future reference</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Important Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-highlight-50 border-l-4 border-highlight-600 p-6 rounded"
          >
            <h3 className="font-bold text-highlight-800 mb-2">⚠️ Important Disclaimer</h3>
            <p className="text-highlight-700">
              The chatbot is a support tool, not a replacement for professional medical care. Always consult with a qualified healthcare provider for serious concerns, emergencies, or when the chatbot recommends professional consultation.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-12 rounded-xl text-center"
          >
            <h3 className="text-3xl font-bold mb-4">Get 24/7 Health Support</h3>
            <p className="text-lg mb-8 text-primary-100">
              Chat with our nurse bot anytime, day or night.
            </p>
            <Link href="/early-access">
              <Button variant="highlight" size="lg">
                Join Matritwa Today
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
