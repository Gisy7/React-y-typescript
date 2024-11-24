import { db } from "../data/db"
import { CartItem, Guitar } from "../types"



export type cartActions =
    { type: "add-to-cart", payload: { item: Guitar } } |
    { type: "remove-from-cart", payload: { id: Guitar["id"] } } |
    { type: "increase-quantity", payload: { id: Guitar["id"] } } |
    { type: "decrease-quantity", payload: { id: Guitar["id"] } } |
    { type: "clear-cart" }


type cartState = {
    guitars: Guitar[]
    cart: CartItem[]
}

const localStorageCart = () => {
    const cartItem = localStorage.getItem("cart")
    return cartItem ? JSON.parse(cartItem) : []
}


export const initialState: cartState = {
    guitars: db,
    cart: localStorageCart(),
}

export const cartReducer = (state: cartState = initialState, action: cartActions) => {


    const { cart } = state

    if (action.type === "add-to-cart") {

        const { item } = action.payload

        const findItem = cart.findIndex((guitar: CartItem) => guitar.id === item.id)

        let copyItem

        if (findItem >= 0) {
            copyItem = [...cart]
            copyItem[findItem] = { ...item, quantity: cart[findItem].quantity++ }
        } else {
            copyItem = [...state.cart, { ...item, quantity: 1 }]
        }

        return {
            ...state,
            cart: copyItem
        }
    }


    if (action.type === "remove-from-cart") {
        const copyCart = cart.filter((item) => item.id !== action.payload.id)
        return {
            ...state,
            cart: copyCart
        }
    }



    if (action.type === "increase-quantity") {
        const MAX_ITEMS = 5

        const editCart = cart.map((guitar) => {
            if (guitar.quantity < MAX_ITEMS) {

                if (guitar.id === action.payload.id) {
                    return {
                        ...guitar,
                        quantity: guitar.quantity++
                    }
                }

            }
            return guitar
        })

        return {
            ...state,
            cart: editCart
        }
    }

    if (action.type == "decrease-quantity") {
        const editCart = cart.map((guitar) => {
            if (guitar.quantity > 1) {

                if (guitar.id === action.payload.id) {
                    return {
                        ...guitar,
                        quantity: guitar.quantity - 1
                    }
                }
            }
            return guitar
        })

        return {
            ...state,
            cart: editCart
        }
    }


    if (action.type === "clear-cart") {
        return {
            ...state,
            cart: []
        }
    }


    return state

}