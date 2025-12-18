'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import Link from 'next/link';
import { MusicIcon } from '@/components/Icons';

export default function LullabiesPage() {
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
            <MusicIcon className="w-16 h-16 mr-4" />
            <h1 className="text-5xl font-bold">Lullabies & Rhymes</h1>
          </div>
          <p className="text-xl text-primary-100">
            Curated collection of traditional Nepali lullabies and children's rhymes.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Lullabies Matter</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Singing to your baby isn't just soothing—it's foundational for development. Lullabies help babies feel secure, improve sleep quality, support language development, and strengthen the parent-baby bond. Traditional Nepali lullabies carry cultural heritage and the warmth of generations of Nepali mothers.
            </p>
          </div>

          {/* Benefits */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Singing & Music</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-primary-600 mb-3">😴 Better Sleep</h3>
                <p className="text-gray-700">
                  Music has a calming effect that helps babies relax and fall asleep more easily.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-primary-600 mb-3">🧠 Brain Development</h3>
                <p className="text-gray-700">
                  Music stimulates cognitive development and creates neural connections for learning.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-primary-600 mb-3">🗣️ Language Skills</h3>
                <p className="text-gray-700">
                  Hearing songs helps babies develop language and verbal communication skills.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-primary-600 mb-3">💕 Bonding</h3>
                <p className="text-gray-700">
                  Singing creates intimate moments that strengthen your emotional connection.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-primary-600 mb-3">🎵 Cultural Heritage</h3>
                <p className="text-gray-700">
                  Pass down Nepali traditions and cultural identity through traditional songs.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-primary-600 mb-3">🧘 Stress Relief</h3>
                <p className="text-gray-700">
                  Singing is therapeutic for moms too—reducing stress and improving mental health.
                </p>
              </motion.div>
            </div>
          </div>

          {/* What's Included */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What's in Our Collection</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { category: 'Traditional Lullabies', items: ['Lori (Nepali Lullaby)', 'Bichara & Bhaisinko', 'Nature-inspired songs'] },
                { category: 'Nursery Rhymes', items: ['Counting songs', 'Animal songs', 'Action rhymes'] },
                { category: 'Bedtime Songs', items: ['Sleep induction songs', 'Gentle lullabies', 'Moon & stars songs'] },
                { category: 'Learning Songs', items: ['Alphabet songs', 'Number songs', 'Color songs'] },
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
                        <span className="text-primary-600 mr-2">♪</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Platform Features */}
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
                    <h4 className="font-bold text-gray-900 mb-2">Professional Audio Recordings</h4>
                    <p className="text-gray-700">High-quality recordings sung by native Nepali speakers and musicians</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-4 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Lyrics in Nepali & English</h4>
                    <p className="text-gray-700">See lyrics in both languages with English translations and meanings</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-4 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Create Personal Playlists</h4>
                    <p className="text-gray-700">Customize playlists for bedtime, playtime, or learning</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-4 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Sleep Timer</h4>
                    <p className="text-gray-700">Set songs to play for a specific duration before auto-stopping</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-4 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Offline Access</h4>
                    <p className="text-gray-700">Download songs to listen without internet connection</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-4 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Share with Community</h4>
                    <p className="text-gray-700">Share your favorite lullabies and recommendations with other mothers</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Sample Lullabies */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular Traditional Lullabies</h2>
            <div className="space-y-4">
              {[
                { name: 'Sukumbasi Lori', origin: 'Western Nepal', meaning: 'Lullaby of a homeless child' },
                { name: 'Maiko Lori', origin: 'Central Nepal', meaning: 'Girl child lullaby' },
                { name: 'Bichara', origin: 'Throughout Nepal', meaning: 'Traditional slow song' },
                { name: 'Bhaisinko', origin: 'Eastern Nepal', meaning: 'Buffalo herding song' },
              ].map((song, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md flex items-start"
                >
                  <span className="text-3xl mr-4">♪</span>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-lg">{song.name}</h4>
                    <p className="text-gray-600 text-sm">Origin: {song.origin}</p>
                    <p className="text-gray-700 mt-2 italic">Meaning: {song.meaning}</p>
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
            <h3 className="text-3xl font-bold mb-4">Sing with Your Baby</h3>
            <p className="text-lg mb-8 text-primary-100">
              Discover the beauty of traditional Nepali lullabies and create precious bonding moments.
            </p>
            <Link href="/early-access">
              <Button variant="secondary" size="lg">
                Start Singing Today
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
