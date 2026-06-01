import Link from 'next/link';

export default function Navbar({ scrolled }) {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        padding: '0 2.5rem',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(10,10,10,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.2rem',
          color: 'white',
          textDecoration: 'none',
        }}
      >
        🌿 Harvesting Mumma
      </Link>

      {/* Right link */}
      <Link
        href="/login"
        style={{
          color: '#a89880',
          fontSize: '14px',
          textDecoration: 'none',
          transition: 'color 0.2s ease',
          fontFamily: "'DM Sans', sans-serif",
        }}
        onMouseEnter={(e) => (e.target.style.color = 'white')}
        onMouseLeave={(e) => (e.target.style.color = '#a89880')}
      >
        Already growing? Log in →
      </Link>
    </nav>
  );
}
