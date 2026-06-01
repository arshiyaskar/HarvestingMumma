export default function FloatingOrbs() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {/* Orb 1 — warm brown */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '500px',
          height: '500px',
          background: '#8B5E3C',
          opacity: 0.15,
          filter: 'blur(80px)',
          borderRadius: '50%',
          animation: 'floatOrb 25s ease-in-out infinite',
        }}
      />
      {/* Orb 2 — firefly gold */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '5%',
          width: '400px',
          height: '400px',
          background: '#f5c842',
          opacity: 0.07,
          filter: 'blur(100px)',
          borderRadius: '50%',
          animation: 'floatOrb 30s ease-in-out infinite 5s',
        }}
      />
      {/* Orb 3 — deep earth */}
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '30%',
          width: '600px',
          height: '600px',
          background: '#2a1a0a',
          opacity: 0.30,
          filter: 'blur(120px)',
          borderRadius: '50%',
          animation: 'floatOrb 20s ease-in-out infinite 10s',
        }}
      />
    </div>
  );
}
