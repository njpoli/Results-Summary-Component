import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        short: { raw: '(min-height: 500px)' },
      },
      boxShadow: {
        full: '15px 5px 30px 10px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        'primary-red': 'hsl(0, 100%, 67%)',
        'primary-orange': 'hsl(39, 100%, 56%)',
        'primary-teal': 'hsl(166, 100%, 37%)',
        'primary-cobalt': 'hsl(234, 85%, 45%)',
        'background-slate-blue': 'hsl(252, 100%, 67%)',
        'background-royal-blue': 'hsl(241, 81%, 54%)',
        'gradient-violet-blue': 'hsl(256, 72%, 46%)',
        'gradient-persian-blue': 'hsl(241, 72%, 46%)',
        'neutral-white': 'hsl(0, 0%, 100%)',
        'neutral-pale-blue': 'hsl(221, 100%, 96%)',
        'neutral-light-lavendar': 'hsl(241, 81%, 54%)',
        'neutral-dark-blue': 'hsl(224, 30%, 27%)',
      },
    },
  },
  plugins: [],
};
export default config;
