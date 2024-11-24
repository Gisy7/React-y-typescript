import React, { Dispatch } from 'react'
import { orderActions } from '../reducers/order-reducer'


const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]


type OrderTipFormProps = {

    tip: number
    dispatch: Dispatch<orderActions>
}


function OrderTipForm({ tip, dispatch }: OrderTipFormProps) {

    return (

        <div>
            <h3 className='font-black text-xl mt-5 mb-2'> Propinas</h3>


            <form>
                {
                    tipOptions.map((tipValues) => {

                        console.log(tip !== 0);
                        return <div key={tipValues.id} className='flex gap-2 items-center'>
                            <label htmlFor={tipValues.id}>  {tipValues.label}    </label>


                            <input
                                type="radio"
                                name="tip"
                                value={tipValues.value}
                                id={tipValues.id}
                                defaultChecked={tipValues.value === tip}
                                onClick={(e) => dispatch({ type: "set-tip", payload: { tip: +e.currentTarget.value } })}
                            />


                        </div>
                    })
                }

            </form>

        </div>

    )
}

export default OrderTipForm