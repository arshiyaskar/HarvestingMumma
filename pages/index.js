import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
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
    background: '#FFFFFF',
    border: '1px solid #DDE8D0',
    borderRadius: '16px',
    boxShadow: '0 2px 12px rgba(26,31,20,0.06)',
  };

  return (
    <>
      <Head>
        <title>Harvesting Mumma — Smart Gardening for Every Home Grower</title>
        <meta name="description" content="Tell us what you're growing. Get a personalised daily plan, smart reminders, and expert guidance — even if you've never grown anything before." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{ background: '#F4F7EC', color: '#1A1F14', fontFamily: "'DM Sans', sans-serif", position: 'relative', overflowX: 'hidden' }}>
        <Navbar scrolled={scrolled} />
        <Toast message={toastMessage} visible={toastVisible} />

        {/* ── HERO SECTION ── */}
        <section style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '4rem 2.5rem 0' }}>

          <div style={{ maxWidth: '700px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            
            {/* Pill badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#EEF4E4', border: '1px solid #DDE8D0',
              borderRadius: '40px', padding: '6px 18px', fontSize: '13px',
              color: '#7A8870', marginBottom: '1.5rem', width: 'fit-content',
            }}>
              🌿 Smart gardening for every home grower
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontWeight: 700, color: '#1A1F14',
              lineHeight: 1.1, letterSpacing: '-0.03em',
              margin: '0 0 1.25rem',
            }}>
              From seed to{' '}
              <span style={{ color: '#3D7A2E' }}>harvest</span>
              {' '}—{' '}<br />
              we guide every step.
            </h1>

            {/* Subheadline */}
            <p style={{ fontSize: '1.1rem', color: '#7A8870', lineHeight: 1.75, maxWidth: '500px', marginBottom: '2.5rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Tell us what you're growing. Get a personalised daily plan, smart reminders, and expert guidance — even if you've never grown anything before.
            </p>

            {/* CTA Button */}
            <Link
              href="/register"
              style={{
                background: '#3D7A2E', color: 'white',
                padding: '16px 44px', borderRadius: '50px',
                fontSize: '1.1rem', fontWeight: 700,
                display: 'inline-block', textDecoration: 'none',
                boxShadow: '0 4px 24px rgba(61,122,46,0.25)',
                transition: 'all 0.2s ease', width: 'fit-content',
                fontFamily: "'DM Sans', sans-serif",
                marginLeft: 'auto', marginRight: 'auto',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#2F6122'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(61,122,46,0.35)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#3D7A2E'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(61,122,46,0.25)'; }}
            >
              Start Growing Free
            </Link>

            {/* Below button */}
            <p style={{ marginTop: '14px', fontSize: '14px', color: '#7A8870' }}>
              Already growing?{' '}
              <Link href="/login" style={{ color: '#3D7A2E', fontWeight: 600, textDecoration: 'none' }}>Log in →</Link>
            </p>

            {/* Plant tracker card mockup — Centered, max-width: 360px */}
            <div style={{
              ...glassCard, padding: '20px', width: '100%', maxWidth: '360px',
              margin: '2.5rem auto 0', textAlign: 'left',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 700, color: '#1A1F14', fontSize: '16px' }}>🍅 Tomato</span>
                <span style={{
                  background: '#EEF4E4', border: '1px solid #DDE8D0', borderRadius: '40px', padding: '3px 12px',
                  fontSize: '12px', color: '#3D7A2E', fontWeight: 600,
                }}>Day 23</span>
              </div>
              <p style={{ color: '#7A8870', fontSize: '14px', marginTop: '10px' }}>💧 Time to water today</p>
              <div style={{ marginTop: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ color: '#7A8870', fontSize: '12px' }}>Growth progress</span>
                  <span style={{ color: '#7A8870', fontSize: '12px' }}>45%</span>
                </div>
                <div style={{ background: '#EEF4E4', height: '6px', borderRadius: '3px' }}>
                  <div style={{ width: '45%', background: '#3D7A2E', height: '100%', borderRadius: '3px' }} />
                </div>
              </div>
            </div>

            {/* Stat pills */}
            <div className="hero-stats" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '2.5rem', justifyContent: 'center' }}>
              {['🌱 10 plants tracked', '💧 Smart reminders', '📅 Monthly guide', '🔍 Pest diagnosis'].map((pill) => (
                <div key={pill} style={{
                  ...glassCard,
                  borderRadius: '40px', padding: '8px 16px', fontSize: '13px',
                  color: '#7A8870', display: 'flex', alignItems: 'center', gap: '6px',
                }}>
                  {pill}
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── PROBLEM SECTION ── */}
        <section style={{ padding: '6rem 2.5rem', position: 'relative' }}>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '11px', letterSpacing: '0.14em', color: '#7A8870', textAlign: 'center', textTransform: 'uppercase', marginBottom: '1rem' }}>
              WHY MOST HOME GARDENS FAIL
            </p>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.8rem,4vw,2.4rem)', color: '#1A1F14', textAlign: 'center', fontWeight: 600 }}>
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
                  borderLeft: '3px solid #3D7A2E',
                  borderRadius: '0 16px 16px 0',
                }}>
                  <div style={{ fontSize: '32px' }}>{item.emoji}</div>
                  <p style={{ color: '#1A1F14', fontSize: '16px', fontWeight: 600, marginTop: '12px' }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SOLUTION SECTION ── */}
        <section style={{
          padding: '6rem 2.5rem',
          background: '#EEF4E4',
          borderTop: '1px solid #DDE8D0',
          borderBottom: '1px solid #DDE8D0',
        }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.14em', color: '#7A8870', textAlign: 'center', textTransform: 'uppercase', marginBottom: '1rem' }}>
            HOW HARVESTING MUMMA HELPS
          </p>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.8rem,4vw,2.4rem)', color: '#1A1F14', textAlign: 'center', fontWeight: 600 }}>
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
                borderLeft: '3px solid #3D7A2E',
                borderRadius: '0 16px 16px 0',
              }}>
                <div style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  background: '#3D7A2E', color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '16px', fontWeight: 700,
                }}>✓</div>
                <p style={{ color: '#1A1F14', fontSize: '16px', fontWeight: 600, marginTop: '12px' }}>{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FEATURES SECTION ── */}
        <section style={{ padding: '6rem 2.5rem', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '2.2rem', color: '#1A1F14', textAlign: 'center', marginBottom: '0.75rem', fontWeight: 600 }}>
            Everything in one place
          </h2>
          <p style={{ color: '#7A8870', textAlign: 'center', marginBottom: '3rem' }}>
            Built for balcony growers, beginners, and everyone in between.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                emoji: '🗺',
                title: 'Step-by-step growth roadmap',
                desc: 'Know exactly what to do on Day 1, Day 7, Day 21 and beyond.',
                badge: 'Free',
                badgeColor: '#3D7A2E',
              },
              {
                emoji: '🔍',
                title: 'Pest & problem diagnosis',
                desc: 'Describe what you see — get an organic fix instantly.',
                badge: 'Free',
                badgeColor: '#3D7A2E',
              },
              {
                emoji: '📅',
                title: 'Monthly planting calendar',
                desc: 'Based on your country and current growing season.',
                badge: 'Free',
                badgeColor: '#3D7A2E',
              },
            ].map((row) => (
              <div key={row.title} style={{
                ...glassCard, padding: '1.5rem 2rem',
                display: 'flex', alignItems: 'center', gap: '1.5rem',
              }}>
                {/* Emoji circle */}
                <div style={{
                  width: '56px', height: '56px', flexShrink: 0,
                  background: '#EEF4E4',
                  border: '1px solid #DDE8D0',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '24px',
                }}>
                  {row.emoji}
                </div>

                {/* Text */}
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 700, fontSize: '18px', color: '#1A1F14' }}>{row.title}</p>
                  <p style={{ color: '#7A8870', fontSize: '14px', marginTop: '4px', lineHeight: 1.6 }}>{row.desc}</p>
                </div>

                {/* Badge */}
                <div style={{
                  background: '#EEF4E4',
                  border: `1px solid #DDE8D0`,
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
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: '56px', marginBottom: '1.5rem' }}>🌿</div>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2rem,5vw,3rem)',
              color: '#1A1F14', lineHeight: 1.2, marginBottom: '1rem',
              fontWeight: 600,
            }}>
              Even if you've never grown anything.<br />Start today.
            </h2>
            <p style={{ color: '#7A8870', fontSize: '1.1rem', margin: '1rem auto 2.5rem', maxWidth: '480px', lineHeight: 1.7 }}>
              Join home growers who finally know exactly what their plants need, every single day.
            </p>

            <Link
              href="/register"
              style={{
                background: '#3D7A2E', color: 'white',
                padding: '16px 44px', borderRadius: '50px',
                fontSize: '1.1rem', fontWeight: 700,
                display: 'inline-block', textDecoration: 'none',
                boxShadow: '0 4px 24px rgba(61,122,46,0.25)',
                transition: 'all 0.2s ease',
                fontFamily: "'DM Sans', sans-serif",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#2F6122'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(61,122,46,0.35)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#3D7A2E'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(61,122,46,0.25)'; }}
            >
              Start Growing Free
            </Link>

            <p style={{ marginTop: '12px', color: '#7A8870', fontSize: '13px' }}>
              No credit card. No commitment. Cancel anytime.
            </p>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ padding: '2.5rem', borderTop: '1px solid #DDE8D0' }}>
          <div className="footer-inner" style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#1A1F14', fontSize: '1rem', fontWeight: 600 }}>🌿 Harvesting Mumma</span>
            <span style={{ color: '#7A8870', fontSize: '13px' }}>© 2026 · Made for home growers everywhere</span>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <Link href="#" style={{ color: '#7A8870', fontSize: '13px', textDecoration: 'none' }}>Privacy Policy</Link>
              <Link href="#" style={{ color: '#7A8870', fontSize: '13px', textDecoration: 'none' }}>Terms of Use</Link>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
