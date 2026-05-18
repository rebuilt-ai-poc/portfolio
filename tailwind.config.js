/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg:   { base:'#0A0A0A', elev1:'#1A1A1A' },
        text: { primary:'#FFFFFF', body:'#B0B0B0', meta:'#878787', muted:'#5E5E5E' },
        accent:{ DEFAULT:'#C8F04A', glow:'rgba(200,240,74,0.18)' },
        hair: 'rgba(255,255,255,0.08)',
        soft: 'rgba(255,255,255,0.12)',
        ghost:'rgba(255,255,255,0.05)',
      },
      fontFamily: {
        sans:['"Geist Variable"','Inter','ui-sans-serif','system-ui'],
        mono:['"JetBrains Mono"','"IBM Plex Mono"','ui-monospace'],
      },
      letterSpacing:{ tightest:'-0.02em', mono:'0.04em' },
      maxWidth:{ shell:'1024px' },
      borderRadius:{ card:'14px', btn:'8px' },
      transitionTimingFunction:{
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
        soft:'cubic-bezier(0.25, 1, 0.5, 1)',
      },
      animation:{ pulseDot:'pulseDot 1.4s ease-in-out infinite' },
      keyframes:{ pulseDot:{ '0%,100%':{opacity:0.6},'50%':{opacity:1} } },
    },
  },
  plugins: [],
}
