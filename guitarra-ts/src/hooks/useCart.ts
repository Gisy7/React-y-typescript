
const useCart = () => {

    // const initialCart = () => {
    //     const cartItem = localStorage.getItem("cart")
    //     return cartItem ? JSON.parse(cartItem) : []
    // }

    // const [data] = useState(db)
    // const [cart, setCart] = useState(initialCart)

    // const MAX_ITEMS = 5

    // useEffect(() => {
    //     localStorage.setItem("cart", JSON.stringify(cart))
    // }, [cart]);





    // function addToCart(item: Guitar) {

    //     const findItem = cart.findIndex((guitar: Guitar) => guitar.id === item.id)

    //     if (findItem >= 0) {
    //         const copyItem: CartItem = { ...item, quantity: cart[findItem].quantity++ }
    //         setCart(copyItem)
    //     } else {
    //         const copyItem: CartItem = { ...item, quantity: 1 }
    //         setCart([...cart, copyItem])
    //     }
    // }


    // function removeFromCart(id: Guitar["id"]) {
    //     const copyCart = cart.filter((item: CartItem) => item.id !== id)
    //     setCart(copyCart)
    // }


    // const increaseQuantity = (id: Guitar["id"]) => {
    //     const index = cart.findIndex((item: CartItem) => item.id === id)

    //     if (cart.at(index).quantity < MAX_ITEMS) {
    //         const copyCart = cart.with(index, {
    //             ...cart.at(index),
    //             quantity: cart.at(index).quantity + 1
    //         })
    //         setCart(copyCart)
    //     }
    // }


    // const decreaseQuantity = (id: Guitar["id"]) => {
    //     const index = cart.findIndex((item: CartItem) => item.id === id)

    //     const quantityCart = cart.at(index).quantity

    //     if (quantityCart > 1) {
    //         const copyCart = cart.with(index, {
    //             ...cart.at(index),
    //             quantity: cart.at(index).quantity - 1
    //         })
    //         setCart(copyCart)
    //     }
    // }

    // const clearCart = () => {
    //     setCart([])
    // }







}

export default useCart