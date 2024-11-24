import React, { useEffect, useState } from 'react'
import { categories } from '../data/categories'
import { activity } from '../types';
import useActivity from '../hooks/useActivity';


const initialValue = {
    id: crypto.randomUUID(),
    name: "",
    categories: 1,
    calories: 0
}


export function Form() {

    const { dispatch, state } = useActivity()

    const [activity, setActivity] = useState<activity>(initialValue);

    useEffect(() => {
        if (state.activityId) {
            const activity = state.activities.find((act: activity) => act.id === state.activityId)
            if (activity) {
                setActivity(activity)
            }

        }
    }, [state.activityId]);



    function activityForm(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
        const isNumber = ["categories", "calories"].includes(e.target.id)
        setActivity({
            ...activity,
            id: crypto.randomUUID(),
            [e.target.id]: isNumber ? +e.target.value : e.target.value
        })
    }


    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({ type: "save-activity", payload: { newActivities: activity } })
        setActivity(initialValue)
    }


    const disableButton = () => {
        const { name, calories } = activity
        return name.trim() !== "" && calories > 0
    }

    const buttonValue = () => {
        const element = categories.find(category => category.id === activity.categories)
        return element?.name
    }


    return (


        <form action="" className=' bg-white rounded-lg p-5 space-y-5 shadow' onSubmit={handleSubmit}>
            <h1>Edición activa {state.activityId}</h1>
            <div className='grid grid-cols-1 gap-2'>
                <label htmlFor="categories" className='font-bold'>Categorias:</label>
                <select name="categories" id="categories"
                    className='border p-2 rounded'
                    onChange={activityForm}
                    value={activity.categories}
                >
                    {
                        categories.map((category) => {

                            return <option
                                key={category.id}
                                value={category.id}
                            >{category.name}</option>
                        })
                    }
                </select>
            </div>

            <div className='grid grid-cols-1 gap-2'>
                <label htmlFor="name" className='font-bold'>Actividad:</label>
                <input
                    id='name'
                    type="text"
                    name='name'
                    placeholder='Bicicleta, Correr, etc'
                    className='border p-2 rounded'
                    value={activity.name}
                    onChange={activityForm}
                />
            </div>


            <div className='grid grid-cols-1 gap-2'>
                <label htmlFor="calories" className='font-bold'>Calorias:</label>
                <input
                    id='calories'
                    type="number"
                    name='calories'
                    placeholder='Calorias, ejemplo: 300 o 600'
                    className='border p-2 rounded'
                    value={activity.calories}
                    onChange={activityForm}
                />
            </div>



            <button className='bg-black text-white w-full p-1 uppercase font-semibold disabled:opacity-25'
                disabled={!disableButton()}
            >
                Guardar {buttonValue()}
            </button>
        </form>
    )
}

export default Form