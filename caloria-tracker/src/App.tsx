
import { useEffect } from 'react'
import './App.css'
import Form from './components/Form'

import Activity from './components/Activity'
import Calories from './components/Calories';
import useActivity from './hooks/useActivity';

function App() {


  const { dispatch, state } = useActivity()

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(state.activities))
  }, [state.activities]);



  const restartApp = () => {
    dispatch({ type: "reset-activity" })
  }

  return (
    <>
      <header className=' bg-lime-600 py-5 flex justify-around'>
        <h1 className=' text-white text-1xl font-bold uppercase'>Contador de calorias</h1>
        <button
          className='bg-black rounded-3xl text-white px-4  uppercase'
          onClick={() => restartApp()}
        >Reiniciar</button>

      </header>


      <main >

        <section className='bg-lime-500 py-10'>
          <article className='max-w-3xl m-auto'>

            <Form />
          </article>
        </section>


        <section className='bg-gray-800 py-10'>
          <article className='max-w-3xl m-auto'>
            <Calories />
          </article>
        </section>

        <section className=''>
          <article className='space-y-4 max-w-3xl m-auto py-5'>
            <Activity />
          </article>
        </section>
      </main >

    </>
  )
}

export default App
