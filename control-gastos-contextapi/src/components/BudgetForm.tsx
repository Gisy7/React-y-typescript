import React, { useState } from 'react'
import { useBudget } from '../hooks/useContext';

function BudgetForm() {

    const { dispatch } = useBudget()


    const [form, setForm] = useState(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm(e.target.valueAsNumber)
    }

    const isValid = () => {
        return isNaN(form) || form <= 0
    }

    const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault()

        dispatch({ type: "add-budget", payload: { budget: form } })
    }


    return (
        <>
            <p className='text-blue-600 font-black text-3xl text-center'>Definir presupuesto</p>
            <form action="" className='space-y-5 grid grid-col-1 my-5' onSubmit={handleSubmit}>
                <input
                    className="border p-2"
                    type="number"
                    name='budget'
                    placeholder='Define tu presupuesto'
                    onChange={(e) => handleChange(e)}
                />
                <button
                    className={`bg-blue-600 p-2 text-white uppercase font-semibold hover:bg-blue-800
                    ${isValid() && "opacity-50"}`}
                    disabled={isValid()}
                    type='submit'
                >Definir presupuesto</button>
            </form>
        </>

    )
}

export default BudgetForm