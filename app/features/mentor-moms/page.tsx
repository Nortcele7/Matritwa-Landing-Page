'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import Link from 'next/link';
import { UsersIcon } from '@/components/Icons';

export default function MentorMomsPage() {
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
            <UsersIcon className="w-16 h-16 mr-4" />
            <h1 className="text-5xl font-bold">Mentor Moms</h1>
          </div>
          <p className="text-xl text-primary-100">
            Connect with experienced mothers who understand your journey.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Mentor Moms?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Motherhood can feel isolating, especially for first-time mothers or new immigrants to Nepal. Mentor Moms connects you with experienced mothers in your community who've been through similar challenges. Share experiences, get advice, ask questions, and build friendships with women who understand exactly what you're going through.
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
                <h3 className="text-xl font-bold text-primary-600 mb-3">💬 Peer Support</h3>
                <p className="text-gray-700">
                  Get advice from mothers who've been exactly where you are—no judgment, just understanding.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-primary-600 mb-3">🤝 Local Community</h3>
                <p className="text-gray-700">
                  Connect with mothers in your area. Build real friendships that extend beyond the app.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-primary-600 mb-3">🎓 Learn & Grow</h3>
                <p className="text-gray-700">
                  Share practical tips, parenting strategies, and product recommendations from trusted sources.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-primary-600 mb-3">✨ Reduce Isolation</h3>
                <p className="text-gray-700">
                  Combat motherhood loneliness with a supportive community available 24/7.
                </p>
              </motion.div>
            </div>
          </div>

          {/* How It Works */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How Mentor Moms Works</h2>
            <div className="space-y-4">
              {[
                { step: 1, title: 'Create Your Profile', desc: 'Tell us about yourself, your baby, and what you need support with' },
                { step: 2, title: 'Find Your Match', desc: 'Browse experienced mothers and mentors in your area or with similar interests' },
                { step: 3, title: 'Connect 1-on-1', desc: 'Message privately to build a personal mentoring relationship' },
                { step: 4, title: 'Join Groups', desc: 'Participate in community groups based on age, interests, and challenges' },
                { step: 5, title: 'Share & Support', desc: 'Exchange tips, ask questions, and support each other on the journey' },
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

          {/* Community Features */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Community Features</h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {[
                { title: '👶 Mom Groups by Baby Age', desc: 'Newborn moms, infant moms, toddler moms—find your tribe' },
                { title: '🌍 Local Community', desc: 'Connect with mothers in your district or city' },
                { title: '💡 Tips & Tricks', desc: 'Shared parenting hacks and product recommendations' },
                { title: '🗣️ Discussion Forums', desc: 'Topic-based conversations on common motherhood challenges' },
                { title: '📅 Meetup Planning', desc: 'Organize playdates and in-person meetups with other mothers' },
                { title: '🏆 Mentor Recognition', desc: 'Highly-rated mentors get badges and special recognition' },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-lg"
                >
                  <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-700 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
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
            <h3 className="text-3xl font-bold mb-4">You're Not Alone</h3>
            <p className="text-lg mb-8 text-primary-100">
              Join thousands of Nepali mothers supporting each other on this beautiful journey.
            </p>
            <Link href="/early-access">
              <Button variant="secondary" size="lg">
                Connect with Mentor Moms
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
