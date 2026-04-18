export default function Footer({ onAddCategory, onRecurring }) {
  return (
    <footer className="footer">
      <div style={{ display: 'flex', gap: 8 }}>
        <button className="btn-add-category" onClick={onAddCategory}>
          + Añadir categoría
        </button>
        <button className="btn-add-category" onClick={onRecurring}>
          🔁 Gastos fijos
        </button>
      </div>
      <span className="footer-copy">Gastos del Hogar</span>
    </footer>
  );
}
