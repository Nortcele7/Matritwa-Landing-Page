# Quick Start Guide

## Step 1: Install Dependencies

Open PowerShell in this directory and run:

```powershell
npm install
```

This will install all required packages (Next.js, React, TypeScript, Tailwind CSS, etc.)

## Step 2: Start Development Server

```powershell
npm run dev
```

## Step 3: Open in Browser

Navigate to: **http://localhost:3000**

## What You'll See

- Landing page with hero section, problems, solutions, features
- Survey page (click "Take Survey" or "Fill Survey")
- Features page (click "Features" in navigation)
- Business Model page (click "Business Model" in navigation)

## File Structure Quick Reference

```
app/
  ├── page.tsx           → Landing page (/)
  ├── survey/page.tsx    → Survey form (/survey)
  └── features/page.tsx  → Features (/features)

components/
  ├── Header.tsx         → Navigation (includes logo)
  ├── Footer.tsx         → Footer
  └── [other components] → Reusable UI elements
```

## Logo Location

The logo placeholder appears in:
- **Header** (top left): `components/Header.tsx` lines 12-18
- **Footer** (bottom): `components/Footer.tsx` lines 8-14

Look for the circular "M" badge - you can replace this with your actual logo.

## Customization Tips

### Change Colors
Edit `tailwind.config.ts` to modify the primary/secondary color palettes.

### Edit Content
- Landing page: `app/page.tsx`
- Survey questions: `app/survey/page.tsx`
- Features: `app/features/page.tsx`
- Business info: `app/business/page.tsx`

### Add Your Logo
1. Place logo image in `/public/logo.png`
2. Update Header.tsx and Footer.tsx
3. Replace the circular M div with:
```tsx
<Image src="/logo.png" alt="Matritwa" width={40} height={40} />
```

## Build for Production

When ready to deploy:

```powershell
npm run build
npm start
```

## Troubleshooting

**Port already in use?**
```powershell
npm run dev -- -p 3001
```

**Need to clear cache?**
```powershell
Remove-Item -Recurse -Force .next
npm run dev
```

**TypeScript errors?**
Check that `tsconfig.json` exists and run:
```powershell
npm run lint
```

---

🎉 **You're all set! Happy coding!**
