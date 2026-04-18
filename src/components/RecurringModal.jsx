import { useState } from 'react';

export default function RecurringModal({ recurring, categories, onAdd, onDelete, onClose }) {
  const [form, setForm] = useState({ category: 'alquiler', description: '', amount: '', payment: 'tarjeta' });
  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const getCat = (id) => categories.find((c) => c.id === id) ?? categories[categories.length - 1];

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.amount || Number(form.amount) <= 0) return;
    onAdd({
      id: `rec_${Date.now()}`,
      category: form.category,
      description: form.description.trim(),
      amount: parseFloat(form.amount),
      payment: form.payment,
    });
    setForm({ category: 'alquiler', description: '', amount: '', payment: 'tarjeta' });
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal modal-wide" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="section-title" style={{ margin: 0 }}>Gastos fijos mensuales</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 16 }}>
          Estos gastos se pueden aplicar con un clic al inicio de cada mes.
        </p>

        {recurring.length === 0 ? (
          <p className="empty-msg" style={{ marginBottom: 16 }}>No hay gastos fijos configurados.</p>
        ) : (
          <div className="recurring-list">
            {recurring.map((r) => {
              const cat = getCat(r.category);
              return (
                <div key={r.id} className="recurring-row">
                  <span className="cat-pill" style={{ background: cat.color + '22', color: cat.color }}>
                    {cat.icon} {cat.label}
                  </span>
                  <span className="recurring-desc">{r.description || '—'}</span>
                  <span className="recurring-amount">
                    {r.amount.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}
                  </span>
                  <button className="btn-delete" onClick={() => onDelete(r.id)}>✕</button>
                </div>
              );
            })}
          </div>
        )}

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '16px 0' }} />

        <h3 style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 12 }}>
          Añadir gasto fijo
        </h3>

        <form onSubmit={handleAdd}>
          <div className="form-row" style={{ marginBottom: 10 }}>
            <div className="form-group">
              <label>Categoría</label>
              <select value={form.category} onChange={set('category')}>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>{c.icon} {c.label}</option>
                ))}
              </select>
            </div>
            <div className="form-group flex-2">
              <label>Descripción</label>
              <input type="text" placeholder="ej: Alquiler piso" value={form.description} onChange={set('description')} />
            </div>
          </div>
          <div className="form-row" style={{ marginBottom: 16 }}>
            <div className="form-group">
              <label>Importe (€)</label>
              <input type="number" min="0.01" step="0.01" placeholder="0.00" value={form.amount} onChange={set('amount')} required />
            </div>
            <div className="form-group">
              <label>Pago</label>
              <select value={form.payment} onChange={set('payment')}>
                <option value="tarjeta">💳 Tarjeta</option>
                <option value="efectivo">💵 Efectivo</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn-primary">+ Añadir gasto fijo</button>
        </form>
      </div>
    </div>
  );
}
