function fmt(n) {
  return n.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
}

export default function Summary({ expenses, budget, onBudgetChange, categories }) {
  const byCategory = categories.map((cat) => {
    const spent = expenses
      .filter((e) => e.category === cat.id)
      .reduce((s, e) => s + e.amount, 0);
    const limit = budget[cat.id] ?? 0;
    const pct = limit > 0 ? Math.min((spent / limit) * 100, 100) : 0;
    const over = limit > 0 && spent > limit;
    return { ...cat, spent, limit, pct, over };
  }).filter((c) => c.spent > 0 || c.limit > 0);

  return (
    <section className="summary">
      <h2 className="section-title">Categorías</h2>

      {byCategory.length === 0 ? (
        <p className="empty-msg">Añade gastos para ver el desglose.</p>
      ) : (
        <div className="category-list">
          {byCategory.map((cat) => (
            <div key={cat.id} className="category-row">
              <div className="cat-info">
                <span className="cat-icon">{cat.icon}</span>
                <span className="cat-label">{cat.label}</span>
              </div>
              <div className="cat-bar-wrap">
                {cat.limit > 0 && (
                  <div
                    className={`cat-bar ${cat.over ? 'over' : ''}`}
                    style={{ width: `${cat.pct}%`, background: cat.color }}
                  />
                )}
              </div>
              <div className="cat-amounts">
                <span className={`cat-spent ${cat.over ? 'over-text' : ''}`}>
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
