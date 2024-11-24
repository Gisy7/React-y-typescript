import MenuItem from "./components/MenuItem"
import MenuOrder from "./components/OrderItems"
import { menuItems } from "./data/db"
import OrderTotals from './components/OrderTotals';
import OrderTipForm from "./components/OrderTipForm";
import { useReducer } from "react";
import { initialState, reducerOrder } from "./reducers/order-reducer";


function App() {

  // const { addItem, removeItems, order, tip, setTip, placeOrder } = useOrder()

  const [state, dispatch] = useReducer(reducerOrder, initialState)

  // useEffect(() => {
  //   localStorage.setItem("tipsCalculator", JSON.stringify(state))
  // }, [state]);

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-4xl text-center font-bold">Calculadores de propinas</h1>
      </header>


      <main className=" max-w-5xl py-20 grid md:grid-cols-2 mx-auto " >

        <section className="mx-10">
          <h2 className="text-3xl font-black">Menú</h2>

          {
            menuItems.map((item) => {
              return <MenuItem
                key={item.id}
                item={item}
                dispatch={dispatch}
              />
            })
          }
        </section>



        <section>
          <h2 className="text-3xl font-black mb-5">Consumo</h2>

          {
            state.order.length !== 0 ? <>
              <MenuOrder order={state.order} dispatch={dispatch} />

              <article>
                <OrderTipForm dispatch={dispatch} tip={state.tip} />
                <OrderTotals order={state.order} tip={state.tip} dispatch={dispatch} />
              </article>
            </> : <p>No hay ninguna order activa</p>
          }
        </section>
      </main>
    </>
  )
}

export default App
