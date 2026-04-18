import { useState } from 'react';

const COLORS = [
  '#ef4444','#f97316','#f59e0b','#84cc16','#10b981',
  '#14b8a6','#3b82f6','#6366f1','#8b5cf6','#ec4899',
  '#64748b','#0891b2',
];

const EMOJI_OPTIONS = [
  '🏠','⚡','💧','🔥','📡','🛒','🚗','🚘','⛽','💊',
  '👕','🎬','📚','🧹','🏢','🐱','🐶','🧳','✈️','🏨',
  '🗺️','🏋️','📺','🌿','🥦','🔨','👶','🎁','💰','💳',
  '🍽️','☕','🎮','🎵','📷','🛠️','🌱','🌸','🧴','🎓',
  '🏖️','🎯','🧠','🐾','🚲','🛵','🏡','🌊','🍕','📦',
];

export default function CategoryModal({ onAdd, onClose }) {
  const [label, setLabel] = useState('');
  const [icon, setIcon] = useState('📂');
  const [color, setColor] = useState('#6366f1');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!label.trim()) return;
    onAdd({
      id: `custom_${Date.now()}`,
      label: label.trim(),
      icon: icon.trim() || '📂',
      color,
    });
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="section-title" style={{ margin: 0 }}>Nueva categoría</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginBottom: 12 }}>
            <label>Nombre</label>
            <input
              type="text"
              placeholder="ej: Suscripciones"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              autoFocus
              required
            />
          </div>

          <div className="form-group" style={{ marginBottom: 12 }}>
            <label>Icono</label>
            <div className="emoji-grid">
              {EMOJI_OPTIONS.map((e) => (
                <button
                  key={e}
                  type="button"
                  className={`emoji-btn ${icon === e ? 'selected' : ''}`}
                  onClick={() => setIcon(e)}
                >
                  {e}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: 20 }}>
            <label>Color</label>
            <div className="color-picker">
              {COLORS.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`color-dot ${color === c ? 'selected' : ''}`}
                  style={{ background: c }}
                  onClick={() => setColor(c)}
                />
              ))}
            </div>
          </div>

          <div className="modal-preview">
            <span className="cat-pill" style={{ background: color + '22', color }}>
              {icon || '📂'} {label || 'Nombre'}
            </span>
          </div>

          <button type="submit" className="btn-primary" style={{ marginTop: 16 }}>
            Añadir categoría
          </button>
        </form>
      </div>
    </div>
  );
}
