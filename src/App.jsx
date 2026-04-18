import { useState, useEffect } from 'react';
import Header from './components/Header';
import IncomeCard from './components/IncomeCard';
import ExpenseForm from './components/ExpenseForm';
import Summary from './components/Summary';
import ExpenseList from './components/ExpenseList';
import Footer from './components/Footer';
import CategoryModal from './components/CategoryModal';
import { useStorage } from './hooks/useStorage';
import { CATEGORIES } from './data/categories';
import './App.css';

function currentYearMonth() {
  const now = new Date();
  return { year: now.getFullYear(), month: now.getMonth() };
}

export default function App() {
  const [{ year, month }, setNav] = useState(currentYearMonth);
  const [expenses, setExpenses] = useStorage('gastos_hogar', []);
  const [budget, setBudget] = useStorage('presupuesto_hogar', {});
  const [income, setIncome] = useStorage('ingresos_hogar', {});
  const [customCategories, setCustomCategories] = useStorage('categorias_custom', []);
  const [showModal, setShowModal] = useState(false);
  const [darkMode, setDarkMode] = useStorage('dark_mode', false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const allCategories = [...CATEGORIES, ...customCategories];

  const monthExpenses = expenses.filter((e) => {
    const d = new Date(e.date + 'T00:00:00');
    return d.getFullYear() === year && d.getMonth() === month;
  });

  const addExpense = (expense) => setExpenses((prev) => [...prev, expense]);
  const deleteExpense = (id) => setExpenses((prev) => prev.filter((e) => e.id !== id));
  const updateBudget = (catId, value) => setBudget((prev) => ({ ...prev, [catId]: value }));

  const monthKey = `${year}-${String(month + 1).padStart(2, '0')}`;
  const monthIncome = income[monthKey] ?? 0;
  const updateIncome = (value) => setIncome((prev) => ({ ...prev, [monthKey]: value }));
  const monthTotal = monthExpenses.reduce((s, e) => s + e.amount, 0);

  const prevYear = month === 0 ? year - 1 : year;
  const prevMonthNum = month === 0 ? 11 : month - 1;
  const prevMonthTotal = expenses
    .filter((e) => {
      const d = new Date(e.date + 'T00:00:00');
      return d.getFullYear() === prevYear && d.getMonth() === prevMonthNum;
    })
    .reduce((s, e) => s + e.amount, 0);

  const addCustomCategory = (cat) => setCustomCategories((prev) => [...prev, cat]);

  const prevMonth = () =>
    setNav(({ year, month }) =>
      month === 0 ? { year: year - 1, month: 11 } : { year, month: month - 1 }
    );

  const nextMonth = () =>
    setNav(({ year, month }) =>
      month === 11 ? { year: year + 1, month: 0 } : { year, month: month + 1 }
    );

  return (
    <div className="app">
      <Header year={year} month={month} onPrev={prevMonth} onNext={nextMonth} darkMode={darkMode} onToggleDark={() => setDarkMode(d => !d)} />
      <main className="main">
        <IncomeCard income={monthIncome} total={monthTotal} prevTotal={prevMonthTotal} onIncomeChange={updateIncome} />
        <div className="two-col">
          <div className="left-col">
            <ExpenseForm onAdd={addExpense} categories={allCategories} />
            <Summary
              expenses={monthExpenses}
              budget={budget}
              onBudgetChange={updateBudget}
              categories={allCategories}
            />
          </div>
          <div className="right-col">
            <ExpenseList expenses={monthExpenses} onDelete={deleteExpense} categories={allCategories} />
          </div>
        </div>
      </main>
      <Footer onAddCategory={() => setShowModal(true)} />
      {showModal && (
        <CategoryModal onAdd={addCustomCategory} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}
