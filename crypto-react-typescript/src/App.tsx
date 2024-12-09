
import { useEffect } from 'react';
import './App.css'
import CryptoSearchForm from './components/CryptoSearchForm/CryptoSearchForm'
import { UseCryptoStore } from './store'
import CryptoDataList from './components/CryptoDataList/CryptoDataList';
import Spinner from './components/Spinner/Spinner';

function App() {

  const fetchCrypto = UseCryptoStore(state => state.fetchCrypto)


  useEffect(() => {
    fetchCrypto()
  }, []);



  return (
    <>
      <main className='container'>
        <header>

          <div className='title'>
            <h2>Cotizador de</h2>
            <h1>Criptomonedas</h1>
          </div>

        </header>



        <section className='content'>
          <article>
            <CryptoSearchForm />
          </article>
         
          <article>  
              <CryptoDataList />
          </article>

        </section>



      </main>
    </>
  )
}

export default App
