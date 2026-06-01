import { useState } from 'react';
import Head from 'next/head';
import FloatingOrbs from '../components/FloatingOrbs';
import Toast from '../components/Toast';

const glassCard = {
  background: 'rgba(255,255,255,0.05)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  border: '1px solid rgba(255,255,255,0.10)',
  borderRadius: '24px',
};

const PLANTS = [
  { id: 'tomato',     name: 'Tomato',     emoji: '🍅', difficulty: 2 },
  { id: 'chili',      name: 'Chili',      emoji: '🌶️', difficulty: 2 },
  { id: 'mint',       name: 'Mint',       emoji: '🫙', difficulty: 1 },
  { id: 'strawberry', name: 'Strawberry', emoji: '🍓', difficulty: 2 },
  { id: 'basil',      name: 'Basil',      emoji: '🌿', difficulty: 1 },
  { id: 'lemon',      name: 'Lemon',      emoji: '🍋', difficulty: 3 },
  { id: 'garlic',     name: 'Garlic',     emoji: '🧄', difficulty: 1 },
  { id: 'spinach',    name: 'Spinach',    emoji: '🥬', difficulty: 1 },
  { id: 'coriander',  name: 'Coriander',  emoji: '🌱', difficulty: 2 },
  { id: 'potato',     name: 'Potato',     emoji: '🥔', difficulty: 2 },
];

const DAY1_TASKS = {
  tomato:     'Sow 2 seeds in a 3-inch seed tray, 0.5cm deep. Keep at 20–25°C.',
  chili:      'Sow 2 seeds per cell in seed tray. Maintain 25°C warmth.',
  mint:       'Press seeds onto moist soil surface. Direct sow into final pot.',
  strawberry: 'Plant crown at soil level in a 10-inch pot. Water well.',
  basil:      'Press seeds onto moist soil surface — do not cover. Full sun.',
  lemon:      'Plant sapling in 18-inch pot with well-draining mix. Water deeply.',
  garlic:     'Plant cloves pointed end up, 2 inches deep, 4 inches apart.',
  spinach:    'Sow directly into final 8-inch pot, 1cm deep, 4cm apart.',
  coriander:  'Crush seeds gently, scatter on soil surface, press lightly.',
  potato:     'Chit seed potatoes first for 2 weeks before planting.',
};

const difficultyLabel = { 1: 'Very Easy', 2: 'Moderate', 3: 'Advanced' };
const difficultyColor  = { 1: '#71ab44',  2: '#8B5E3C',  3: '#ef4444'  };

const LOCATIONS = [
  { id: 'indoors', emoji: '🏠', title: 'Indoors',     desc: 'Windowsill or grow light' },
  { id: 'balcony', emoji: '🪟', title: 'Balcony',     desc: 'Partial outdoor, some shade' },
  { id: 'terrace', emoji: '☀️', title: 'Terrace',     desc: 'Full outdoor, open sky' },
  { id: 'garden',  emoji: '🌿', title: 'Garden bed',  desc: 'Ground growing' },
];

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [selectedPlants, setSelectedPlants] = useState([]);
  const [growLocation, setGrowLocation] = useState('');
  const [toastMsg, setToastMsg] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const [searchVal, setSearchVal] = useState('');

  const showToast = (msg = 'Coming soon 🌱') => {
    setToastMsg(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  };

  const togglePlant = (plant) => {
    if (selectedPlants.find((p) => p.id === plant.id)) {
      setSelectedPlants(selectedPlants.filter((p) => p.id !== plant.id));
    } else if (selectedPlants.length < 3) {
      setSelectedPlants([...selectedPlants, plant]);
    } else {
      showToast('Free plan allows 3 plants — upgrade for unlimited 🌿');
    }
  };

  const StepDots = () => (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '3rem' }}>
      {[1, 2, 3].map((s) => (
        <div
          key={s}
          style={{
            width: '10px', height: '10px', borderRadius: '50%',
            background: s <= step ? '#8B5E3C' : 'rgba(255,255,255,0.2)',
            transition: 'background 0.3s ease',
          }}
        />
      ))}
    </div>
  );

  return (
    <>
      <Head>
        <title>Get Started — Harvesting Mumma</title>
        <meta name="description" content="Set up your personalised garden in just a few steps." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{ background: '#0a0a0a', minHeight: '100vh', position: 'relative', overflow: 'hidden', fontFamily: "'DM Sans', sans-serif" }}>
        <FloatingOrbs />
        <Toast message={toastMsg} visible={toastVisible} />

        <div style={{ maxWidth: '680px', margin: '0 auto', padding: '4rem 1.5rem', position: 'relative', zIndex: 1 }}>
          <StepDots />

          {/* ── STEP 1 — Plant Selection ── */}
          {step === 1 && (
            <div style={{ animation: 'fadeInUp 0.4s ease' }}>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem,5vw,2.5rem)', color: 'white', marginBottom: '0.75rem' }}>
                What are you starting with?
              </h1>
              <p style={{ color: '#a89880', marginBottom: '2rem', lineHeight: 1.6 }}>
                Pick your first plant. You can add more later.
              </p>

              {/* Plant grid */}
              <div
                className="plant-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(5, 1fr)',
                  gap: '12px',
                  marginBottom: '1.5rem',
                }}
              >
                {PLANTS.map((plant) => {
                  const isSelected = selectedPlants.find((p) => p.id === plant.id);
                  return (
                    <div
                      key={plant.id}
                      onClick={() => togglePlant(plant)}
                      style={{
                        ...glassCard,
                        padding: '20px 12px',
                        textAlign: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        borderRadius: '20px',
                        position: 'relative',
                        border: isSelected
                          ? '2px solid #8B5E3C'
                          : '2px solid rgba(255,255,255,0.08)',
                        background: isSelected
                          ? 'rgba(139,94,60,0.15)'
                          : 'rgba(255,255,255,0.05)',
                      }}
                    >
                      {isSelected && (
                        <div style={{
                          position: 'absolute', top: '8px', right: '8px',
                          width: '18px', height: '18px', borderRadius: '50%',
                          background: '#8B5E3C', color: 'white',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '10px',
                        }}>✓</div>
                      )}
                      <div style={{ fontSize: '40px', marginBottom: '8px' }}>{plant.emoji}</div>
                      <div style={{ fontSize: '13px', color: 'white', fontWeight: 600 }}>{plant.name}</div>
                      <div style={{
                        marginTop: '6px', display: 'inline-block',
                        background: difficultyColor[plant.difficulty] + '33',
                        color: difficultyColor[plant.difficulty],
                        padding: '2px 10px', borderRadius: '20px',
                        fontSize: '11px', fontWeight: 700,
                      }}>
                        {difficultyLabel[plant.difficulty]}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Search */}
              <input
                type="text"
                placeholder="Don't see your plant? Search 200+ →"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                onFocus={() => showToast('Full plant library coming soon 🌱')}
                id="onboarding-plant-search"
              />

              {/* Continue */}
              <button
                id="onboarding-step1-continue"
                disabled={selectedPlants.length === 0}
                onClick={() => setStep(2)}
                style={{
                  width: '100%', padding: '14px', borderRadius: '12px',
                  fontWeight: 700, fontSize: '16px', border: 'none',
                  fontFamily: "'DM Sans', sans-serif", marginTop: '1.5rem',
                  transition: 'all 0.2s ease',
                  ...(selectedPlants.length > 0
                    ? { background: '#8B5E3C', color: 'white', cursor: 'pointer' }
                    : { background: 'rgba(139,94,60,0.3)', color: 'rgba(255,255,255,0.4)', cursor: 'not-allowed' }),
                }}
                onMouseEnter={(e) => { if (selectedPlants.length > 0) e.currentTarget.style.background = '#a6703f'; }}
                onMouseLeave={(e) => { if (selectedPlants.length > 0) e.currentTarget.style.background = '#8B5E3C'; }}
              >
                Continue →
              </button>
            </div>
          )}

          {/* ── STEP 2 — Growing Location ── */}
          {step === 2 && (
            <div style={{ animation: 'fadeInUp 0.4s ease' }}>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem,5vw,2.5rem)', color: 'white', marginBottom: '0.75rem' }}>
                Where will your plants live?
              </h1>
              <p style={{ color: '#a89880', marginBottom: '2rem', lineHeight: 1.6 }}>
                This helps us tailor sunlight and watering advice.
              </p>

              <div
                className="location-grid"
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '1.5rem' }}
              >
                {LOCATIONS.map((loc) => {
                  const isSelected = growLocation === loc.id;
                  return (
                    <div
                      key={loc.id}
                      onClick={() => setGrowLocation(loc.id)}
                      style={{
                        ...glassCard,
                        padding: '1.75rem', textAlign: 'center',
                        cursor: 'pointer', transition: 'all 0.2s', borderRadius: '20px',
                        border: isSelected ? '2px solid #8B5E3C' : '2px solid rgba(255,255,255,0.08)',
                        background: isSelected ? 'rgba(139,94,60,0.15)' : 'rgba(255,255,255,0.05)',
                      }}
                    >
                      <div style={{ fontSize: '36px', marginBottom: '10px' }}>{loc.emoji}</div>
                      <div style={{ fontWeight: 700, fontSize: '16px', color: 'white' }}>{loc.title}</div>
                      <div style={{ color: '#a89880', fontSize: '13px', marginTop: '4px', lineHeight: 1.5 }}>{loc.desc}</div>
                    </div>
                  );
                })}
              </div>

              <button
                id="onboarding-step2-continue"
                disabled={!growLocation}
                onClick={() => setStep(3)}
                style={{
                  width: '100%', padding: '14px', borderRadius: '12px',
                  fontWeight: 700, fontSize: '16px', border: 'none',
                  fontFamily: "'DM Sans', sans-serif",
                  transition: 'all 0.2s ease',
                  ...(growLocation
                    ? { background: '#8B5E3C', color: 'white', cursor: 'pointer' }
                    : { background: 'rgba(139,94,60,0.3)', color: 'rgba(255,255,255,0.4)', cursor: 'not-allowed' }),
                }}
                onMouseEnter={(e) => { if (growLocation) e.currentTarget.style.background = '#a6703f'; }}
                onMouseLeave={(e) => { if (growLocation) e.currentTarget.style.background = '#8B5E3C'; }}
              >
                Continue →
              </button>
            </div>
          )}

          {/* ── STEP 3 — Ready ── */}
          {step === 3 && (
            <div style={{ animation: 'fadeInUp 0.4s ease', textAlign: 'center' }}>
              <div style={{ fontSize: '64px', marginBottom: '1rem' }}>🌿</div>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem,5vw,2.8rem)', color: 'white', marginBottom: '0.5rem' }}>
                Your garden is ready.
              </h1>
              <p style={{ color: '#a89880', fontSize: '1rem', marginBottom: '2rem', lineHeight: 1.7 }}>
                Here's your first task for each plant you selected:
              </p>

              {/* Plant task cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '2.5rem', textAlign: 'left' }}>
                {selectedPlants.map((plant) => (
                  <div
                    key={plant.id}
                    style={{
                      ...glassCard,
                      padding: '1.25rem 1.5rem',
                      borderLeft: '4px solid #8B5E3C',
                      borderRadius: '0 16px 16px 0',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '14px',
                    }}
                  >
                    <span style={{ fontSize: '32px', flexShrink: 0 }}>{plant.emoji}</span>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                        <span style={{ color: 'white', fontWeight: 700, fontSize: '16px' }}>{plant.name}</span>
                        <span style={{
                          background: 'rgba(139,94,60,0.2)', color: '#8B5E3C',
                          padding: '2px 12px', borderRadius: '20px',
                          fontSize: '12px', fontWeight: 700,
                        }}>Day 1</span>
                      </div>
                      <p style={{ color: '#a89880', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                        {DAY1_TASKS[plant.id]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA button */}
              <button
                id="onboarding-go-to-garden"
                onClick={() => showToast('My Garden coming in Phase 2 🌱')}
                style={{
                  display: 'inline-block', padding: '16px 44px', borderRadius: '50px',
                  background: '#8B5E3C', color: 'white',
                  fontSize: '1.1rem', fontWeight: 700,
                  border: 'none', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
                  boxShadow: '0 4px 24px rgba(139,94,60,0.35)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#a6703f'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#8B5E3C'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Go to My Garden →
              </button>

              <p style={{ marginTop: '1rem', color: '#a89880', fontSize: '13px' }}>
                Your full dashboard is on its way.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
