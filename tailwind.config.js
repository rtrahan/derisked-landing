/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        accent1: 'hsl(var(--accent-1) / <alpha-value>)',
        accent2: 'hsl(var(--accent-2) / <alpha-value>)',
        subtext: 'hsl(var(--subtext) / <alpha-value>)',
        linkHover: 'hsl(var(--link-hover) / <alpha-value>)',
      },
      fontFamily: {
        sans: ["General Sans", "Inter", "ui-sans-serif", "system-ui", "-apple-system"],
        heading: ["Cabinet Grotesk", "Inter", "ui-sans-serif", "system-ui"],
        display: ["Cabinet Grotesk", "Inter", "ui-sans-serif", "system-ui"],
        mono: ["SF Mono", "JetBrains Mono", "monospace"],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.025em' }],
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        '7xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.035em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
      },
      letterSpacing: {
        tightest: '-.04em', 
        tighter: '-.03em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
      },
      lineHeight: {
        tighter: '1.1',
        tight: '1.2',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
      },
      spacing: {
        '9/16': '56.25%',
      },
      animation: {
        'text-gradient': 'text-gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'text-gradient': {
          to: {
            'background-position': '200% center',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}; 