import { Dispatch } from 'react';
import { orderActions } from '../reducers/order-reducer';
import { menuOrder } from '../types'
import { formatCurrency } from '../utils';



type OrderTotalsProps = {
    order: menuOrder[],
    tip: number
    dispatch: Dispatch<orderActions>
}

function OrderTotals({ order, tip, dispatch }: OrderTotalsProps) {
    const subTotal = order.reduce((total, item) => total + (item.quantity * item.price), 0)
    const topMount = (subTotal * tip)
    const total = (topMount + subTotal)

    return (
        <div>

            <h3 className=' font-black text-xl mt-5 mb-2'>Totales y propina</h3>

            <p>Subtotal a pagar:
                <span className='font-bold'> {formatCurrency(subTotal)}</span>
            </p>

            <p>Propina:
                <span className='font-bold'> {formatCurrency(topMount)}</span>
            </p>


            <p>Total a pagar:
                <span className='font-bold'> {formatCurrency(total)}</span>
            </p>

            <button
                className=' bg-black text-white w-full p-2  uppercase text-sm font-bold mt-4 disabled:opacity-10'
                disabled={order.length === 0}
                onClick={() => dispatch({ type: "place-order" })}
            > Guardar orden</button>

        </div>

    )
}

export default OrderTotals