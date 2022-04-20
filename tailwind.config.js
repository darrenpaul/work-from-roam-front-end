module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './elements/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: {
        'screen-1/2': '50vw',
        'screen-3/4': '75vw',
      },
      height: {
        'screen-1/2': '50vh',
        'screen-3/4': '75vh',
      },
      colors: {
        'main': '#f8fafc',
        'form': '#f8fafc',
        'input': '#f1f5f9',
        'navigation': '#f1f5f9',
        'footer': '#f1f5f9',
        'active': '#0ea5e9',
        'dark-copy': '#1e293b',
        'light-copy': '#f8fafc',
        'dark-link': '#1e293b',
        'dark-link-active': '#64748b',
        'dark-link-hover': '#94a3b8',
        'label': '#94a3b8',
        'error': '#ef4444',
        'button-primary': '#10b981',
        'button-primary-hover': '#34d399',
        'button-secondary': '#10b981',
        'button-secondary-hover': '#34d399',
      },
      spacing: {
        item: '1rem',
        sides: '1rem',
      },
    },
  },
  plugins: [],
};
