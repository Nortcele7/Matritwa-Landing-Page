# Matritwa - Empowering Mothers in Nepal

A Next.js 14 web platform combining a circular economy marketplace with a comprehensive support hub for mothers in Nepal.

## 🎯 Features

- **Circular Marketplace**: Buy, sell, swap, and donate baby items
- **AI Price Recommendations**: Smart pricing for second-hand items
- **Health Chatbot**: 24/7 nurse chatbot for maternal health guidance
- **Vaccine Tracker**: Never miss an appointment
- **Community Support**: Connect with mentor moms
- **Job Board**: Mother-friendly employment opportunities
- **Multilingual**: Available in Nepali and English

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔐 Environment

Create a `.env.local` file in the project root with your MongoDB connection string:

```bash
MONGODB_URI="mongodb+srv://<username>:<password>@<cluster>/<db>?retryWrites=true&w=majority"
# Optional DB name override
MONGODB_DB="matritwa"
```

Early access signup:
- API: `POST /api/early-access` with JSON `{ name, email, phone }`
- Page: `/early-access` (form UI)

## 📁 Project Structure

```
Matritwa/
├── app/
│   ├── page.tsx              # Landing page
│   ├── survey/
│   │   └── page.tsx          # Survey form
│   ├── features/
│   │   └── page.tsx          # Features page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Header.tsx            # Navigation header
│   ├── Footer.tsx            # Footer
│   ├── Button.tsx            # Reusable button
│   ├── Card.tsx              # Card component
│   ├── FeatureCard.tsx       # Feature display card
│   ├── SDGBadge.tsx          # SDG alignment badge
│   └── Icons.tsx             # SVG icon components
├── types/
│   └── survey.ts             # TypeScript types for survey
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies
```

## 🎨 Design System

### Colors

- **Primary**: Pink tones (#e85380 and variants) - Representing warmth and motherhood
- **Secondary**: Teal tones (#14b8a6 and variants) - Representing growth and support

### Components

All components are built with:
- TypeScript for type safety
- Tailwind CSS for styling
- Mobile-first responsive design
- Accessibility features

## 📄 Pages

### 1. Landing Page (/)
- Hero section with emotional messaging
- Problem & solution sections
- Feature highlights
- SDG alignment
- Call-to-action buttons

### 2. Survey Page (/survey)
Type-safe survey form collecting:
- Basic information
- Motherhood challenges
- Baby items usage
- App interest ratings
- Open feedback

### 3. Features Page (/features)
Detailed explanation of:
- Circular marketplace
- AI price recommendations
- Health chatbot
- Cry analysis
- Vaccine tracker
- Community features
- Job board
- Multilingual support

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Custom React components
- **Fonts**: Inter (Google Fonts)

## 🌍 SDG Alignment

Matritwa aligns with UN Sustainable Development Goals:
- **SDG 3**: Good Health and Well-being
- **SDG 5**: Gender Equality
- **SDG 12**: Responsible Consumption and Production

## 📱 Responsive Design

The platform is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)

## 🔧 Build for Production

```bash
npm run build
npm start
```

## 📝 License

This project is created for demonstration purposes.

## 💡 Future Enhancements

- Add actual backend API integration
- Implement real chatbot functionality
- Add user authentication
- Integrate payment gateway
- Add language translation system
- Implement marketplace search & filters

## 🤝 Contributing

This is a demonstration project. For questions or suggestions, please reach out.

---

Made with ❤️ for mothers in Nepal
