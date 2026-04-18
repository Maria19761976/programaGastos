function fmt(n) {
  return n.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
}

export default function IncomeCard({ income, total, prevTotal, onIncomeChange }) {
  const balance = income - total;
  const balancePct = income > 0 ? Math.min((total / income) * 100, 100) : 0;
  const diff = prevTotal > 0 ? total - prevTotal : null;
  const diffPct = prevTotal > 0 ? Math.round(Math.abs((diff / prevTotal) * 100)) : null;

  return (
    <section className="income-card">
      <div className="income-card-top">
        <div className="income-field">
          <span className="income-label">💰 Ingresos del mes</span>
          <div className="income-input-wrap">
            <input
              type="number"
              min="0"
              step="1"
              placeholder="0"
              value={income || ''}
              onChange={(e) => onIncomeChange(parseFloat(e.target.value) || 0)}
            />
            <span className="income-suffix">€</span>
          </div>
        </div>

        <div className="income-stats">
          <div className="stat-item">
            <span className="stat-label">Gastado</span>
            <span className="stat-value">{fmt(total)}</span>
          </div>
          {income > 0 && (
            <div className="stat-item">
              <span className="stat-label">Saldo disponible</span>
              <span className={`stat-value ${balance < 0 ? 'negative' : 'positive'}`}>
                {fmt(balance)}
              </span>
            </div>
          )}
        </div>
      </div>

      {income > 0 && (
        <>
          <div className="balance-bar-wrap">
            <div
              className={`balance-bar ${balance < 0 ? 'over' : ''}`}
              style={{ width: `${balancePct}%` }}
            />
          </div>
          <div className="balance-footer">
            <p className="balance-hint">
              {balance >= 0
                ? `${Math.round(balancePct)}% gastado de los ingresos del mes`
                : `Excedido en ${fmt(Math.abs(balance))}`}
            </p>
            {diff !== null && (
              <p className={`month-compare ${diff > 0 ? 'compare-up' : 'compare-down'}`}>
                {diff > 0 ? '▲' : '▼'} {fmt(Math.abs(diff))} ({diffPct}%) vs mes anterior
              </p>
            )}
          </div>
        </>
      )}
    </section>
  );
}
