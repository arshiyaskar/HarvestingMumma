import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import FloatingOrbs from '../components/FloatingOrbs';

const glassCard = {
  background: 'rgba(255,255,255,0.05)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  border: '1px solid rgba(255,255,255,0.10)',
  borderRadius: '24px',
};

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Head>
        <title>Reset Password — Harvesting Mumma</title>
        <meta name="description" content="Reset your Harvesting Mumma password." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{ background: '#0a0a0a', minHeight: '100vh', position: 'relative', overflow: 'hidden', fontFamily: "'DM Sans', sans-serif" }}>
        <FloatingOrbs />

        {/* Back link */}
        <Link href="/login" style={{ color: '#a89880', fontSize: '14px', textDecoration: 'none', padding: '1.5rem 2.5rem', display: 'block', position: 'relative', zIndex: 1 }}>
          ← Back to login
        </Link>

        {/* Center card */}
        <div style={{ maxWidth: '440px', margin: '0 auto', padding: '0 1.5rem 4rem', position: 'relative', zIndex: 1 }}>
          <div style={{ ...glassCard, padding: '2.5rem' }}>

            {/* Logo */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginBottom: '1.75rem' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', color: 'white' }}>🌿 Harvesting Mumma</span>
            </div>

            {!submitted ? (
              <>
                <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: 'white', textAlign: 'center', marginBottom: '0.75rem' }}>
                  Reset your password
                </h1>
                <p style={{ color: '#a89880', fontSize: '14px', textAlign: 'center', marginBottom: '1.75rem' }}>
                  Enter your email — we'll send a reset link.
                </p>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ color: '#a89880', fontSize: '13px', marginBottom: '6px', display: 'block' }}>Email address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="forgot-email"
                  />
                </div>

                <button
                  id="forgot-submit"
                  onClick={() => email && setSubmitted(true)}
                  style={{
                    width: '100%', background: '#8B5E3C', color: 'white',
                    padding: '14px', borderRadius: '12px',
                    fontWeight: 700, fontSize: '16px', border: 'none',
                    cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
                    transition: 'background 0.2s ease',
                    opacity: email ? 1 : 0.5,
                  }}
                  onMouseEnter={(e) => { if (email) e.currentTarget.style.background = '#a6703f'; }}
                  onMouseLeave={(e) => { if (email) e.currentTarget.style.background = '#8B5E3C'; }}
                >
                  Send Reset Link
                </button>
              </>
            ) : (
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '1.25rem' }}>✉️</div>
                <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: 'white', marginBottom: '0.75rem' }}>
                  Check your inbox
                </h1>
                <p style={{ color: '#a89880', fontSize: '15px', lineHeight: 1.6, marginBottom: '0.5rem' }}>
                  Reset link sent to{' '}
                  <span style={{ color: '#8B5E3C', fontWeight: 600 }}>{email}</span>
                </p>
                <p style={{ color: '#a89880', fontSize: '13px', marginBottom: '1.5rem' }}>
                  Didn't get it? Check your spam folder.
                </p>
                <Link
                  href="/login"
                  style={{ color: '#8B5E3C', fontWeight: 600, fontSize: '15px', textDecoration: 'none' }}
                >
                  Back to login →
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
