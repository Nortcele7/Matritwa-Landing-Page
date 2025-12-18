import Card from "@/components/Card";
import {
  RecycleIcon,
  SparklesIcon,
  ChatIcon,
  MicrophoneIcon,
  CalendarIcon,
  UsersIcon,
  BriefcaseIcon,
  GlobeIcon,
  MusicIcon,
} from "@/components/Icons";

export default function FeaturesPage() {
  return (
    <div className="bg-gradient-to-b from-primary-50 to-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Platform Features</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tools designed to support mothers at every stage of their journey
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="space-y-12">
          {/* Feature 1: Circular Marketplace */}
          <Card className="bg-gradient-to-br from-primary-50 to-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <RecycleIcon className="w-16 h-16 text-primary-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Circular Marketplace</h2>
                </div>
                <p className="text-gray-700 mb-4 text-lg">
                  Buy, sell, swap, and donate gently-used baby items in a trusted community marketplace.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl">✓</span>
                    <span>Browse thousands of verified baby items—from clothes to cribs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl">✓</span>
                    <span>List your items in minutes with photo upload and descriptions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl">✓</span>
                    <span>Safe local exchanges with verified user profiles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl">✓</span>
                    <span>Swap items directly without money changing hands</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl">✓</span>
                    <span>Reduce waste and save money while helping the planet</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-lg p-8 text-center">
                  <p className="text-4xl mb-4">♻️</p>
                  <p className="text-gray-700 font-semibold">Extend the life of baby items</p>
                  <p className="text-sm text-gray-600 mt-2">Items are used for 3-6 months on average. Let's make them count!</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Feature 2: AI Price Recommendation */}
          <Card className="bg-gradient-to-br from-secondary-50 to-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="bg-gradient-to-br from-secondary-100 to-secondary-50 rounded-lg p-8 text-center">
                    <p className="text-4xl mb-4">🤖</p>
                    <p className="text-gray-700 font-semibold">Smart pricing in seconds</p>
                    <p className="text-sm text-gray-600 mt-2">AI analyzes condition, brand, age, and market trends</p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center mb-4">
                  <SparklesIcon className="w-16 h-16 text-secondary-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">AI Price Recommendation</h2>
                </div>
                <p className="text-gray-700 mb-4 text-lg">
                  Get instant, fair pricing suggestions powered by machine learning.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2 text-xl">✓</span>
                    <span>Upload photos and the AI evaluates item condition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2 text-xl">✓</span>
                    <span>Get price ranges based on similar items in your area</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2 text-xl">✓</span>
                    <span>Factors in brand value, age, and market demand</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2 text-xl">✓</span>
                    <span>Ensures sellers get fair value and buyers get fair deals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2 text-xl">✓</span>
                    <span>Updates pricing recommendations based on market trends</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Feature 3: Health Chatbot */}
          <Card className="bg-gradient-to-br from-primary-50 to-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <ChatIcon className="w-16 h-16 text-primary-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">24/7 Nurse Chatbot</h2>
                </div>
                <p className="text-gray-700 mb-4 text-lg">
                  Get instant health guidance from an AI trained on pediatric care and maternal health.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl">✓</span>
                    <span>Ask questions about feeding, sleep, milestones, and more</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl">✓</span>
                    <span>Available in Nepali and English for accessibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl">✓</span>
                    <span>Trained on WHO guidelines and pediatric best practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl">✓</span>
                    <span>Recognizes emergencies and recommends immediate care</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl">✓</span>
                    <span>Provides personalized advice based on your baby's age</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-lg p-8">
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="text-sm text-gray-600 mb-1">You</p>
                      <p className="text-gray-800">My baby has a fever. What should I do?</p>
                    </div>
                    <div className="bg-primary-600 text-white rounded-lg p-4 shadow-sm">
                      <p className="text-sm mb-1 opacity-90">Nurse Bot</p>
                      <p className="text-sm">For a baby with fever, check temperature, ensure hydration, and consult a doctor if it exceeds 38°C or lasts more than 24 hours.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Feature 4: Cry Analysis */}
          <Card className="bg-gradient-to-br from-secondary-50 to-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="bg-gradient-to-br from-secondary-100 to-secondary-50 rounded-lg p-8 text-center">
                    <p className="text-4xl mb-4">👶</p>
                    <p className="text-gray-700 font-semibold">Understand your baby's needs</p>
                    <p className="text-sm text-gray-600 mt-2">Hungry? Tired? In pain? Get insights instantly</p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center mb-4">
                  <MicrophoneIcon className="w-16 h-16 text-secondary-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Baby Cry Analysis</h2>
                </div>
                <p className="text-gray-700 mb-4 text-lg">
                  Use AI to decode your baby's cries and understand what they need.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2 text-xl">✓</span>
                    <span>Record your baby's cry for instant analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2 text-xl">✓</span>
                    <span>Identifies hunger, discomfort, fatigue, or pain patterns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2 text-xl">✓</span>
                    <span>Provides actionable suggestions for soothing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2 text-xl">✓</span>
                    <span>Tracks patterns over time for better insights</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2 text-xl">✓</span>
                    <span>Especially helpful for first-time parents</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Feature 5: Vaccine & Doctor Tracker */}
          <Card className="bg-gradient-to-br from-primary-50 to-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <CalendarIcon className="w-16 h-16 text-primary-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Vaccine & Doctor Tracker</h2>
                </div>
                <p className="text-gray-700 mb-4 text-lg">
                  Never miss a vaccine or appointment with smart reminders and tracking.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl">✓</span>
                    <span>Full vaccine schedule based on Nepal's immunization program</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl">✓</span>
                    <span>Automated reminders via app notifications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl">✓</span>
                    <span>Track all doctor visits and health milestones</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl">✓</span>
                    <span>Digital health record accessible anytime</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl">✓</span>
                    <span>Share records easily with healthcare providers</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-800 mb-4">Upcoming</h3>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3 shadow-sm flex items-center">
                      <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-3 text-sm">
                        Dec<br/>20
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">BCG Vaccine</p>
                        <p className="text-sm text-gray-600">9:00 AM - City Hospital</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm flex items-center">
                      <div className="bg-gray-300 text-gray-700 rounded-full w-12 h-12 flex items-center justify-center mr-3 text-sm">
                        Jan<br/>15
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Checkup</p>
                        <p className="text-sm text-gray-600">10:00 AM - Pediatric Clinic</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Feature 6: Mentor Moms */}
          <Card className="bg-gradient-to-br from-secondary-50 to-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="bg-gradient-to-br from-secondary-100 to-secondary-50 rounded-lg p-8 text-center">
                    <p className="text-4xl mb-4">🤝</p>
                    <p className="text-gray-700 font-semibold">Connect with experienced mothers</p>
                    <p className="text-sm text-gray-600 mt-2">Get advice, support, and real experiences</p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center mb-4">
                  <UsersIcon className="w-16 h-16 text-secondary-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Community & Mentor Moms</h2>
                </div>
                <p className="text-gray-700 mb-4 text-lg">
                  Join support groups and connect with mentor mothers who understand your journey.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2 text-xl">✓</span>
                    <span>Match with mentor moms based on your situation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2 text-xl">✓</span>
                    <span>Join local support groups and discussion forums</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2 text-xl">✓</span>
                    <span>Share experiences, tips, and emotional support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2 text-xl">✓</span>
                    <span>Organize meetups and playdates in your area</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2 text-xl">✓</span>
                    <span>Build lasting friendships with other mothers</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Feature 7: Multilingual Support */}
          <Card className="bg-gradient-to-br from-secondary-50 to-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="bg-gradient-to-br from-secondary-100 to-secondary-50 rounded-lg p-8 text-center">
                    <p className="text-4xl mb-4">🌏</p>
                    <p className="text-gray-700 font-semibold">Your language, your comfort</p>
                    <p className="text-sm text-gray-600 mt-2">नेपाली, English, and more</p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center mb-4">
                  <GlobeIcon className="w-16 h-16 text-secondary-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Multilingual Support</h2>
                </div>
                <p className="text-gray-700 mb-4 text-lg">
                  Access the entire platform in your preferred language for maximum comfort.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2 text-xl">✓</span>
                    <span>Full platform available in Nepali and English</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2 text-xl">✓</span>
                    <span>Chatbot responds in your chosen language</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2 text-xl">✓</span>
                    <span>Health content localized for Nepal's context</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2 text-xl">✓</span>
                    <span>Easy language switching with one click</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2 text-xl">✓</span>
                    <span>Expanding to include more local languages</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Feature 8: Lullabies & Rhymes */}
          <Card className="bg-gradient-to-br from-secondary-50 to-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <MusicIcon className="w-16 h-16 text-secondary-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Lullabies & Rhymes</h2>
                </div>
                <p className="text-gray-700 mb-4 text-lg">
                  A curated collection of traditional Nepali lullabies, children's rhymes, and nursery songs to soothe and engage your baby.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2 text-xl">✓</span>
                    <span>Traditional Nepali lullabies (Lori, Bichara)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2 text-xl">✓</span>
                    <span>Audio recordings by native speakers with music</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2 text-xl">✓</span>
                    <span>Educational rhymes to support early learning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2 text-xl">✓</span>
                    <span>Lyrics in Nepali and English with translations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2 text-xl">✓</span>
                    <span>Create your own playlist for bedtime routines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2 text-xl">✓</span>
                    <span>Share favorites with community of mothers</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-gradient-to-br from-secondary-100 to-secondary-50 p-8 rounded-lg text-center">
                  <MusicIcon className="w-24 h-24 text-secondary-600 mx-auto mb-4" />
                  <p className="text-gray-700 text-lg font-semibold">Discover the Cultural Heritage</p>
                  <p className="text-gray-600 mt-2">Preserve and celebrate traditional Nepali music while bonding with your little one</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Experience All These Features
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join Matritwa and access a complete ecosystem designed for mothers
          </p>
          <a
            href="/survey"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-50 transition"
          >
            View Survey Results
          </a>
        </div>
      </section>
    </div>
  );
}
