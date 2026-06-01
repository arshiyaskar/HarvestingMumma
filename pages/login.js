import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Toast from '../components/Toast';

const glassCard = {
  background: '#FFFFFF',
  border: '1px solid #DDE8D0',
  borderRadius: '16px',
  boxShadow: '0 2px 12px rgba(26,31,20,0.06)',
};

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  };

  const socialBtnStyle = {
    width: '100%',
    ...glassCard,
    borderRadius: '12px',
    padding: '13px 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    color: '#1A1F14',
    fontSize: '15px',
    fontWeight: 500,
    border: '1px solid #DDE8D0',
    background: '#FFFFFF',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontFamily: "'DM Sans', sans-serif",
  };

  return (
    <>
      <Head>
        <title>Log In — Harvesting Mumma</title>
        <meta name="description" content="Sign in to your Harvesting Mumma garden." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{ background: '#F4F7EC', minHeight: '100vh', position: 'relative', overflow: 'hidden', fontFamily: "'DM Sans', sans-serif" }}>
        <Toast message="Coming soon 🌱" visible={toastVisible} />

        {/* Back link */}
        <Link href="/" style={{ color: '#7A8870', fontSize: '14px', textDecoration: 'none', padding: '1.5rem 2.5rem', display: 'block', position: 'relative', zIndex: 1 }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#1A1F14')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#7A8870')}
        >
          ← Back to home
        </Link>

        {/* Center card */}
        <div style={{ maxWidth: '440px', margin: '0 auto', padding: '0 1.5rem 4rem', position: 'relative', zIndex: 1 }}>
          <div style={{ ...glassCard, padding: '2.5rem' }}>

            {/* Logo */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginBottom: '1.75rem' }}>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.2rem', color: '#1A1F14', fontWeight: 600 }}>🌿 Harvesting Mumma</span>
            </div>

            {/* Heading */}
            <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '2rem', color: '#1A1F14', textAlign: 'center', marginBottom: '0.5rem', fontWeight: 600 }}>
              Welcome back
            </h1>
            <p style={{ color: '#7A8870', fontSize: '14px', textAlign: 'center', marginBottom: '1.75rem' }}>
              Sign in to your garden
            </p>

            {/* Social buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '1.25rem' }}>
              {[
                { icon: 'G', iconColor: '#4285F4', label: 'Continue with Google' },
                { icon: 'f', iconColor: '#1877F2', label: 'Continue with Facebook' },
                { icon: '', iconColor: '#ffffff', label: 'Continue with Apple' },
              ].map((btn) => (
                <button
                  key={btn.label}
                  style={socialBtnStyle}
                  onClick={showToast}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#EEF4E4')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#FFFFFF')}
                >
                  <span style={{
                    width: '22px', height: '22px', borderRadius: '50%',
                    background: btn.iconColor, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '12px', fontWeight: 700,
                    color: btn.iconColor === '#ffffff' ? '#000' : 'white', flexShrink: 0,
                  }}>{btn.icon}</span>
                  {btn.label}
                </button>
              ))}
            </div>

            {/* Divider */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '1.25rem 0' }}>
              <div style={{ flex: 1, height: '1px', background: '#DDE8D0' }} />
              <span style={{ color: '#7A8870', fontSize: '13px' }}>or</span>
              <div style={{ flex: 1, height: '1px', background: '#DDE8D0' }} />
            </div>

            {/* Email */}
            <div>
              <label style={{ color: '#7A8870', fontSize: '13px', marginBottom: '6px', display: 'block' }}>Email address</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="login-email"
              />
            </div>

            {/* Password */}
            <div style={{ marginTop: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <label style={{ color: '#7A8870', fontSize: '13px' }}>Password</label>
                <Link href="/forgot-password" style={{ color: '#7A8870', fontSize: '13px', textDecoration: 'none' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#1A1F14')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#7A8870')}
                >
                  Forgot password?
                </Link>
              </div>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="login-password"
                  style={{ paddingRight: '48px !important' }}
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute', right: '14px', top: '50%',
                    transform: 'translateY(-50%)', background: 'none',
                    border: 'none', color: '#7A8870', cursor: 'pointer', fontSize: '18px',
                  }}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? '👁' : '👁‍🗨'}
                </button>
              </div>
            </div>

            {/* Login button */}
            <button
              id="login-submit"
              onClick={showToast}
              style={{
                width: '100%', background: '#3D7A2E', color: 'white',
                padding: '14px', borderRadius: '12px',
                fontWeight: 700, fontSize: '16px', border: 'none',
                cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
                marginTop: '1.5rem', transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#2F6122')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#3D7A2E')}
            >
              Log In
            </button>

            {/* Switch link */}
            <p style={{ marginTop: '1.25rem', textAlign: 'center', fontSize: '14px', color: '#7A8870' }}>
              New here?{' '}
              <Link href="/register" style={{ color: '#3D7A2E', fontWeight: 600, textDecoration: 'none' }}>
                Start growing free →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
