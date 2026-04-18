function fmt(n) {
  return n.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
}

export default function Summary({ expenses, budget, onBudgetChange, categories }) {
  const byCategory = categories.map((cat) => {
    const spent = expenses
      .filter((e) => e.category === cat.id)
      .reduce((s, e) => s + e.amount, 0);
    const limit = budget[cat.id] ?? 0;
    const rawPct = limit > 0 ? (spent / limit) * 100 : 0;
    const pct = Math.min(rawPct, 100);
    const over = limit > 0 && spent > limit;
    const warning = limit > 0 && !over && rawPct >= 80;
    return { ...cat, spent, limit, pct, over, warning };
  }).filter((c) => c.spent > 0 || c.limit > 0);

  const alerts = byCategory.filter((c) => c.over || c.warning);

  return (
    <section className="summary">
      <h2 className="section-title">Categorías</h2>

      {alerts.length > 0 && (
        <div className="budget-alerts">
          {alerts.map((cat) => (
            <div key={cat.id} className={`budget-alert ${cat.over ? 'alert-over' : 'alert-warning'}`}>
              <span>{cat.over ? '🚨' : '⚠️'}</span>
              <span>
                <strong>{cat.label}</strong>
                {cat.over
                  ? ` — superado por ${fmt(cat.spent - cat.limit)}`
                  : ` — ${Math.round((cat.spent / cat.limit) * 100)}% del presupuesto usado`}
              </span>
            </div>
          ))}
        </div>
      )}

      {byCategory.length === 0 ? (
        <p className="empty-msg">Añade gastos para ver el desglose.</p>
      ) : (
        <div className="category-list">
          {byCategory.map((cat) => (
            <div key={cat.id} className="category-row">
              <div className="cat-info">
                <span className="cat-icon">{cat.icon}</span>
                <span className="cat-label">{cat.label}</span>
                {cat.over && <span className="alert-badge over">🚨</span>}
                {cat.warning && <span className="alert-badge warn">⚠️</span>}
              </div>
              <div className="cat-bar-wrap">
                {cat.limit > 0 && (
                  <div
                    className={`cat-bar ${cat.over ? 'over' : cat.warning ? 'warn' : ''}`}
                    style={{ width: `${cat.pct}%`, background: cat.over || cat.warning ? undefined : cat.color }}
                  />
                )}
              </div>
              <div className="cat-amounts">
                <span className={`cat-spent ${cat.over ? 'over-text' : cat.warning ? 'warn-text' : ''}`}>
                  {fmt(cat.spent)}
                </span>
                <div className="cat-budget-input">
                  <span className="budget-prefix">Límite:</span>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    placeholder="—"
                    value={cat.limit || ''}
                    onChange={(e) =>
                      onBudgetChange(cat.id, parseFloat(e.target.value) || 0)
                    }
                  />
                  <span className="budget-suffix">€</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
