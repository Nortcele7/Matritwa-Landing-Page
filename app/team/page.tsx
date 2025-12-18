'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';

export default function TeamPage() {
  return (
    <div className="bg-gradient-to-b from-highlight-50 to-white min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Team</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The people behind Matritwa — building meaningful solutions for mothers in Nepal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Shreyam Regmi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
          >
            <div className="flex items-center mb-4">
              <Image src="/team/shreyam.jpg" alt="Shreyam Regmi" width={64} height={64} className="w-16 h-16 rounded-full mr-4" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">Shreyam Regmi</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-secondary-600 to-highlight-600 text-white">Leader</span>
                </div>
                <div className="flex items-center gap-3 mt-1">
                  <a href="https://github.com/Nortcele7" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-600 hover:text-primary-700">GitHub</a>
                  <Link href="/cv/shreyam">
                    <Button variant="outline" size="sm">View CV</Button>
                  </Link>
                </div>
              </div>
            </div>
            <ul className="text-sm text-gray-600 space-y-2 list-disc ml-5">
              <li>BE in Computer Engineering, Pulchowk Campus</li>
              <li>Fullstack developer and AI/ML enthusiast</li>
              <li>Full scholarship holder in ANAIS (Nepal's Largest AI School)</li>
              <li>Deployed Cohesion; Football Market Value Predictor</li>
            </ul>
          </motion.div>

          {/* Shubham Pathak */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
          >
            <div className="flex items-center mb-4">
              <Image src="/team/shubham.jpg" alt="Shubham Pathak" width={64} height={64} className="w-16 h-16 rounded-full mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Shubham Pathak</h3>
                <div className="flex items-center gap-3 mt-1">
                  <a href="https://github.com/ShubhamPathak1/" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-600 hover:text-primary-700">GitHub</a>
                  <Link href="/cv/shubham">
                    <Button variant="outline" size="sm">View CV</Button>
                  </Link>
                </div>
              </div>
            </div>
            <ul className="text-sm text-gray-600 space-y-2 list-disc ml-5">
              <li>BE in Computer Engineering, Pulchowk Campus</li>
              <li>Fullstack developer with experience in MERN stack and React Native</li>
              <li>Deployed projects like SafaCity</li>
            </ul>
          </motion.div>

          {/* Subodh Gyawali */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
          >
            <div className="flex items-center mb-2">
              <Image src="/team/subodh.jpg" alt="Subodh Gyawali" width={64} height={64} className="w-16 h-16 rounded-full mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Subodh Gyawali</h3>
                <div className="flex items-center gap-3 mt-1">
                  <a href="https://github.com/SubodG" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-600 hover:text-primary-700">GitHub</a>
                  <Link href="/cv/subodh">
                    <Button variant="outline" size="sm">View CV</Button>
                  </Link>
                </div>
              </div>
            </div>
            <ul className="text-sm text-gray-600 space-y-2 list-disc ml-5">
              <li>BE in Computer Engineering, Pulchowk Campus</li>
              <li>UI/UX designer</li>
              <li>Global IME Hackathon participant</li>
            </ul>
          </motion.div>

          {/* Sanskriti Adhikari */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
          >
            <div className="flex items-center mb-2">
              <Image src="/team/sanskriti.jpg" alt="Sanskriti Adhikari" width={64} height={64} className="w-16 h-16 rounded-full mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Sanskriti Adhikari</h3>
                <div className="flex items-center gap-3 mt-1">
                  <a href="
                        https://github.com/Sanskriti-Adhikari" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-600 hover:text-primary-700">GitHub</a>
                  <Link href="/cv/sanskriti">
                    <Button variant="outline" size="sm">View CV</Button>
                  </Link>
                </div>
              </div>
            </div>
            <ul className="text-sm text-gray-600 space-y-2 list-disc ml-5">
              <li>BE in Computer Engineering, Pulchowk Campus</li>
              <li>Researcher and Project Manager</li>
              <li>Social Media Manager of Zerone</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
