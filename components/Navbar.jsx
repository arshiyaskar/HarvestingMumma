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
        background: scrolled ? 'rgba(244, 247, 236, 0.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid #DDE8D0' : 'none',
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '1.2rem',
          color: '#1A1F14',
          textDecoration: 'none',
        }}
      >
        🌿 Harvesting Mumma
      </Link>

      {/* Right link */}
      <Link
        href="/login"
        style={{
          color: '#7A8870',
          fontSize: '14px',
          textDecoration: 'none',
          transition: 'color 0.2s ease',
          fontFamily: "'DM Sans', sans-serif",
        }}
        onMouseEnter={(e) => (e.target.style.color = '#1A1F14')}
        onMouseLeave={(e) => (e.target.style.color = '#7A8870')}
      >
        Already growing? Log in →
      </Link>
    </nav>
  );
}
