/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand indigo-blue, sampled from the real Zumhoo Studios logo.
        // Used sparingly, same role the old copper accent played.
        accent: '#4B5AE0',
        'accent-dark': '#23245F',
        'accent-light': '#9BA3F0',
        // Near-black cinematic base, cool-toned (was warm charcoal)
        ink: '#0A0A12',
        'ink-raised': '#1B1D42',
        'ink-soft': '#14152A',
        // Cool off-white for reversed/light passages
        paper: '#EDEDF5',
        'paper-dim': '#C7C7DA',
        // Text tones
        bone: '#F1F0F5',
        stone: '#9C9CB8',
        line: 'rgba(241,240,245,0.14)',
        'line-soft': 'rgba(241,240,245,0.08)',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        display: ['"Manrope"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      transitionTimingFunction: {
        cinematic: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      keyframes: {
        grain: {
          '0%, 100%': { transform: 'translate(0,0)' },
          '10%': { transform: 'translate(-2%,-3%)' },
          '20%': { transform: 'translate(-4%,2%)' },
          '30%': { transform: 'translate(2%,-4%)' },
          '40%': { transform: 'translate(-2%,5%)' },
          '50%': { transform: 'translate(-4%,2%)' },
          '60%': { transform: 'translate(3%,0)' },
          '70%': { transform: 'translate(0,3%)' },
          '80%': { transform: 'translate(-3%,0)' },
          '90%': { transform: 'translate(2%,2%)' },
        },
        blinkcursor: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        grain: 'grain 8s steps(10) infinite',
        blinkcursor: 'blinkcursor 1s step-end infinite',
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
}
