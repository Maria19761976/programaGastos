function fmt(n) {
  return n.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
}

export default function IncomeCard({ income, total, onIncomeChange }) {
  const balance = income - total;
  const balancePct = income > 0 ? Math.min((total / income) * 100, 100) : 0;

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
          <p className="balance-hint">
            {balance >= 0
              ? `${Math.round(balancePct)}% gastado de los ingresos del mes`
              : `Excedido en ${fmt(Math.abs(balance))}`}
          </p>
        </>
      )}
    </section>
  );
}
