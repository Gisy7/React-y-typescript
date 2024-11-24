import { menuItem, menuOrder } from '../types/index';


export type orderActions =
    { type: "add-item", payload: { item: menuItem } } |
    { type: "remove-item", payload: { id: menuOrder["id"] } } |
    { type: "place-order" } |
    { type: "set-tip", payload: { tip: number } }



export type orderState = {
    order: menuOrder[],
    tip: number
}


const order = { order: [], tip: 0 }


// const getLocalStorageOrder = () => {
//     const tipsCalculator = localStorage.getItem("tipsCalculator")
//     return tipsCalculator ? JSON.parse(tipsCalculator) : order
// }

export const initialState: orderState = {
    order: order.order,
    tip: order.tip
}




export const reducerOrder = (state: orderState = initialState, action: orderActions): orderState => {



    if (action.type === "add-item") {

        const { order } = state
        const { item } = action.payload

        const findIndex = order.findIndex((order => order.id === item.id))

        let newItem: menuOrder[];

        if (findIndex >= 0) {

            newItem = order.map((order) => {
                if (order.id === item.id) {
                    return { ...item, quantity: order.quantity + 1 }
                } else {
                    return order
                }
            })

        } else {
            newItem = [...state.order, { ...item, quantity: 1 }]
        }

        return {
            ...state,
            order: newItem
        }
    }

    if (action.type === "remove-item") {
        const copyOrder = state.order.filter(item => item.id !== action.payload.id)
        return {
            ...state,
            order: copyOrder
        }
    }

    if (action.type === "place-order") {
        return order

    }

    if (action.type === "set-tip") {
        return {
            ...state,
            tip: action.payload.tip
        }
    }




    return state
}