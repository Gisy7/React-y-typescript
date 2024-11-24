import { PencilSquareIcon, XCircleIcon } from '@heroicons/react/24/outline'

import useActivity from '../hooks/useActivity'



function Activity() {
    const { dispatch, state, categoryName } = useActivity()

    return (
        <>
            <h2 className='text-3xl font-semibold text-center '>Comidas y actividades</h2>

            {state.activities.length === 0 ? <p className='text-center' >No hay actividades aun.</p>
                : state.activities.map((activity) => {


                    return <div key={activity.id} className='bg-white shadow p-10 space-y-3 relative flex justify-between'>

                        <p className={` ${activity.categories === 1 ? 'bg-orange-500' : 'bg-lime-500'} uppercase text-sm px-8 py-2 text-white font-semibold absolute top-2 -left-3 rounded`}>{categoryName(activity)?.name}</p>
                        <div>
                            <p className='text-2xl font-semibold'>{activity.name} </p>
                            <p className='text-4xl font-bold text-lime-500'>{activity.calories} Calorias</p>
                        </div>

                        <div className='flex items-center'>
                            <button onClick={() => dispatch({ type: "set-IdActivity", payload: { activityId: activity.id } })}>
                                <PencilSquareIcon
                                    className='h-8 w-8 text-gray-800'
                                />
                            </button>

                            <button>
                                <XCircleIcon
                                    className='h-8 w-8 text-red-800'
                                    onClick={() => dispatch({ type: "delete-activity", payload: { activityId: activity.id } })}
                                />
                            </button>
                        </div>


                    </div>
                })
            }




        </>
    )
}

export default Activity