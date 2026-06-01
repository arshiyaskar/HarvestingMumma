export default function Toast({ message, visible }) {
  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(255,255,255,0.08)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: '40px',
        padding: '12px 28px',
        color: 'white',
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '15px',
        zIndex: 9999,
        animation: 'toastIn 0.3s ease',
        whiteSpace: 'nowrap',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
      }}
    >
      {message}
    </div>
  );
}
