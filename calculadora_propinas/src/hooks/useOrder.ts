import { useState } from 'react'
import { menuOrder, menuItem } from '../types';


function useOrder() {

    const [order, setOrder] = useState<menuOrder[]>([]);
    const [tip, setTip] = useState(0);



    function addItem(item: menuItem) {
        const findIndex = order.findIndex((order => order.id === item.id))

        if (findIndex >= 0) {

            const newItem = order.map((order) => {
                if (order.id === item.id) {
                    return { ...item, quantity: order.quantity + 1 }
                } else {
                    return order
                }
            })
            setOrder(newItem)
        } else {
            const newItem: menuOrder = { ...item, quantity: 1 }
            setOrder([...order, newItem])
        }



    }


    function removeItems(id: menuOrder["id"]) {
        const copyOrder = order.filter(item => item.id !== id)
        setOrder(copyOrder)
    }

    function placeOrder() {
        setOrder([])
        setTip(0)
    }


    return {
        order,
        addItem,
        removeItems,

        tip,
        setTip,


        placeOrder

    }

}

export default useOrder