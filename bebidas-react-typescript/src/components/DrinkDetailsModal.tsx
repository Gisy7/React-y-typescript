import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { Fragment } from 'react/jsx-runtime'
import { useStoreApp } from '../store/useStoreApp'
import { recipeById } from '../types'


function DrinkDetails() {


    const modal = useStoreApp(state => state.modal)
    const setModal = useStoreApp(state => state.setModal)
    const recipe = useStoreApp(state => state.recipeById)

    const handleClickFavorite = useStoreApp(state => state.handleClickFavorite)
    const favorites = useStoreApp(state => state.favorites)

    const ingredients = (ingredient: string, measure: string) => {
        const ingredientsMessure = []

        for (let index = 1; index < 6; index++) {
            const ingredientesNumber = ingredient + index

            if (recipe[ingredientesNumber as keyof recipeById] !== null) {
                const measureNumber = measure + index
                ingredientsMessure.push(`${recipe[ingredientesNumber as keyof recipeById]} - ${recipe[measureNumber as keyof recipeById]}`)
            }
        }

        return ingredientsMessure
    }


    const buttonValue = useStoreApp(state => state.favoriteExist)

  

    return (
        <>
            <Transition appear show={modal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => { setModal() }}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-70" />
                    </TransitionChild>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <TransitionChild
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6 space-y-4" >
                                    <DialogTitle as="h3" className="text-gray-900 text-4xl font-extrabold my-5 text-center">
                                        {recipe.strDrink}
                                    </DialogTitle>

                                    <img src={recipe.strDrinkThumb} alt={recipe.strDrink} className='mx-auto w-72' />

                                    <DialogTitle as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                                        Ingredientes y Cantidades
                                    </DialogTitle>

                                    {<ul>
                                        {ingredients("strIngredient", "strMeasure").map((ingredient) => {
                                            return <li key={ingredient}> {ingredient}</li>
                                        })}

                                    </ul>}

                                    <DialogTitle as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                                        Instrucciones
                                    </DialogTitle>
                                    <p className='text-lg'>{recipe.strInstructions}</p>

                                    <div className='grid grid-cols-2 gap-3'>
                                        <button
                                            className='bg-slate-600 uppercase text-white py-2 px-2 font-semibold hover:bg-slate-700'
                                            onClick={() => setModal()}
                                        >Cerrar</button>




                                        <button
                                            className='bg-orange-600 uppercase text-white  py-2 px-2 font-semibold hover:bg-orange-700'
                                            onClick={() => { 
                                                handleClickFavorite(recipe) 
                                                setModal()
                                                }}>
                                                {!buttonValue(recipe) ? "Añadir a favoritos" : "Eliminar de favoritos"}
                                            </button>
                                    </div>

                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>

    )
}

export default DrinkDetails