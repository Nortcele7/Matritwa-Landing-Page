'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import FeatureCard from "@/components/FeatureCard";
import SDGBadge from "@/components/SDGBadge";
import IntroVideo from "@/components/IntroVideo";
import {
  ShoppingBagIcon,
  SparklesIcon,
  ChatIcon,
  ShieldIcon,
  UsersIcon,
  GlobeIcon,
  BriefcaseIcon,
  RecycleIcon,
  MusicIcon,
  MapPinIcon,
} from "@/components/Icons";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-highlight-50 to-white">
      {/* Intro Video - Shows on first visit */}
      {/* <IntroVideo /> */}
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Welcome to <span className="text-primary-600">Matritwa</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto"
          >
            Where Mothers Thrive Together
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            A circular economy marketplace and support hub built for new mothers in Nepal. 
            Save money, earn income, access health guidance, and build a community that cares.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/early-access">
              <Button size="lg">Join Matritwa</Button>
            </Link>
            <Link href="/survey">
              <Button variant="highlight" size="lg">View Results</Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Solution Section */}
      <section className="bg-gradient-to-b from-highlight-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Matritwa: Your All-in-One Solution
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're creating a supportive ecosystem that helps mothers save money, stay healthy, 
              find work, and build meaningful connections.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <RecycleIcon className="w-12 h-12 text-primary-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Circular Baby Marketplace</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Buy, sell, swap, and donate gently-used baby items. Save money while helping the planet.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ AI-powered price recommendations</li>
                <li>✓ Quality-verified items</li>
                <li>✓ Safe local exchanges</li>
                <li>✓ Eco-friendly shopping</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <HeartIcon className="w-12 h-12 text-primary-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Motherhood Support Hub</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Access health guidance, community support, and resources tailored for Nepali mothers.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ 24/7 nurse chatbot</li>
                <li>✓ Vaccine & doctor tracking</li>
                <li>✓ Mentor mom connections</li>
                <li>✓ Job opportunities board</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Mothers
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need in one platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<ShoppingBagIcon className="w-16 h-16 text-primary-600" />}
              title="Resell & Swap"
              description="Turn outgrown baby items into cash or exchange them for what you need now."
            />
            <FeatureCard
              icon={<SparklesIcon className="w-16 h-16 text-secondary-600" />}
              title="AI Price Helper"
              description="Get instant, fair price recommendations based on item condition and market data."
            />
            <FeatureCard
              icon={<ChatIcon className="w-16 h-16 text-primary-600" />}
              title="Nurse Chatbot"
              description="24/7 health guidance from AI trained on pediatric care and motherhood support."
            />
            <FeatureCard
              icon={<ShieldIcon className="w-16 h-16 text-secondary-600" />}
              title="Vaccine Tracker"
              description="Never miss a vaccine or doctor appointment with smart reminders."
            />
            <FeatureCard
              icon={<UsersIcon className="w-16 h-16 text-primary-600" />}
              title="Mentor Moms"
              description="Connect with experienced mothers who understand your journey."
            />
            <FeatureCard
              icon={<GlobeIcon className="w-16 h-16 text-secondary-600" />}
              title="Multilingual"
              description="Platform available in Nepali, English, and other local languages."
            />
            <FeatureCard
              icon={<MusicIcon className="w-16 h-16 text-primary-600" />}
              title="Lullabies & Rhymes"
              description="Curated collection of traditional Nepali lullabies and children's rhymes to soothe your baby."
            />
            <FeatureCard
              icon={<MapPinIcon className="w-16 h-16 text-secondary-600" />}
              title="Health Services Locator"
              description="Find nearby clinics, hospitals, and emergency services with one tap. Quick access to healthcare when you need it."
            />
          </div>
        </div>
      </section>

      {/* SDG Alignment Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Aligned with UN Sustainable Development Goals
            </h2>
            <p className="text-lg text-gray-600">
              Matritwa contributes to global sustainability targets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <SDGBadge
              number={3}
              title="Good Health and Well-being"
              color="#4C9F38"
            />
            <SDGBadge
              number={5}
              title="Gender Equality"
              color="#FF3A21"
            />
            <SDGBadge
              number={12}
              title="Responsible Consumption"
              color="#BF8B2E"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-highlight-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Help us build a platform that truly serves mothers in Nepal. Share your experiences and needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/early-access">
              <Button variant="highlight" size="lg">
                Join Matritwa
              </Button>
            </Link>
            <Link href="/features">
              <Button variant="outline" size="lg" className="bg-white text-primary-700 border-white hover:bg-primary-50 hover:text-primary-700">
                Explore Features
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function HeartIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}
