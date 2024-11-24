import { Dispatch } from 'react'
import { orderActions } from '../reducers/order-reducer'
import { menuItem } from '../types'

type PropsMenuItem = {
    item: menuItem,
    dispatch: Dispatch<orderActions>
}


function MenuItem({ item, dispatch }: PropsMenuItem) {
    return (
        <button
            className='border-solid border-teal-400 border-2 p-2 flex my-4 justify-between rounded hover:bg-teal-200 w-full'
            onClick={() => dispatch({ type: "add-item", payload: { item } })}>
            <h3>{item.name}</h3>
            <p className="font-bold">${item.price}</p>
        </button>
    )
}

export default MenuItem