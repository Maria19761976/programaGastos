# 🏡 Gastos del Hogar

Aplicación web para controlar los gastos mensuales del hogar. Permite registrar ingresos y gastos, organizarlos por categorías y ver el saldo disponible en todo momento.

🔗 **[Abrir app](https://maria19761976.github.io/programaGastos/)**

## ✨ Funcionalidades

- **Ingresos mensuales** — introduce tus ingresos del mes y la app descuenta cada gasto automáticamente
- **Registro de gastos** — añade gastos con fecha, categoría, descripción, importe y notas
- **Notas en gastos** — añade comentarios largos a cualquier gasto para recordar los detalles
- **Método de pago** — distingue entre pagos con tarjeta o en efectivo
- **Gastos fijos recurrentes** — configura alquiler, luz, gym... y aplícalos con un clic cada mes
- **Categorías** — más de 30 categorías predefinidas (alquiler, luz, agua, alimentación, coche, gasolina, seguros, viajes, gym, Panchito, perro, finca, huerta, obras, hijos, regalos...)
- **Categorías personalizadas** — añade tus propias categorías con nombre, emoji y color desde el footer
- **Selector de emojis** — elige el icono de tu categoría desde una cuadrícula visual
- **Desglose por categoría** — ve cuánto gastas en cada área con límites de presupuesto opcionales
- **Alertas de presupuesto** — aviso naranja al 80% del límite y rojo al superarlo
- **Comparar meses** — la tarjeta de ingresos muestra si gastaste más o menos que el mes anterior
- **Navegación mensual** — consulta cualquier mes con las flechas del header
- **Modo oscuro** — botón 🌙/☀️ en el header para cambiar el tema manualmente
- **Datos persistentes** — todo se guarda en el navegador (localStorage), sin servidor ni registro
- **PWA instalable** — instálala en el móvil como una app nativa con el nombre "Gastos"
- **Diseño responsive** — adaptada para móvil, tablet y escritorio

## 📱 Instalación en el móvil

### iPhone (Safari)
1. Abre la app en **Safari**
2. Pulsa el botón compartir ↑
3. Selecciona **"Añadir a pantalla de inicio"**

### Android (Chrome)
1. Abre la app en **Chrome**
2. Pulsa los tres puntos ⋮
3. Selecciona **"Añadir a pantalla de inicio"** o **"Instalar app"**

## 🗂️ Categorías incluidas

| Categoría | Categoría | Categoría |
|-----------|-----------|-----------|
| 🏠 Alquiler / Hipoteca | ⚡ Electricidad | 💧 Agua |
| 🔥 Gas | 📡 Internet / Teléfono | 🛒 Alimentación |
| 🚗 Transporte | 🚘 Coche | ⛽ Gasolina |
| 💊 Salud / Farmacia | 👕 Ropa | 🎬 Ocio |
| 📚 Educación | 🧹 Limpieza / Hogar | 🏢 Comunidad |
| 🧳 Viajes | ✈️ Vuelos | 🏨 Hoteles |
| 🗺️ Excursiones | 🏋 Gym | 📺 Suscripciones |
| 🚗🛡️ Seguro Coche | ❤️🛡️ Seguro Vida | 🏠🛡️ Seguro Hogar |
| ✈️🛡️ Seguro Viaje | 🐱 Panchito | 🐶 Perro |
| 🌿 Finca | 🥦 Huerta | 🔨 Obras |
| 👶 Hijos | 🎁 Regalos | 📦 Otros |

## 🛠️ Tecnologías

- [React 19](https://react.dev/)
- [Vite 8](https://vite.dev/)
- [vite-plugin-pwa](https://vite-pwa-org.netlify.app/) — soporte PWA y service worker
- localStorage — persistencia de datos sin backend
- GitHub Actions — despliegue automático en GitHub Pages

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
│   ├── Header.jsx           # Navegación entre meses y toggle modo oscuro
│   ├── IncomeCard.jsx       # Tarjeta de ingresos, saldo y comparativa mensual
│   ├── ExpenseForm.jsx      # Formulario para añadir gastos con notas
│   ├── Summary.jsx          # Desglose por categorías con alertas de presupuesto
│   ├── ExpenseList.jsx      # Lista de gastos del mes
│   ├── Footer.jsx           # Footer con botones de categoría y gastos fijos
│   ├── CategoryModal.jsx    # Modal para crear categorías personalizadas
│   └── RecurringModal.jsx   # Modal para gestionar gastos fijos recurrentes
├── data/
│   └── categories.js        # Categorías predefinidas
├── hooks/
│   └── useStorage.js        # Hook para localStorage
├── App.jsx
├── App.css
└── index.css
```

## 📄 Licencia

Uso personal. Todos los derechos reservados.
