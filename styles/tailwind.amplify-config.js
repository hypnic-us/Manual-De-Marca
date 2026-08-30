/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Colores Amplify
      colors: {
        // Backgrounds
        'bg-primary': '#FFFFFF',
        'bg-secondary': '#F5F5F1',
        'bg-tertiary': '#FAFAF8',
        'bg-light': '#FAFAFA',
        'bg-cream': '#F9F7F4',

        // Text
        'text-primary': '#000000',
        'text-secondary': '#2D3436',
        'text-tertiary': '#636E72',
        'text-light': '#95A5A6',
        'text-inverse': '#FFFFFF',

        // Accent
        'accent-blue': '#0066FF',
        'accent-blue-light': '#E6F0FF',
        'accent-purple': '#7B68EE',
        'accent-purple-light': '#E6D9F9',
        'accent-navy': '#001A1A',

        // Borders
        'border-light': '#E8E8E6',
        'border-medium': '#D1D1CC',
        'border-dark': '#999999',

        // CTA
        'cta-primary': '#000000',
        'cta-primary-hover': '#1A1A1A',
        'cta-secondary-border': '#000000',

        // Semantic
        'success': '#2ECC71',
        'warning': '#F39C12',
        'error': '#E74C3C',
        'info': '#3498DB',
        'disabled': '#BDC3C7',
      },

      // Tipografía
      fontFamily: {
        'sans': ['AmazonEmberBold', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'body': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'mono': ['Monaco', 'Menlo', 'Ubuntu Mono', 'monospace'],
      },

      fontSize: {
        'h1': ['56px', { lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.02em' }],
        'h2': ['44px', { lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.015em' }],
        'h3': ['32px', { lineHeight: '1.3', fontWeight: '700', letterSpacing: '-0.01em' }],
        'h4': ['24px', { lineHeight: '1.4', fontWeight: '700' }],
        'h5': ['20px', { lineHeight: '1.5', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '1.4', fontWeight: '500', letterSpacing: '0.02em' }],
        'label': ['13px', { lineHeight: '1.4', fontWeight: '600', letterSpacing: '0.01em' }],
      },

      // Espaciado
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '80px',
        '5xl': '96px',
      },

      // Border radius
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'full': '24px',
      },

      // Sombras
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'base': '0 1px 3px rgba(0, 0, 0, 0.08)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.08)',
        'lg': '0 8px 12px rgba(0, 0, 0, 0.12)',
        'xl': '0 12px 24px rgba(0, 0, 0, 0.15)',
        '2xl': '0 20px 40px rgba(0, 0, 0, 0.2)',
      },

      // Gradientes
      backgroundImage: {
        'gradient-purple': 'linear-gradient(135deg, #7B68EE 0%, #B19CD9 100%)',
        'gradient-blue': 'linear-gradient(135deg, #0066FF 0%, #4D94FF 100%)',
        'gradient-warm': 'linear-gradient(135deg, #F5F5F1 0%, #FAFAF8 100%)',
      },

      // Transiciones
      transitionDuration: {
        'fast': '150ms',
        'base': '200ms',
        'slow': '300ms',
        'slower': '400ms',
      },

      // Ancho máximo de contenedor
      maxWidth: {
        'container': '1200px',
      },

      // Outline para accessibility
      outline: {
        'focus': '2px solid #0066FF',
      },

      // Variantes de tamaños de botones
      borderWidth: {
        '0.5': '0.5px',
      },
    },
  },

  plugins: [
    // Plugin personalizado para componentes Amplify
    function ({ addComponents, theme }) {
      addComponents({
        // Botones
        '.btn-primary': {
          '@apply px-7 py-3 rounded-full bg-cta-primary text-white font-bold text-body-md transition-all duration-200 hover:bg-cta-primary-hover hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus:outline-focus': {},
        },
        '.btn-secondary': {
          '@apply px-7 py-3 rounded-full bg-transparent text-text-primary border-2 border-cta-secondary-border font-bold text-body-md transition-all duration-200 hover:bg-bg-secondary hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus:outline-focus': {},
        },
        '.btn-tertiary': {
          '@apply px-7 py-3 rounded-full bg-transparent text-accent-blue border-2 border-accent-blue font-bold text-body-md transition-all duration-200 hover:bg-accent-blue-light focus:outline-focus': {},
        },

        // Cards
        '.card': {
          '@apply bg-bg-primary border border-border-light rounded-lg p-6 shadow-base transition-all duration-200 hover:shadow-lg hover:-translate-y-1': {},
        },
        '.card-interactive': {
          '@apply cursor-pointer': {},
        },

        // Inputs
        '.input-base': {
          '@apply w-full bg-bg-primary text-text-primary border border-border-light rounded-md px-4 py-3 text-body-md transition-all duration-200 font-body': {},
        },
        '.input-focus': {
          '@apply focus:border-accent-blue focus:shadow-lg focus:outline-none': {},
        },

        // Badges
        '.badge-primary': {
          '@apply inline-block px-3 py-1.5 rounded-lg bg-accent-blue-light text-accent-blue text-caption font-bold uppercase': {},
        },
        '.badge-secondary': {
          '@apply inline-block px-3 py-1.5 rounded-lg bg-bg-secondary text-text-secondary text-caption font-bold uppercase': {},
        },

        // Headings
        '.h1': {
          '@apply text-h1 font-sans text-text-primary': {},
        },
        '.h2': {
          '@apply text-h2 font-sans text-text-primary': {},
        },
        '.h3': {
          '@apply text-h3 font-sans text-text-primary': {},
        },
        '.h4': {
          '@apply text-h4 font-sans text-text-primary': {},
        },
        '.h5': {
          '@apply text-h5 font-sans text-text-primary': {},
        },

        // Body text
        '.body-lg': {
          '@apply text-body-lg font-body text-text-secondary': {},
        },
        '.body': {
          '@apply text-body-md font-body text-text-secondary': {},
        },
        '.body-sm': {
          '@apply text-body-sm font-body text-text-tertiary': {},
        },

        // Layouts
        '.section': {
          '@apply py-12 md:py-16 lg:py-20': {},
        },
        '.section-hero': {
          '@apply py-20 md:py-28 lg:py-32': {},
        },
        '.container-max': {
          '@apply max-w-container mx-auto px-6 md:px-8': {},
        },
      });
    },
  ],
};
