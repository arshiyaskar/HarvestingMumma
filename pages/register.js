import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import FloatingOrbs from '../components/FloatingOrbs';
import Toast from '../components/Toast';

const glassCard = {
  background: 'rgba(255,255,255,0.05)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  border: '1px solid rgba(255,255,255,0.10)',
  borderRadius: '24px',
};

const COUNTRIES = [
  'Afghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina','Armenia','Australia',
  'Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin',
  'Bhutan','Bolivia','Bosnia and Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina Faso','Burundi',
  'Cabo Verde','Cambodia','Cameroon','Canada','Central African Republic','Chad','Chile','China','Colombia',
  'Comoros','Congo','Costa Rica','Croatia','Cuba','Cyprus','Czech Republic','Denmark','Djibouti','Dominica',
  'Dominican Republic','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Eswatini',
  'Ethiopia','Fiji','Finland','France','Gabon','Gambia','Georgia','Germany','Ghana','Greece','Grenada',
  'Guatemala','Guinea','Guinea-Bissau','Guyana','Haiti','Honduras','Hungary','Iceland','India','Indonesia',
  'Iran','Iraq','Ireland','Israel','Italy','Jamaica','Japan','Jordan','Kazakhstan','Kenya','Kiribati',
  'Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania',
  'Luxembourg','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania',
  'Mauritius','Mexico','Micronesia','Moldova','Monaco','Mongolia','Montenegro','Morocco','Mozambique',
  'Myanmar','Namibia','Nauru','Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria','North Korea',
  'North Macedonia','Norway','Oman','Pakistan','Palau','Palestine','Panama','Papua New Guinea','Paraguay',
  'Peru','Philippines','Poland','Portugal','Qatar','Romania','Russia','Rwanda','Saint Kitts and Nevis',
  'Saint Lucia','Saint Vincent and the Grenadines','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia',
  'Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia',
  'South Africa','South Korea','South Sudan','Spain','Sri Lanka','Sudan','Suriname','Sweden','Switzerland',
  'Syria','Taiwan','Tajikistan','Tanzania','Thailand','Timor-Leste','Togo','Tonga','Trinidad and Tobago',
  'Tunisia','Turkey','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom',
  'United States','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Yemen','Zambia','Zimbabwe',
];

function getPasswordStrength(pw) {
  if (pw.length < 6) return 1;
  if (pw.length >= 6 && !/\d/.test(pw)) return 2;
  if (pw.length >= 8 && /\d/.test(pw) && !/[^a-zA-Z0-9]/.test(pw)) return 3;
  if (pw.length >= 8 && /\d/.test(pw) && /[^a-zA-Z0-9]/.test(pw)) return 4;
  return 1;
}

const strengthLabel = ['', 'Weak', 'Fair', 'Good', 'Strong'];
const strengthColor = ['', '#ef4444', '#f97316', '#eab308', '#8B5E3C'];

export default function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [country, setCountry] = useState('');
  const [countrySearch, setCountrySearch] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);

  const countryInputRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((r) => r.json())
      .then((d) => {
        if (d.country_name) {
          setCountry(d.country_name);
          setCountrySearch(d.country_name);
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target) && e.target !== countryInputRef.current) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const showToast = (msg = 'Coming soon 🌱') => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  };

  const isFormValid = fullName && email && password.length >= 8 && country && agreedToTerms;

  const filteredCountries = COUNTRIES.filter((c) =>
    c.toLowerCase().includes(countrySearch.toLowerCase())
  );

  const socialBtnStyle = {
    width: '100%',
    borderRadius: '12px',
    padding: '13px 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    color: 'white',
    fontSize: '15px',
    fontWeight: 500,
    border: '1px solid rgba(255,255,255,0.15)',
    background: 'rgba(255,255,255,0.05)',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontFamily: "'DM Sans', sans-serif",
  };

  return (
    <>
      <Head>
        <title>Create Account — Harvesting Mumma</title>
        <meta name="description" content="Create your Harvesting Mumma account in 30 seconds." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{ background: '#0a0a0a', minHeight: '100vh', position: 'relative', overflow: 'hidden', fontFamily: "'DM Sans', sans-serif" }}>
        <FloatingOrbs />
        <Toast message={toastMessage} visible={toastVisible} />

        {/* Back link */}
        <Link href="/" style={{ color: '#a89880', fontSize: '14px', textDecoration: 'none', padding: '1.5rem 2.5rem', display: 'block', position: 'relative', zIndex: 1 }}>
          ← Back to home
        </Link>

        {/* Center card */}
        <div style={{ maxWidth: '440px', margin: '0 auto', padding: '0 1.5rem 4rem', position: 'relative', zIndex: 1 }}>
          <div style={{ ...glassCard, padding: '2.5rem' }}>

            {/* Logo */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginBottom: '1.75rem' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', color: 'white' }}>🌿 Harvesting Mumma</span>
            </div>

            {/* Heading */}
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: 'white', textAlign: 'center', marginBottom: '0.5rem' }}>
              Create your account
            </h1>
            <p style={{ color: '#a89880', fontSize: '14px', textAlign: 'center', marginBottom: '1.75rem' }}>
              It takes 30 seconds.
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
                  onClick={() => showToast('Coming soon 🌱')}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.10)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
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
              <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }} />
              <span style={{ color: '#a89880', fontSize: '13px' }}>or sign up with email</span>
              <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }} />
            </div>

            {/* Full name */}
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ color: '#a89880', fontSize: '13px', marginBottom: '6px', display: 'block' }}>Full name</label>
              <input
                type="text"
                placeholder="Your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                id="register-name"
              />
            </div>

            {/* Email */}
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ color: '#a89880', fontSize: '13px', marginBottom: '6px', display: 'block' }}>Email address</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="register-email"
              />
            </div>

            {/* Password */}
            <div style={{ marginBottom: '0.5rem' }}>
              <label style={{ color: '#a89880', fontSize: '13px', marginBottom: '6px', display: 'block' }}>Create a password</label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordStrength(e.target.value ? getPasswordStrength(e.target.value) : 0);
                  }}
                  id="register-password"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute', right: '14px', top: '50%',
                    transform: 'translateY(-50%)', background: 'none',
                    border: 'none', color: '#a89880', cursor: 'pointer', fontSize: '18px',
                  }}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? '👁' : '👁‍🗨'}
                </button>
              </div>

              {/* Strength bar */}
              {password && (
                <>
                  <div className="strength-bar">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="strength-segment"
                        style={{ background: i <= passwordStrength ? strengthColor[passwordStrength] : 'rgba(255,255,255,0.1)' }}
                      />
                    ))}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '4px' }}>
                    <span style={{ fontSize: '12px', color: strengthColor[passwordStrength] }}>
                      {strengthLabel[passwordStrength]}
                    </span>
                  </div>
                </>
              )}
              <p style={{ color: '#a89880', fontSize: '12px', marginTop: '4px' }}>Minimum 8 characters</p>
            </div>

            {/* Country */}
            <div style={{ marginBottom: '1rem', position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <label style={{ color: '#a89880', fontSize: '13px' }}>Your country</label>
                <span
                  style={{ color: '#8B5E3C', fontSize: '12px', cursor: 'pointer' }}
                  onClick={() => countryInputRef.current?.focus()}
                >
                  (not right? change it)
                </span>
              </div>
              <input
                ref={countryInputRef}
                type="text"
                placeholder="Search your country..."
                value={countrySearch}
                onChange={(e) => { setCountrySearch(e.target.value); setShowDropdown(true); }}
                onFocus={() => setShowDropdown(true)}
                id="register-country"
              />
              {showDropdown && countrySearch && filteredCountries.length > 0 && (
                <div
                  ref={dropdownRef}
                  style={{
                    position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 10,
                    background: 'rgba(20,15,10,0.95)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    borderRadius: '12px',
                    maxHeight: '200px', overflowY: 'auto', padding: '8px 0',
                    marginTop: '4px',
                  }}
                >
                  {filteredCountries.map((name) => (
                    <div
                      key={name}
                      style={{ padding: '10px 16px', fontSize: '14px', color: 'white', cursor: 'pointer' }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                      onClick={() => { setCountry(name); setCountrySearch(name); setShowDropdown(false); }}
                    >
                      {name}
                    </div>
                  ))}
                </div>
              )}
              <p style={{ color: '#a89880', fontSize: '12px', marginTop: '4px' }}>We use this to personalise your planting calendar</p>
            </div>

            {/* Terms checkbox */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '1.5rem' }}>
              <input
                type="checkbox"
                id="register-terms"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                style={{ width: '16px !important', height: '16px', marginTop: '2px', flexShrink: 0, accentColor: '#8B5E3C', cursor: 'pointer' }}
              />
              <label htmlFor="register-terms" style={{ fontSize: '13px', color: '#a89880', cursor: 'pointer', lineHeight: 1.5 }}>
                I agree to the{' '}
                <Link href="#" style={{ color: '#8B5E3C', textDecoration: 'none' }}>Terms of Use</Link>
                {' '}and{' '}
                <Link href="#" style={{ color: '#8B5E3C', textDecoration: 'none' }}>Privacy Policy</Link>
              </label>
            </div>

            {/* Register button */}
            <button
              id="register-submit"
              disabled={!isFormValid}
              onClick={() => isFormValid && showToast('Coming soon 🌱')}
              style={{
                width: '100%',
                padding: '14px', borderRadius: '12px',
                fontWeight: 700, fontSize: '16px', border: 'none',
                fontFamily: "'DM Sans', sans-serif",
                transition: 'all 0.2s ease',
                ...(isFormValid
                  ? { background: '#8B5E3C', color: 'white', cursor: 'pointer' }
                  : { background: 'rgba(139,94,60,0.3)', color: 'rgba(255,255,255,0.4)', cursor: 'not-allowed' }),
              }}
              onMouseEnter={(e) => { if (isFormValid) e.currentTarget.style.background = '#a6703f'; }}
              onMouseLeave={(e) => { if (isFormValid) e.currentTarget.style.background = '#8B5E3C'; }}
            >
              Create My Account
            </button>

            {/* Switch link */}
            <p style={{ marginTop: '1.25rem', textAlign: 'center', fontSize: '14px', color: '#a89880' }}>
              Already have an account?{' '}
              <Link href="/login" style={{ color: '#8B5E3C', fontWeight: 600, textDecoration: 'none' }}>
                Log in →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
