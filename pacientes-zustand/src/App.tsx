import './App.css'
import Form from './components/Form';
import PatientList from './components/PatientList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
      <header className='max-w-12xl m-auto text-center my-8'>
        <h1 className='font-black text-4xl'>Seguimiento de Pacientes <strong className='text-indigo-700'>Veterinaria</strong></h1>
      </header>



      <main className='grid grid-cols-2 gap-10 max-w-6xl m-auto'>

        <Form />
        <PatientList />

      </main>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"

      />
      {/* Same as */}
      <ToastContainer />
    </>
  )
}

export default App
