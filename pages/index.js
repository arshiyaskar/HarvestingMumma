import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import FloatingOrbs from '../components/FloatingOrbs';
import Toast from '../components/Toast';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const showToast = (msg = 'Coming soon 🌱') => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  };

  const glassCard = {
    background: 'rgba(255,255,255,0.05)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(255,255,255,0.10)',
    borderRadius: '24px',
  };

  return (
    <>
      <Head>
        <title>Harvesting Mumma — Smart Gardening for Every Home Grower</title>
        <meta name="description" content="Tell us what you're growing. Get a personalised daily plan, smart reminders, and expert guidance — even if you've never grown anything before." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{ background: '#0a0a0a', color: '#fff', fontFamily: "'DM Sans', sans-serif", position: 'relative', overflowX: 'hidden' }}>
        <Navbar scrolled={scrolled} />
        <Toast message={toastMessage} visible={toastVisible} />

        {/* ── HERO SECTION ── */}
        <section style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '0 2.5rem' }}>
          <FloatingOrbs />

          <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', gap: '4rem', alignItems: 'center' }}>

              {/* LEFT COLUMN */}
              <div className="hero-left" style={{ flex: '1.2', display: 'flex', flexDirection: 'column' }}>
                {/* Pill badge */}
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: 'rgba(139,94,60,0.2)', border: '1px solid rgba(139,94,60,0.4)',
                  borderRadius: '40px', padding: '6px 18px', fontSize: '13px',
                  color: '#a89880', marginBottom: '1.5rem', width: 'fit-content',
                }}>
                  🌿 Smart gardening for every home grower
                </div>

                {/* Headline */}
                <h1 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                  fontWeight: 900, color: 'white',
                  lineHeight: 1.1, letterSpacing: '-0.03em',
                  margin: '0 0 1.25rem',
                }}>
                  From seed to{' '}
                  <span style={{ color: '#8B5E3C' }}>harvest</span>
                  {' '}—{' '}<br />
                  we guide every step.
                </h1>

                {/* Subheadline */}
                <p style={{ fontSize: '1.1rem', color: '#a89880', lineHeight: 1.75, maxWidth: '500px', marginBottom: '2.5rem' }}>
                  Tell us what you're growing. Get a personalised daily plan, smart reminders, and expert guidance — even if you've never grown anything before.
                </p>

                {/* CTA Button */}
                <Link
                  href="/register"
                  style={{
                    background: '#8B5E3C', color: 'white',
                    padding: '16px 44px', borderRadius: '50px',
                    fontSize: '1.1rem', fontWeight: 700,
                    display: 'inline-block', textDecoration: 'none',
                    boxShadow: '0 4px 24px rgba(139,94,60,0.35)',
                    transition: 'all 0.2s ease', width: 'fit-content',
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#a6703f'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(139,94,60,0.5)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#8B5E3C'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(139,94,60,0.35)'; }}
                >
                  Start Growing Free
                </Link>

                {/* Below button */}
                <p style={{ marginTop: '14px', fontSize: '14px', color: '#a89880' }}>
                  Already growing?{' '}
                  <Link href="/login" style={{ color: '#8B5E3C', fontWeight: 600, textDecoration: 'none' }}>Log in →</Link>
                </p>

                {/* Stat pills */}
                <div className="hero-stats" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '2rem' }}>
                  {['🌱 10 plants tracked', '💧 Smart reminders', '📅 Monthly guide', '🔍 Pest diagnosis'].map((pill) => (
                    <div key={pill} style={{
                      ...glassCard,
                      borderRadius: '40px', padding: '8px 16px', fontSize: '13px',
                      color: '#a89880', display: 'flex', alignItems: 'center', gap: '6px',
                    }}>
                      {pill}
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT COLUMN — floating cards */}
              <div className="hero-right" style={{ flex: 1, position: 'relative', height: '480px' }}>

                {/* Card 1 — main tomato card */}
                <div style={{
                  ...glassCard, padding: '20px', width: '280px',
                  position: 'absolute', bottom: 0, left: 0,
                  animation: 'floatCard 4s ease-in-out infinite',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 700, color: 'white', fontSize: '16px' }}>🍅 Tomato</span>
                    <span style={{
                      ...glassCard, borderRadius: '40px', padding: '3px 12px',
                      fontSize: '12px', color: '#8B5E3C', fontWeight: 600,
                    }}>Day 23</span>
                  </div>
                  <p style={{ color: '#a89880', fontSize: '14px', marginTop: '10px' }}>💧 Time to water today</p>
                  <div style={{ marginTop: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ color: '#a89880', fontSize: '12px' }}>Growth progress</span>
                      <span style={{ color: '#a89880', fontSize: '12px' }}>45%</span>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.1)', height: '6px', borderRadius: '3px' }}>
                      <div style={{ width: '45%', background: '#8B5E3C', height: '100%', borderRadius: '3px' }} />
                    </div>
                  </div>
                </div>

                {/* Card 2 — mint check */}
                <div style={{
                  ...glassCard, padding: '16px', width: '220px',
                  position: 'absolute', top: '20px', right: 0,
                  animation: 'floatCard 4s ease-in-out infinite 1.5s',
                }}>
                  <p style={{ color: 'white', fontSize: '14px', fontWeight: 600 }}>📏 Check height today</p>
                  <p style={{ color: '#a89880', fontSize: '13px', marginTop: '4px' }}>Your mint should be ~5cm</p>
                </div>

                {/* Card 3 — climate */}
                <div style={{
                  ...glassCard, padding: '16px', width: '200px',
                  position: 'absolute', top: '180px', right: '30px',
                  animation: 'floatCard 4s ease-in-out infinite 3s',
                }}>
                  <p style={{ color: 'white', fontSize: '14px', fontWeight: 600 }}>🌡️ Warm climate</p>
                  <p style={{ color: '#a89880', fontSize: '13px', marginTop: '4px' }}>Adjust watering schedule</p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ── PROBLEM SECTION ── */}
        <section style={{ padding: '6rem 2.5rem', position: 'relative' }}>
          <FloatingOrbs />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '11px', letterSpacing: '0.14em', color: '#a89880', textAlign: 'center', textTransform: 'uppercase', marginBottom: '1rem' }}>
              WHY MOST HOME GARDENS FAIL
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem,4vw,2.4rem)', color: 'white', textAlign: 'center' }}>
              Sound familiar?
            </h2>

            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px', marginTop: '3rem', maxWidth: '900px', margin: '3rem auto 0',
            }}>
              {[
                { emoji: '😰', text: "My plant died and I don't know why" },
                { emoji: '💧', text: "I never know when or how much to water" },
                { emoji: '🌱', text: "I don't know what to plant or when" },
              ].map((item) => (
                <div key={item.text} style={{
                  ...glassCard,
                  padding: '1.75rem',
                  borderLeft: '3px solid rgba(139,94,60,0.5)',
                  borderRadius: '0 16px 16px 0',
                }}>
                  <div style={{ fontSize: '32px' }}>{item.emoji}</div>
                  <p style={{ color: 'white', fontSize: '16px', fontWeight: 600, marginTop: '12px' }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SOLUTION SECTION ── */}
        <section style={{
          padding: '6rem 2.5rem',
          background: 'rgba(139,94,60,0.05)',
          borderTop: '1px solid rgba(139,94,60,0.15)',
          borderBottom: '1px solid rgba(139,94,60,0.15)',
        }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.14em', color: '#a89880', textAlign: 'center', textTransform: 'uppercase', marginBottom: '1rem' }}>
            HOW HARVESTING MUMMA HELPS
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem,4vw,2.4rem)', color: 'white', textAlign: 'center' }}>
            We solve all three.
          </h2>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px', marginTop: '3rem', maxWidth: '900px', margin: '3rem auto 0',
          }}>
            {[
              "A daily task tells you exactly what to do and when",
              "Smart reminders based on your specific plant schedule",
              "Country-aware suggestions every single month",
            ].map((text) => (
              <div key={text} style={{
                ...glassCard,
                padding: '1.75rem',
                borderLeft: '3px solid #8B5E3C',
                borderRadius: '0 16px 16px 0',
              }}>
                <div style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  background: '#8B5E3C', color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '16px', fontWeight: 700,
                }}>✓</div>
                <p style={{ color: 'white', fontSize: '16px', fontWeight: 600, marginTop: '12px' }}>{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FEATURES SECTION ── */}
        <section style={{ padding: '6rem 2.5rem', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.2rem', color: 'white', textAlign: 'center', marginBottom: '0.75rem' }}>
            Everything in one place
          </h2>
          <p style={{ color: '#a89880', textAlign: 'center', marginBottom: '3rem' }}>
            Built for balcony growers, beginners, and everyone in between.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                emoji: '🗺',
                title: 'Step-by-step growth roadmap',
                desc: 'Know exactly what to do on Day 1, Day 7, Day 21 and beyond.',
                badge: 'Free',
                badgeColor: '#71ab44',
              },
              {
                emoji: '🔍',
                title: 'Pest & problem diagnosis',
                desc: 'Describe what you see — get an organic fix instantly.',
                badge: 'Free',
                badgeColor: '#71ab44',
              },
              {
                emoji: '📅',
                title: 'Monthly planting calendar',
                desc: 'Based on your country and current growing season.',
                badge: 'Free',
                badgeColor: '#71ab44',
              },
            ].map((row) => (
              <div key={row.title} style={{
                ...glassCard, padding: '1.5rem 2rem',
                display: 'flex', alignItems: 'center', gap: '1.5rem',
              }}>
                {/* Emoji circle */}
                <div style={{
                  width: '56px', height: '56px', flexShrink: 0,
                  background: 'rgba(139,94,60,0.15)',
                  border: '1px solid rgba(139,94,60,0.3)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '24px',
                }}>
                  {row.emoji}
                </div>

                {/* Text */}
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 700, fontSize: '18px', color: 'white' }}>{row.title}</p>
                  <p style={{ color: '#a89880', fontSize: '14px', marginTop: '4px', lineHeight: 1.6 }}>{row.desc}</p>
                </div>

                {/* Badge */}
                <div style={{
                  background: `${row.badgeColor}26`,
                  border: `1px solid ${row.badgeColor}4d`,
                  color: row.badgeColor,
                  padding: '4px 14px', borderRadius: '20px',
                  fontSize: '12px', fontWeight: 700, flexShrink: 0,
                }}>
                  {row.badge}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FINAL CTA SECTION ── */}
        <section style={{ padding: '8rem 2.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <FloatingOrbs />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: '56px', marginBottom: '1.5rem' }}>🌿</div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem,5vw,3rem)',
              color: 'white', lineHeight: 1.2, marginBottom: '1rem',
            }}>
              Even if you've never grown anything.<br />Start today.
            </h2>
            <p style={{ color: '#a89880', fontSize: '1.1rem', margin: '1rem auto 2.5rem', maxWidth: '480px', lineHeight: 1.7 }}>
              Join home growers who finally know exactly what their plants need, every single day.
            </p>

            <Link
              href="/register"
              style={{
                background: '#8B5E3C', color: 'white',
                padding: '16px 44px', borderRadius: '50px',
                fontSize: '1.1rem', fontWeight: 700,
                display: 'inline-block', textDecoration: 'none',
                boxShadow: '0 4px 24px rgba(139,94,60,0.35)',
                transition: 'all 0.2s ease',
                fontFamily: "'DM Sans', sans-serif",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#a6703f'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(139,94,60,0.5)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#8B5E3C'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(139,94,60,0.35)'; }}
            >
              Start Growing Free
            </Link>

            <p style={{ marginTop: '12px', color: '#a89880', fontSize: '13px' }}>
              No credit card. No commitment. Cancel anytime.
            </p>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ padding: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="footer-inner" style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <span style={{ fontFamily: "'Playfair Display', serif", color: 'white', fontSize: '1rem' }}>🌿 Harvesting Mumma</span>
            <span style={{ color: '#a89880', fontSize: '13px' }}>© 2026 · Made for home growers everywhere</span>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <Link href="#" style={{ color: '#a89880', fontSize: '13px', textDecoration: 'none' }}>Privacy Policy</Link>
              <Link href="#" style={{ color: '#a89880', fontSize: '13px', textDecoration: 'none' }}>Terms of Use</Link>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
