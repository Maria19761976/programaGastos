# 🏡 Gastos del Hogar

Aplicación web para controlar los gastos mensuales del hogar. Permite registrar ingresos y gastos, organizarlos por categorías y ver el saldo disponible en todo momento.

## ✨ Funcionalidades

- **Ingresos mensuales** — introduce tus ingresos del mes y la app descuenta cada gasto automáticamente
- **Registro de gastos** — añade gastos con fecha, categoría, descripción e importe
- **Método de pago** — distingue entre pagos con tarjeta o en efectivo
- **Categorías** — más de 20 categorías predefinidas (alquiler, luz, agua, alimentación, coche, gasolina, seguros, viajes, gym, Panchito, perro, finca...)
- **Categorías personalizadas** — añade tus propias categorías desde el footer
- **Desglose por categoría** — ve cuánto gastas en cada área con límites de presupuesto opcionales
- **Navegación mensual** — consulta cualquier mes con las flechas del header
- **Datos persistentes** — todo se guarda en el navegador (localStorage), sin servidor ni registro
- **PWA instalable** — instálala en el móvil como una app nativa

## 📱 Instalación en el móvil

### iPhone (Safari)
1. Abre la app en **Safari**
2. Pulsa el botón compartir ↑
3. Selecciona **"Añadir a pantalla de inicio"**

### Android (Chrome)
1. Abre la app en **Chrome**
2. Pulsa los tres puntos ⋮
3. Selecciona **"Añadir a pantalla de inicio"**

## 🗂️ Categorías incluidas

| Categoría | Categoría | Categoría |
|-----------|-----------|-----------|
| 🏠 Alquiler / Hipoteca | ⚡ Electricidad | 💧 Agua |
| 🔥 Gas | 📡 Internet / Teléfono | 🛒 Alimentación |
| 🚗 Transporte | 🚘 Coche | ⛽ Gasolina |
| 💊 Salud / Farmacia | 👕 Ropa | 🎬 Ocio |
| 📚 Educación | 🧹 Limpieza / Hogar | 🏢 Comunidad |
| 🧳 Viajes | ✈️ Vuelos | 🏨 Hoteles |
| 🗺️ Excursiones | 🏋️ Gym | 📺 Suscripciones |
| 🚗🛡️ Seguro Coche | ❤️🛡️ Seguro Vida | 🏠🛡️ Seguro Hogar |
| ✈️🛡️ Seguro Viaje | 🐱 Panchito | 🐶 Perro |
| 🌿 Finca | 📦 Otros | |

## 🛠️ Tecnologías

- [React 19](https://react.dev/)
- [Vite 8](https://vite.dev/)
- [vite-plugin-pwa](https://vite-pwa-org.netlify.app/) — soporte PWA y service worker
- localStorage — persistencia de datos sin backend

## 🚀 Instalación local

```bash
# Clonar el repositorio
git clone https://github.com/Maria19761976/programaGastos.git
cd programaGastos

# Instalar dependencias
npm install

# Iniciar en desarrollo
npm run dev

# Construir para producción
npm run build
```

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── Header.jsx          # Navegación entre meses
│   ├── IncomeCard.jsx      # Tarjeta de ingresos y saldo
│   ├── ExpenseForm.jsx     # Formulario para añadir gastos
│   ├── Summary.jsx         # Desglose por categorías
│   ├── ExpenseList.jsx     # Lista de gastos del mes
│   ├── Footer.jsx          # Footer con botón de nueva categoría
│   └── CategoryModal.jsx   # Modal para crear categorías personalizadas
├── data/
│   └── categories.js       # Categorías predefinidas
├── hooks/
│   └── useStorage.js       # Hook para localStorage
├── App.jsx
├── App.css
└── index.css
```

## 📄 Licencia

Uso personal. Todos los derechos reservados.
