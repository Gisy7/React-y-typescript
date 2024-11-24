import { Dispatch } from "react"
import { orderActions } from "../reducers/order-reducer"
import { menuOrder } from "../types"
import { formatCurrency } from "../utils"

type MenuOrderProps = {
    order: menuOrder[]
    dispatch: Dispatch<orderActions>
}


function MenuOrder({ order, dispatch }: MenuOrderProps) {
    return (
        <>
            {
                order.map((item) => {

                    return <div
                        key={item.id}
                        className="flex items-center   justify-between border-t last-of-type:border-b border-gray-200 "
                    >
                        <div className="my-2">
                            <p>{item.name} - {formatCurrency(item.price)}</p>
                            <p className="font-black"> Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}</p>

                        </div>
                        <div className=" self-center">
                            <button
                                className=" bg-red-500 rounded-full text-white w-8 h-8"
                                onClick={() => { dispatch({ type: "remove-item", payload: { id: item.id } }) }}
                            >X</button>
                        </div>

                    </div>
                })
            }
        </>
    )
}

export default MenuOrder