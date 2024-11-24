
import './App.css'
import BudgetForm from './components/BudgetForm';
import BudgetTraker from './components/BudgetTraker';
import { useBudget } from './hooks/useContext';
import ExpenseModal from './components/ExpensiveModal';
import ExpensiveList from './components/ExpensiveList';
import { useEffect } from 'react';
import ExpensiveFilter from './components/ExpensiveFilter';


function App() {

  const { state } = useBudget()

  const isValidBudget = () => {
    return state.budget > 0
  }


  useEffect(() => {
    localStorage.setItem("budget", JSON.stringify(state.budget))
    localStorage.setItem("expense", JSON.stringify(state.expenses))
  }, [state.budget, state.expenses]);

  return (
    <>
      <header className='bg-blue-600 py-8 max-h-72 mb-5'>
        <h1 className=' uppercase text-center text-white font-black text-4xl'> Planificador de gastos</h1>
      </header>


      <main className='grid grid-cols-1 ' >
        <article className='space-y-10 my-6'>
          <section className='bg-white shadow-lg rounded-lg m-auto max-w-3xl p-10'>
            {isValidBudget() ? <BudgetTraker /> : <BudgetForm />}
          </section>


          <section className='max-w-3xl m-auto'>
            {isValidBudget() && <h2 className='m-auto text-2xl text-gray-600 font-bold pb-5'>Listado de gastos.</h2>}
            <div className='space-y-5'>
              {isValidBudget() && <ExpensiveFilter />}
              <div className='bg-white rounded-lg'>
                {isValidBudget() && <ExpensiveList />}
              </div>

            </div>
          </section>
          {isValidBudget() && <ExpenseModal />}

        </article>
      </main>
    </>

  )
}

export default App
