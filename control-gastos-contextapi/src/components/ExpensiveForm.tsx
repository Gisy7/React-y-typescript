import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { categories } from '../data/categories';
import React, { useEffect, useRef, useState } from 'react';
import { formExpense, Value } from '../types';
import ErrorMessage from './ErrorMessage';
import { useBudget } from '../hooks/useContext';





function ExpensiveForm() {

    const { dispatch, state, totalAvailable } = useBudget()

    const initialState: formExpense = {
        amount: 0,
        expensiveName: "",
        category: "1",
        date: new Date()
    }

    useEffect(() => {

        if (state.expensiveId) {
            const editExpense = state.expenses.filter((expense) => expense.id === state.expensiveId)[0]
            setForm(editExpense)
            previusAmountForm.current = editExpense.amount
        }

        if (state.modal === false) {
            setForm(initialState)
            dispatch({ type: "get-id-expense", payload: { expensiveId: "" } })
        }



    }, [state.expensiveId, state.modal]);

    const [form, setForm] = useState(initialState)
    const [error, setError] = useState("")
    const previusAmountForm = useRef(0)

    const formExpensive = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {

        const isAmountField = ["amount"].includes(e.target.name)
        const formData = {
            ...form,
            [e.target.name]: isAmountField ? +e.target.value : e.target.value
        }

        setForm(formData)
    }



    const formDate = (e: Value) => {
        const formData = {
            ...form,
            date: e
        }
        setForm(formData)
    }


    const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (Object.values(form).includes("")) {
            setError("Todos los campos son obligatorios")
            return
        }

        if ((form.amount - previusAmountForm.current) > totalAvailable) {
            setError("No hay presupuesto suficiente")
            return
        }

        if (!state.expensiveId) {
            dispatch({ type: "add-expense", payload: { expense: form } })
        } else {
            dispatch({ type: "edit-expense", payload: { expense: form } })
        }

        previusAmountForm.current = 0

        setForm(initialState)
    }






    return (
        <form action="" className=" grid grid-cols-1 space-y-5" onSubmit={formSubmit}>
            <legend className="text-center border-b-4 text-2xl border-blue-600 mb-3 uppercase font-black">{state.expensiveId ? "Editar gasto" : "Nuevo gasto"}</legend>

            {error && <ErrorMessage>{error}</ErrorMessage >}

            <div className="flex flex-col  gap-2">
                <label htmlFor="name" className="text-lg"> Nombre Gasto:</label>
                <input
                    className="bg-slate-100 p-1 border-none "
                    type="text"
                    placeholder="Añade el nombre del gasto"
                    name='expensiveName'
                    value={form.expensiveName}
                    onChange={formExpensive}
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="quantity" className="text-lg"> Cantidad:</label>
                <input
                    className="bg-slate-100 p-1 border-none "
                    type="number"
                    placeholder="Añade la cantidad del gasto. ej: 300"
                    name='amount'
                    value={form.amount}
                    onChange={formExpensive}
                />
            </div>

            <div className="flex flex-col  gap-2">
                <label htmlFor="category" className="text-lg"> Categoría:</label>
                <select defaultValue={form.category} onChange={formExpensive} className="bg-slate-100 p-1 border-none " name="category" id="">
                    <option disabled >-- Seleccione --</option>
                    {categories.map((category) => {
                        return <option key={category.id} value={category.id}>{category.name}</option>
                    })}
                </select>
            </div>

            <div className="flex flex-col  gap-2">


                <DatePicker
                    className="bg-slate-100 p-1 border-none"
                    value={form.date}
                    onChange={formDate}
                />


            </div>

            <button
                type="submit"
                className="bg-blue-600 uppercase p-2 text-white font-semibold cursor-pointer"
            > {state.expensiveId ? "Editar Gasto" : "Registrar gasto"}</button>


        </form>
    )
}

export default ExpensiveForm