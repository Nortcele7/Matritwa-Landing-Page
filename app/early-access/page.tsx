'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function EarlyAccessPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<null | 'success' | 'error' | 'loading'>(null);
  const [message, setMessage] = useState('');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');
    try {
      const res = await fetch('/api/early-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus('error');
        setMessage(data?.error || 'Something went wrong');
      } else {
        setStatus('success');
        setMessage('Thank you! You\'re on the early access list.');
        setName('');
        setEmail('');
        setPhone('');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  return (
    <div className="bg-gradient-to-b from-primary-50 to-white min-h-[70vh]">
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-4 text-center"
          >
            Get Early Access
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-gray-600 mb-8 text-center"
          >
            Be the first to try Matritwa. Join the waitlist and we\'ll notify you as we roll out.
          </motion.p>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            onSubmit={onSubmit} 
            className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
          >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="e.g., Sita Sharma"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="98XXXXXXXX"
            />
          </div>

          <div className="flex justify-end">
            <Button size="lg" disabled={status === 'loading'}>
              {status === 'loading' ? 'Submitting…' : 'Request Early Access'}
            </Button>
          </div>

          {status === 'success' && (
            <motion.p 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-green-700 bg-green-50 border border-green-200 px-4 py-3 rounded"
            >
              {message}
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-red-700 bg-red-50 border border-red-200 px-4 py-3 rounded"
            >
              {message}
            </motion.p>
          )}
        </motion.form>
      </motion.div>
      </section>
    </div>
  );
}
