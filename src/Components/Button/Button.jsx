import './Button.module.css';
export default function Button() {
  return (
    <button
      style={{
        marginTop: '2rem',
        fontSize: '1rem',
        padding: '.75rem 1.25rem',
        transition: '.3s',
        borderRadius: '.5rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        background: '#121212',
        color: '#fff',
        border: '0',
      }}
    >
      Comprar agora
    </button>
  );
}
