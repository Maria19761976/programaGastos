const MONTHS = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
];

export default function Header({ year, month, onPrev, onNext, darkMode, onToggleDark }) {
  return (
    <header className="header">
      <h1 className="header-title">🏡 Gastos del Hogar</h1>
      <div className="month-nav">
        <button className="nav-btn" onClick={onPrev}>‹</button>
        <span className="month-label">{MONTHS[month]} {year}</span>
        <button className="nav-btn" onClick={onNext}>›</button>
        <button className="nav-btn" onClick={onToggleDark} title={darkMode ? 'Modo claro' : 'Modo oscuro'}>
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
}
