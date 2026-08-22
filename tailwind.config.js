/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Warm copper accent — the film/lens tone. Used sparingly.
        accent: '#C88A52',
        'accent-dark': '#A06A38',
        'accent-light': '#DDAD7C',
        // Near-black cinematic base
        ink: '#0A0908',
        'ink-raised': '#141210',
        'ink-soft': '#1C1916',
        // Warm off-white for reversed/light passages
        paper: '#F4EFE6',
        'paper-dim': '#DCD4C4',
        // Text tones
        bone: '#EFE9DD',
        stone: '#9C9285',
        line: 'rgba(239,233,221,0.14)',
        'line-soft': 'rgba(239,233,221,0.08)',
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
