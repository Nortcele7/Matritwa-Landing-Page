import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
  50:  '#FFF1F4',
  100: '#FFE0E7',
  200: '#F9B9C7',
  300: '#EF8FA5',
  400: '#E56685',
  500: '#CD2C58', // base
  600: '#B8244C',
  700: '#9E1D41',
  800: '#831635',
  900: '#5F0E24',
},

secondary: {
  50:  '#FFF4F6',
  100: '#FFE6EA',
  200: '#F7B8C3',
  300: '#EE94A5',
  400: '#E87C91',
  500: '#E06B80', // base
  600: '#C9556A',
  700: '#AD3F54',
  800: '#8C2C3E',
  900: '#641D2C',
},

accent: {
  50:  '#FFFBF7',
  100: '#FFF2E8',
  200: '#FFE0C4',
  300: '#FFCFA8',
  400: '#FFBE8D',
  500: '#FFC69D', // base
  600: '#E6A777',
  700: '#CC8854',
  800: '#A86836',
  900: '#6F4422',
},

highlight: {
  50:  '#FFFDFC',
  100: '#FFF6F0',
  200: '#FFEDE3',
  300: '#FFE6D4', // base
  400: '#F7D4BC',
  500: '#EEC1A3',
  600: '#D6A789',
  700: '#B8896C',
  800: '#916550',
  900: '#5F4034',
},

      },
    },
  },
  plugins: [],
};
export default config;
