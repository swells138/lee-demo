import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{ts,tsx,jsx,js,mdx}',
    './components/**/*.{ts,tsx,jsx,js}',
  ],
  theme: {
    extend: {
      colors: {
        brand: { red: '#D32F2F', yellow: '#FFC107', cream: '#FFF8E1' }
      },
      maxWidth: { wrap: '72rem' }
    }
  },
  plugins: [],
} satisfies Config;
