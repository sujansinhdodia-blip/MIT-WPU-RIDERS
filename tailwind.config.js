/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#060709',
          900: '#0b0c10',
          850: '#11131a',
          800: '#161922',
          750: '#1d222e',
          700: '#252b3b',
        },
        moto: {
          red: '#ff334b',
          orange: '#ff6b00',
          yellow: '#ffb703',
          blue: '#1a56db',
          cyan: '#00d2ff',
          metal: '#8e9aa8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'carbon-pattern': "radial-gradient(circle, #1a1e29 10%, transparent 11%), radial-gradient(circle at bottom left, #1a1e29 10%, transparent 11%), radial-gradient(circle at bottom right, #1a1e29 10%, transparent 11%), radial-gradient(circle at top left, #1a1e29 10%, transparent 11%), radial-gradient(circle at top right, #1a1e29 10%, transparent 11%)",
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.5s infinite ease-in-out',
        'float': 'float 4s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(255, 51, 75, 0.4))' },
          '50%': { opacity: '0.8', filter: 'drop-shadow(0 0 25px rgba(255, 51, 75, 0.8))' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        }
      }
    },
  },
  plugins: [],
}
