'use client';

import { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Card from "./Card";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
}

export default function FeatureCard({ icon, title, description, href }: FeatureCardProps) {
  const slug = href || title.toLowerCase().replace(/\s+&\s+/g, "-").replace(/\s+/g, "-");
  
  return (
    <Link href={`/features/${slug}`}>
      <Card hover className="text-center cursor-pointer">
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
          className="flex justify-center mb-4"
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </Card>
    </Link>
  );
}
