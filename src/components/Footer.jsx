export default function Footer({ onAddCategory }) {
  return (
    <footer className="footer">
      <button className="btn-add-category" onClick={onAddCategory}>
        + Añadir categoría
      </button>
      <span className="footer-copy">Gastos del Hogar</span>
    </footer>
  );
}
