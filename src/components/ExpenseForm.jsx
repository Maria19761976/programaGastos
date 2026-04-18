import { useState } from 'react';

const today = () => new Date().toISOString().slice(0, 10);

export default function ExpenseForm({ onAdd, categories }) {
  const [form, setForm] = useState({
    date: today(),
    category: 'alimentacion',
    description: '',
    amount: '',
    payment: 'tarjeta',
  });

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  const setPayment = (val) => setForm((f) => ({ ...f, payment: val }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.amount || Number(form.amount) <= 0) return;
    onAdd({
      id: crypto.randomUUID(),
      date: form.date,
      category: form.category,
      description: form.description.trim(),
      amount: parseFloat(form.amount),
      payment: form.payment,
    });
    setForm((f) => ({ ...f, description: '', amount: '' }));
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <h2 className="section-title">Añadir gasto</h2>

      <div className="form-row">
        <div className="form-group">
          <label>Fecha</label>
          <input type="date" value={form.date} onChange={set('date')} required />
        </div>
        <div className="form-group">
          <label>Categoría</label>
          <select value={form.category} onChange={set('category')}>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.icon} {c.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group flex-2">
          <label>Descripción (opcional)</label>
          <input
            type="text"
            placeholder="ej: Mercadona, factura luz..."
            value={form.description}
            onChange={set('description')}
          />
        </div>
        <div className="form-group">
          <label>Importe (€)</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            placeholder="0.00"
            value={form.amount}
            onChange={set('amount')}
            required
          />
        </div>
      </div>

      <div className="form-group" style={{ marginBottom: 12 }}>
        <label>Método de pago</label>
        <div className="payment-toggle">
          <button
            type="button"
            className={`payment-btn ${form.payment === 'tarjeta' ? 'active' : ''}`}
            onClick={() => setPayment('tarjeta')}
          >
            💳 Tarjeta
          </button>
          <button
            type="button"
            className={`payment-btn ${form.payment === 'efectivo' ? 'active' : ''}`}
            onClick={() => setPayment('efectivo')}
          >
            💵 Efectivo
          </button>
        </div>
      </div>

      <button type="submit" className="btn-primary">+ Añadir gasto</button>
    </form>
  );
}
