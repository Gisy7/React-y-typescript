import { Header, Guitar } from "./components/index.ts"
import { initialState } from "./reducers/cart-reducer.ts";
import { cartReducer } from "./reducers/cart-reducer.ts";
import { useEffect, useReducer } from "react";


function App() {

  const [state, dispatch] = useReducer(cartReducer, initialState)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart))
  }, [state.cart]);

  return (
    <>
      <Header
        cart={state.cart}
        dispatch={dispatch}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">

          {
            state.guitars.map((guitar: Guitar) => {
              return <Guitar
                key={guitar.id}
                item={guitar}
                dispatch={dispatch}

              />
            })
          }

        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App
