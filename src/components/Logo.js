const Logo = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <rect className="logo-ink" x="2" y="2" width="44" height="44" rx="11" strokeWidth="3" />
    <polyline className="logo-ink" points="12,16 20,24 12,32" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    <line className="logo-accent" x1="24" y1="16" x2="37" y2="16" strokeWidth="4" strokeLinecap="round" />
    <line className="logo-accent" x1="30.5" y1="16" x2="30.5" y2="33" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

export default Logo;
