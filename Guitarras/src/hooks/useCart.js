import { useEffect, useState, useMemo } from "react"
import { db } from "../data/db"
const useCart = () => {

    const initialCart = () => {
        const cartItem = localStorage.getItem("cart")
        return cartItem ? JSON.parse(cartItem) : []
    }

    const [data, setData] = useState(db)
    const [cart, setCart] = useState(initialCart)

    const MAX_ITEMS = 5

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart]);

    function addToCart(item) {

        const findItem = cart.findIndex((guitar) => guitar.id === item.id)

        if (findItem >= 0) {
            const copyCart = [...cart]
            copyCart.quantity = cart[findItem].quantity++
            setCart(copyCart)
        } else {
            item.quantity = 1
            setCart([...cart, item])
        }
    }


    function removeFromCart(id) {
        const copyCart = cart.filter((item) => item.id !== id)
        setCart(copyCart)
    }


    const increaseQuantity = (id) => {
        const index = cart.findIndex((item) => item.id === id)

        if (cart.at(index).quantity < MAX_ITEMS) {
            const copyCart = cart.with(index, {
                ...cart.at(index),
                quantity: cart.at(index).quantity + 1
            })
            setCart(copyCart)
        }
    }


    const decreaseQuantity = (id) => {
        const index = cart.findIndex((item) => item.id === id)

        const quantityCart = cart.at(index).quantity

        if (quantityCart > 0) {
            const copyCart = cart.with(index, {
                ...cart.at(index),
                quantity: cart.at(index).quantity - 1
            })
            setCart(copyCart)
        }
    }

    const clearCart = () => {
        setCart([])
    }


    const isEmpty = useMemo(() => cart.length === 0, [cart])
    const totalPrice = useMemo(() => cart.reduce((accumulator, item) => accumulator + (item.price * item.quantity), 0), [cart])


    return {
        data,
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        isEmpty,
        totalPrice

    }
}

export default useCart