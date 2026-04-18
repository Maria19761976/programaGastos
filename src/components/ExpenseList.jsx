
function fmt(n) {
  return n.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
}

function fmtDate(iso) {
  const [y, m, d] = iso.split('-');
  return `${d}/${m}/${y}`;
}

export default function ExpenseList({ expenses, onDelete, categories }) {
  const getCategoryById = (id) => categories.find((c) => c.id === id) ?? categories[categories.length - 1];
  const sorted = [...expenses].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section className="expense-list">
      <h2 className="section-title">Gastos del mes</h2>
      {sorted.length === 0 ? (
        <p className="empty-msg">Aún no hay gastos registrados este mes.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Categoría</th>
              <th>Descripción</th>
              <th>Pago</th>
              <th>Importe</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((e) => {
              const cat = getCategoryById(e.category);
              return (
                <tr key={e.id}>
                  <td className="td-date">{fmtDate(e.date)}</td>
                  <td>
                    <span className="cat-pill" style={{ background: cat.color + '22', color: cat.color }}>
                      {cat.icon} {cat.label}
                    </span>
                  </td>
                  <td className="td-desc">{e.description || '—'}</td>
                  <td>
                    <span className={`payment-pill ${e.payment === 'efectivo' ? 'cash' : ''}`}>
                      {e.payment === 'efectivo' ? '💵 Efectivo' : '💳 Tarjeta'}
                    </span>
                  </td>
                  <td className="td-amount">{fmt(e.amount)}</td>
                  <td>
                    <button
                      className="btn-delete"
                      title="Eliminar"
                      onClick={() => onDelete(e.id)}
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </section>
  );
}
